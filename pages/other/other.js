Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2015/08/06",
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData(this.data.date);
  },
  bindDateChange: function (e) {
    this.setData({
      dataList: []
    })
    console.log(e.detail.value);
    var value = e.detail.value;
    var arr = value.split("-");
    console.log(arr);
    this.requestData(arr[0] + "/" + arr[1] + "/" + arr[2])
  },
  /**
   * 请求网络的公共方法
   */
  requestData: function (time) {
    var that = this
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: 'https://gank.io/api/day/' + time,
      success: function (e) {
        wx.hideToast();
        console.log(e.data.results);
        if (e.data.results.Android == null) {
          wx.showToast({
            title: '今日数据为空,请选择其它日期!',
          })
        } else {
          var androidArr = e.data.results.Android;
          var iosArr = e.data.results.iOS;
          var welfareArr = e.data.results.福利;
          var restVideoArr = e.data.results.休息视频;
          var expandArr = e.data.results.拓展资源;
          that.pushData(androidArr);
          that.pushData(iosArr);
          that.pushData(welfareArr);
          that.pushData(restVideoArr);
          that.pushData(expandArr);
          console.log(that.data.dataList);
          that.setData({
            otherLists: that.data.dataList
          })
        }
      }, fail: function (e) {
        wx.showToast({
          title: '数据加载失败,请重试!',
        })
      }
    })
  },
  /**
   * 将数据添加到数组中
   */
  pushData: function (arr) {
    if (arr != "null" && arr.length != 0) {
      for (var i = 0; i < arr.length; i++) {
        this.data.dataList.push(arr[i]);
      }
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})