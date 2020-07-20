import Taro from "@tarojs/taro";

async function request(url, data = {}, method = "GET") {
  try {
    let res = await Taro.request({
      url,
      data,
      method,
      header: {
        "Content-Type": "application/json",
        "X-Litemall-Token": Taro.getStorageSync("token"),
      },
    });
  } catch (e) {
    console.error(e);
  }
  if (res.statusCode == 200) {
    if (res.data.errno == 501) {
      //清除登录状态
      try {
        Taro.removeStorageSync("userInfo");
        Taro.removeStorageSync("token");
      } catch (e) {}
      Taro.navigateTo({
        url: "/pages/login/login",
      });
    } else if (res.data.errno == 0) {
      return res.data.data;
    }
  }
}
request.get = (url, data) => {
  return request(url, data, "GET");
};
request.post = (url, data) => {
  return request(url, data, "POST");
};
export default request;
