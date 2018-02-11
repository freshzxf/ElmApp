/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react' //导入react
import {
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  Image
} from 'react-native' //导入基础组件
import Icon from 'react-native-vector-icons/Ionicons' //导入vector-icons图标包
import TabNavigator from 'react-native-tab-navigator' //导入tab-navigator依赖包
import px2dp from '../util' //导入px等比例缩放模块
let {width, height} = Dimensions.get('window') //获取设备“宽度、高度”
import HomePage from '../pages/Home' // 模块“主页”
import Discover from '../pages/Discover' // 模块“发现”
import Order from '../pages/Order' // 模块“订单”
import My from '../pages/My'  // 模块“我的”

export default class TabView extends Component {
  constructor(props){
    super(props)
    this.state = {
        currentTab: 'HomePage',
        hideTabBar: false
    }
    this.tabNames = [
      ["外卖", "logo-google", "HomePage", <HomePage {...this.props}/>],
      ["发现", "ios-compass-outline", "Discover", <Discover {...this.props}/>],
      ["订单", "ios-list-box-outline", "Order", <Order {...this.props}/>],
      ["我的", "ios-contact-outline", "My", <My {...this.props}/>]
    ]
    TabView.hideTabBar = TabView.hideTabBar.bind(this)
    TabView.showTabBar = TabView.showTabBar.bind(this)
  }
  static showTabBar(time){
    this.setState({hideTabBar: false})
  }
  static hideTabBar(time){
    this.setState({hideTabBar: true})
  }
  render(){
    return (
      <TabNavigator
        hidesTabTouch={true}
        tabBarStyle={[styles.tabbar,
          (this.state.hideTabBar?styles.hide:{})
        ]}
        sceneStyle={{ paddingBottom: styles.tabbar.height }}>
          {/*map遍历本组件的tabNames属性（属性值是一个数组），生成对应的顶部tab栏*/}
          {
            this.tabNames.map((item, i) => {
              return (
                <TabNavigator.Item
                    key={i}
                    tabStyle={styles.tabStyle}
                    title={item[0]}
                    selected={this.state.currentTab === item[2]}
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name={item[1]} size={px2dp(22)} color="#666" />}
                    renderSelectedIcon={() => <Icon name={item[1].replace(/\-outline$/, "")} size={px2dp(22)} color="#3496f0" />}
                    onPress={() => this.setState({ currentTab: item[2] })}>
                    {item[3]}
                </TabNavigator.Item>
              )
            })
          }
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
    tabbar: {
      height: px2dp(46),
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    hide: {
      transform: [
        {translateX:width}
      ]
    },
    tabStyle:{
      padding: px2dp(4)
    }
})
