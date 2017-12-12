<template>
		<div>

			<header>
              <div class="search">
                <div class="dian">
                  抢iPhone 612元神券  
                </div>
              </div>
              <div class="news_icon">
                <img src="../assets/imgs/news_icon.png">
              </div>
          	</header>
			<div class="cancel">
				<router-link to="/xinrenli">
					<img src="../assets/imgs/q.png">
					<p>新人礼品</p>
				</router-link>
				<a>
					<img src="../assets/imgs/q.png">
					<p>取现</p>
				</a>
				<router-link to="/lehuajie">
					<img src="../assets/imgs/w.png">
					<p>乐花借款</p>
				</router-link>
				<a href="#">
					<img src="../assets/imgs/e.png">
					<p>乐还款</p>
				</a>
				<a href="#">
					<img src="../assets/imgs/r.png">
					<p>充值中心</p>
				</a>
			</div>
			<div class="banner">
				<img src="../assets/imgs/banner.jpg">
			</div>
			<div class="list">
						<a href="#">
							<img src="../assets/imgs/san.jpg">
						</a>
						<a href="#">
							<img src="../assets/imgs/he.jpg">
						</a>
						<a href="#">
							<img src="../assets/imgs/yi.jpg">
						</a>
						<a href="#">
							<img src="../assets/imgs/t1.jpg">
						</a>	
						<a href="#">
							<img src="../assets/imgs/t2.jpg">
						</a>
						<a href="#">
							<img src="../assets/imgs/t3.jpg">
						</a>
						<a href="#">
							<img src="../assets/imgs/t4.jpg">
						</a>	
						<a href="#">
							<img src="../assets/imgs/t5.jpg">
						</a>			
						<a href="#">
							<img src="../assets/imgs/t6.jpg">
						</a>	
						<a href="#">
							<img src="../assets/imgs/t7.jpg">
						</a>	
						<a href="#">
							<img src="../assets/imgs/t8.jpg">
						</a>	
						<a href="#">
							<img src="../assets/imgs/t9.jpg">
						</a>	
				</div>
				<div class="ban">
				<router-link to="/hp"></router-link>
					<div class="ban1">
							<div class="swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide"><img src="../assets/imgs/banner1.jpg"></div>
								</div>
							<div class="swiper-pagination"></div>
							</div>
					</div>
				</div>
				<div class="dbo">
					<a href="#">
						<img src="../assets/imgs/dbo1.png">
					</a>
					<a href="#">
						<img src="../assets/imgs/dbo2.png">
					</a>
					<a href="#">
						<img src="../assets/imgs/dbo3.png">
					</a>
					<a href="#">
						<img src="../assets/imgs/dbo4.png">
					</a>
				</div>
				<div class="crazy">
					<div class="hapy">
						<a href="#">
							<p>乐疯抢</p>
							<div>
								<span class="time-sec">
									01
								</span>
								<span class="time-min">
									01
								</span>
								<span class="time-hover">
								14
								</span>
								<span class="time">距结束还有
								</span>
							</div>
						</a>
					</div>
				<router-link to="/hp">
					<div class="crazy_">
                      	    <a href="#" v-for="item in limit_list">
								<div class="crazySon">
									 <img v-bind:src="item.fe_sku_pic">
								</div>
								 <h3>{{item.product_name}}</h3>
								<div class="month-price">月供&nbsp;¥{{item.mon_pay}}起</div>
								<div class="price-detail">
				                    <span class="now-price">¥{{item.real_amount}}</span>
				                    <span class="org-price">¥{{item.amount}}</span>
				                </div>
				                <div class="num-wrap">
				                    <span class="num-detail">仅剩{{item.sku_num}}件</span>
				                    <div class="num-pink">
					                    <div class="num-mask" style="width: 84%;"></div>
					                </div>
				                </div> 
							</a>
				 	</div> 
				</router-link>
				 	<!-- jjjj -->
				<div class="all">
						<a href="#" class="more" style="border-top: 1px solid #e5e8ed ">
							查看更多
						</a>
						<div class="title-wrap">
					        品牌特卖
					    </div>
				    <router-link to="/pinpai2" class="allProduct">
					    <div class="fan">
					    	<img src="../assets/imgs/v.jpg">
					    </div>
					    <div class="end_time">
					    	<div class="active-title">卡西罗品牌特卖</div>
					    	<div class="active-time">
					            距离结束还剩
								<span role="timer" data-type="day">4</span>
								天

					           倒计时静态展示  
					        </div>
					    	<div class="active-disc">爆款满299减100</div>
					    </div>
					</router-link> 
				    
				   <a href="#" class="allProduct">
					    <div class="fan">
					    	<img src="../assets/imgs/fan1.jpg">
					    </div>
					    <div class="end_time">
					    	<div class="active-title">天梭品牌11.11品牌特卖</div>
					    	<div class="active-time">
					            距离结束还剩
								<span role="timer" data-type="day">1</span>
								天 
					        </div>
					        <div class="active-disc">最高12期免息优惠券满减300元</div>
					    </div> 
				    </a>
				    
				    <router-link to="/pinpai1" class="allProduct">
					    <div class="fan">
					    	<img src="../assets/imgs/fan2.jpg">
					    </div>
					    <div class="end_time">
					    	<div class="active-title">Lilbetter潮牌焕新季</div>
					    	<div class="active-time">
					            距离结束还剩
								<span role="timer" data-type="day">1</span>
								天

					            <!-- 倒计时静态展示 --> 
					        </div>
					        <div class="active-disc">满399减80；499元减150</div>
					    </div> 
				    </router-link>
				   <a href="#" class="allProduct">
					    <div class="fan">
					    	<img src="../assets/imgs/fan3.jpg">
					    </div>
					    <div class="end_time">
					    	<div class="active-title">11.11小米火力全开</div>
					    	<div class="active-time">
					            距离结束还剩
								<span role="timer" data-type="day">3</span>
								天
					        </div>
					        <div class="active-disc">领券立减特卖专享！</div>
					    </div> 
				    </a>
				    <a href="#" class="allProduct">
					    <div class="fan">
					    	<img src="../assets/imgs/fan4.jpg">
					    </div>
					    <div class="end_time">
					    	<div class="active-title">三星双11特卖</div>
					    	<div class="active-time">
					            距离结束还剩
								<span role="timer" data-type="day">3</span>
								天
					        </div>
					        <div class="active-disc">领券立减特卖专享！</div>
					    </div> 
				    </a>
				    <a href="#" class="allProduct" style="padding-bottom:0px">
					    <div class="fan">
					    	<img src="../assets/imgs/fan5.jpg">
					    </div>
					    <div class="end_time">
					    	<div class="active-title">魔声品牌特卖</div>
					    	<div class="active-time">
					            距离结束还剩
								<span role="timer" data-type="day">3</span>
								天
					        </div>
					        <div class="active-disc">全场5.5折起 最高直降600</div>
					    </div> 
				    </a>
				    <a href="#" class="more">
						查看更多
					</a>
			    </div>   
			    <div class="gift">
			    	<div class="title-wrap">
				       送个好礼物
				    </div>
				    <div class="gift_list">
				    	<a href="#">
				    		<img src="../assets/imgs/gif1.jpg">
				    	</a>
				    	<a href="#">
				    		<img src="../assets/imgs/gif2.jpg">
				    	</a>
				    	<a href="#">
				    		<img src="../assets/imgs/gif3.jpg">
				    	</a>
				    	<a href="#">
				    		<img src="../assets/imgs/gif4.jpg">
				    	</a>
				    </div>
				    <div class="gift-title-wrap">
						<p class="gift-title">京东e卡</p>
						<p class="gift-tips">e卡在手，天下我有</p>
					</div>
			    </div> 
			    <div class="jd">
			    	<img src="../assets/imgs/jd.jpg">
			    </div> 
			   <div class="gift-title-wrap">
			        <p class="gift-title">NICI拉尔夫兔子公仔 易烊千玺同款</p>
			        <p class="gift-tips">萌萌公仔，融化萌妹纸的心</p>
			    </div>
			     <div class="jd1">
			    	<img src="../assets/imgs/tuzi.jpg">
			    </div> 
			    <a href="#" class="more">
						查看更多
				</a>
				<div class="go">
			    	<div class="title-wrap">
				       逛一逛
				    </div>
				    <div class="go_list">
				    	<a href="#">
				    		<img src="../assets/imgs/go1.png">
				    	</a>
				    	<a href="#">
				    		<img src="../assets/imgs/go2.png">
				    	</a>
				    	<a href="#">
				    		<img src="../assets/imgs/go3.png">
				    	</a>
				    	<a href="#">
				    		<img src="../assets/imgs/go4.png">
				    	</a>
				    	<a href="#">
				    		<img src="../assets/imgs/go5.png">
				    	</a>
				    	<a href="#">
				    		<img src="../assets/imgs/go6.png">
				    	</a>
				    	<a href="#">
				    		<img src="../assets/imgs/go7.png">
				    	</a>
				    	<a href="#">
				    		<img src="../assets/imgs/go8.png">
				    	</a>
				    </div>
			    </div> 
			    <div class="foryou">
			    	<div class="foryou_">
				       为你推荐
				    </div>
				  	<div class="for_pro" >
	                        <a :href="item.url" v-for="item in  result_rows">
					    		<div class="for_pro_" >
						    		<img :src="item.fe_sku_pic">
						    	</div>
						    		<h3>{{item.product_info}}</h3>
						    		<p class="price_">月供 ¥{{item.mon_pay}}</p>
						    		<div class="price_detail">
					                <span class="now_price">¥{{item.amount}}</span>
			                	</div>
					    	</a>
						</div>
			   		 </div>
					</div>		   
					</div>   



	</div>
