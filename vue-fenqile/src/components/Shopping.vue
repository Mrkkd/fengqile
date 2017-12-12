<template>
	<div>
		<div class="y-header-top">
			<router-link to="/hp"><p></p></router-link>
			<h1>购物车</h1>
			<span>编辑</span>
		</div>
		<div class="kongbai"></div>
		<!-- 没有物品时显示空 -->
		<div class="ybx-shopping" v-show="show">
			<div class="cart-empty">
				<img src="../assets/y-img/goshopping-bg.png">
			</div>
			<div class="cart-txt">
				<p>购物车空空如也~</p>
			</div>
			<div class="cart-btn">
				<router-link to="/hp">随便逛逛</router-link>
			</div>
		</div>
		<!-- 有物品时显示商品列表 -->
		<div class="car-list" v-for="(item,index) in oderList">
			<div class="car-compile">
				<div class="compile-dian"></div>
				<p>超级秒杀</p>
				<span @click ="del(item)">删除</span>
			</div>
			<div class="car-matter">
				<div class="matter-img">
					<img :src="item.fe_sku_pic">
				</div>
				<div class="matter-txt">
					<p>
                    	{{item.goods_name}}                                           
					</p>
					<p class="product-norms">
                        ￥{{item.amount}}                                            
                    </p>
                   <div class="numw">
	                    <span @click="minus(item)">-</span>
	                    <span>{{item.fe_discount_tag}}</span>
	                    <span @click="jia(item)">+</span>
                   </div>
				</div>
				<div class="matter-num">x{{item.fe_discount_tag}}</div>
				<!-- <div class="mtern">
					
				</div> -->
			</div>
		</div>
		<!-- 推荐· -->
		<div class="foryou" id="for_pro">
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
		<div class="jiesuan" v-show="!show">
			<p>合计:￥{{totalMoney}}</p>
			<div class="jiesuan-count">
				<span>结算<a></a></span>
			</div>
		</div> 
	</div>
</template>
	
<script>
	export default {
		 data(){
                return {
                    result_rows:{},
                    limit_list:{},
                    oderList:[],
                    show:false
                }
            },
            created(){
                var _t = this
                this.$http.get("../../static/for.json",{
                    params:{ }   
                }).then(function(res){
                    _t.result_rows=res.data.result_rows
                })
            },
            mounted(){
            	this.oderList=this.$store.getters.getOrderList
            	if(this.oderList==""){
            		this.show = true
            	}
            },
            computed:{
					totalMoney(){
							var totalMoney = 0;
							this.oderList.forEach((n)=>{
								totalMoney += Number(n.amount)*Number(n.fe_discount_tag)
							});
							return totalMoney;
						}
			},
			methods:{
				jia(item){
					item.fe_discount_tag++
				},
				minus(item){
					if (item.fe_discount_tag>0) {				
					item.fe_discount_tag--
					}
				},
				del(index){
					this.oderList.splice(index,1)
						if(this.oderList==""){
	            		this.show = true
	            	}
				}
			} 
	}			
</script>
	
