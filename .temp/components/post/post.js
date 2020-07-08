import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';
export default class Post extends Taro.Component {
  render() {
    return <View className="at-row">
        <View className="at-col at-col-2 at-col-auto avatar">
          <AtAvatar></AtAvatar>
        </View>
        <View className="at-col at-col-8 at-col--wrap">
          <Text className="at-article__p">
            文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试
          </Text>
        </View>
      </View>;
  }
}