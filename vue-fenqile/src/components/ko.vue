<template>
	<div>
		<div class="li_header">
			<div class="li_lang">
				<img src="../assets/img/search_icon.png">
				<span>抢iPhone&nbsp;612元神券</span>
			</div>
			<div class="li_im">
				<img src="../assets/img/news_icon.png">
			</div>
		</div>
		
		<div class="li_adver">
			<a ><img src="../assets/img/li_year.jpg"></a>
		</div>

		<!-- section-content -->
		<section class="li_floor">
			<div class="li_money">
				<span>分期消费</span>
			</div>
			<div class="li_uls li_a">
				<ul>
					<li @click.stop="current(1)"><a><img src="../assets/img/li_pic1.png"></a><p>手机</p></li>
					<li @click.stop="current(2)"><a><img src="../assets/img/li_pic2.png"></a><p>电脑</p></li>
					<li @click.stop="current(3)"><a ><img src="../assets/img/li_pic3.png"></a><p>平板数码</p></li>
					<li @click.stop="current(4)"><a ><img src="../assets/img/li_pic4.png"></a><p>美妆洗护</p></li>
					<li><a ><img src="../assets/img/li_pic5.png"></a><p>运动鞋服</p></li>
					<li><a ><img src="../assets/img/li_pic6.png"></a><p>家电</p></li>
					<li><a ><img src="../assets/img/li_pic7.png"></a><p>名表</p></li>
					<li><a ><img src="../assets/img/li_pic8.png"></a><p>珠宝首饰</p></li>
					<li><a ><img src="../assets/img/li_pic9.png"></a><p>服饰鞋帽</p></li>
					<li><a ><img src="../assets/img/li_pic10.png"></a><p>箱包礼品</p></li>
					<li><a ><img src="../assets/img/li_pic11.png"></a><p>户外体育</p></li>
					<li><a ><img src="../assets/img/li_pic12.png"></a><p>乐器</p></li>
				</ul>
			</div>
		</section>

		<!-- section-contentTow -->
		<section class="li_floor tit">
			<div class="li_money">
				<span>便民生活</span>
			</div>
			<div class="li_uls li_ls">
				<ul>
					<li ><a ><img src="../assets/img/li_pic13.png"></a><p>话费/流量</p></li>
					<li><a ><img src="../assets/img/li_pic14.png"></a><p>游戏充值</p></li>
					<li><a ><img src="../assets/img/li_pic15.png"></a><p>娱乐充值</p></li>
					<li><a ><img src="../assets/img/li_pic16.png"></a><p>携程卡</p></li>
					<li><a ><img src="../assets/img/li_pic17.jpg"></a><p>火车票</p></li>
					<li><a ><img src="../assets/img/li_pic18.png"></a><p>特价机票</p></li>
					<li><a ><img src="../assets/img/li_pic19.png"></a><p>取现</p></li>
					<li><a ><img src="../assets/img/li_pic20.png"></a><p>乐花借钱</p></li>
					<li><a ><img src="../assets/img/li_pic21.png"></a><p>京东E卡</p></li>
					<li><a ><img src="../assets/img/li_pic22.png"></a><p>驾校</p></li>
					<li><a ><img src="../assets/img/li_pic23.png"></a><p>电子礼品卡</p></li>
					<li><a ><img src="../assets/img/li_pic24.png"></a><p>教育</p></li>
					<li><a ><img src="../assets/img/li_pic25.png"></a><p>橙子理财</p></li>
					<li><a ><img src="../assets/img/li_pic26.png"></a><p>演唱会</p></li>
					<li><a ><img src="../assets/img/li_pic27.png"></a><p>加油卡充值</p></li>
					<li><a ><img src="../assets/img/li_pic28.png"></a><p>同程旅游卡</p></li>
				</ul>
			</div>
		</section>

			<!-- 第一分页层 -->
		<div  class="li_hide li_b hideBox" v-show="isShow==1">

			<div>
				<div class="li_new_bao" v-for = "i in result_rows1.floor_list">
					<div class="li_new_span"><span>{{ i.name}}</span></div>
					<div class="li_new_list li_n2">
						<ul v-for =" item in result_rows1.floor_list">
						<li v-for=" n in item.item_list">
							<a v-bind:href=" n.active_url ">
								<img v-bind:src=" n.pic_url ">
							</a>
							<p>{{ n.name }}</p>
						</li>
						</ul>
					</div>
			    </div>
		     </div>
		</div>
		<!-- 第二分页层 -->
		<div class="li_hide_1 li_b_1 hideBox" v-show = "isShow == 2"  >
			<div style="width: 100%">
			    <div class="li_new_bao" v-for="item in result_rows2.floor_list">
		            <div class="li_new_span">
		               <span>{{item.name}}</span>
		            </div>
		            <div class="li_new_list li_n1">
		                <ul>
		                    <li v-for="n in item.item_list">
		                        <a v-bind:href="n.active_url">
		                            <img v-bind:src="n.pic_url">
		                        </a>
		                        <p>{{n.name}}</p>
		                    </li>
		                </ul>
		            </div>
			    </div>
			</div>
		</div>
		
		<!-- 第三分页层  -->
		<div class="li_new" v-show = "isShow == 3">
		    <div style="width: 100%">
	            <div class="li_new_bao" v-for="item in result_rows3.floor_list">
	                <div class="li_new_span">
	                    <span>{{item.name}}</span>
	                </div>
	                <div class="li_new_list li_n1">
	                    <ul>
	                        <li v-for="n in item.item_list">
	                            <a :href="n.active_url">
	                                <img :src="n.pic_url">
	                            </a>
	                            <p>{{n.name}}</p>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </div>
		</div>

		<!-- 第四分页层 -->
		<div class="li_four" v-show = "isShow == 4">
			 <div style="width: 100%">
	            <div class="li_new_bao" v-for="item in result_rows4.floor_list">
	                <div class="li_new_span">
	                    <span>{{item.name}}</span>
	                </div>
	                <div class="li_new_list li_n1">
	                    <ul>
	                        <li v-for="n in item.item_list">
	                            <a :href="n.active_url">
	                               <img :src="n.pic_url">
	                            </a>
	                            <p>{{n.name}}</p>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
    <div class="lightBox" v-show="isShow == 1||isShow == 2||isShow == 3||isShow == 4" @click.stop="current(5)"></div>
	</div>

