Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading_more:true,
    no_data:true,
    pageNum:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.refreshData();
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
    this.refreshData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      loading_more:false
    })
    this.loadMoreData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  refreshData:function(){
    var that = this;
    wx.request({
      url: 'http://api.tianapi.com/wxnew/?key=e0a60f3a27597d4ead1580a2a79e59c4&num=10',
      success: function (res) {
        console.log(res);
        that.setData({
          wechat_list: res.data.newslist
        })
      },fail: function (e) {
        console.log(e);
      }
    })
  },
  loadMoreData:function(){
    var that = this;
    that.data.pageNum++;
    console.log(that.data.pageNum);
    var dataList = that.data.wechat_list;
    wx.request({
      url: 'http://api.tianapi.com/wxnew/?key=e0a60f3a27597d4ead1580a2a79e59c4&num=10&page=' + that.data.pageNum,
      success: function (res) {
        var wechartList = res.data.newslist;
        console.log(wechartList);
        if (wechartList == "null" || wechartList.length == 0){
          that.setData({
            loading_more:true,
            no_data:false
          })
        }else{
          for (var i = 0; i < wechartList.length;i++){
            dataList.push(wechartList[i])
          }
          console.log(dataList);
          that.setData({
            wechat_list: dataList,
            loading_more: true,
            no_data: true
          })
        }
      }, fail: function (e) {
        console.log(e);
        that.setData({
          loading_more: true,
          no_data: false
        })
      }
    })
  }
})