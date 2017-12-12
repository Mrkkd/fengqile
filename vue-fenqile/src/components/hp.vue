<template>
	<div>
		<header>
	            乐疯抢
	        <router-link to="/Shou" class="g-back "></router-link>
	     <router-link to="/Shopping">
	        <div class="hp-t">
	        	<div class="bb">
	        		{{totalNum}}
	        	</div>	
	        </div>
	     </router-link>
	    </header>
		    <div class="qiang">
		    	<div class="qiang1">
		    		正在抢
		    	</div>
		    	<div class="qiang2">
		    		即将开抢
		    	</div>
		    </div>
	    <div class="banner">
	    	<div class="banner1">
	    		<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide"><img src="../assets/imgs/banner1.jpg"></div>
							<div class="swiper-slide"><img src="../assets/imgs/banner2.jpg"></div>
							<div class="swiper-slide"><img src="../assets/imgs/banner3.jpg"></div>
							<div class="swiper-slide"><img src="../assets/imgs/banner4.jpg"></div>
							<div class="swiper-slide"><img src="../assets/imgs/banner5.jpg"></div>
							<div class="swiper-slide"><img src="../assets/imgs/banner6.jpg"></div>
						</div>
						<div class="swiper-pagination"></div>
				</div>		
	    	</div>
	    </div>
	    <div class="rel">
	    	好货不贵真正实惠
	    	<div class="day">
	    		每日10:00 开抢
	    	</div>
	    </div>


	    <div class="hou">
	    	<div class="hou1" v-for="item in limit_list">
                <a class="hou2">
                    <div class="hou3">
                        <img v-bind:src="item.fe_sku_pic">
                    </div>
                    <div class="hou4">
                        <h4>
                            {{item.product_name}}
                        </h4>
                        <p class="hou4_">精选低价好货！</p>
                        <div class="purchase db">
                            <div class="fx1">
                                <p>¥<em>{{item.real_amount}}</em><del>¥{{item.mart_amount}}</del></p>
                                <p class="per-month">月供：¥{{item.mon_pay}}起</p>
                            </div>
                            <span class="more-shop" @click="add(item)">加入购物车</span>
                        </div>
                    </div>
                </a>                                      
            </div>
	    </div>
	</div>
</template>
<script>
	export default{
		 data(){
                return {
                    limit_list:{}
                }
            },
            created(){
			//使用axios插件请求数据
			this.$http.get("../../static/hp.json", {}).then((res)=>{
				this.limit_list = res.data.limit_list;
				//如果购物车有产品 则显示对应产品数量
				if(this.$store.state.orderList.length>0){
					for(var n in this.$store.getters.getOrderList){
						for(var m in this.limit_list){
							//判断当前清单中是商品列表中的产品 有的初始化数量为购物车当前数量
							if(this.limit_list[m].product_desc === this.$store.getters.getOrderList[n].product_desc){
								this.limit_list[m].fe_discount_tag = this.$store.getters.getOrderList[n].fe_discount_tag
							}
							
						}
					}
				}

			})
		},
		methods: {
			add(item){
				item.fe_discount_tag++;
				this.$store.dispatch("addOrder", item);
			}
		},
		computed:{
			totalNum(){
				var totalNum = 0;
				for(var n in this.limit_list){
					totalNum +=Number(this.limit_list[n].fe_discount_tag)
				}
				return totalNum;
			}
		}
	}
</script>

