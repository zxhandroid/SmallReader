Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try {
      var newMovieData = wx.getStorageSync('newMovieCache');
      console.log(newMovieData);
      this.setData({
        md_title: newMovieData.title,
        md_img: newMovieData.poster,
        md_rating_score: newMovieData.rating,
        md_rating_count: newMovieData.rating_count,
        md_genres: newMovieData.genres,
        md_runtime: newMovieData.runtime,
        md_language: newMovieData.language,
        md_release_date: newMovieData.release_date,
        md_country: newMovieData.country,
        md_writers: newMovieData.writers,
        md_directors: newMovieData.directors,
        md_actors: newMovieData.actors,
        md_plot_simple: newMovieData.plot_simple
      })
    } catch (e) {
      console.log(e);
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