</template>

<script>
	export default{	
		data(){
			return {
				isShow:"cur",
				 result_rows1:{},
				 result_rows2:{},
				 result_rows3:{},
				 result_rows4:{}
			}
		},
		created(){
            var _t = this
            this.$http.get("../../static/classify1.json",{
                params:{ }
            }).then(function(res){
                console.log(res)
                _t.result_rows1=res.data.result_rows
            }),
             this.$http.get("../../static/classify2.json",{
                params:{ }
            }).then(function(res){
                console.log(res)
                _t.result_rows2=res.data.result_rows
            }),
            this.$http.get("../../static/classify3.json",{
                params:{ }
            }).then(function(res){
                console.log(res)
                _t.result_rows3=res.data.result_rows
            }),
            this.$http.get("../../static/classify4.json",{
                params:{ }
            }).then(function(res){
                console.log(res)
                _t.result_rows4=res.data.result_rows
            })
        },
		methods:{
			current(cur){
				this.isShow=cur;
				console.log(this.isShow)
			}
		}
		 
	}
</script>


<style scoped>
.fade{

transition: all 0.5s ease
}
*{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
}
a{
	text-decoration: none;
	-webkit-tap-highlight-color:rgba(0,0,0,0);
}
input{
	outline:none;
}
.li_header{
	width: 100%;
	height: 45px;
	background: #fff;
	display: flex;
}
.li_lang{
	-webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background: rgba(57,64,80,.1);
    width: 80%;
    height: 0.3rem;
    border-radius: 5px;
    position: absolute;
    left: 24px;
    top: 8px;
}
.li_lang>img{
	width: 16px;
	height: 16px;
	margin-left: 15px;
	position: relative;
	bottom: -3px;
}
.li_lang span{
	font-size: 14px;
	color: rgba(57, 64, 80, 0.38);
	margin-top: 5px;
	font-family: sans-serif;
	line-height: 30px;
}
.li_im{
	position: absolute;
    right: 0;
    top: .05rem;
}
.li_im>img{
	width: 24px;
	height: 24px;
	float: right;
	margin: 5px 6px 0 10px;
}
/*-------------------------*/
.li_adver{
	width: 100%;
	display: inline-block;
	background: #fff;
	margin:0.05rem 0;
}
.li_adver img{
	width: 100%;
	height: 100%;
}
/*-----------------------------*/
.li_floor{
	width: 100%;
	background: #fff;
}
.li_money{
	width: 100%;
	height: 60px;
	/*height: 0.6rem;*/
	line-height: 60px;
	text-align: center;
	border-bottom: 1px solid rgba(128, 128, 128, 0.11);
}
.li_money span, .li_moneys span, .li_moneys_f span{
	font-size: 14px;
	/*font-size: 0.14rem;*/
	color: rgba(48,64,80,.6);
}
.li_uls{
	width: 100%;
	background: #fff;
	text-align: center;
	display: flex;
	border-top: 1px solid rgba(128, 128, 128, 0.01);
}
.li_uls ul{
	width: 100%;
	flex:1;
	display: inline-block;
	margin-bottom: 30px;
}
.li_uls li{
	float: left;
	width: 25%;
	margin-top: 30px;
}
.li_uls li img{
	width: 52px;
	height: 52px;
}
.li_uls li p{
	/*font-size: 0.13rem;*/
	font-size: 13px;
	margin-top: 10px;
	font-family: sans-serif;
	color: #333;
}
.tit{
	/*margin-top: 10px;*/
	margin: 0.07rem 0;
	padding-bottom: 0.2rem;
}
/*---------------hide----------------*/
.li_hide, .li_hide_1, .li_new, .li_four{
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	width: 80%;
	min-height: 100%;
	background:#fff;
	overflow-y: auto;
	overflow-x: hidden;
	text-align: center;
	z-index: 55;
	transition: all 5s linear 5s;
	/*display: none;*/
}
/*-----------------------------------------*/
.li_new_span{
	width: 100%;
	background: #fff;
	color: rgba(48,64,80,.6);
	height: 60px;
	line-height: 60px;
	font-size: 14px;
	font-family: sans-serif;
	border-bottom: 1px solid rgba(128, 128, 128, 0.23);
}
.li_top{
	margin-top: 10px;
}
.li_new_list{
	width: 100%;
	display: inline-block;
	background: #fff;
}
.li_new_list ul{
	display: inline-block;
	width: 100%;
	padding: 8px 0;
}
.li_new_list li{
	width: 33.33%;
	float: left;
	padding:15px 0;
}
.li_new_list li img{
	width: 52px;
	height: 52px;
}
.li_new_list li p{
	font-size: 12px;
    font-family: sans-serif;
    color: #394050;
  	padding-top: 17px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.li_n2{
	padding-bottom: 1rem;
}
.lightBox{
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: rgba(0,0,0,0.6);
	z-index: 3;
	transition: all 5s linear 5s;
}
</style>
