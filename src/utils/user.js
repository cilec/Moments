import Taro from '@tarojs/taro'
async function login(){
    const res=await Taro.login()
    if(res.code){
        return res
    }else{
        throw '登录失败'
    }
    
}