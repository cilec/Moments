import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";
import dva from "./dva";
import "./app.scss";
import { Provider } from "@tarojs/redux";
import models from "./models";
import "taro-ui/dist/style/index.scss";
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
//   require('nerv-devtools');
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e) {
    console.log("出错了", e);
  },
});
const store = dvaApp.getStore();

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: ["pages/login/login", "pages/index/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black",
    },
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
