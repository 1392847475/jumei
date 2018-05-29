$(function(){
	
	$(".header_ul2_li4").hover(function(){
		
		$(this).find("ul").stop().slideToggle();
    });
	
	$(".header_ul2_li6").hover(function(){
		
		$(this).find("ul").stop().slideToggle();
    });
    
	$(".nav_list").hover(function(){
		$("#nav_ej").stop().slideToggle();
	});
	
	
	var str = "";
		for(var a=1;a<=14;a++){
			str += "<a href=''><img src='image/homea"+a+".jpg' alt='' /></a>"
		}
	var str1 = "";
		for(var a=1;a<=14;a++){
			str1 += "<a href=''><img src='image/home"+a+".jpg' alt='' /></a>"
		}
	$(".home_top_ul").find(".home_li2").click(function(){
		$("#home_center").html(str);
		$(this).css({"background":"#666","color":"#e6e6e6"});
		$(this).siblings().css({"background":"#f7f7f7","color":"#333"})
		$(this).find("span").addClass("home_span");
		$(this).siblings().find("span").removeClass();
		
	});
	$(".home_top_ul").find(".home_li1").click(function(){
		$("#home_center").html(str1)
		$(this).css({"background":"#666","color":"#e6e6e6"});
		$(this).siblings().css({"background":"#f7f7f7","color":"#333"})
		$(this).find("span").addClass("home_span");
		$(this).siblings().find("span").removeClass();
	});
	
	var oul = document.getElementsByClassName("main_ul")[0];
	var script = document.createElement("script");
	
	
	$(document).scroll(function(){
				if($(document).scrollTop()>=500){
					$("#left_lt").css("display","block")
				}else{
					$("#left_lt").css("display","none")
				};
				if($(document).scrollTop()<2200){
					$("#left_lt_ul").find("a").css({"background-position-x":"0","color":"#8f8f8f"});
				}
				if($(document).scrollTop()>=2200){
					$(".lt_li2").find("a").css({"background-position-x":"-176px","color":"#fff"});
					$(".lt_li2").siblings().find("a").css({"background-position-x":"0","color":"#8f8f8f"});
				};
				if($(document).scrollTop()>=4700){
					$(".lt_li3").find("a").css({"background-position":"-177px -125px","color":"#fff"});
					$(".lt_li3").siblings().find("a").css({"background-position-x":"0","color":"#8f8f8f"});
				};
				if($(document).scrollTop()>=7700){
					$(".lt_li4").find("a").css({"background-position":"-177px -187px","color":"#fff"});
					$(".lt_li4").siblings().find("a").css({"background-position-x":"0","color":"#8f8f8f"});
				};
				$(".lt_li1").click(function(){
					$(document).scrollTop(0);
				})
				$(".lt_li2").click(function(){
					$(document).scrollTop(2200);
				})
				$(".lt_li3").click(function(){
					$(document).scrollTop(4800);
				})
				$(".lt_li4").click(function(){
					$(document).scrollTop(7800);
				})
				$(".right_li").click(function(){
				$(document).scrollTop(0);
				})
			});
	
	
	
	
	
	
	
	
	
	
	
	
	
	});
	
	






















