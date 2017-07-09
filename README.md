![img](https://github.com/zxhandroid/SmallReader/blob/master/sr.gif)

#### 应用主要分为日报，电影，微信和其他四个版块，底部的tab,在小程序的app.json中对tabBar进行配置就好，这个很简单，参考文档就行。下面简单的说下各个版块的实现：
#### 一、日报
##### 日报这个版块，在顶部有三个页签，这里可以利用微信在GitHub上的开源框架weui-wxss中的navbar来实现，地址为：https://github.com/Tencent/weui-wxss,
##### 里面提供了很多的微信小程序组件，大家可以根据需要进行使用或按自己需要进行改造。
##### 至于如何使用这些组件呢？其实很简单，只需要两步即可搞定：第一：将weui-wxss下载下来，将其dist目录下的style文件夹拷贝你的微信小程序根目录下；第二：在weui-wxss/dist/example目录下将相应组件wxml文件中对应代码拷贝到自己的项目中即可，它里面的样式在第一步style文件夹的weui.wxss文件中已经定义好了，因此也可以通过修改这个文件中相应的样式来实现自己效果。
##### 这个版块中，使用weui-wxss的navbar的话，在页面滑动的时候，整个navbar也会向上滑动而看不见，体验不好，因此这里对其进行了修改，对每个tab下面的内容用scroll-view进行包裹，同时对整个页面容器的样式进行修改让其位置固定，这样的话，页签则不会随着下面内容滑动而顶上去了。
##### 在娱乐这个页签中，则使用了weui-wxss的grid，即表格布局,至于一行显示多少个格子，这个是可以在weui.wxss中进行调整的，如下所示，修改其width即可：
    .weui-grid {
      margin: 3px;
      position: relative;
      float: left;
      width: 48%;
      box-sizing: border-box;
    }
##### 在体育页签中，根据不同的数据，动态显示了两种不同的布局，这里的处理方式很简单，主要通过不同的条件，对hidden属性进行控制，符合第一种类型的则将该item布局显示出来，另一种item布局隐藏，对于第二种类型也采用相同的策略。点击进去的日报详情页面，如果图片大于等于2张的话，则用轮播图进行展示，只有一张的话，则直接用image标签来展示，详情页中一大段的描述信息是写死的，原因是原数据中返回的是url链接地址，而微信小程序中不像android有webView控件可以加载外部链接地址，所以就只好写死数据。
#### 二、电影
##### 对于这个版块，是采用zhongjie-chen在github上开源的一个控件来实现，地址为：https://github.com/zhongjie-chen/wx-scrollable-tab-view，
##### 做法其实是通过对控件的触摸、滑动事件进行处理，本项目根据实际需求对其进行了简单的修改，加上相应的布局，点击事件。这里简单提一下，由于没有找到相应的电影请求接口，里面的数据是写死的，为了代码的整洁，单独将电影数据放在data目录下的local_data.js文件中，然后在电影版本的js文件中进行引用，引用方式主要通过：var movieData = require('../../data/local_data.js')，当然，在local_data.js文件中要通过module.exports进行导出，具体实现看代码。
#### 三、微信
##### 这个版块比较简单，主要实现下拉刷新与上拉加载更多的功能，下拉刷新，主要通过在当前页面json文件中配置"enablePullDownRefresh": true即可，然后在js文件onPullDownRefresh函数中进行重新请求网络的操作即可。上拉加载实现相对复杂一点，首先在布局底部加上相应的加载组件，这个组件使用的是weui-wxss中的loadmore组件；然后在js文件onReachBottom函数中对加载控件进行显示隐藏处理，同时请求网络，并对数据集进行处理。
#### 四、其他
##### 这里，主要通过weui-wxss的picker组件，对日期进行选择，并根据不同的日期去访问网络，刷新数据。
