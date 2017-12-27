// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tfboys: [
      {name:"王源",age:18},
      { name: "王俊凯", age: 19 },
      { name: "易烊千玺", age: 20 }
    ],
    name:"hello",
    age:10
  
  },

  addhero:function(){
    var user = {name:this.data.name,age:this.data.age}
    var tfboys = this.data.tfboys;
    tfboys.push(user);
    this.setData({
      tfboys:tfboys
    })

    this.setData({
      name:'',
      age:''
    })
  },
  bindKeyInput:function(e){
    this.setData({
      name:e.detail.value
    })
  },
   bindKeyInputAge: function (e) {
    this.setData({
      age: e.detail.value
    })
  },

  deletehero:function(e){
    var index = e.currentTarget.dataset.index;
    var tfboys = this.data.tfboys;
    tfboys.splice(index,1);
    this.setData({
      tfboys:tfboys
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      singer: options
    })
  }
})