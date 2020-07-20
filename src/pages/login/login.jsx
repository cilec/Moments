import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import "./login.scss";
import IconFont from "../../components/iconfont";
export default class Index extends Component {
  config = { navigationBarTitleText: "登录" };
  constructor() {
    super(...arguments);
    this.state = {
      phone: "",
      vcode: "",
      disabled: false,
      second: 60,
    };
  }
  async accountLogin() {
    // console.log(event);
    const { phone, vcode } = this.state;
    if (phone.length < 1 || vcode.length < 1) {
      Taro.showModal({
        title: "错误信息",
        content: "请输入手机号和验证码",
        showCancel: false,
      });
      return false;
    }
  }
  handleInput(value, event) {
    console.log(value, event);

    this.setState({ [e.target.name]: value });
  }
  showTipText() {
    return this.state.disabled ? `${this.state.second}s后重试` : "发送验证码";
  }
  sendCode() {
    if (this.state.disabled) return;
    this.setState({
      disabled: true,
    });
    // 倒计时
    const timer = setInterval(() => {
      if (this.state.second > 0) {
        this.setState({
          second: this.state.second - 1,
        });
      } else {
        this.setState({
          second: 60,
          disabled: false,
        });
        clearInterval(timer);
      }
    }, 1000);
  }
  render() {
    return (
      <View className="at-row at-row__justify--center at-row__align--center container">
        <View className="at-col">
          <View
            className="at-row at-row__justify--center"
            style={{ marginBottom: "50px" }}
          >
            <IconFont
              className="at-col"
              name="icon_shichangjianguanju"
              color="blue"
              size={300}
            ></IconFont>
          </View>
          <View className="at-row">
            <AtForm onSubmit={this.accountLogin.bind(this)} className="at-col">
              <AtInput
                required
                name="phone"
                border
                type="phone"
                clear
                placeholder="请输入手机号码"
                value={this.state.phone}
                onChange={this.handleInput.bind(this)}
              >
                <View
                  style={{
                    color: this.state.disabled ? "#FF4949" : "",
                    fontSize: "12px",
                    width: "90px",
                  }}
                  onClick={this.sendCode.bind(this)}
                >
                  {this.showTipText()}
                </View>
              </AtInput>
              <AtInput
                required
                name="vcode"
                title="验证码"
                type="number"
                maxLength="6"
                placeholder="请输入手机收到的6位验证码"
                value={this.state.vcode}
                onChange={this.handleInput.bind(this)}
              />
              <AtButton plain={false} type="primary" formType="submit">
                登录
              </AtButton>
            </AtForm>
          </View>
        </View>
      </View>
    );
  }
}
