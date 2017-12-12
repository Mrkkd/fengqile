<template>
	<div>
		<!-- 头部标题 -->
		<div class="first-top">
			乐卡
		</div>
		<!-- //可用额度以及待还账单 -->
		<div class="week">
			<div class="limit">
				<div class="limit_a">
					<span>可用额度</span>
					<span>提额</span>
					<span>￥</span>
					<p>10,681.47</p>
				</div>
				<div class="limit_b">
					<span>8073 2918</span>
					<span></span>
				</div>
			</div>
			<div class="limit-2">
				<div class="limit-2-a">
					<span><i style="font-style: normal">11</i>月待还账单</span>
					<span>￥<i style="font-style: normal">0</i></span>
				</div>
				<div class="limit-2-b">
					<p>每月20日前还款</p>
					<div class="limit-2-b-p"></div>
				</div>
			</div>
		</div> 
		<div class="serve">
			乐卡服务
		</div>
		<div class="service-content">
			<div class="service-content-pic">
				<div class="service-content-pic_a">
					<div class="weex">
						<figure class="weex-p" style="background:url(./src/assets/y-img/content1-1.png);background-size: 100% 100%;"></figure>
						<p style="font-size: .12rem;color: rgb(37, 50, 78)">取现</p>
					</div>
					<div class="center">
						<p class="p1">￥100-￥20,000</p>
						<p class="p2">100元起借 到账快</p>
					</div>
					<p class="p3">去借款</p>
					<figure class="week-el">
					</figure>
				</div>
				<div class="service-content-pic_a">
					<div class="weex">
						<figure class="weex-p" style="background:url(./src/assets/y-img/content1-2.png);background-size: 100% 100%;"></figure>
						<p style="font-size: .12rem;color: rgb(37, 50, 78)">乐花借款</p>
					</div>
					<div class="center">
						<p class="p1">￥100-￥20,000</p>
						<p class="p2">100元起借 到账快</p>
					</div>
					<p class="p3">去借款</p>
					<figure class="week-el">
					</figure>
				</div>
				<div class="service-content-pic_a">
					<div class="weex">
						<figure class="weex-p" style="background:url(./src/assets/y-img/content1-3.png);background-size: 100% 100%;"></figure>
						<p style="font-size: .12rem;color: rgb(37, 50, 78)">乐还款</p>
					</div>
					<div class="center">
						<p class="p1">￥100-￥20,000</p>
						<p class="p2">100元起借 到账快</p>
					</div>
					<p class="p3">去还款</p>
					<figure class="week-el">
					</figure>
				</div>
			</div>
			<div class="service-content-acd">为您推荐借的到服务，最高10万额度</div>

		</div>
		<div class="service-content2">
			<span>乐卡特权</span>
			<ul>
				<li>
					<i></i>
					<p>购物特权</p>
				</li>
				<li>
					<i></i>
					<p>租车特权</p>
				</li>
				<li>
					<i></i>
					<p>高铁特权</p>
				</li>
				<li>
					<i></i>
					<p>酒店特权</p>
				</li>
			</ul>
		</div>
		<div class="service-content3"></div>
		<div class="service-content4">乐卡·您的分期消费卡</div>
		<div class="service-content5"></div>

	</div>
</template>
	
<script>
	export default {
		name:'Lehua'		
	}
</script>

<style scoped>
.first-top{
	width: 100%;
	height: .44rem;
	line-height: .44rem;
	font-size: .17rem;
	display: flex;
	justify-content: center;
	font-weight: normal;
	color: #394050;;
}
.week{
	width: 100%;
	margin-bottom: .08rem;
	justify-content: flex-end;
	position: relative;
}
.week .limit{
	/*width: 3.51rem;*/
	height: 1.72rem;
	background-image:url(../assets/y-img/itim-bg.png); 
	background-size: 100% 100%;
	margin: 0 auto;
	box-sizing: border-box;
	margin-top: .05rem;
}
.limit .limit_a{
	width: 100%;
	height: .825rem;
	border-top-left-radius: .11rem;
	border-top-right-radius: .11rem;
	position: relative;
}
.limit .limit_a span:nth-of-type(1){
	display: inline-block;
	font-size: .13rem;
	position: absolute;
	top: 0;
	margin-top: .18rem;
	margin-left: .2rem;
	color: rgb(255, 255, 255);
}
.limit .limit_a span:nth-of-type(2){
	display: inline-block;
	font-size: .13rem;
	position: absolute;
	right: .2rem;
	top: 0;
	margin-top: .18rem;
	margin-left: .13rem;
	color: rgb(255, 255, 255);
}
.limit .limit_a span:nth-of-type(3){
	display: inline-block;
	font-size: .13rem;
	position: absolute;	
	left: .05rem;
	top: .22rem;
	margin-top: .18rem;
	margin-left: .13rem;
	color: rgb(255, 255, 255);
}
.limit .limit_a p{
	display: inline-block;
	position: absolute;
	font-size: .35rem;
	color: rgb(255, 255, 255);
	top: .4rem;
	left: .33rem;
	text-align: left;
	line-height: .34rem;
	font-family: iconfont3;
	font-weight: bold;
}
.limit .limit_b{
	width: 100%;	
	height: .895rem;
	position: relative;
}
.limit .limit_b span:nth-of-type(1){
	display: inline-block;
	margin:0;
	padding: 0;
	font-weight: bolder;
	font-family: iconfont2;
	color: rgb(255,255,255);
	font-size: .18rem;
	position: absolute;
	top: .2rem;
	left: .19rem;
	-webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
}
.limit .limit_b span:nth-of-type(2){
	display: inline-block;
	height: .36rem;
	position: absolute;
	background: url(../assets/y-img/lekaVIP.jpg);
	background-size: 100% 100%;
	top: .4rem;
	left: .18rem;
	right: .2rem;
}
.week .limit-2{
	width: 100%;
	height: .88rem;
	padding-left: .22rem;
	padding-right: .16rem;
	box-sizing: border-box;
	background-color: rgb(255, 255, 255);
	position: relative;
}
.limit-2 .limit-2-a{
	width: .78rem;
	height: .46rem;
	position: absolute;
	top: .21rem;
	font-size: .12rem;
}
.limit-2 .limit-2-a span:nth-of-type(1){
	color: rgb(127, 133, 148);
}

