$(function(){
	function setCookie(name, value, n) {
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + n);
		document.cookie = name + "=" + value + ";expires=" + oDate + ";path=/";
	}

function getCookie(name) {
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i < arr.length; i++) {
		var newArr = arr[i].split("=");
		if(newArr[0] === name) {
			return newArr[1];
		}
	}
}

function removeCookie(name) {
	setCookie(name, 1, -1);
}
	
	
	
var goodsId = getCookie("goDetail");
	
	getCookie("goDetail");
	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_goods.php",
		async:true,
		data:{pagesize:"80"},
		success:function(data){
			var data = data.data;
			var str ="";
			for(var i=0;i<data.length;i++){
				if(data[i].goods_id==goodsId){
					console.log(data[i]);
					str = `<div class="detailImg">
					<img src="${data[i].goods_thumb}" />
					</div>
					
					<div>
						<p>${data[i].goods_name}</p>
						<p>${data[i].goods_desc}</p>
						<p>￥${data[i].price}</p>
						<div>
							<span class="xq_sp1">+</span>
							<span class="xq_sp2">1</span>
							<span class="xq_sp3">-</span>
						</div>
						<a data-id='${data[i].goods_id}' class="xq_a">加入购物车</a>
					</div>
					`
					
				}
			}
			$("#xq_main_main").html(str);
			var a = 1;
			$(".xq_sp1").click(function(){
				a++;
				$(".xq_sp2").html(a)
			});
			$(".xq_sp3").click(function(){
				a--;
				if(a<=1){
					a=1;
				}
				$(".xq_sp2").html(a)
			});
			
			if(getCookie("cart") !== undefined) {
						var obj = JSON.parse(getCookie("cart"));
					} else {
						var obj = {};
					}
					var sum = 0;
					for(var b in obj) {
						sum += obj[b];
					}
					$(".gwc_p").html(sum);
					$(".xq_a").click(function(){
						console.log("aa")
						var xq_a = this.getAttribute("data-id");
						if(obj[xq_a]== undefined){
							obj[xq_a] = 1;
						}else{
							obj[xq_a]++;
						}
						var sum = 0;
						for(var b in obj){
							sum += obj[b];
						}
						
						$(".gwc_p").html(sum);
						
						var objstr = JSON.stringify(obj);
						setCookie("cart",objstr,7);
					})
			
			var str2 = ""
			
			for(var attr in obj){
				console.log(attr)
				
				for(var k=0;k<data.length;k++){
					if(data[k].goods_id==attr){
						console.log(data[k].goods_name)
						str2 += ` 
						
						<li>
							<img src="${data[k].goods_thumb}">
							<p>${data[k].goods_name}</p>
							<span>${data[k].price}</span>
							<b>${obj[attr]}</b>
						</li>
						
						
						
						`
					}
					
				}
				
				
				
			}
			$("#splb_ul").html(str2)
			
			
			
		}
	});
	})