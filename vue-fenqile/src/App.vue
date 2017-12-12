<template>
  <div id="app">
    <router-view></router-view>
    <div class="li_bot">
      <ul @click="add()">
        <li><router-link to="/Shou"><img src="./assets/ybx-img/bot1.png"></router-link><span></span>首页</li>
        <li><router-link to="/ko"><img src="./assets/ybx-img/bot2.png"></router-link><span></span>分类</li>
        <li><router-link to="/Shopping"><img src="./assets/ybx-img/bot3.png"></router-link><span></span>购物车</li>
        <li><router-link to="/Leka"><img src="./assets/ybx-img/bot4.png"></router-link><span></span>乐卡</li>
        <li style="color:#3B9BFF"><router-link to="/Mine"><img src="./assets/ybx-img/bot5L.png"></router-link><span></span>我的</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    add(){
      window.location.reload()
    }
  }

}

document.getElementsByTagName("html")[0].style.fontSize = (document.documentElement.clientWidth || document.body.clientWidth)/375*100 + "px";
  window.onresize = function(){
    //取得当前视口宽度
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //根据标准大小375 计算当前视口对应的根节点font-size
    var size = clientWidth/375*100 + "px";
    document.getElementsByTagName("html")[0].style.fontSize = size;
}

</script>

<style>
*{
  margin:0;
  padding:0;
}
html{
  font-size: 100px;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
  color: #eee;
}
input, img{
  outline: none;
}
body{
  background: #f5f7f6;
  font-size: 16px;
  font-family: "Helvetica Neue","microsoft yahei","Helvetica","STHeiTi","Arial","sans-serif";
}
/*底部导航*/
.li_bot{
  width: 100%;
  height: 50px;
  /*height: 0.4rem;*/
  background: #fafafa;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  z-index: 2;
  text-align: center;
}
.li_bot ul{
  width: 100%;
  border-top: 1px solid rgba(128, 128, 128, 0.43);
}
.li_bot li{
  float: left;
  width: 20%;
  font-size: 14px;
  /*font-size: 0.14rem;*/
  margin-top: 4px;
  /*margin-top: 0.04rem;*/
}
.li_bot li img{
  width: 24px;
  height: 24px;
  /*width: 0.23rem;
  height: 0.23rem;*/
}
.li_bot span{
  display: block;
}
</style>
