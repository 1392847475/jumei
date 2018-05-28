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
				if($(document).scrollTop()>500){
					$("#left_lt_ul").css("display","block")
				}else{
					$("#left_lt_ul").css("display","none")
				};
				if($(document).scrollTop()>3000){
					$(".lt_li2").css("background","#f76199");
					$(".lt_li2").siblings().css("background","#fff");
				}
				if($(document).scrollTop()>5000){
					$(".lt_li3").css("background","#f76199");
					$(".lt_li3").siblings().css("background","#fff");
				}
				if($(document).scrollTop()>7000){
					$(".lt_li4").css("background","#f76199");
					$(".lt_li4").siblings().css("background","#fff");
				}
				
				
				
				
				
				
				/*var index1 = Math.floor($(document).scrollTop()/600)
				console.log(index1)
				var oli = $("li").get(index1)
				$("li").css("background","")
				$(oli).css("background","red")
			$("li").mouseover(function(){
				$(this).addClass("red")
			}).mouseout(function(){
				$(this).removeClass()
			});
			$("li").click(function(){
				$("li").css("background","")
				$(this).css("background","red")
				var index = $("li").index(this);
					if(index==9){
					$(document).scrollTop(0);
				}else{
					$(document).scrollTop(index*600);
				}
			})*/
			
			
			
			});
	
	
	
	
	
	
	
	
	
	
	
	
	
	});
	
	























