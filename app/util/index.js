'use strict';

import {Dimensions} from 'react-native'  //导入Dimensions模块用于获取设备屏幕的宽高

const deviceH = Dimensions.get('window').height //获取屏幕高度
const deviceW = Dimensions.get('window').width //获取屏幕宽度

const basePx = 375 //以iphone6的屏幕逻辑宽度像素375px为基准

export default function px2dp(px) {
    return px *  deviceW / basePx
} //根据实际屏幕宽度，等比例解析px值
