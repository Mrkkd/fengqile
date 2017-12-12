<template>
<div>
	<div class="header">
		<div class="swiper">
			<div class="swiper_">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><img src="../assets/imgs/xing-swiper1.png"></div>
						<div class="swiper-slide"><img src="../assets/imgs/xing-swiper2.png"></div>
						<div class="swiper-slide"><img src="../assets/imgs/xing-swiper3.png"></div>
						<div class="swiper-slide"><img src="../assets/imgs/xing-swiper4.png"></div>
					</div>
				<div class="swiper-pagination"></div>
				</div>
			</div>
			<div class="swiper_open">
				<span>
					你领取的优惠券中 现有
					<span class="orange">3</span>
					张还未使用
				</span>
				<a class="open-btn">立即查看</a>
			</div>
		</div>
	</div>
	<div class="title">
        <p class="bg-wrap">尊享免息券</p>
    </div>
    <div class="ticket-wrap">
    	<div class="ticket-wrap-list">
	    		<a class="ticket-wrap-list-num">
	    			<div class="xin-get">
	    				<p class="size"><span>￥</span>10000</p>
	    				<p class="ticket-type">乐花首期免息</p>
	    				<p class="ticket-txt">借钱12期以上可用</p>
	    			</div>
	    			<div class="now">
	    				立即使用
	    			</div>
	    			<!-- <p class="mian">
	    				dfsdfs
	    			</p> -->
	    		</a>
	    		<a class="ticket-wrap-list-num">
	    			<div class="xin-get">
	    				<p class="size"><span>￥</span>10000</p>
	    				<p class="ticket-type">乐花首期免息</p>
	    				<p class="ticket-txt">借钱12期以上可用</p>
	    			</div>
	    			<div class="now">
	    				立即使用
	    			</div>
	    			<!-- <p class="mian">
	    				dfsdfs
	    			</p> -->
	    		</a>
	    		<a class="ticket-wrap-list-num">
	    			<div class="xin-get">
	    				<p class="size"><span>￥</span>10000</p>
	    				<p class="ticket-type">乐花首期免息</p>
	    				<p class="ticket-txt">借钱12期以上可用</p>
	    			</div>
	    			<div class="now">
	    				立即使用
	    			</div>
	    			<!-- <p class="mian">
	    				dfsdfs
	    			</p> -->
	    		</a>
    	</div>
    </div>
    <div class="title">
        <p class="bg-wrap">尊享特惠活动</p>
    </div>
    <div class="c33">
	    <div class="c3" style="margin-bottom: 10px">
	    	<div class="c3_">
	    		<p class="pro-title">最高立减200元</p>
	    		<p>购iPhone 8 月供206元起</p>
	    		<div class="left-tips">3C数码</div>
	    	</div>
	    	<a href="#" class="xin_imgs">
	    		<img src="../assets/imgs/xin-active.jpg">
	    	</a>
	    </div>
	     <div class="c3" >
	    	<div class="c3_">
	    		<p class="pro-title">最高立减200元</p>
	    		<p>购iPhone 8 月供206元起</p>
	    		<div class="left-tips">3C数码</div>
	    	</div>
	    	<a href="#" class="xin_imgs">
	    		<img src="../assets/imgs/xin-active.jpg">
	    	</a>
	    </div>
	</div>
	 <div class="title">
        <p class="bg-wrap">尊享新人价</p>
    </div>
    <div id="xin" style="width: 100%">
	   <div class="xin-main">
	        <div class="xin-main_" v-for="item in result_rows">
	    		<a href="#">
	    			<img :src="item.sku_pic">
	    			<p class="pro-title">{{item.product_name}}</p>
	    			<p class="pro-fintech">
		    			<span class="yen">￥</span>
		    			<span>194.38</span>X24期
	    			</p>
	    			<p class="pro-price">
	                    <span class="new">新人价:￥<strong>{{item.amount}}</strong></span>
	                    <span class="old">￥{{item.mart_amount}}</span>
	                </p>
	                <span class="left">直降{{item.reduce_amount}}元</span>
	    		</a>
	    	</div> 
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
            this.$http.get("../../static/data.json",{
                params:{
                }
            }).then(function(res){
                console.log(res)
                _t.result_rows = res.data.result_rows;
            })
        }
       }
