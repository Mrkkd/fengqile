<template>
	<div id="Mine">	
		
		<!-- 头部导航 -->	
		<div class="y-header">
			<div class="y-header-right">
				<a>设置</a>
				<a class="email"></a>
			</div>
		</div>
		<div class="baiban"></div>
		<!-- 用户信息 -->
		<div class="user-content">
			<div class="user-weed-1">
				<div class="fixs">
					<router-link to="/denglu">
						<img src="../assets/ybx-img/user-fix.png">
						<span style="font-size: .14rem">立即登录</span>
					</router-link>
					<a href="">
						<i></i>
						<span style="margin-right: .19rem">查看乐卡额度</span>
						<p></p>
					</a>
				</div>
			</div>
			<div class="user-weed-2">
				<ul style="font-size: .14rem">
					<li style="border-right: 1px solid rgba(255,255,255,.4)">
						<a href="#">
							<span>0</span>
							<p>优惠券</p>
						</a>
					</li>
					<li style="border-right: 1px solid rgba(255,255,255,.4)">
						<a href="#">
							<span>0</span>
							<p>免息额度</p>
						</a>
					</li>
					<li>
						<a href="#">
							<span>0</span>
							<p>收藏</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- 本月账单 -->
		<div class="my-item">
			<div class="my-item-app">
				<i></i>
				<strong style="font-weight: normal;">本月账单</strong>
				<span>全部</span>
				<p></p>
			</div>
		</div>
		<!-- 我的订单 -->
		<div class="my-indent">
			<div class="my-item-app">
				<i></i>
				<strong style="font-weight: normal;">我的订单</strong>
				<span>全部</span>
				<p></p>
			</div>
			<div class="my-item-add">
				<ul>
					<li>
						<i style="background: url(./src/assets/ybx-img/my-jingling.png) no-repeat;background-position: 0 -.56rem;background-size: .2rem auto"></i>
						<p>待付款</p>
					</li>
					<li>
						<i style="background: url(./src/assets/ybx-img/my-jingling.png) no-repeat;background-size: .2rem auto"></i>
						<p>待审核</p>
					</li>
					<li>
						<i style="background: url(./src/assets/ybx-img/my-jingling.png) no-repeat;background-position: 0 -.18rem;background-size: .2rem auto"></i>
						<p>待收货</p>
					</li>
					<li>
						<i style="background: url(./src/assets/ybx-img/my-jingling.png) no-repeat;background-position: 0 -.36rem;background-size: .2rem auto"></i>
						<p>待评价</p>
					</li>
				</ul>
			</div>
		</div>
		<!-- 菜单 -->
		<div class="my-menu">
			<ul>
				<li>
					<div class="menu">
						<i style="background: url(./src/assets/ybx-img/menu-i1.png) no-repeat;background-size: 100% 100%;"></i>
						<strong style="font-weight: normal;">我的购物车</strong>
						<p></p>
					</div>	
				</li>
				<li>
					<div class="menu">
						<i style="background: url(./src/assets/ybx-img/menu-i2.png) no-repeat;background-size: 100% 100%;"></i>
						<strong style="font-weight: normal;">邀好友得返现</strong>
						<span class="menu-span">瓜分200万现金</span>
						<p></p>
					</div>	
				</li>
				<li>
					<div class="menu">
						<i style="background: url(./src/assets/ybx-img/menu-i3.png) no-repeat;background-size: 100% 100%;"></i>
						<strong style="font-weight: normal;">我的银行卡</strong>
						
						<p></p>
					</div>	
				</li>
				<li>
					<div class="menu">
						<i style="background: url(./src/assets/ybx-img/menu-i4.png) no-repeat;background-size: 100% 100%;"></i>
						<strong style="font-weight: normal;">我的预约</strong>
						
						<p></p>
					</div>	
				</li>
				<li>
					<div class="menu">
						<i style="background: url(./src/assets/ybx-img/menu-i5.png) no-repeat;background-size: 100% 100%;"></i>
						<strong style="font-weight: normal;">安全中心</strong>
						
						<p></p>
					</div>	
				</li>
				<li>
					<div class="menu">
						<i style="background: url(./src/assets/ybx-img/menu-i6.png) no-repeat;background-size: 100% 100%;"></i>
						<strong style="font-weight: normal;">客服支持</strong>
						
						<p></p>
					</div>	
				</li>
			</ul>
		</div>
		<!-- 广告位 -->
		<div class="advertising">
			<h3 style="width: 100%;height: .2639rem"></h3>
			<div class="advertising-content"></div>
			<div class="advertising-buttom">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				

			</div>
		</div>
		<!-- 底部空白 -->
		<div class="bottom-kongbai"></div>
		
	</div>
</template>
	
<script>
	export default {
		name:'Mine'	
	}
</script>

<style scoped>
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
.y-header{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: .588rem;
	box-sizing: border-box;
	background:url(../assets/ybx-img/top_hd.png) no-repeat;
	background-size: 100% 100%;
	z-index: 999;
}
.y-header-right{
	width: 1.04rem;
	height: .44rem;
	position: absolute;
	right: 0;
	top: 0;
	
	padding: .115rem .1rem;
	box-sizing: border-box;
}
.y-header-right .email{
	display: inline-block;
	width: .22rem;
	height: .16rem;
	background:url(../assets/ybx-img/top_jingling.png) no-repeat;
	background-position: 0 0;
	background-size: 1rem 1rem;
	position: absolute;
	top: .15rem;
	left: 0.57rem;
	box-sizing: border-box;
}
/*头部空白部分*/
.baiban{
	width: 100%;
	height: .588rem;
	background: #fff;
}
/*用户信息*/
.user-content{
	width: 100%;
	height: 1.6659rem;
	
	margin-bottom: .18rem;
	background:url(../assets/ybx-img/top_hd.png) no-repeat;
	background-size: 100% 100%;
}
.user-content .user-weed-1{
	box-sizing: border-box;
	height: 1.2rem;
	padding: .24rem .18rem .48rem .18rem;
}
.user-weed-1 .fixs{
	height: .48rem;
	position: relative;	
}


