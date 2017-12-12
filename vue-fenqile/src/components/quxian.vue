<template>
	<div>
		<div class="main">
			<header>
				取现
			<router-link to="/Shou" class="g-back " id="global_header_url"></router-link>>
			</header>
			<div class="c-tip c-tip-sty2">单笔最低借款金额为100元</div>
			<div class="jie">
				<p class="jie_">我借款</p>
				<div class="meny">
					<div class="meny_">
						￥
					</div>
					<div class="write">
						<input type="text" placeholder="输入金额">
					</div>
				</div>
				<p class="xin">
				可信度￥0
			</p>
			</div>			
		</div>
	</div>
</template>
<script>
	export default {
		name:'Mine'	
	}
</script>
<style>
	.main{
	width: 100%;
	height: 100vh;
	/*background-color: red;*/
	background-color: #ecf3fa;
}
header{
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
}
.g-back{
	display: block;
	transform: rotate(-135deg);
	top: 16px;
	left: 20px;
    width: 12px;
    height: 12px;
  /*  border-width: 1px 1px 0 0;*/
    border: 1px solid #a7afc2;
    border-bottom: none;
    border-left: none;
    position: absolute;
}
.c-tip{
	height: 0.49rem;
	line-height: 0.49rem;
    text-align: center;
    color: #fff;
    font-size: 0.14rem;
    background-color: #9ab1ce;
}
.jie{
	width: 100%;
	height: 1.52rem;
	margin-top: 150px;

}
.jie>.jie_{
	width: 100%;
	height: 21px;
	font-size: 14px;
	color: #165198;
	text-indent: 5em;
	line-height: 21px;
}
.meny{
	width: 241px;
	height: 103px;
	border-bottom: 1px solid #d9e4ed;
	margin: 0 auto;
}
.meny_{
	width: 25px;
	height: 103px;
	line-height: 65px;
	float: left;
	color: #165198;
	font-size: 20px;
}
.write{
	width: 216px;
	height: 103px;
	float: right;
	color: #165198;
}
.write input{
	width: 216px;
	height: 103px;
	line-height: 103px;
	outline: none;
	border: none;
	font-size: 50px;
	font-weight: bold;
	background-color: transparent;
	color: #c1d2e6;

}
.xin{
	height: 0.49rem;
	line-height: 0.49rem;
    color: #c1d2e6;
    font-size: 0.14rem;
    text-indent: 5em;
}

</style>