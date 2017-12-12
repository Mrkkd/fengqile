<template>
	<div>
		<div class="y-header2">
 			<img height="70" src="../assets/y-img/logo.png">
 		</div>
	 	<form>
	 		<div class="yanzh">
	 			<ul>
	 				<li>
	 					<span class="spans bg1"></span> 					
	 						<input type="text" name="" placeholder="手机号/邮箱" class="input1">
	 				</li>
	 				<li>
	 					<span class="spans bg3"></span>
	 					<input type="text" name="" placeholder="登录密码" class="input3">
	 					<span id="y-yin">
	 						<span class="spana bg4"></span>
	 						<span class="spana yinc"></span>
	 					</span>
	 					
	 				</li>
	 				<li>
	 					<span class="spans bg2"></span>
	 					<input type="text" name="" placeholder="验证码" class="input2">
	 					<img class="img1" src="../assets/y-img/yzm.png" width="60" height="30">
	 				</li>
	 			</ul>
	 		</div>
	 		<div class="next">
	 			<router-link to="/Shou"><input type="button" value="登录"></router-link>
	 		</div>
	 		<div class="login-operate">
	 			<a href="">短信快捷验证</a>
	 			<a href="">忘记密码</a>
	 		</div>
	 		<div class="kongbai"></div>
	 		<div class="buttom">
	 			<a href="">没有账号？急速注册</a>
	 		</div>
	 	</form>
	</div>
</template>
	
<script>
	export default {
		name:'Home'		
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
input{
	outline: none;
}
body{
	background-color: #fff;
	overflow: hidden;
	font-size: 16px;
	min-width: 3.2rem;
	max-width: 7.5rem;
	font-family: "Helvetica Neue","microsoft yahei","Helvetica","STHeiTi","Arial","sans-serif";
}
.y-header2{
	width: 100%;
	height: 1.98rem;
	background-color: #3b9bff;
	-webkit-box-pack:center;
	-webkit-box-align:center;
	display: -webkit-box;
}
.yanzh{
	width: 100%;
	margin: .23rem 0 .3rem;
}
.yanzh li{
	height: .5277rem;
	border-bottom: .006rem solid #eaeaea;
	padding:.07rem .14rem .07rem .18rem;
	box-sizing: border-box;
}
.spans{
	width: .24rem;
	height: .24rem;
	display:inline-block;
	margin-right: .18rem;
	float: left;
	margin-top: .05rem;
	background: url(../assets/y-img/jingling.png)no-repeat;
	background-size: .54rem auto;
	
}
.spana{
	width: .24rem;
	height: .21rem;
	display:inline-block;
	float: right;
	margin-top: .05rem;
	background: url(../assets/y-img/jingling.png)no-repeat;
	background-size: .504rem auto;
	
}
.bg1{
	background-position: .01rem -.26rem;
}
.bg2{
	background-position: 0 -.89rem;
}
.bg3{
	background-position: -.306rem 0;
}
.bg4{
	background-position: 0 -0.47rem;
}
.yanzh li .yinc{
	background-position: -0.3rem -0.46rem;
	position: absolute;
	right: .13rem;
	top: 2.82rem;
	display: none;
}
.yanzh li .input1{
	text-align: left;
	height: .3839rem;
	padding-top:.096rem;
	padding-bottom:.096rem;
	box-sizing: border-box;
	font-size: 16px;
	color: #535c68;
	width: 3rem;
	border:0;
	
}

.yanzh li .img1{
	float: right;
	margin-top:.04rem; 
	width: .6rem;
	height: .3rem;
}
.yanzh li .input2{
	text-align: left;
	height: .3839rem;
	padding-top:.096rem;
	padding-bottom:.096rem;
	box-sizing: border-box;
	font-size: 16px;
	color: #535c68;
	width: 2.4rem;
	border:0;
	
}
.yanzh li .input3{
	text-align: left;
	height: .3839rem;
	padding-top:.096rem;
	padding-bottom:.096rem;
	box-sizing: border-box;
	font-size: 16px;
	color: #535c68;
	width: 2.22rem;
	border:0;	
}

.next{	
	height: .53rem;
	padding:0 .18rem;
}
.next input{
	background-color: #44a0ff;
	border-color: #78baff;
	color: #fff;
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	border-radius: 6px;
	line-height: .49rem;
	font-size: .16rem;
	border:1px solid #0487e3;
	box-sizing: border-box;
	font-family: microsoft yahei,"pingfang sc";
	width: 100%;
}
.login-operate,.buttom{
	padding: .18rem;
	height: .55rem;
	width: 100%;
	box-sizing: border-box;
}
.login-operate a,.buttom a{
	font-size: 0.14rem;
	color: #3b9bff;
	line-height: 0.19rem;
}
.login-operate a:nth-of-type(1){
	float: left;
}
.login-operate a:nth-of-type(2){
	float: right;
}
.buttom{
	position: absolute;
	left: 0;
	bottom: 0;
	text-align: center;
	font-weight: bolder;
	border-top: 1px solid #eaeaea;
}
</style>