<style>
	.car-list{
		width: 100%;
		margin-bottom: .12rem;
		background: #fff;
	}
	.car-compile{
		position: relative;
		width: 100%;
		height: .48rem;
		/*background: red;*/
		border-bottom: 1px solid #f5f7f6;
	}
	.car-compile .compile-dian{
		width: .48rem;
		height: .48rem;

		/*background: yellow;*/
	}
	.car-compile .compile-dian span{
		color: red;
	}
	.car-compile p{
		display: inline-block;
		width: 2.73rem;
		height: .19rem;
		position: absolute;
		left: .48rem;
		top: .15rem;
	}
	.car-compile span{
		display: inline-block;
		width: .4342rem;
		height: .19rem;
		position: absolute;
		top:.15rem;
		right: .01rem;
		color: red;
		font-size: .13rem;
	}
	.car-matter{
		width: 100%;
		height: 1.1678rem;
		position: relative;
		padding-top: .1rem;
	}
	.matter-img{
		    width: .88rem;
		    height: 1rem;
		    /*background: black;*/
		    position: absolute;
		    top: 0.1rem;
		    left: 0.3rem;
	}
	.matter-img>img{
		 width: .88rem;
		    height: .88rem;
	}
	.matter-txt{
		width: 1.74rem;
		height: 1rem;
		/*background: yellow;*/
		position: absolute;
		top: .1rem;
		left: 1.3rem;
	}
	.matter-txt p{
		width: 100%;
		height: 0.18rem;
		text-align: center;
	    /*color: #394050;*/
	    font-size: 0.16rem;
    	overflow: hidden;
    	/*color: #000;*/
    	text-overflow: ellipsis;
    	white-space: nowrap;
	}
	.matter-txt .numw{
		height: 0.25rem;
		width: 100%;
		margin-top:0.2rem;
	}
	.matter-txt .numw span{
		display: inline-block;
		width: 0.5rem;
		height: 0.25rem;
		text-align: center;
		line-height: 0.25rem;
		font-size: 0.16rem;
		color: #666;
		border:1px solid #e6ece9;
	}
	.product-norms{
    	width: 100%;
		height: 0.18rem;
		text-align: left;
	   	color: pink;
	    font-size: 0.12rem;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	margin-top: 0.05rem;
	}
	.matter-num{
		width: .37rem;
		height: 1rem;
		/*background: pink;*/
		position: absolute;
		top: .1rem;
		right: 0.11rem;
	}
	.mtern{
		width: 100%;
		height: 0.5rem;
		background-color: red;
		position: absolute;
		left: 0;
		bottom:0;
	}
	.y-header-top{
	width: 100%;
	height: .44rem;
	background-color: #fff;
	text-align: center;
	line-height: .44rem;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 33;
}
.y-header-top p{
	display: inline-block;
    width: 17px;
    height: 17px;
    border-left: 1px solid #7380ad;
    border-bottom: 1px solid #7380ad;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    left: .18rem;
    top: .13rem;
}
.y-header-top h1{
	width: 72%;
	font-size: .2rem;
	margin:0 auto;
	font-weight: normal;
}
.y-header-top span{
	color: #3b9bff;
	display: inline-block;
	padding-left: .1rem;
	padding-right: .1rem;
	height: .44rem;
	position: absolute;
	top: 0;
	right: 0;
}
.kongbai{
	width: 100%;
	height: .44rem;
	background: #fff;
}
.ybx-shopping{
	width: 100%;
	height: 3.43rem;
	margin-top: .1rem;
	background: #fff;
	margin-bottom: .1rem;
	padding-bottom: .384rem;
	box-sizing: border-box;
	
}
.ybx-shopping .cart-empty{
	height: 1.92rem;
	width: 1.6rem;
	padding-top: .32rem;
	margin: 0 auto;
	box-sizing: border-box;

}
.cart-empty img{
	display: block;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
}
.ybx-shopping .cart-txt{
	width: 100%;
	margin-top: .288rem;
}
.cart-txt p{
	text-align: center;
	padding:0 .18rem;
	color: #394050;
	font-size: .13rem;
}
.cart-btn{
	width: 100%;
	height: .38rem;
	margin-top: .288rem;
	text-align: center;
}
.cart-btn a{
	display: inline-block;
	padding: 0 .372rem;
	font-size: .14rem;
	color: #616673;
	height: .38rem;
	line-height: .38rem;
	position: relative;
	border: 1px solid #e8eaee;
}
/*为你推荐*/
.foryou{
	width: 100%;
}
.foryou_ {
	box-sizing: border-box;
    padding: 0 0.16rem;
    height: 0.72rem;
    background: #fff;
    text-align: center;
    line-height: 0.72rem;
   color: #989191;
    font-size: .18rem;
}
.for_pro{
	width: 100%;
	flex-wrap: wrap;
	display: flex;
}
.for_pro>a{
	/*display: inline-block;*/
	/*float: left;*/
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
.jiesuan{
	width: 100%;
	height: .55rem;
	background: #fff;
	position: fixed;
	bottom:0;
	left: 0;
	z-index: 333;
	border-top: 1px solid #eee;
	display: flex;
	align-items: center;
}
.jiesuan-count{
	width: .9rem;
	height: .55rem;
	background: #44a0ff;
	position: absolute;
	right: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.jiesuan-count span{
	font-size: .16rem;
	color: #fff;
}
.jiesuan p{
	text-indent: 2em;
	color: #394050;
	font-size: .14rem;
}
</style>