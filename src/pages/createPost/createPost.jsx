import { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm, AtTextarea, AtImagePicker, AtButton } from "taro-ui";
import "./createPost.scss";
export default class createPost extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      postText: "",
      files: [
        {
          url: "https://jimczj.gitee.io/lazyrepay/aragaki1.jpeg",
        },
        {
          url: "https://jimczj.gitee.io/lazyrepay/aragaki2.jpeg",
        },
        {
          url: "https://jimczj.gitee.io/lazyrepay/aragaki3.png",
        },
      ],
    };
  }
  onSubmit(event) {
    console.log(event);
  }
  handleInput(value) {
    this.setState({ postText: value });
  }
  onImageChange() {}
  onImageFail() {}
  onImageClick() {}
  render() {
    return (
      <View>
        <View
          className="at-row"
          style={{ padding: "20px", boxSizing: "border-box" }}
        >
          <AtForm onSubmit={this.onSubmit.bind(this)} className="at-col">
            <View
              className="at-row at-row__justify--end at-row__align--center"
              style={{ height: "10vh" }}
            >
              <View className="at-col at-col-1 at-col--auto">
                <AtButton formType="submit" type="primary" size="small">
                  发布动态
                </AtButton>
              </View>
            </View>
            <AtTextarea
              value={this.state.postText}
              onChange={this.handleInput.bind(this)}
            ></AtTextarea>
            <AtImagePicker
              mode="top"
              count="9"
              length="3"
              multiple
              files={this.state.files}
              onChange={this.onImageChange.bind(this)}
              onFail={this.onImageFail.bind(this)}
              onImageClick={this.onImageClick.bind(this)}
            />
          </AtForm>
        </View>
      </View>
    );
  }
}
