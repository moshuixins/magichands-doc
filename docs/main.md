<h1 align="center">MagicHands</h1>

## 作者的碎碎念

本库是在高三开发的当时由于写的非常匆忙代码比较乱注释也有问题，后续会优化的，现在能正常运行但是可能有些bug，欢迎提交问题,本人大二有时间修复。

## 找我

在线时间:(北京)12:00-00:00

- Q群:710985269
- QQ:3560000009
- Wx:php787
- Tg:chenpingan_fjc
欢迎找我聊骚,以及建议和bug反馈【有求必应】

## 支持

目前已兼容 7.0 ～ 12.0并跟进后续新系统

## 如何使用

[点我看视频教程](https://www.bilibili.com/video/BV1Ao4y1E7NK/?share_source=copy_web&vd_source=2f8cb1fac706b3fcfd90ed86023a3c7c)

___

## Java插件相关

### 加载Apk

```js
logdApk(path)
```

- 例子

```js
//加载本地ins插件
loadApk("/storage/emulated/0/MT2/apks/ins.apk")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| path     | 插件路径 | 是       |

### 判断类是否存在

```js
isClass(cls)
```

- 例子

```js
//判断com.test.cc是否存在
if(isClass("com.test.cc")){
logd("类","存在")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| cls     | 类名 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

## Python插件相关

### 启动python

```js
startPy(name)
```

- 例子

```js
//启动magichands模组
startPy("magichands")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| name     | 模组名 | 是       |

### 调用python方法

```js
invokePy(a,b,c)
```

- 例子

```js
//调用sc里面的send_get_request方法并传入参数http://192.168.86.1:5000/heartbeat
 logd("调用结果",invokePy("sc","send_get_request","http://192.168.86.1:5000/heartbeat"))
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| a/b/c     | 文件名/方法名/参数... | 是/是/否       |

| 返回参数 | 描述     |
| :------- | :------- |
| 方法对应的返回信息     | 是 |

## Nodejs相关

### 启动Nodejs

```js
nodejsStart()
```

- 例子

```js
//启动Nodejs,只需要启动一次
nodejsStart()
```

### 调用nodejs代码

```js
nodejsEval(str)
```

- 例子

```js
//启动nodejs并调用nodejs代码并返回执行的对应结果
nodejsStart()
var s= nodejsEval("function w(){\n" +
"const path = require('path');\n" +
"const uuid = require(path.resolve('/storage/emulated/0/Android/data/pa.magichands.demo/files/debug/assets/node_modules/uuid'));\n" +
"uuid.v4()\n" +
"console.log(\"uuid:\", uuid.v4());\n" +
"return uuid.v4()" +
"}\n" +
"w()")

logd("nodejs返回内容:",s)
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| str     | nodejs代码 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 方法对应的返回信息     | 是 |

## 悬浮窗相关

### 申请悬浮窗权限

```js
begWindows()
```

- 例子

```js
//申请悬浮窗权限,弹出悬浮窗授权弹窗
begWindows()
```

### 判断悬浮窗权限

```js
getWindows()
```

- 例子

```js
//判断是否有悬浮窗权限
if(getWindows()){
 logd("申请结果","成功")
}else{
 logd("申请结果","失败")
}

```

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 展示日志悬浮窗

```js
setWindows()
```

- 例子

```js
//展示官方的日志悬浮窗
if(getWindows()){
 logd("申请结果","成功")
 setWindows()
}else{
 logd("申请结果","失败")
}
```

## Ui相关

### 解析布局(内部）

```js
parseLayout(layoutName,con)
```

- 例子

```js
//加载assets下ui文件的main.xml的布局
parseLayout("ui/main.xml")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| layoutName/con     | 文件路径/上下文 | 是/否       |

| 返回参数 | 描述     |
| :------- | :------- |
| view/null     | 是/否 |

### 解析布局(外部）

```js
parseLayout1(layoutName,con)
```

- 例子

```js
//加载/storage/emulated/0/main.xml的布局
parseLayout1("/storage/emulated/0/main.xml")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| layoutName/con     | 文件路径/上下文 | 是/否       |

| 返回参数 | 描述     |
| :------- | :------- |
| view/null     | 是/否 |

### 展示布局

```js
parseLayout1(view,act)
```

- 例子

```js
//展示/storage/emulated/0/main.xml的布局
showViewOnScreen(parseLayout1("/storage/emulated/0/main.xml"))
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| view/act     | 上下文/上下文 | 是/否       |

## 布局交互相关

### 监听下拉框

```js
spinner(id)
```

- 例子

```js
//监听id为t1的下拉框
spinner(spinner_map("t1"))
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| id     | 下拉框id | 是      |

### 获取下拉框选中名称

```js
getspinnerName()
```

- 例子

```js
//获取当前展示布局的选择框选中名称
logd("选择框选中名称：",getspinnerName())
```

| 返回参数 | 描述     |
| :------- | :------- |
| 对应id名称/1     | 是/否 |

### 获取输入框的信息

```js
editext(id)
```

- 例子

```js
//获取id为t1的输入框输入的内容
logd("输入框的内容：",editext(editext_map("t1"))
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| id     | 输入框id | 是       |

### 查找按钮id

```js
findViewById(id)
```

- 例子

```js
//查找id为t1的按钮并返回到内存
findViewById(button_map("t1"))
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| id     | 按钮id | 是      |

### 监听按钮点击

```js
clickListener(callback)
```

- 例子

```js
//分别监听了3个按钮,并在按下的时候执行对应的逻辑
clickListener(function(e){
   switch (e){
         case button_map("t1"):
                          logd("t1","我被点击了");
                           break;
         case button_map("t2"):
                          logd("t2","我被点击了");
                           break;
         case button_map("t3"):
                           logd("t3","我被点击了");
                            break;
     }
});
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| callback     | 回调 | 是      |

## 多线程相关

### 开启线程

```js
execAsyncRh(myRunnable)
```

- 例子

```js
//开启一个while循环并一直打印运行中日志 并返回开启的线程id复制给myid
var myid=execAsyncRh(new java.lang.Runnable({
run: function() {while(true){logd("My Runnable is running.","运行中");}}}))
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| myRunnable     | Runnable对象 | 是      |

| 返回参数 | 描述     |
| :------- | :------- |
| 线程id/null     | 是/否 |

### 停止线程

```js
cancelThread(id)
```

- 例子

```js
//主线程运行十次通知id线程关闭,线程判断停止表示是不是true,是true跳出循环
var myid=execAsyncRh(new java.lang.Runnable({
run: function() {while(true){
logd("My Runnable is running.","运行中");
if(threadTag(myid)){
break
}}}}))
let i=1
while(true){
if(i==10){logd("线程："+,"停止")cancelThread(myid)}
i++
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| id     | 线程id | 是       |

## 系统按键相关

### 主页键

```js
home()
```

- 例子

```js
//返回到手机主页
if(home()){
    logd("执行结果","成功")
}

```

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 返回键

```js
back()
```

- 例子

```js
//返回上一个界面
if(back()){
    logd("执行结果","成功")
}
```

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

## App操作相关

### 包名打开app

```js
openApp(pkg)
```

- 例子

```js
//打开包名为com.sm的app
if(openApp("com.sm")){
    logd("执行结果","成功")
}
```

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 清楚app数据

## 截图相关

### 申请截图权限

```js
startScreenCapture(ay)
```

- 例子

```js
//申请截图权限,弹出授权窗口
startScreenCapture()
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| ay     | 上下文 | 否       |

### 判断截图权限

```js
isScreenShot()
```

- 例子

```js
//循环判断截图权限成功后退出循环
startScreenCapture()
while(true){
if(isScreenShot()){
logd("截图状态：","成功")
break
}}
```

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 申请截图权限+判断截图权限 优化版

```js
isScreenShots(num)
```

- 例子

```js
//3秒后还没申请截图权限成功则为失败
if(isScreenShots(3)){
    logd("申请结果","成功")
}

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| num     | 超时时间 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 释放截图权限

```js
stopScreenCapture(ay)
```

- 例子

```js
//释放申请的截图权限
stopScreenCapture()
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| ay     | 上下文 | 否       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 截图

```js
setUpVirtualDisplay()
```

- 例子

```js
//截图当前屏幕储存到内存
startScreenCapture()
while(true){
if(isScreenShot()){
setUpVirtualDisplay()
break
}}
```

### 截图 优化版

```js
setUpVirtualDisplays(num)
```

- 例子

```js
//3秒后还没成功截图成功则为失败
if(setUpVirtualDisplays(3)!=null){
    logd("截图状态","成功")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| num     | 超时时间 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| bit对象/null     | 是/否 |

### 获取内存的bit对象

```js
getBitmap()
```

- 例子

```js
//获取内存截取的Bit对象
startScreenCapture()
while(true){
if(isScreenShot()){
setUpVirtualDisplay()
break
}}
while (true){
if (getBitmap()!=null){
logd("bit",getBitmap())
break}}
```

| 返回参数 | 描述     |
| :------- | :------- |
| bit/null     | 是/否 |

### 释放bit对象

```js
bitrecycle(bit)
```

- 例子

```js
//释放传入的bit对象
startScreenCapture()
var bit
while(true){
if(isScreenShot()){
setUpVirtualDisplay()
break
}
}
while (true){
if (getBitmap()!=null){
logd("bit",getBitmap())
bit=getBitmap()
break}}
bitrecycle(bit)
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| bit     | bit对象 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| view/null     | 是/否 |

## 图片操作相关

### 全分辨率找图Surf

```js
findImgBySurfEx(img,template,imgResize,tempResize,sx,sy,ex,ey,threshold)
```

- 特别说明:范围中有一个值为负数则认为全屏查找
- 例子

```js
//从截图中寻找雷电图标.png找到则返回数组然后计算中心点进行点击
         if(isScreenShots(3)){
            logd("申请结果","成功")
        }
        delay(1000)
        home()
        delay(1000)
let srcMat=setUpVirtualDisplays(3)
        if(srcMat=null){
        logd("截图状态","成功")
        let temp=getBitmapFromInputStream(getAssetFile("assets/image/雷电图标.png"))
        let points =findImgBySurfEx(srcMat,1.0,temp,1.0,0.6,1,1,-1,0,true);
         if(points){
                let 中心x=(points[0].x+points[2].x)/2;
                let 中心y=(points[0].y+points[2].y)/2;
                logd("结果",中心x+","+中心y) ;
                //点击中心点
               logd("点击结果",clickPoint(中心x,中心y)) ;
            }
        bitrecycle(bit)
        }

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| img/template/imgResize/tempResize/sx/sy/ex/ey/threshold     | 大图/大图缩放倍数/小图/小图缩放倍数/匹配度/起点x/起点y/终点x/终点y/计算方向 | 是/是/是/是/是/是/是/是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| Point[]/null     | 是/否 |

### 将inputStream类型的文图像转换为Bitmap

```js
getBitmapFromInputStream(inputStream)
```

- 例子

```js
//将assets下的image文件夹下的1.png转换为Bitmap对象
getBitmapFromInputStream(getAssetFile("/image/1.png"))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| inputStream     | inputStream对象 |是      |

| 返回参数 | 描述     |
| :------- | :------- |
| Bitmap对象/null     | 是/否 |

## 颜色操作相关

### 获取坐标点的Rgb

```js
getRgb(b,x,y)
```

- 例子

```js
//获取bit图像上12,32坐标点的rgb值
startScreenCapture()
var bit
while(true){
if(isScreenShot()){
setUpVirtualDisplay()
break
}
}
while (true){
if (getBitmap()!=null){
logd("bit",getBitmap())
bit=getBitmap()
break}}
logd("Rgb",getRgb(bit,12,32))
bitrecycle(bit)

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| b/x/y     | bit对象/x轴坐标/y轴坐标 | 是/是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| rgb字符串/null     | 是/否 |

### 获取坐标点的R通道数字-红色

```js
getR(b,x,y)
```

- 例子

```js
//获取bit图像上12,32坐标点的r值
startScreenCapture()
var bit
while(true){
if(isScreenShot()){
setUpVirtualDisplay()
break
}
}
while (true){
if (getBitmap()!=null){
logd("bit",getBitmap())
bit=getBitmap()
break}}
logd("R",getR(bit,12,32))
bitrecycle(bit)

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| b/x/y     | bit对象/x轴坐标/y轴坐标 | 是/是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| r通道数字/null     | 是/否 |

### 获取坐标点的G通道数字-绿色

```js
getG(b,x,y)
```

- 例子

```js
//获取bit图像上12,32坐标点的g值
startScreenCapture()
var bit
while(true){
if(isScreenShot()){
setUpVirtualDisplay()
break
}
}
while (true){
if (getBitmap()!=null){
logd("bit",getBitmap())
bit=getBitmap()
break}}
logd("G",getG(bit,12,32))
bitrecycle(bit)


```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| b/x/y     | bit对象/x轴坐标/y轴坐标 | 是/是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| g通道数字/null     | 是/否 |

### 获取坐标点的B通道数字-蓝色

```js
getB(b,x,y)
```

- 例子

```js
//获取bit图像上12,32坐标点的b值
startScreenCapture()
var bit
while(true){
if(isScreenShot()){
setUpVirtualDisplay()
break
}
}
while (true){
if (getBitmap()!=null){
logd("bit",getBitmap())
bit=getBitmap()
break}}
logd("B",getB(bit,12,32))
bitrecycle(bit)


```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| b/x/y     | bit对象/x轴坐标/y轴坐标 | 是/是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| b通道数字/null     | 是/否 |

## 时间相关

### 时间戳转换时间戳为标准时间

```js
timestampToStandardTime(t,p)
```

- 例子

```js
//获取本机时间的时间戳然后转换成标准时间
logd("当前标准时间:",timestampToStandardTime(getCurrentTimestamp(),"yyyy-MM-dd HH:mm:ss"))
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| t/p     | 时间戳/转换格式 (yyyy-MM-dd HH:mm:ss) | 是/是      |

| 返回参数 | 描述     |
| :------- | :------- |
| 标准时间/null     | 是/否 |

### 获取本机时间戳

```js
getCurrentTimestamp()
```

- 例子

```js
//获取本机时间戳
logd("本机时间戳:",getCurrentTimestamp())
```

| 返回参数 | 描述     |
| :------- | :------- |
| 时间戳/null     | 是/否 |

## 网络相关

### get请求不带文件

```js
sendGetRequest(url)
```

- 例子

```js
//请求百度的网址返回源码
sendGetRequest("https://www.baidu.com/")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| url     | 请求网址 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 成功响应/null     | 是/否 |

### get请求带文件

```js
sendGetRequestWithFile(url,key,f)
```

- 例子

```js
//请求百度的网址并上传帅哥这个zip包
sendGetRequestWithFile("https://www.baidu.com/","files","/storage/emulated/0/帅哥.zip")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| url/key/f     | 请求网址/文件参数/文件路径 | 是/是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 成功响应/null     | 是/否 |

### post请求不带文件

```js
sendPostRequest(url,j)
```

- 例子

```js
//请求百度并附带pa变量的参数集
var pa = {"username":"username","password":"password","typeid":"typeid","image":"imageBase64"};
sendPostRequest("https://www.baidu.com/",pa)
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| url/j     | 请求网址/请求参数 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 成功响应/null     | 是/否 |

### post请求带文件

```js
sendPostRequestWithFile(url,j,key,f)
```

- 例子

```js
//请求百度并附带pa变量的参数集和帅哥.zip
var pa = {"username":"username","password":"password","typeid":"typeid","image":"imageBase64"};
sendPostRequest("https://www.baidu.com/",pa,"file","/storage/emulated/0/帅哥.zip")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| url/j/key/f     | 请求网址/请求参数/文件参数/文件路径 | 是/是/是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 成功响应/null     | 是/否 |

## 系统行为相关

### 下拉通知栏操作

```js
quickSettings()
```

- 例子

```js
//下拉通知栏
if(quickSettings()){
    logd("执行结果","成功")
}
```

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 打开电源菜单

```js
powerDialog()
```

- 例子

```js
//打开电源菜单
if(powerDialog()){
    logd("执行结果","成功")
}
```

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

## 系统属性相关

### 获取当前屏幕高度

```js
getScreenHeight(con)
```

- 例子

```js
//获取当前屏幕的高度信息
logd("高度信息:",getScreenHeight())
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| con     | 上下文 | 否       |

| 返回参数 | 描述     |
| :------- | :------- |
| 屏幕高度信息/null     | 是/否 |

### 获取当前屏幕宽度

```js
getScreenWidth(con)
```

- 例子

```js
//获取当前屏幕的宽度信息
logd("高度信息:",getScreenWidth())
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| con     | 上下文 | 否       |

| 返回参数 | 描述     |
| :------- | :------- |
| 屏幕宽度信息/null     | 是/否 |

### 获取当前屏幕dpi

```js
getScreenDpi(con)
```

- 例子

```js
//获取当前屏幕的dpi信息
logd("高度信息:",getScreenDpi())
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| con     | 上下文 | 否       |

| 返回参数 | 描述     |
| :------- | :------- |
| 屏幕dpi信息/null     | 是/否 |

### 获取本机经纬度信息

```js
getCurrentLocation(con)
```

- 例子

```js
//获取本机经纬度信息
logd("经纬度信息:",getCurrentLocation())
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| con     | 上下文 | 否       |

| 返回参数 | 描述     |
| :------- | :------- |
| 经纬度信息/null     | 是/否 |

### 获取本机android和sdk版本号

```js
getAndroidVersion()
```

- 例子

```js
获取本机的android版本信息
logd("本机版本信息:",getAndroidVersion())
```

| 返回参数 | 描述     |
| :------- | :------- |
| 版本信息/null     | 是/否 |

### 获取本机外网ip地址

```js
getPublicIPAddress()
```

- 例子

```js
//获取当前设备外网ip地址
logd("外网ip地址:",getPublicIPAddress())
```

| 返回参数 | 描述     |
| :------- | :------- |
| ip地址/null     | 是/否 |

### 获取本机wifi-ip地址

```js
getLocalIPAddress(con)
```

- 例子

```js
//获取本机的ip地址
logd("本机ip地址:",getLocalIPAddress())
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| con     | 上下文 | 否       |

| 返回参数 | 描述     |
| :------- | :------- |
| ip字符串/null     | 是/否 |

### 获取剪切板内容

```js
getClipboardContent()
```

- 例子

```js
//获取当前剪切板内容
logd("剪切板内容",getClipboardContent())
```

| 返回参数 | 描述     |
| :------- | :------- |
| 剪切板的内容/null     | 是/否 |

### 设置剪切板内容

```js
setClipboardContent(str)
```

- 例子

```js
//设置剪切板内容为你好
logd("结果",setClipboardContent("你好"))
```

| 传入参数 | 描述      | 是否必须 |
| :------- |:--------|:-----|
| str     | 设置的文本内容 | 是    |

| 返回参数       | 描述     |
|:-----------| :------- |
| true/false | 是/否 |

## 解压缩相关

### 压缩文件

```js
compress(srcFilePath,destFilePath,password)
```

- 例子

```js
//压缩"/storage/emulated/0/帅哥"文件夹到"/storage/emulated/0/帅哥.zip"并设置密码为123456
compress("/storage/emulated/0/帅哥","/storage/emulated/0/帅哥.zip","123456")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| srcFilePath/srcFilePath/password     | 压缩路径/压缩后路径/压缩密码 | 是/是/否      |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 解压文件

```js
decompress(zipFilePath,destFilePath,password)
```

- 例子

```js
//解压"/storage/emulated/0/帅哥.zip"文件夹到"/storage/emulated/0/"并设置解压密码为123456
decompress("/storage/emulated/0/帅哥.zip","/storage/emulated/0/","123456")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| zipFilePath/destFilePath/password     | 压缩包路径/解压路径/解压密码 | 是/是/否       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

## 文件操作相关

### 创建文件

```js
createNewFile(filePath)
```

- 例子

```js
//创建/storage/emulated/0/帅哥.txt这个文件
createNewFile("/storage/emulated/0/帅哥.txt")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath     | 文件路径 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 创建文件夹

```js
createFolder(folderPath)
```

- 例子

```js
//创建/storage/emulated/0/帅哥这个文件夹
createFolder("/storage/emulated/0/帅哥")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| folderPath     | 文件夹路径 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 保存inputStream类型的文件到本地

```js
saveInputStreamToFile(folderPath,inputStream)
```

- 例子

```js
//保存assets目录下的ui下的1.xml到本地sd卡
saveInputStreamToFile("/storage/emulated/",getAssetFile("/ui/1.xml"))
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath/inputStream     | 保存路径/inputStream对象 | 是/是      |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 判断文件是否存在

```js
isFileExists(filePath)
```

- 例子

```js
//判断/storage/emulated/0/los.txt这个文件是否存在
if(isFileExists("/storage/emulated/0/los.txt")){
    logd("结果","存在")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath     | 文件路径 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 判断文件夹是否存在

```js
isDirectoryExists(dirPath)
```

- 例子

```js
//判断/storage/emulated/0/帅哥这个文件夹是否存在
if(isDirectoryExists("/storage/emulated/0/帅哥")){
    logd("结果","存在")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| dirPath     | 文件夹路径 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 删除文件

```js
deleteFile(filePath)
```

- 例子

```js
//删除/storage/emulated/0/帅哥.txt这个文件
if(deleteFile("/storage/emulated/0/帅哥.txt")){
    logd("结果","删除成功")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath     | 文件路径 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 删除文件夹

```js
deleteFolder(folderPath)
```

- 例子

```js
//判断/storage/emulated/0/帅哥这个文件夹是否存在
if(deleteFolder("/storage/emulated/0/帅哥")){
    logd("结果","删除成功")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| folderPath     | 文件夹路径 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 删除文件指定行

```js
deleteLine(filePath,lineNumber)
```

- 例子

```js
//删除/storage/emulated/0/帅哥.txt文件的第一行
if(deleteLine("/storage/emulated/0/帅哥.txt","1")){
    logd("结果","删除第一行成功")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath/lineNumber     | 文件路径/行号 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 覆盖写入文件

```js
writeTextToFile(filePath,content)
```

- 例子

```js
//覆盖写入内容:你好,到/storage/emulated/0/帅哥.txt文件
if(writeTextToFile("/storage/emulated/0/帅哥.txt","你好")){
    logd("结果","覆盖写入成功")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath/content     | 文件路径/写入内容 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 追加写入文件

```js
appendTextToFile(filePath,content)
```

- 例子

```js
//追加写入内容:你好,到/storage/emulated/0/帅哥.txt文件
if(appendTextToFile("/storage/emulated/0/帅哥.txt","你好")){
       logd("结果","追加写入成功")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath/content     | 文件路径/写入内容 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 替换文件字符串

```js
replaceString(filePath,oldString,newString)
```

- 例子

```js
//替换storage/emulated/0/帅哥.txt文件出现的第一个我真的好帅字符为你也很帅
if(replaceString("/storage/emulated/0/帅哥.txt","我真的好帅","你也很帅")){
       logd("结果","替换写入成功")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath/oldString/newString     | 文件路径/目标字符串/新字符串 | 是/是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 获取app内部缓存路径

```js
getExternalFilesDir()
```

- 例子

```js
//获取当前app的缓存路径
logd("结果:",getExternalFilesDir())

```

### 获取assets的下文件对象

```js
getAssetFile(filePath,con)
```

- 例子

```js
//获取assets的ui文件下的main.xml
logd("结果:",getAssetFile("/ui/main.xml"))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath/con     | 文件路径/上下文 | 是/否       |

| 返回参数 | 描述     |
| :------- | :------- |
| InputStream对象/null     | 是/否 |

### 将本地文件转换成InputStream对象

```js
readFileInputStream(path)
```

- 例子

```js
//将帅哥这个文件转换为InputStream对象 
logd("结果:",readFileInputStream("/storage/emulated/0/帅哥.txt"))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| path     | 文件路径 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| InputStream对象/null     | 是/否 |

### 读取文件所有行

```js
readLinesFromFile(filePath)
```

- 例子

```js
//读取/storage/emulated/0/帅哥.text文件的所有行内容
logd("结果:",readLinesFromFile("/storage/emulated/0/帅哥.txt"))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath     | 文件路径 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 字符串数组/null     | 是/否 |

### 读取文件指定行

```js
readLineFromFile(filePath,lineNumber)
```

- 例子

```js
//读取/storage/emulated/0/帅哥.text文件的第一行内容
logd("结果:",readLineFromFile("/storage/emulated/0/帅哥.txt","1"))
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath/lineNumber     | 文件路径/行号 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 字符串信息/null     | 是/否 |

### 读取文件指定内容

```js
findLineNumber(filePath,searchText)
```

- 例子

```js
//查找/storage/emulated/0/s.txt里面第一次出现“帅哥”所在的行号
logd("行号:",findLineNumber("/storage/emulated/0/s.txt","帅哥"))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| filePath/searchText     | 文件路径/要读取的字符串 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 行号/-1     | 是/否 |

### 读取文件夹下所有文件名(包含子文件夹)

```js
listFolderFiles(folderPath)
```

- 例子

```js
//读取/storage/emulated/0/帅哥文件夹下的所有文件名包含子文件夹
logd("结果:",listFolderFiles("/storage/emulated/0/帅哥"))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| folderPath     | 文件夹路径 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 字符串数组/null     | 是/否 |

## 节点相关

### 综合查找(正则匹配)

```js
findContainsNode(type,node)
```

- 例子

```js
//查找当前界面有无text类型名称为帅哥的节点(如果当前界面有"帅"这个节点也会匹配到）
if(findContainsNode("text","帅哥")!=null){
       logd("结果","找到节点")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| type/node     | 查找的类型(id,text,desc)/节点名称 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 节点对象/null     | 是/否 |

### 综合查找（绝对匹配）

```js
findAllNode(type,node)
```

- 例子

```js
//查找当前界面有无id类型节点名称为love的节点
if(findAllNode("id","love")!=null){
       logd("结果","找到节点")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| type/node     | 查找的类型(id,text,desc)/节点名称 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 节点对象/null     | 是/否 |

### 查找desc

```js
findNodeByDesc(node)
```

- 例子

```js
//查找当前界面一个desc为love的节点
if(findNodeByDesc("love")!=null){
       logd("结果","找到节点")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node     | desc名称 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 节点信息/null     | 是/否 |

### 查找id

```js
findNodeById(node)
```

- 例子

```js
//查找当前界面一个id为android:id/text1的节点
if(findNodeById("android:id/text1")!=null){
       logd("结果","找到节点")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node     | id名称 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 节点信息/null     | 是/否 |

### 查找text

```js
findNodeByText(node)
```

- 例子

```js
//查找当前界面一个text为你好的节点
if(findNodeByText("你好")!=null){
       logd("结果","找到节点")
}
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node     | text名称 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 节点信息/null     | 是/否 |

### 获取节点text信息

```js
getText(node)
```

- 例子

```js
//通过findAllNode函数返回一个id为t2的节点对象,然后用getText函数获取节点对象的text信息
logd("文本信息:",getText(findAllNode("id","t2")))
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node     | 节点对象 | 是      |

| 返回参数 | 描述     |
| :------- | :------- |
| 字符串信息/null     | 是/否 |

### 获取节点前兄妹节点

```js
findPreviousSibling(node)
```

- 例子

```js
//获取text为搜索的前一个节点
logd("前一个节点为:",findPreviousSibling(findNodeByText("搜索")))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node     | 节点信息 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 节点信息/null     | 是/否 |

### 获取节点后兄妹节点

```js
findNextSibling(node)
```

- 例子

```js
//获取text为搜索的后一个节点
logd("后一个节点为:",findNextSibling(findNodeByText("搜索")))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node     | 节点信息 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 节点信息/null     | 是/否 |

### 获取节点父节点

```js
getParentNode(node)
```

- 例子

```js
//获取text为搜索的父亲节点
logd("前一个节点为:",getParentNode(findNodeByText("搜索")))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node     | 节点信息 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 节点信息/null     | 是/否 |

### 获取节点儿子节点

```js
getChildNodes(node)
```

- 例子

```js
//获取text为搜索的子节点
logd("前一个节点为:",getChildNodes(findNodeByText("搜索")))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node     | 节点信息 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 节点信息/null     | 是/否 |

### 获取节点范围

```js
getBounds(node)
```

- 例子

```js
//通过findAllNode函数返回一个节点对象,然后用getBounds函数获取节点对象的范围信息
logd("前一个节点为:",getBounds(findAllNode("id","t2")))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node     | 节点对象 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 节点范围信息/null     | 是/否 |

### 输入文本

```js
inputText(node,t)
```

- 例子

```js
//通过查找节点函数返回的节点对象然后用本函数输入帅也是一种罪吗？
if(inputText(findNodeByText("搜索"),"帅也是一种罪吗？")){
    logd("结果","输入成功")
}

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node,t     | 节点对象/文本内容 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 节点点击

```js
tryClick(node)
```

- 例子

```js
//通过查找节点函数返回一个节点对象然后尝试点击这个节点对象
logd("点击结果:",tryClick(findAllNode("id","t2")))

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node     | 节点对象 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 释放节点

```js
recycle(node)
```

- 例子

```js
//查找id为t2的返回并释放节点
if(recycle(findAllNode("id","t2"))){
    logd("结果","释放成功")
}

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| node     | 节点对象 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 强制更新当前页面节点信息

```js
refreshCurrentPageNodes()
```

- 例子

```js
//更新当前界面的全部节点
refreshCurrentPageNodes()
```

## 坐标操作

### 滑动操作

```js
swipeToPoint(x,y,x1,y1,dur)
```

- 例子

```js
//从100,200滑动到100,800,总时长为1000毫秒
if(swipeToPoint(100,200,100,800,1000)){
    logd("结果","滑动成功")
}

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| x/y/x1/y1/dur     | 开始x坐标/开始y坐标/结束x坐标/结束y坐标/滑动时长/ms | 是/是/是/是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 触摸按下

```js
touchDown(x,y)
```

- 例子

```js
//按下一个x坐标为141,y坐标为864的点
if(touchDown(141,864)){
    logd("结果","按下成功")
}

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| x/y     | x轴坐标/y轴坐标 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 触摸滑动

```js
touchMove(x,y)
```

- 例子

```js
//根据touchDown按下的开始坐标,滑动到目标x坐标200,y坐标890
if(touchMove(200,890)){
    logd("结果","滑动成功")
}

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| x/y     | x轴坐标/y轴坐标 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 触摸抬起

```js
touchUp(x,y)
```

- 例子

```js
//表示在x坐标为12,y坐标抬起
if(touchUp(12,15)){
    logd("结果","抬起成功")
}

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| x/y     | x轴坐标/y轴坐标 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 坐标点击

```js
clickPoint(x,y)
```

- 例子

```js
//表示点击一个x坐标为12,y坐标为15的点
if(clickPoint(12,15)){
    logd("结果","点击成功")
}

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| x/y     | x轴坐标/y轴坐标 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

### 坐标点击

```js
longClickPoint(x,y)
```

- 例子

```js
//表示长按一个x坐标为100,y坐标为200的点
if(longClickPoint(100,200)){
    logd("结果","点击成功")
}

```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| x/y     | x轴坐标/y轴坐标 | 是/是       |

| 返回参数 | 描述     |
| :------- | :------- |
| true/false     | 是/否 |

## 输入法操作

### 输入法输入

```js
InputMethodInput(str)
```

- 例子

```js
//在正在聚焦的输入框输入你好
InputMethodInput("你好")
```

| 传入参数 | 描述     | 是否必须    |
| :------- |:-------|:--------|
| str    | 要输入的文本 | 是       |

### 输入法删除

```js
InputMethodDeleteText()
```

- 例子

```js
//删除正在聚焦的输入框的内容
InputMethodDeleteText()
```

### 输入法回车

```js
InputMethodEnterKey()
```

- 例子

```js
//输入法回车操作
InputMethodEnterKey()
```

## 其他操作

### 吐司

```js
toast(tag,msg)
```

- 例子

```js
//在悬浮窗打印以及ide打印并弹出消息和保存到本地log.txt
toast("状态","运行")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| tag/msg     | 标签/消息 | 是/是       |

### 日志

```js
logd(tag,msg)
```

- 例子

```js
//在悬浮窗和ide展示日志并保存在本地log.txt文本
toast("状态","运行")
```

| 传入参数 | 描述     | 是否必须 |
| :------- | :------- | :------- |
| tag/msg     | 标签/消息 | 是/是       |

### 启动

```js
start()
```

- 例子

```js
//启动main.js
start()
```

### 停止

```js
exit()
```

- 例子

```js
//停止脚本如果是在线程执行则会停止线程在主线程执行会停止整个脚本
exit()
```

### 执行shell命令

```js
executeCommand(cmd)
```

- 例子

```js
//执行命令ls -l,如果app没有root权限会尝试使用adb没有adb权限会尝试普通权限执行直到执行失败
logd("执行结果",executeCommand("ls -l"))

```

| 传入参数 | 描述      | 是否必须    |
| :------- |:--------|:--------|
| cmd     | shell命令 | 是       |

| 返回参数 | 描述     |
| :------- | :------- |
| 对应的执行结果/不正确返回值     | 是/否 |
