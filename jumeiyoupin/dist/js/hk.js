
$(function(){
var box = document.getElementsByClassName("dl_hk")[0];
	        var box1 = document.getElementById("dl_box1");
			var box2 = document.getElementById("dl_box2");
			var box3 = document.getElementById("dl_box3");
			
			box2.onmousedown =function(e){
				var evt = e || event;
				var x = evt.clientX;
				console.log(x)
				 var disX=x-this.offsetLeft;
				document.onmousemove = function(e){
					var evt = e||event;
					var left = evt.clientX -disX;
					if(left<=0){
						left=0;
					}
					if(left>=box.offsetWidth-box2.offsetWidth){
						left=box.offsetWidth-box2.offsetWidth-2;
					}
					box1.style.width=left+"px"
					box2.style.left = left+"px"
					document.onmouseup = function(e){
					document.onmousemove=null;
					if(left==box.offsetWidth-box2.offsetWidth-2){
						box3.innerHTML = "验证成功"
						box1.style.background="green"
					}else{
						box2.style.left="0"
						box1.style.width="0"
					}
					
				}
					
					
				}
				
			
			}
		

			
})