<style>
	header{
	background-color: #fff;
    width: 100%;
	height: 0.44rem;
	line-height: 0.44rem;
    font-size: 0.18rem;
    color: #394050;
    line-height: 0.44rem;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    text-align: center;
    position: relative;
   margin-bottom: 0.01rem;
   position: fixed;
   left: 0;
   top: 0;
   z-index: 3;
}
.g-back{
    width: 0.12rem;
    height: 0.12rem;
	display: block;
	transform: rotate(-135deg);
	top: 0.16rem;
	left: 0.20rem;
    border: 1px solid #a7afc2;
    border-bottom: none;
    border-left: none;
    position: absolute;
}
.hp-t{
	width: 0.26rem;
	 height: 0.23rem;
	 background: url("../assets/imgs/bot3.png") no-repeat;
	 background-size: cover;
	 position: absolute;
	 bottom: 0.13rem;
    right: 0.23rem;
}
.bb{
	width: 0.12rem;
	height: 0.12rem;
	border:1px solid pink;
	border-radius: 50%;
	text-align: center;
	line-height: 0.1rem;
	font-size: 0.1rem;
	color:#fff;
	font-weight: bolder;
	position: absolute;
	left: .161rem;
    top: -.04rem;
	background-color: #ef4a77;

}
.qiang{
	width: 100%;
	height: 0.53rem;
	display: flex;
	background-color: #fff;
	position: fixed;
	left: 0;
	top: 0.43rem;
    z-index: 5;
}
.qiang1{
	width: 50%;
	height: 0.53rem;
	text-align: center;
	line-height:0.53rem; 
	font-size: 0.14rem;
 color: #394050;
}
.qiang2{
	width: 50%;
	height: 0.53rem;
	text-align: center;
	line-height:0.53rem; 
	font-size: 0.14rem;
 	color: #394050;
}
.banner{
	width: 100%;
	margin-top: 110px;
	height: 1.11rem;
	overflow: hidden;
	margin-bottom: 0.2rem;
}
.banner img{
	width: 100%;
	height: 1.11rem;
}
.rel{
	width: 100%;
	height: 0.73rem;
	line-height: 0.73rem;
	text-indent: 1em;
    font-size: 0.16rem;
    font-weight: bold;
    color: #394050;
    background-color: #fff;
    position: relative;
    margin-bottom: 0.01rem;
}
.day{
	width: 1.2rem;
	height: 0.16rem;
	line-height: 0.16rem;
	font-size: 0.11rem;
	color: #fe4979;
	position: absolute;
	right: 0.10rem;
    bottom: 0.28rem;
}
.hou{
	width: 100%;
}
.hou1{
	width: 100%;
	height: 1.73rem;
	box-sizing: border-box;
	padding-left: 0.1rem;
	padding-right: 0.1rem;
	background-color: #fff;
	margin-bottom: 0.01rem;

}
.hou2{
	display: block;
	width: 100%;
	height: 1.73rem;
	box-sizing: border-box;
	/*background-color: red;*/
	padding-top: 0.20rem;
	padding-bottom:0.2rem;
}
.hou3{
	width: 1.06rem;
	height: 1.06rem;
	float: left;
}
.hou3>img{
	width: 1.06rem;
	height: 1.06rem;
	float: left;
	/*vertical-align: middle;*/
}
.hou4{
	float: right;
	width: 2.48rem;
	height: 1.26rem;
	/*background-color: yellow;*/
}
.hou4 h4{
	width: 100%;
	height: 0.38rem;
	font-size: 0.14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color:#5b6560;

}
.shop-tag{
	border-radius: 0.02rem;
	display: inline-block;
	width: 0.52rem;
	height: 0.17rem;
	text-align: center;
	font-size: 0.11rem;
	color: #fff;
    background: #ed5f86;
    line-height: 0.17rem;
    /*padding-top: 0.05rem;
    box-sizing: border-box;*/
}
.hou4>.hou4_{
	width: 100%;
	height: 0.16rem;
	line-height: 0.16rem;
	text-align: right;
	font-size: 0.12rem;
	color: #b5bbc4;
	margin-top: 20px;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.02rem;
}
.purchase{
	width: 100%;
	height: 0.34rem;
	/*background-color: pink;*/
	position: relative;
}
.fx1{
	width: 1.52rem;
	height: 0.34rem;
}
.fx1 p{
	color: #ed5f86;
	width: 100%;
	height: 0.16rem;
	font-size: 0.11rem;
}
.fx1>p>em{
	width: 0.45rem;
	height: 0.16rem;
	text-align: center;
	display: inline-block;
	line-height: 0.21rem;
	font-size: 0.12rem;
	color: #ed5f86;
}
.fx1>p>del{
	font-size: 0.11rem;
}
.per-month{
	width: 1rem;
	height: 0.16rem; 
	font-size: 0.11rem;
}
.more-shop{
	display: block;
	font-size: 0.12rem;
	color: #fff;
	width: 0.96rem;
	height: 0.34rem; 
	text-align: center;
	line-height: 0.34rem;
	background-color: #ed5f86;
	border-radius: 0.05rem;
	position: absolute;
	right: 0;
	bottom: 0;
}
</style>