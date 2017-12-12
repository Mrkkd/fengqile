<template>
	<div>
		<div class="main">
	        <header>
	            乐花借款
	        <router-link to="/Shou" class="g-back " id="global_header_url"></router-link>
	        </header>
	        <div class="jie">
	            <p class="jie_">可借额度</p>
	                <div class="meny">
	                    <div class="meny_">
	                        ￥
	                    </div>
	                    <div class="write">
	                     3,400.00
	                    </div>
	                </div>
	                <p class="xin">
	                按日计息,随借随还
	            </p>
	        </div>
	            <a class="btn js-entry-item" href="javascript:;" data-type="default" data-sku="LM20160429143703">借款</a>
	            <a href="https://pages.fenqile.com/VlVdQklUV1hFSFVSX0Y/index.html?_OSC=0XYMMCE-1RD52QV&amp;_DTAG=0XYMMCE-1RD52QV" class="ad-ref">乐花助力双11，送11111元免息，100%有奖&gt;</a>
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
    background: linear-gradient(0deg,#e8f5ff 0,#e2eefe 100%);
	/*background-color: #ecf3fa;*/
	background-size: 100% auto;
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
    border: 1px solid #a7afc2;
    border-bottom: none;
    border-left: none;
    position: absolute;
}
.jie{
	text-align: center;
	width: 100%;
	height: 1.52rem;
	margin-top: 100px;

}
.jie>.jie_{
	width: 100%;
	height: 0.21rem;
	font-size: 0.14rem;
	color: #175198;
	line-height: 0.21rem;
}
.meny{
	width: 2.41rem;
	height: 1.03rem;

	margin: 0 auto;
}
.meny_{
	width: 0.25rem;
	height: 1.03rem;
	line-height: 0.65rem;
	float: left;
	color: #165198;
	font-size: 0.20rem;
	font-weight: bold;
}
.write{
	width: 2.16rem;
	height: 1.03rem;
	float: right;
	color: #165198;
	font-size: .55rem;
	color: #175198;
	/*font-weight: bold;*/
    font-family: "DINPro-Medium";
    line-height: 1.03rem;
}
.xin{
	height: 0.19rem;
	line-height: 0.19rem;
    color: #175198;
    font-size: 0.14rem;
    /*text-indent: 5em;*/
}
.btn{
	width: 2.79rem;
	height: 0.48rem;
	line-height: 0.48rem;
	text-align: center;
	display: block;
	background-color: #44a0ff;
    color: #fff; 
    margin: 0 auto;
    margin-top: .7rem;
    font-size:.16rem;
}
.ad-ref{
	width: 100%;
	height: 0.19rem;
	line-height: 0.19rem;
	font-size: 0.12rem;
	text-align: center;
	display: block;
	    color: #3b9bff;
	    margin: 0 auto;
	    margin-top: 20px;
}

</style>