.user-weed-1 .fixs a:first-of-type{
	position: relative;
	display: inline-block;
	line-height: .48rem;
	width: 1.2rem;
	height: .48rem;
}
.user-weed-1 .fixs a span{
	position: absolute;
	top: 0;
	right: 0;
}
.user-weed-1 .fixs a img{
	width: .48rem;
	height: .48rem;
}
.user-weed-1 .fixs a:last-of-type{
	position: relative;
	display: inline-block;
	line-height: .48rem;
	font-size: .14rem;
	height: .48rem;
	position: absolute;
	width: 1.18rem;
	top: 0;
	right:0;
}
.user-weed-1 .fixs a i{
	display: inline-block;
	width: .13rem;
	height: .15rem;
	background:url(../assets/ybx-img/top_jingling.png) no-repeat;
	background-position: 0 -.85rem;
	background-size: 1rem 1rem;
	vertical-align: text-bottom;
}

.user-weed-1 .fixs a p{
	display: inline-block;
	width: .1rem;
	height: .1rem;
	border-top: 1px solid #b9b9b9;
	border-right: 1px solid #b9b9b9;
	transform: rotate(45deg);
	position: absolute;
	right: 0;
	top: .19rem;
}
.user-content .user-weed-2{
	width: 100%;
	height: .4659rem;
	background: rgba(255,255,255,.2);
}
.user-weed-2 li{
	float: left;
	height: .37rem;
	margin: .048rem 0;
	width: 33.33%;
	line-height:.16rem;
}
.user-weed-2 ul{
	display: flex;
	text-align: center;
}
.user-weed-2 ul span{
	font-size: .16rem;
	color: #fff;
}
.user-weed-2 ul p{
	color: #fff;
}
.user-weed-2 ul li a{
	text-align: center;
	display: inline-block;
}
/*本月账单*/
.my-item{
	width: 100%;
	height: .6rem;
	background:#fff;
	margin-bottom: .2rem;
	
}
.my-item-app{
	height: .6rem;
	padding: 0 .18rem;
	box-sizing: border-box;
	display: flex;
	line-height: .6rem;
	position: relative;
	background: #fff;
	border-top: 1px solid #dfdfdf;
}
.my-item-app i{
	background: url(../assets/ybx-img/my-item.png) no-repeat;
	background-size: 100% 100%;
	width: .24rem;
	height: .24rem;
	display: inline-block;
	margin-right: .12rem;
    margin-top: .18rem;
}
.my-item-app span{
	display: inline-block;
	width: .28rem;
	height: .6rem;
	font-size: .14rem;
	position: absolute;
	right: .34rem;
	color: #b9b9b9;
}
.my-item-app p{
	display: inline-block;
	width: .1rem;
	height: .1rem;
	border-top: 1px solid #b9b9b9;
	border-right: 1px solid #b9b9b9;
	transform: rotate(45deg);
	position: absolute;
	right: .18rem;
	top: .24rem;

}
/*我的订单*/
.my-indent{
	width: 100%;
	height: 1.34rem;
	margin-bottom: .2rem;
}
.my-indent .my-item-add{
	display: flex;
	background: #fff;
	flex-wrap: wrap;
	border-top: 1px solid #dfdfdf;
}
.my-indent .my-item-add ul{
	display: flex;
    justify-content: space-between;
    width: 100%;
}
.my-indent .my-item-add li{
	width: .8rem;
	float: left;
	height: .74rem;
	text-align: center;
	color: #929292;
    font-size: .14rem;
    padding: .18rem 0;
    box-sizing: border-box;
    justify-content: center;
}
.my-indent .my-item-add li i{
	display: inline-block;
	width: .2rem;
	height: .18rem;
}
/*菜单*/
.my-menu{
	width: 100%;
	height: 3.6rem;
	background:yellow;
}
.my-menu .menu{
	height: .6rem;
	padding: 0 .18rem;
	box-sizing: border-box;
	display: flex;
	line-height: .6rem;
	position: relative;
	background: #fff;
	border-top: 1px solid #dfdfdf;
}
.my-menu .menu i{
	
	width: .24rem;
	height: .24rem;
	display: inline-block;
	margin-right: .12rem;
    margin-top: .18rem;
}
.my-menu .menu-span{
	display: inline-block;
	height: .6rem;
	font-size: .14rem;
	position: absolute;
	right: .34rem;
	color: #b9b9b9;
}
.my-menu .menu p{
	display: inline-block;
	width: .1rem;
	height: .1rem;
	border-top: 1px solid #b9b9b9;
	border-right: 1px solid #b9b9b9;
	transform: rotate(45deg);
	position: absolute;
	right: .18rem;
	top: .24rem;
}


广告位
.advertising{
	width: 100%;
	height: 2.209rem;
	background:gray;
	margin:.18rem 0;
}
.advertising-content{
	width: 100%;
	height: 1.68rem;
	
}
.advertising-buttom{
	width: 100%;
	height: .2659rem;
	padding-bottom: .096rem;
	background: #fff;
	box-sizing: border-box;
	text-align: center;
}
.advertising-buttom span{
	height: .0239rem;
	width: .24rem;
	margin: 0 .036rem;
	background: #dfdfdf;
	display: inline-block;
}
/*底部空白*/
.bottom-kongbai{
	width: 100%;
	height: .5rem;
	background:#fff;
}
</style>