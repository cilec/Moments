import Taro, { Component } from "@tarojs/taro-h5";

import dva from "./dva";
import "./app.scss";
import { Provider } from "@tarojs/redux-h5";
import models from "./models/index";
import "taro-ui/dist/style/index.scss";
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
//   require('nerv-devtools');
// }

import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e) {
    console.log("出错了", e);
  }
});
const store = dvaApp.getStore();

class App extends Component {
  state = {
    __tabs: {
      backgroundColor: "#fafafa",
      borderStyle: "white",
      selectedColor: "#1296db",
      color: "#666",
      list: [{
        pagePath: "/pages/index/index",
        iconPath: require("././assets/images/dongtai.png"),
        selectedIconPath: require("././assets/images/dongtai@selected.png"),
        text: "全局动态"
      }, {
        pagePath: "/pages/createPost/createPost",
        iconPath: require("././assets/images/xinzeng.png"),
        selectedIconPath: require("././assets/images/xinzeng@seleted.png"),
        text: "发布动态"
      }, {
        pagePath: "/pages/user/user",
        iconPath: require("././assets/images/wode.png"),
        selectedIconPath: require("././assets/images/wode@selected.png"),
        text: "我"
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: ["/pages/index/index", "/pages/user/user", "/pages/login/login", "/pages/createPost/createPost"],
    tabBar: { backgroundColor: "#fafafa", borderStyle: "white", selectedColor: "#1296db", color: "#666", list: [{ pagePath: "/pages/index/index", iconPath: require("././assets/images/dongtai.png"), selectedIconPath: require("././assets/images/dongtai@selected.png"), text: "全局动态" }, { pagePath: "/pages/createPost/createPost", iconPath: require("././assets/images/xinzeng.png"), selectedIconPath: require("././assets/images/xinzeng@seleted.png"), text: "发布动态" }, { pagePath: "/pages/user/user", iconPath: require("././assets/images/wode.png"), selectedIconPath: require("././assets/images/wode@selected.png"), text: "我" }], mode: "hash",
      basename: "/",
      customRoutes: {}
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "YLMSA",
      navigationBarTextStyle: "black"
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
          
        <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
            path: '/pages/index/index',
            componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
            isIndex: true
          }, {
            path: '/pages/user/user',
            componentLoader: () => import( /* webpackChunkName: "user_user" */'./pages/user/user'),
            isIndex: false
          }, {
            path: '/pages/login/login',
            componentLoader: () => import( /* webpackChunkName: "login_login" */'./pages/login/login'),
            isIndex: false
          }, {
            path: '/pages/createPost/createPost',
            componentLoader: () => import( /* webpackChunkName: "createPost_createPost" */'./pages/createPost/createPost'),
            isIndex: false
          }]} tabBar={this.state.__tabs} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>
        </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}

Nerv.render(<App />, document.getElementById("app"));