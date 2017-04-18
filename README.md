## 目录
- app 应用代码
  - **actions** 存放应用的action
  	 - index.js action入口
  	 - application.js app全局的action
  - **assets** 存放应用需要的本地图片、附件等
  - **config** 存放配置文件，譬如微信的key之类的
  	 - api.js 网络请求地址
  	 - globalCssValue.js ui规范的设计值
     - actionType.js redux的acton.type的全局存放
  - **components** 存放组件模块
    - commons 公共组件
    	- Loading.js 加载中
    	- Toast.js 简单提示
    	- Navigation.js 导航栏
    	- Router.js 路由配置
  - **containers** 存放顶层容器
  	 - App.js app进入逻辑总页面
  	 - SplashScrenn.js 闪屏
  	 - LoginScreen.js 登陆页面
  	 - IntroScreen.js 介绍页面
  - **middleware** 中间层
  - **modules** 存放独立逻辑模块，如数据收集等等
  	 - statistic 数据收集
  - **reducers** 存放应用的 reducer
  	 - application.js app全局公用的reducer
  	 - index.js  reducer入口
  - **utils** app的工具模块，如日期计算、远程连接、本地存储等通用工具  
  	 - Ajax.js 远程请求封装
  	 - BackPress.js 返回按钮监控
  	 - create-reducer.js reducer生成器
  - **root.js** 应用最顶层入口
- data 应用的本地数据



## 功能模块
运动装备控一共有四个模块：智能选装、装备库、工具、关于。

- 智能选装功能：跟之前基本一致，需要改变的是：
	- 将会把用户最近一次的选装报告保存在本地，进入这个模块时，如果有历史选装报告，则展示；
	- 选装结果页面是否需要分享（待定）
- 装备库：跟现在一致。
- 工具：工具包括 鞋码对比 和 鉴定真假。
	- 鞋码对比：为跑步者提供不同跑鞋品牌，中国码对应其他国家的鞋码。具体品牌和鞋码参考微信文章。
	- 鉴定功能：跟现在一致（待定）
- 关于：展示运动装备控的相关信息以及可以用户反馈



## 插件

