import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './index.scss';
import Post from '../../components/post/post';
export default class Index extends Taro.Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    return <View>
        <Post />
        <Post></Post>
        <Post></Post>
      </View>;
  }
}