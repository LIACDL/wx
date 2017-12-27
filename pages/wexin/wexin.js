Page({
  data: {
    inputShowed: false,
    inputVal: "",

    lists:[
      { cover:"../../public/icons/pic_n.png",name:"微信支付",time:"10月25日"},
      { cover: "../../public/icons/pic_n.png",name: "铁路12306",time: "10月25日" },
      { cover: "../../public/icons/pic_n.png", name: "咪哒MIKI",time: "10月25日" },
      { cover: "../../public/icons/pic_n.png", name: "订阅号", time: "10月25日" },
      { cover: "../../public/icons/pic_n.png", name: "有道云笔记", time: "10月25日" },
      { cover: "../../public/icons/pic_n.png", name: "妖魔鬼怪", time: "10月25日" }

    ]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }




})