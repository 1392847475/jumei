$(function(){
var zc_inp1 = document.getElementById("zc_inp1");
		var zc_inp2 = document.getElementById("zc_inp2");
		var zc_inp3 = document.getElementById("zc_inp3");
		var zc_inp4 = document.getElementById("zc_inp4");	
		var zc_inp5 = document.getElementById("zc_inp5");	
		var zc_dl = document.getElementById("zc_dl");
	
	zc_inp1.onblur=function(){
		if(zc_inp1.value!=""){
	if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(zc_inp1.value)){
		$(".zc_li1").html("手机号格式错误")
		$(".zc_li1").css("color","red")
		zc_inp1.value = "";
	}else{
		$(".zc_li1").html("格式正确")
		$(".zc_li1").css("color","green")
	}
	}
	}
	zc_inp4.onblur=function(){
		if(zc_inp4.value!=""){
	if(zc_inp4.value.length>=6){
		$(".zc_li3").html("密码格式正确")
		$(".zc_li3").css("color","green")
		
	}else{
		$(".zc_li3").html("密码必须大于5位")
		$(".zc_li3").css("color","red")
		zc_inp4.value = "";
	}
	}
	}
	
	zc_inp5.onblur=function(){
		if(zc_inp5.value!=""){
	if(zc_inp5.value==zc_inp4.value){
		$(".zc_li4").html("重复密码格式正确")
		$(".zc_li4").css("color","green")
		zc_inp5.value = "";
	}else{
		$(".zc_li4").html("重复密码不相符")
		$(".zc_li4").css("color","red")
	}
	}
	}
	})