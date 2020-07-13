import { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtDivider, AtAvatar } from "taro-ui";
import Post from "../../components/post/post";
import "./user.scss";
import IconFont from "../../components/iconfont";
export default class User extends Component {
  componentWillMount() {}
  render() {
    return (
      <View>
        <View
          className="at-row at-row__align--center"
          style={{ padding: "20px 0 0 50px" }}
        >
          <View className="at-col at-col-1 at-col--auto">
            <AtAvatar size="large"></AtAvatar>
          </View>
          <View className="at-col">
            <View className="at-row">
              <Text className="at-article__h3">太平溪监督管理所陈诚</Text>{" "}
            </View>
            <View className="at-row">
              <Text className="at-article__p">手机：13333333333</Text>
            </View>
          </View>
        </View>
        <AtDivider></AtDivider>
        <View className="at-row">
          <Post />
        </View>
      </View>
    );
  }
}
