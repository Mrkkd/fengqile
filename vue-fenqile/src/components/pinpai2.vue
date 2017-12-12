<template>
	<div>
		<header>
	        距离结束还剩:
	        <span> 00 </span> 天 <span> 09 </span>小时 <span> 59 </span>分 <span> 51 </span>秒
	    </header>
	    <div class="banner">
	         <a href="#sport">
	        <img src="../assets/imgs/pin2.jpg">
	    </a>
	    </div>
	    <div class="log">
	        <a href="#" class="color">综合</a>   
	        <a href="#" class="color1">价格</a>   
	        <a href="#" class="color1">分类</a>   
	    </div>
	    <div class="hou"> 
	            <div class="hou1" v-for="item in result_rows">
                    <a class="hou2">
                        <div class="hou3">
                            <img :src="item.sku_pic">
                        </div>
                        <div class="hou4">
                            <h4>
                               {{item.product_name}}
                            </h4>
                            <p class="se"> 
                                 {{item.sku_key_1}}   
                            </p>
                            <div class="pro-num">
                                <span class="num-buy" style="color: #FC263E">{{item.amount}}</span>
                                <del class="num-del">¥3699</del>
                             </div>
                        </div>
                    </a>
                 </div>  
	    </div>
	     <p class="text-bottom">已经到底了</p>
	</div>
</template>
<script>
	export default{
		 data(){
                return {
                    result_rows:{}
                }
            },
            created(){
                var _t = this
              this.$http.get("../../static/ka.json",{
                    params:{ }
                }).then(function(res){
                    _t.result_rows=res.data.result_rows
                })
            }
	}
</script>
<style>
	header{
	width: 100%;
	height: 0.62rem;
	background-color: #fff;
	text-align: center;
	line-height: 0.62rem;
}
header>span{
	color: #25324E;
	font-size: 0.16rem;
	font-weight: bold;
}
.banner{
	width: 100%;
	height: 2rem;
	background-color: red;
}
.banner>a{
	display: block;
	width: 100%;
	height: 2rem;
}
.banner>a>img{
	width: 100%;
	height: 2rem;
}
.log{
	width: 100%;
	height: 0.41rem;
	/*background-color: red;*/
	display: flex;
}
.log>a{
	display: block;
	width:1.25rem;
	height: 0.41rem;
	text-align: center;
	line-height: 0.41rem;
	
}
.color1{
	color: #B9BDC6;
}
.color{
	color: #3B9BFF;

}
.hou{
	width: 100%;
}
.hou1{
	width: 100%;
	height: 1.4rem;
	box-sizing: border-box;
	padding-left: 0.1rem;
	padding-right: 0.1rem;
	background-color: #fff;
	padding-top: 10px;
	padding-bottom:10px;
	margin-bottom: 0.01rem;

}
.hou2{
	display: block;
	width: 100%;
	height: 1.08rem;
	box-sizing: border-box;
	/*background-color: red;*/
	/*padding-top: 10px;*/
	/*padding-bottom:10px;*/
}
.hou3{
	width: 1.08rem;
	height: 1.08rem;
	float: left;
}
.hou3>img{
	width: 1.08rem;
	height: 1.08rem;
	float: left;
	/*vertical-align: middle;*/
}
.hou4{
	float: right;
	width: 2.05rem;
	height: 1.08rem;
	/*background-color: yellow;*/
}
.hou4 h4{
	width: 100%;
	height: 0.36rem;
	font-size: 0.12rem;
	/*background-color: pink;*/
    /*line-height: 0.2rem;*/
    font-weight: normal;
    color: #808184;
}
.se{
	width: 0.32rem;
	height: 0.16rem;
	text-align: center;
	line-height: 0.16rem;
	overflow: hidden;
    text-overflow: ellipsis;
    /*white-space: nowrap;*/
    background: #F9FAFB;
    border-radius: 0.02rem;
    font-size: 0.10rem;
    color: #757C8E;
}
.pro-num{
	width: 100%;
	height: 0.16rem;
	line-height: 0.16rem;
	margin-top: 0.32rem;
}
.num-buy{
	color: #FC263E;
}
.num-del{
	font-size: 12px;
    color: #B9BDC6; 
}
.xin-main_ .left{
	display: block;
	width: 0.8rem;
	height: 0.19rem;
	line-height:  0.19rem;
	border:1px solid #ca9f00;
    color: #d5b233;
    text-align: center;
    position: absolute;
    top: 0;
    left: -0.12rem;
    font-size: 0.12rem;
}
.text-bottom{
	width: 100%;
	height: 0.38rem;
	text-align: center;
	line-height: 0.38rem;
    color: #b9bdc6;
    font-size: 0.12rem;
}
</style>