* [react-native](http://facebook.github.io/react-native/)
* [react-redux](https://github.com/reactjs/react-redux) ，作为应用的状态容器管理。这里是[中文手册](http://camsong.github.io/redux-in-chinese/index.html)。
* [realm](https://realm.io/cn/) Realm是一个极速的、简单轻巧的、跨平台的、面向对象的移动存储数据库。
* [react-native-overlay](https://github.com/brentvatne/react-native-overlay) RN界的懒加载
* [react-native-device-info](https://github.com/rebeccahughes/react-native-device-info) 这个插件可以获取android、ios移动硬件的信息
* [react-native-storage](https://github.com/sunnylqm/react-native-storage/blob/master/README-CHN.md) 本地存储插件，数据过期后可自动重新拉取。不过这个插件同时兼容了 web localstorage，所以需要自己 **重新编写**。
* [react-native-swiper](https://github.com/leecade/react-native-swiper) 号称最好的幻灯片组件
* [code-push](http://microsoft.github.io/code-push/docs/getting-started.html) 微软出品，热更新工具。
* [Bughd](http://bughd.com/ ) 内测分发 和 实时监控appCash ， 邀请码生成。
* [DeepShare](http://www.deepshare.io/price/)
* [百川推送](http://baichuan.taobao.com/doc2/detail.htm?spm=a3c0d.7929580.0.0.0NRArQ&treeId=29&articleId=102337&docType=1) 阿里旗下的百川推送
* [腾讯Bugly](http://bugly.qq.com/) app质量跟踪平台
* [分词搜查](http://yunsou.qq.com/) 腾讯旗下的分词 搜索工具
* [react-native-jpush](https://github.com/reactnativecn/react-native-jpush) 极光推送
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) 多达3000个图标
* 


## 原生组件

- **Component** 组件抽象类
- **View** 一个支持flexbox布局、样式、触控事件、可以包含0到多个任意类型子组件的容器
- **Text** 显示文字
- **Image** 显示图片
- **StyleSheet** 类似于css的样式表
- **Navigator** 使用Navigator可以在不同的页面之间转跳
- **ScrollView** 滚动视图
- **ListView** 横向或纵向滚动视图，改变数据的列表
- **ProgressBarAndroid** 菊花加载
- **TouchableHighlight** 可点击的组件,可改变点击的底色
- **TouchableOpacity** 当按下时，封装的视图的不透明度要降低，可以指定不透明度 activeOpacity

## 原生api
- **AsyncStorage** 本地数据存储
- **NetInfo** 检测网络状况
- [**InteractionManager**](http://reactnative.cn/docs/0.22/interactionmanager.html#content) 可以将一些耗时的工作安排在所有活动那个或动画结束后进行，保证js的动画流畅进行。
- **BackAndroid** 安卓返回键




## 自定义公共组件

### 路由管理
路由管理包括两个方面：第一是集中的路由对象管理，第二是路由转跳组件。   
路由对象管理是指：把应用中所有的都有路由地址统一交给路由中心管理。该路由中心负责存储应用的所有路由地址以及对应的组件。   
路由中心像一个配置文件。通过路由中心，减少应用转跳带来的逻辑问题。   
路由转跳组件：目前的navitagor组件都未能实现高度的定制化，因此封装系统自带的导航组件，保留其导航功能，实现自定义导航界面。
这个路由与 reduce关联起来，每个组件不需要显示传递参数actions，路由将会自动传递 actions



### 公共样式管理
有了 **ui设计规范** 后，我们可以把公共的ui属性，譬如颜色、字号、间距、背景颜色等写成一份全局变量配置： globalCss.js   
其他组件设置样式的属性值时，从配置中读取。   
通过全局变量配置，当 ui规范发生变化时，我们就不用一个一个组件地修改了。   
当某两个或几个组件有公共的样式时，也把它们抽出来放在同一个文件里面。

### 网络请求封装
rn底层使用的网络工具是 okHttp，是目前较好地一个工具。所以我们就不做修改了，在使用层封装一下网络请求库： Ajax.js  
方法包括：get、post。  
在使用Fetch方法的时候需要注意的是：需要判断当前的网络情况和捕捉错误。

#### 本地存储
AsyncStorage是rn自带的简单的、异步的、持久化的Key-Value存储系统。  
本地存储功能包括：

-  设置数据存储最大值
-  设置过期日期
-  自动同步数据




## 约定
具体可参考 [AIRBNB的react代码规范](https://github.com/cnsnake11/react-native-coding-style)

### 文件名
使用驼峰命名且首字母大写，如 TextView.js

### 变量与常量声明
- **变量**尽量使用 let（变量只在声明代码块内有效，不存在变量提升）
- **常量**必须使用 const （意味着不能修改）

### 字符串
静态字符串一律使用单引号，不适用双引号。   
动态字符串使用反引号.

### 解构
- 已经声明的变量不能再用于解构值
- 如果函数返回多个值，优先使用对象的解构赋值，而不是数据的解构赋值。
- 若函数形参为对象时，优先使用对象解构赋值

```
	function someFun( obj ){
		let { opt1 , opt2 } = obj;
	}
```

### 对象
对象尽量静态化，已经定义的变量，就不随意添加新的属性。   
如果添加属性无可避免，则使用 `Object.assign`。

```
const a = {};

Object.assign(a,{x:3});

```

### 数组
使用扩展运算符（...）复制数据

```
//不好的方式
let arr = [1,2,3,4];
let copy_arr=[];

for(let i=0,l=arr.length; i<l; i++){
	copy_arr.push(i);
}

//好的方式
const copy_arr = [...arr];

```

### 函数
立即执行函数可以写成箭头函数的形式

```
(()=>{
	console.log();
})

```

箭筒函数取代了 `Function.prototype.bind`，不应再使用 self/that这些来绑定this   
使用默认值语法设置函数参数默认值

```
//bad
function handleThings(opts){
	opts = opts || {};
}


//good
 function handleThings ( opts ={} ){
 }

```


### Class
总是使用Class，取代需要prototype的操作。因为Class的写法更简洁，更易于理解

```
// bad
var OneClass = function(){

}

OneClass.prototype ={
	someMethod:function(){

	}
}


// good

Class OneClass {

	constructor( opt ){
		this.options ={

		}
	}

	someMethod(){
		//...
	}
}

```
使用 `extends` 实现继承，因为这更加简单，不会破坏 `instanceof`运算。


### 模块
Module语法是javascript的标准语法。

 使用**import**代替require

```
// bad
 const moduleA  = require('moduleA');

// good

 import moduleA from 'moduleA';

```

 使用**export**代替module.exports  

 当模块只有一个输出值是，使用 **export default**

```
	import {func1,func2} from 'moduleA';

	export default moduleA;
```

如果模块默认输出一个函数，函数名的首字母应该小写   
如果模块默认输出一个对象，对象名的首字母应该大写


### 组件
**组件声明** 使用 class 和 extends 关键字。需要导出的组件直接在class关键词前使用 export default

```
	export default class Demo extends Component{
	}
```
**组件必传值** 组件接收的prop需要声明其格式

```
	Demo.propTypes={
		userName : PropTypes.string.isRequired
	}

```


### state和props
- 多个单词组成的**props**，使用驼峰命名，首字母小写，禁止使用下划线，如 userName。   
- 读取 **state**或 **props** 时，使用 **const** 和 **解构**，禁止使用var

```
	const { userName } = this.props;

```

### 标签
对于没有子标签的JSX标签，始终自闭合

```
	<Demo />
```
如果组件有多行属性，则另起一行进行自闭合。

```
	<Demo
		userName=''
		age=''
	/>
```

### 方法
- 组件内的方法不能使用下划线开头
- 对于点击事件，方法前加 on 前缀

```
  //点击事件
  onItemPress(){

  }
```
- 对于渲染子视图的，方法前加 render 前缀

```
	//渲染滚动栏
	renderItem(){
	}
```


### 关于action
当调用异步API时，一般都需要三个状态：请求开始、请求成功、请求错误。
为了区分这三种状态，我们在action中添加一个专门的status字段作为标记位。




## 标准组件格式
以下是标准的组件js文件。包含引入包、样式声明、组件声明、组件传值声明。

```
	'use strict';
    import React ,{Component} from 'react';

	import {
		StyleSheet,
		PropTypes,
		View,
	} from 'react-native';
	//声明样式
	let styles = StyleSheet.create({
	});

	export default class Demo extends Component{
		render(){
			return(
				<View></View>
			)
		}
	}

	Demo.propTypes ={
		demo : PropTypes.string.isRequired
	}
```



## 技巧

如果业务需要在webView中触发了点击事件，需要传递参数给外层。

可以通过点击事件改变hash，外层监听 onNavigationStateChange；
或者使用 [react-native-webview-bridge](https://github.com/alinz/react-native-webview-bridge)

#### 获取屏幕长宽

```
import Dimensions from 'Dimensions';
const {width , height} = Dimensions.get('window');
```

#### 请求延迟执行

```
 const fetchWithTimeout(timeout, ...args){
 	return Promise.race( [fetch(...args) , delay(timeout) ] )
 }
```

#### 在安卓上，使用navtigator切换时，解决流畅
配置**configureScene**为 **FadeAndroid**

```
	<Navigator
		configureScene ={(route,routeStack)=> Navigator.SceneConfigs.FadeAndroid }
		/>
```

#### inline-block
实现inline-block，只需要在Text组件外层添加Text组件

```
	<Text>
		<Text>...</Text>
	</Text>

```




## 进行版本升级

1. 升级项目模板文件，先复制android、ios项目文件
2. 运行 `react-native upgrade`，这个命令会检测最新的项目模板，覆盖。
3. 用代码对比工具，把自己修改过的代码搬运到新的文件中。

## 版本升级后的变更
 - 引入React的做法发生变更
 之前：

 ```
 import React , { Component , View } from 'react-native';

 ```
 现在：

 ```
 import React , { Component } from 'react';
 import { View } from 'react-native;

 ```

 属于React的包括：

 ```
 Children Component PropTypes createElement cloneElement isValidElement createClass createFactory createMixin
 ```
 属于**ReactNative**的包括：

 ```

 hasReactNativeInitialized findNodeHandle render
 unmountComponentAtNode unmountComponentAtNodeAndRemoveContainer
 unstable_batchedUpdates
 View Text ListView 及所有原生组件

 ```









## 快速开始
### 声明样式

```

const styles = StyleSheet.create({
	...
});

```

`StyleSheet.create`可以把样式值转化成普通的数字id，数字id指向一个内部的样式表，以此来使得样式值不可更改和不可见。

### 使用样式

```
	<View style={styles.base}></View>

	//数组形式接收多个样式，
	//为了避免多个值冲突，最右值得元素优先级最高
	<View style={[style.base , style.background]}></View>

	//也接收布尔值，false时会忽略
	<View style={[style.base , is_active && styles.active]}></View>


	//直接在组件上设置
	<View
		style={[styles.base , {width : 13 , height : 13}]}
	></View>

```

### 将样式作为参数传递
把样式作为参数传递，可以让调用组件的地方对其子组件的样式进行自定义。可以使用 `View.propTypes.style`和 `Text.propTypes.style`来确保传递的参数确实是style类型。

### 静态图片资源

往app中添加静态图片，只需要把它放在代码文件夹中某处。Package会在组件所在的文件夹下查找图片，如果用 `icon.ios.png` 和 `icon.android.png`，Package会根据不同平台选择不同文件。   

另外，还可以使用 `@2x`、`@3x`这样的文件名后缀，为不同屏幕精度提供图片，如
`icon@2x.png`、`icon@3x.png`。如果没有图片恰好满足分辨率，则会自动选中最接近的一个图片。

注意 **require中的图片名字必须是一个静态字符串！！！**

```
	<Image source={require('./my-icon.png')} />
```

### 网络图片
网络图片与静态图片的区别是： **网络图片需要手动指定图片的尺寸**，即 width 和 height

### 实现背景图片
在需要背景图的子组件嵌入Image组件中就可以

```
	<Image source={{uri:xxx}}>
		<Text>子组件</Text>
	</Image>

```

### 特定平台扩展

`Platform.select()` 可以以Platform.OS为key，从传入的对象中返回对应平台的值

```
var { Platform } = React;

var styles = StyleSheet.create({

	container : {
		flex: 1,
		...Platform.select({
			ios : {

			},
			android : {

			}
		})
	}
})


var Component = Platform.select({
	ios : ()=> require('ComponentIOS'),
	android : ()=> require('ComponentAndroid'),
})();

<Component />

```

另外 `Platform.OS`在ios上会返回 **ios**，安卓平台则是 **android**

在android上，通过 `Platform.Version `可以检测当前所运行的android平台版本。

###


## 已知问题

## 运行
#### android
1. 打开模拟器（`android avd`），或者链接真机
2. 进入项目目录，运行 `react-native run-android`


## 其他

[es6教程](http://es6.ruanyifeng.com/#docs/style)
