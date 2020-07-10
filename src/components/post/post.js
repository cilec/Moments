import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtAvatar, AtDivider, AtButton, AtIcon } from "taro-ui";
import IconFont from "../iconfont";
import "./post.scss";
const testPostImgList = [
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594275061000&di=14050166f857f31fdd0fd7f04a5112b7&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594275060999&di=b7f74f993e2ab88fd06eb3db7e5818ba&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594275060999&di=911e8760742bfb927a35c292ab4d5727&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594275060999&di=7bfdfdf43d734b1b8f1295331135005d&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594275060998&di=85fd6b7c40b6d5ced5054eb791d9d036&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F05%2F00%2F01300000194285122188000535877.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594275060998&di=a2e6380c89ccdcd459efb2d486f5b8c7&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594275060998&di=b40efcafa1ebeda1e6f9970c0c91ad6a&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F16%2F12%2F01300535031999137270128786964.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594275060997&di=d621335bb5754bc77745b011af9993e9&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594275060997&di=580fc8da269a2ddb0dd857732b688905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fd62a6059252dd42a1c362a29033b5bb5c9eab870.jpg",
];
export default class Post extends Component {
  render() {
    return (
      <View>
        <View className="at-row">
          <View className="at-col at-col-2 at-col-auto avatar">
            <AtAvatar></AtAvatar>
          </View>
          <View className="at-col at-col-9 at-col--wrap">
            <View className="at-row">
              <View className="at-article__h3 name post_name">
                太平溪监督管理所政工股陈诚
              </View>
            </View>
            <View className="at-row">
              <View className="at-article__p">
                文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试
              </View>
            </View>
            <View className="at-row">
              <View className="at-col at-article__p wrapper">
                {testPostImgList.map((item) => {
                  return (
                    <Image
                      className="post_image"
                      src={item}
                      mode="aspectFill"
                      lazy-load={true}
                    ></Image>
                  );
                })}
              </View>
            </View>
            <View className="at-row at-row__align--end post_date_and_btn">
              <View className="at-col at-article__info">2017-10-1 9:00</View>

              <View className="at-col at-col--auto">
                <View className="at-row at-row__justify--around at-row__align--center">
                  <AtButton plain size="small" className="post_btn">
                    <IconFont
                      name="dianzan"
                      className="post_btn_icon"
                      size={25}
                    ></IconFont>
                    <Text>点赞</Text>
                  </AtButton>
                  <AtButton plain size="small" className="post_btn">
                    <IconFont
                      name="xinxi-1"
                      className="post_btn_icon"
                      size={25}
                    ></IconFont>
                    <Text>评论</Text>
                  </AtButton>
                </View>
              </View>
            </View>
            <View className="at-row at-row__align--center post_comment">
              <View className="at-col at-col--wrap">
                <View
                  className="at-article__p post_name"
                  style={{
                    borderBottom: "1px solid rgb(216,216,216)",
                    color: "rgb(87,107,149)",
                  }}
                >
                  ❤cc,tt，太平溪cc,雾度河cc,雾度河cc,雾度河cc,雾度河cc,雾度河cc
                </View>
                <View className="at-article__p" style={{ marginTop: 0 }}>
                  <Text className="post_name">cc</Text>@
                  <Text className="post_name">tt</Text>
                  ：这张图拍的太张图拍的太张图拍的太张图拍的太张图拍的太张图拍的太张图拍的太张图拍的太好了
                </View>
                <View className="at-article__p" style={{ marginTop: 0 }}>
                  cc：这张图拍的太好了
                </View>
                <View className="at-article__p" style={{ marginTop: 0 }}>
                  cc：这张图拍的太好了
                </View>
                <View className="at-article__p" style={{ marginTop: 0 }}>
                  cc：这张图拍的太好了
                </View>
                <View className="at-article__p" style={{ marginTop: 0 }}>
                  cc：这张图拍的太好了
                </View>
              </View>
            </View>
          </View>
        </View>

        <AtDivider></AtDivider>
      </View>
    );
  }
}