</template>

<script>
	export default{
		 data(){
                return {
                    limit_list:{},
                    result_rows:{}
                }
            },
            created(){
                var _t = this
              this.$http.get("../../static/hp.json",{
                    params:{ }
                }).then(function(res){
                    _t.limit_list=res.data.limit_list
                }),
                this.$http.get("../../static/for.json",{
                    params:{ }
                }).then(function(res){
                   _t.result_rows=res.data.result_rows
                })
            }
	}
</script>

<style scoped>
/*头部导航*/
header{
  width: 100%;
  height: 0.45rem;
  box-sizing: border-box;
  background-color: red;
  position:fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(160,160,160,.09);
  z-index: 1001;
}
.search{
  height: 0.32rem;
  position: absolute;
  top: 0.065rem;
  left: 0.11rem;
  right: 0.47rem;
  border-radius:0.04rem;
  background: url("../assets/imgs/search.png") rgba(0,0,0,.05) no-repeat 0.1rem center;
  background-size:0.16rem;
}
.dian{
	font-size: .13rem;
    margin-left: .6rem;
    margin-top: .07rem;
    color: gray;
}
.news_icon{
  width:0.25rem;
  height: 0.25rem;
  position: absolute;
  right: 0.11rem;
  top: 0.09rem;
}
.news_icon>img{
  width:0.25rem;
  height: 0.25rem;
}