.limit-2 .limit-2-a span:nth-of-type(2){
	position: absolute;
	bottom: 0;
	left: 0;
    color: rgb(37, 50, 78);
    font-size: .2rem;
}
.limit-2 .limit-2-b{
	width: 2.36rem;
	height: .45rem;
	position: absolute;
	top: .21rem;
	right: .16rem;
	font-size: .12rem;
	text-align: right;
	line-height: .45rem;
	color: rgb(127, 133, 148);
}
.limit-2 .limit-2-b p{
	margin-right: .1rem;
}
.serve{
	width: 100%;
	height: .38rem;
	box-sizing: border-box;
	padding-left:.16rem;
	padding-top: .11rem;
	padding-bottom: .11rem;
	background-color:rgb(255, 255, 255);
	color: rgb(117,124,142);  
	border-bottom-color: rgb(245,247,246);
	font-size: .13rem;

}
.service-content{
	width: 100%;
	height: 3.48rem;
	overflow: scroll;
	margin-bottom: .08rem;
	background-color:rgb(255, 255, 255);
}
.service-content .service-content-pic{
	width: 100%;
	height: 3rem;
}
.service-content .service-content-pic_a,.service-content-pic_b,.service-content-pic_c{
	font-size: .13rem;
	position: relative;
	color: rgb(127, 133, 148);
	padding:  0 .16rem;
	height: 1rem;
	display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(245, 247, 246);
    box-sizing: border-box;
}

.service-content .weex{
	width: .7rem;
	height: .45rem;
	margin-right:.3rem;
	text-align: center;
}
.service-content .weex .weex-p{
	width: .255rem;
	height: .255rem;
	margin:0 auto;
}
.center{
	width:1.3rem;
}
.center .p1{
	 margin-bottom: 5.12px;
    font-size: 13.6533px;
    font-weight: 500;
    color: rgb(37, 50, 78);
}
.center .p2{
    color: rgb(127, 133, 148);
    font-size: 11.0933px;
}

.service-content-pic .p3{
    width: 51.2px;
    height: 29.0133px;
    margin-top: 4.26667px;
    line-height: 29.0133px;
    text-align: center;
    border-width: 0.5px;
    border-style: solid;
    border-color: rgb(232, 234, 238);
    border-radius: 3.41333px;
    font-size: 11.0933px;
    color: rgb(59, 155, 255);
    background-color: rgb(255, 255, 255);

}

.service-content .week-el{
	width: 1rem;
	height: 1rem;
	position: absolute;
	top: 0;
	right: 0;
	background:url(../assets/y-img/figurebg.png);
	background-size: 100% 100%;
}
.service-content-pic_a .p3{
	margin-left:.6rem;
}
.service-content .service-content-acd{
	font-size: .13rem;
	color: rgb(127, 133, 148);
	height: .48rem;

	padding:  0 .16rem;
	text-align: left;
	line-height: .48rem;
}
.service-content2{
	width: 100%;
	height: 2.38rem;
	/*background-color: black;*/
	margin-bottom: .08rem;
	background-color: rgb(255,255,255);
}
.service-content2 span{
	display: inline-block;
	width: 100%;
	height: .38rem;
	padding-left: .16rem;
	padding-top: .11rem;
	padding-bottom: .11rem;
	border-bottom: .01rem solid rgb(245,247,246);
	box-sizing: border-box;
	font-size: .13rem;
	color: rgb(117,124,142);
	background-color: rgb(255,255,255);
	display: flex;
}
.service-content2 ul{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.service-content2 li{
	width: 33.33%;
	
	height: 1rem;
	display: inline-block;
	text-align: center;
	
}
.service-content2 li i{
	display: inline-block;
	margin-top: .18rem;
	width: .36rem;
	height: .36rem;	
}
.service-content2 li:nth-of-type(1) i{
	background: url(../assets/y-img/content2-1.png) no-repeat;
	background-size: 100% 100%;
}
.service-content2 li:nth-of-type(2) i{
	background: url(../assets/y-img/content2-2.png) no-repeat;
	background-size: 100% 100%;
}
.service-content2 li:nth-of-type(3) i{
	background: url(../assets/y-img/content2-3.png) no-repeat;
	background-size: 100% 100%;
}
.service-content2 li:nth-of-type(4) i{
	background: url(../assets/y-img/content2-4.png) no-repeat;
	background-size: 100% 100%;
}
.service-content2 li p{
	font-size: .12rem;

}
.service-content3{	
	height: 1.16rem;	
	margin:0 .1rem;
	margin-bottom: .08rem;
	background:url(../assets/y-img/content4.png);
	background-size: 100% 100%;
	
}
.service-content4{
	width: 100%;
	height: .14rem;
	margin-bottom: .12rem;
	margin-top: .16rem;
	font-size: .12rem;
	color: rgb(185,189,198);
	text-align: center;
}
.service-content5{
	width: 100%;
	height: .5rem;
	background-color: #f5f7f6;
}
</style>