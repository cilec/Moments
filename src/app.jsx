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
    pages: ["pages/index/index", "pages/user/user", "pages/login/login"],
    tabBar: {
      backgroundColor: "#fafafa",
      borderStyle: "white",
      selectedColor: "#1296db",
      color: "#666",
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "./assets/images/dongtai.png",
          selectedIconPath: "./assets/images/dongtai@selected.png",
          text: "全局动态",
        },
        {
          pagePath: "pages/user/user",
          iconPath: "./assets/images/wode.png",
          selectedIconPath: "./assets/images/wode@selected.png",
          text: "我",
        },
      ],
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "YLMSA",
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