.cancel{
	margin-top: 0.45rem;
	width: 100%;
	height:0.92rem;
	background: url("../assets/imgs/cancal.jpg") no-repeat;
	background-size: cover;
	display: flex;
}
.cancel>a{
	text-align: center;
	display: block;
	width: 20%;
	height:0.92rem;
}
.cancel>a>img{
	margin-top: 0.13rem;
	width: 0.48rem;
	height: 0.48rem;
}
.cancel>a>p{
	width: 100%;
	font-size: 0.12rem;
	height: 0.14rem;
    line-height: 0.14rem;
	color: rgb(226, 213, 255);
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.banner{
	width: 100%;
	height: 2.6rem;
}
.banner>img{
	width: 100%;
	height: 2.6rem; 
}
.list{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.list a{
	display: block;
	width: 1.2498rem;
	height: 1.1998rem;
}
.list>a>img{
	width: 1.2498rem;
	height: 1.1998rem;
}
.ban{
	width: 100%;
	box-sizing: border-box;
	height: 1.8634rem;
	padding: 0.2rem 0;
}
.ban1{
	margin:0 auto;
	width: 100%;
	height: 1.4634rem;
} 
.ban img{
	width: 100%;
	height: 1.4634rem;
}
.dbo{
	background-color: #fff;
	font-size: 0;
	width: 100%;
	height: 1.76rem;
}
.dbo a{
	margin-left: 0.10rem;
    margin-top: 0.11rem;
	display: inline-block;
	width: 1.72rem;
	height: 0.72rem;
}
.dbo a>img{
	width: 1.72rem;
	height: 0.72rem;
}
.crazy{
	width: 100%;
	margin-top: 0.08rem;

}
.hapy{
	width: 100%;
	height: 0.72rem;
	background-color: #fff;
	position: relative;
}
.hapy a{
	display: block;
	position: absolute;
	left: 0.16rem;
	right: 0.16rem;
	top:0.25rem;
	height: 0.21rem;
	
}
.hapy>a p{
	float: left;
	width:1.86rem;
	height:0.22rem; 
	font-size: 0.16rem;
    color: #25324e;

}
.hapy>a>div{
	float: right;
	width: 1.57rem;
	height: 0.22rem;
	
}
.time{
	margin-right:0.02rem;
	float: right;
	display: inline-block;
	width: 0.65rem;
	height: 0.22rem;
	font-size:0.13rem;
    color: #979dab;
    line-height:0.22rem;
}
.time-hover,.time-min,.time-sec{
	float: right;
	width: 0.22rem;
	margin-left: 0.05rem;
    height: 0.20rem;
    background: #3c3f56;
    border-radius:0.02rem;
    color: #fff;
    font-size: 0.14rem;
    font-weight: bold;
    text-align: center;
}
.crazy_{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.crazy_ a{
	display: block;
	margin-top: 0.01rem;
	width: 49.8%;
	height: 2.93rem;
	box-sizing: border-box;
	padding: 0 0.12rem;
	background-color: #fff;
}
.crazy_ a>.crazySon{
	width: 1.635rem;
	height: 1.84rem;
	padding: 0.26rem 0;
	text-align: center;
	box-sizing: border-box;
}
.crazySon>img{

	width: 1.32rem;
	height: 1.32rem;
}
.crazy_ a>h3{
	width: 100%;
    font-size: 0.14rem;
    color: #25324e;
    line-height: 0.16rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.month-price{
	margin-top: 0.04rem;
    font-size: 0.13rem;
    color: #757c8e;
    line-height: 0.15rem;
}
.price-detail{
	margin-bottom: 0.12rem;
    margin-top: 0.08rem;
    font-size: 0;
}
.now-price{
	display: inline-block;
	font-size: 0.16rem;
    color: #fe4979;
    line-height: 0.18rem;
    margin-right: 0.08rem;
}
.org-price{
	display: inline-block;
	font-size: 0.13rem;
    color: #b9bdc6;
    line-height: 0.15rem;
    text-decoration: line-through;
}
.num-wrap{
	width: 100%;
	margin-bottom: 0.24rem;
    height: 0.12rem;
    position: relative;
}
.num-detail{
	display: block;
    font-size: 0.09rem;
    color: #b9bdc6;
    line-height: 0.12rem;
    margin-right: 0.04rem;
    width:0.6rem;
}
.num-pink{
	width: 64.41%;
    background: #fff3f6;
    /*background-color: red;*/
    height: 0.04rem;
    border-radius: 0.45rem;
    position:absolute;
    bottom: 0.03rem;
    right: -0.02rem;
    overflow: hidden;
}
.num-mask{
	position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    border-radius: 0.45rem;
    background-image: linear-gradient(-270deg,#fe82a4 0,#fe4979 100%);
}
.more{
	display: block;
	width: 100%;
	height: 0.67rem;
	text-align: center;
	line-height: 0.6rem;
	font-size: 0.14rem;
    color: #3b9bff;
    background-color: #fff;
}
.all{
	width: 100%;
}
.title-wrap {
	box-sizing: border-box;
	margin-top: 0.08rem;
    padding: 0 0.16rem;
    height: 0.72rem;
    background: #fff;
    font-size: 0.12rem;
    line-height: 0.72rem;
}
.allProduct{
	display: block;
	width: 100%;
	padding-bottom: 0.24rem;
	background-color: #fff;
}
.fan{
	width: 100%;
	height: 1.6rem;
}
.fan>img{
	width: 100%;
	height: 1.6rem;
}
.end_time{
	box-sizing: border-box;
	width: 100%;
	height: 0.62rem;
	position: relative;
	padding: 0.16rem 0.16rem 0;
	background-color: #fff;
}
.active-title{
	width: 2rem;
	height: 0.18rem;
	font-size: 0.16rem;
    color: #25324e;
    line-height: 0.18rem;
    padding-right: 0.12rem;
    overflow: hidden;
    text-overflow: ellipsis;
    float: left;
}
.active-time{
	float: right;
	width: 1.3rem;
	height: 0.16rem;
	font-size: 0.13rem;
    color: #979dab;
    line-height: 0.16rem;
}
.active-disc{
	
	position: absolute;
	top: 0.4rem;
	height: 0.16rem;
	left: 0.16rem;
	right:0.16rem;
	font-size: 0.12rem;
    color: #fe4979;
    overflow: hidden;
    text-overflow: ellipsis;
}
.timer{
	font-size: 0.13rem;
    color: #979dab;
    line-height: 0.16rem;
}
.gift{
	width: 100%;
}
.gift_list{
	display: flex;
	justify-content: space-between;
	width: 100%;
	background-color: #fff;
	padding: 0 0.11rem 0.27rem 0.16rem;
	box-sizing: border-box;
}
.gift_list>a{
	display: block;
	width: 0.82rem;
	height: 1.24rem;
}
.gift_list>a>img{
	width: 0.82rem;
	height: 1.24rem; 
}
.gift-title-wrap{
	width: 100%;
	padding: 0 0.16rem 0.16rem;
    background: #fff;
    box-sizing: border-box;
}
.gift-title{
	font-size: 0.15rem;
    color: #25324e;
    line-height: 0.17rem;
    margin-bottom: 0.04rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.gift-tips{
	font-size: 0.13rem;
    color: #979dab;
    line-height: 0.18rem;
    max-height: 0.35rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.jd{
	width: 100%;
	height: 1.16rem;
	padding-bottom: 0.24rem;
	background-color: #fff;
}
.jd>img{
	width: 100%;
	height: 1.16rem;
}
.jd1{
	width: 100%;
	height: 1.16rem;
	/*padding-bottom: 0;*/
	background-color: #fff;
}
.jd1>img{
	width: 100%;
	height: 1.16rem;
}


.go{
	width: 100%;
}
.go_list{
	display: flex;
	justify-content: space-around;
	width: 100%;
	flex-wrap: wrap;
	background-color: #fff;
	padding: 0 1.334%;
	padding-bottom: 0.08rem;
	box-sizing: border-box;
}
.go_list>a{
	box-sizing: border-box;
	margin-bottom: 0.10rem;
	display: block;
	width: 1.72rem;
	height: 0.72rem;
}
.go_list>a>img{
	width: 1.72rem;
	height: 0.72rem;
}
.foryou{
	width: 100%;
}
.foryou_ {
	box-sizing: border-box;
    padding: 0 0.16rem;
    height: 0.72rem;
    background: #fff;
    line-height: 0.72rem;
}
.for_pro{
	width: 100%;
	flex-wrap: wrap;
	display: flex;
}
.for_pro>a{
	display: block;
	padding: 0 0.1rem;
	box-sizing: border-box;
	width: 50%;
	height: 2.66rem;
	background-color: #fff;
}
.for_pro>a>.for_pro_{
	box-sizing: border-box;
	text-align: center;
	width: 100%;
	height: 1.6rem;
	padding: 0.26rem 0 
}
.for_pro>a>.for_pro_>img{
	width: 1.08rem;
	height: 1.08rem;
}
.for_pro>a>h3{
	width: 100%;
	font-size: 0.13rem;
    margin-top: 0.12rem;
    color: #25324e;
    line-height: 0.16rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
.price_{
	font-size: 0.12rem;
    color: #979dab;
    line-height: 0.14rem;
    margin-top: 0.04rem;
}
.price_detail{
	margin-bottom: 0.08rem;
    margin-top: 0.05rem;
    width: 100%;
    height: 0.16rem;
}
.now_price{
	font-size: 0.14rem;
    line-height: 0.16rem;
    margin-right: 0;
    color: #fe4979;
}
</style>