</script>
<style>
	.header{
	width: 100%;
	height: 2.2rem;
    box-sizing: border-box;
    padding: 0.12rem 0.1rem;
    position: relative;
}
.swiper{
	width: 3.45rem;
	height: 2rem;
	
	position: absolute;
	left: 0.15rem;
	top: 0.1rem;
}
.swiper-container{
	width: 3.45rem;
	height: 1.52rem;
}
.swiper_{
	vertical-align: middle;
	width: 3.45rem;
	height: 1.52rem;
	background-color: #fff;
	overflow: hidden;
	border-top-left-radius: 0.15rem;
    border-top-right-radius: 0.15rem;
}
.swiper_ img{
	width: 3.45rem;
	height: 1.52rem;
}
.swiper_open{
	width: 100%;
	height: 0.49rem;
	background: url(" ../assets/imgs/xin-open.png") no-repeat;
	background-size: cover;
	box-sizing: border-box;
	padding:0 0.1rem;
	 border-bottom-left-radius: 0.14rem;
    border-bottom-right-radius: 0.14rem;
	position: relative;
}
.swiper-pagination{
	top: 1.25rem;
}
.swiper_open>span{
	display: block;
	width: 3rem;
	font-size: 0.12rem;
	height: 0.15rem;
	position: absolute;
	left: 0.15rem;
    top: 0.14rem;

}
.orange{
	font-size: 0.11rem;
	height: 0.11rem;
    color: #434039;
    line-height:0.11rem;
    color: #ff7800;
}
.open-btn{
	display: block;
	width: 0.675rem;
	height: 0.23rem;
	background: #423f39;
    color: #e7cfa4;
    text-align: center;
    line-height: 0.23rem;
    border-radius: 0.11rem;
    font-size: 0.11rem;
    position: absolute;
    bottom: 0.13rem;
    right: 0.22rem; 
}
.title{
	width: 100%;
	height: 0.5rem;
	display: flex;
	font-weight: bold;
	justify-content: center;
	align-items: center;
    background-color: #fff;
}
.title .bg-wrap {
    display: inline-block;
    font-size: 0.12rem;
    color: #000;
    width: 1.5rem;
    height: 0.16rem;
    background: url(" ../assets/imgs/xin-yi.png") no-repeat;
    background-size: cover;
    text-align: center;
}
.ticket-wrap{
	width: 100%;
	height: 1.04rem;
	box-sizing: border-box;
	overflow-x: scroll;
	position: relative;
}
.ticket-wrap-list{
	width: 4.99rem;
	height: 1.04rem;
	/*background-color: red;*/
	box-sizing: border-box;
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	justify-content: space-around;
}
.ticket-wrap-list-num{
	display: block;
	margin-top: 0.04rem;
	width: 1.445rem;
	height: 0.82rem;
	background: url(" ../assets/imgs/xin-wrap.png") no-repeat;
	background-size: cover;
	position: relative;
	background-color: #fff;
	
}
.xin-get{
	padding-left: 0.10rem;
	box-sizing: border-box;
	width: 1.145rem;
	height: 0.82rem;
	/*background: red;*/
	float: left;
	background: url(" ../assets/imgs/xin-mian.png") no-repeat;
	/*background-size: cover;*/
	background-size: 0.36rem;
}
.xin-get>.size{
	width: 1.015rem;
	height: 0.29rem;
	line-height: 0.29rem;
	color: #fff;
	font-size: 0.25rem;
	font-weight: bold;
	margin-top: 0.15rem;
}
.xin-get>.size>span{
	font-size: 0.12rem;
	    color: #fff;
}
.ticket-type{
	width: 1.015rem;
	height: 0.12rem;
	font-size: 0.12rem;
	line-height: 0.12rem;
	margin-bottom: 0.05rem;
	  color: #fff;
}
.ticket-txt{
	width: 1.5rem;
	height: 0.12rem;
	font-size: 0.12rem;
	line-height: 0.12rem;
	color: #fff;
}
.now{
	float: right;
	color: #fff;
	width: 0.3rem;
	height: 0.82rem;
	font-size: 0.12rem;
	text-align: center;
	box-sizing: border-box;
	padding: 0.1rem 0.05rem 0.1rem 0.05rem;
}
/*.mian{
	white-space: nowrap;
    text-align: left;
    font-size: .24rem;
    line-height: .61333333rem;
    color: red;
    background-color: red;
    text-indent: -.4rem;
    transform: rotate(-45deg);
    width: 0.3rem;
    height: 0.15rem;
    line-height: 0.15rem;
    left: 0;
    top: 0;
    font-size: 10px;
    z-index: 9999;
}*/
.c33{
	width: 100%;
	background-color: #fff;
}
.c3{
	width: 100%;
	display:flex;
	justify-content: center;
	background-color: #fff;
}
.c3_{
	width: 1.6rem;
	height: 1.1rem;
	position: relative;
	background-color: #fff;
	border:1px solid #f5f7f6;
	box-sizing: border-box;
	border-right: none;
}
.c3_ .pro-title{
	 overflow: hidden;
    text-overflow: ellipsis;
     color: #787878;
    font-size: 0.2rem;
    text-align: center;
    margin-top: 0.3rem;
	color: #000;
	box-sizing: border-box;
}
.c3_ p{
	font-size: 0.12rem;
	text-align: center;

}
.xin_imgs{
	width: 2.03rem;
	height: 1.1rem;
	display: block;
}
.xin_imgs>img{
	width: 2.03rem;
	height: 1.1rem;
}
.left-tips{
	width: 0.53rem;
	height: 0.2rem;
	font-size: 0.12rem;
	text-align: center;
	line-height: 0.2rem;
	position: absolute;
	left: 0;
	top: 0;
	color: #35332d;
    background: #c4b28f;
    border-bottom-left-radius: 0.05rem;
    border-bottom-right-radius: 0.05rem;
}
.xin-main{
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.xin-main_{
	width: 49%;
	height: 2.525rem;
	box-sizing: border-box;
	position: relative;
	text-align: center;
	background-color: #fff;
	margin-bottom: 0.04rem;
}
.xin-main_>a{
	background-color: #fff;
	display: block;
	width: 1.575rem;
	height: 2.525rem;
	box-sizing: border-box;
	position: relative;
	text-align: center;
	margin: 0 auto;

}
.xin-main_>a>img{
	margin-top: 0.24rem;
	width: 1.29rem;
	height: 1.29rem;
}
.pro-title{
	width: 100%;
	font-size:0.12rem;
	color: #3a3935;
}
.pro-fintech{
	width: 100%;
	height: 0.21rem;
	line-height: 0.21rem;
	font-size: 0.11rem;
	color: #3a3935;
	margin-top: 0.1rem;
	border-bottom: 1px solid #a8a8a6;
    /*font-family: "number";*/
}
.yen{
	font-size: 0.12rem; 
}
.yen+span{
	font-weight: bold;
}
.pro-price{
	width: 100%;
	height: 0.24rem;
	line-height: 0.24rem;
	/*margin-top: 0.10rem;*/
}
.new{
	float: left;
	display: block;
	width: 0.89rem;
	height: 0.24rem;
	font-size: 0.12rem;
	color: #bd1200;
}
.new>strong{
	font-size: 0.14rem;
}
.old{
	width: 0.5rem;
	height: 0.24rem;
	font-size: 0.12rem;
	text-decoration: line-through;
    color: #7a7a7a;
    display: block;
    float: right;
}
/*.pro-price>span{
	margin-top: 0.10rem;
}*/
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