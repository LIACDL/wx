// // pages/detail/detail.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//       singer:{},
//       msg:[]
//   },

//   addmsg:function(){
//     var user = { title: this.data.name }
//     var msg = this.data.msg;
//     msg.push(user);
//     this.setData({
//       msg: msg
//     })

//     this.setData({
//       name: ''
//     })
//   },
//   bindKeyInput: function (e) {
//     this.setData({
//       name: e.detail.value
//     })
//   },
 

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//       console.log(options)
//       this.setData({
//         msg:options
//       })
//   },

// })












// pages/datall/detall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singer: {},
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      singer: options
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  addhero: function () {
    var user = { title: this.data.name, }
    var movies = this.data.movies;
    movies.push(user);
    this.setData({
      movies: movies
    })

    this.setData({
      name: '',

    })
  }
})
