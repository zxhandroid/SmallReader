var sliderWidth = 60; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["头条", "娱乐", "体育"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    reuqestUrl: '',
    refreshTop: true
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    that.requestData(0);
  },
  onPapersItemTap: function (e) {
    var data_set = e.currentTarget.dataset.item;
    console.log(e);
    wx.navigateTo({
      url: '../../pages/paper_details/paper_details?item_data=' + JSON.stringify(data_set),
    })
  },
  tabClick: function (e) {
    console.log(e.currentTarget.id);
    var tabIndex = e.currentTarget.id;
    this.requestData(tabIndex);
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  //请求网络的公共方法
  requestData: function (tabIndex) {
    var that = this;
    if (tabIndex == 0) {
      that.setData({
        reuqestUrl: 'https://v.juhe.cn/toutiao/index?type=top&key=1ba52b298f0613033b10fa9e887514df'
      })
    } else if (tabIndex == 1) {
      that.setData({
        reuqestUrl: 'https://v.juhe.cn/toutiao/index?type=yule&key=1ba52b298f0613033b10fa9e887514df'
      })
    } else if (tabIndex == 2) {
      that.setData({
        reuqestUrl: 'https://v.juhe.cn/toutiao/index?type=tiyu&key=1ba52b298f0613033b10fa9e887514df'
      })
    }
    that.setData({
      papers: '/image/paper-press.png',
      grids: '/image/paper-press.png',
      sports: '/image/paper-press.png'
    })
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: that.data.reuqestUrl,
      success: function (res) {
        console.log(res.data.result.data);
        wx.hideLoading();
        that.setData({
          papers: res.data.result.data,
          grids: res.data.result.data,
          sports: res.data.result.data,
        });
      }, fail: function (res) {
        wx.showToast({
          title: '数据加载失败，请稍后重试',
        })
      }
    })
  }
});