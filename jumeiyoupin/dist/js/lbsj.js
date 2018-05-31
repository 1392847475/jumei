
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
	

	$.ajax({
		type:"get",
		url:"http://h6.duchengjiu.top/shop/api_goods.php",
		data:{"pagesize":"80"},
		success:function(data){
		console.log(data.data)
		var data = data.data;
		var str = ""
		for(var i=0;i<data.length;i++){
			
			
			str += `<li id="lb_a">
					<div>
						<a data-id='${data[i].goods_id}' class='goDetail' >
							<img src="${data[i].goods_thumb}"/>
							<div class="lb_main_hw">
								<div>海外直采 海外价格 闪电发货</div>
							</div>
						</a>
					</div>
					<div class="lb_main_wz">
								<a href="xq.html">
									<p>${data[i].goods_name}</p>
									<div>
										<em>￥</em>
										<span>${data[i].price}</span>
										<s>$9999</s>
									</div>
								</a>
					</div>
					<div class="lb_main_gwc">
						<a href="">加入购物车</a>
					</div>
				</li>`
			
			
			}
		
		$(".lb_main_ul").html(str);
		var $goDetail = $(".goDetail");
		for(var i=0;i<$goDetail.length;i++){
			$goDetail[i].index=i;
			$goDetail[i].onclick=function(){
				var detail =$($goDetail[this.index]).attr("data-id"); 
				console.log($($goDetail[this.index]).attr("data-id"));
				setCookie("goDetail",detail,7);
				window.location.href="xq.html";
			}
		}
		
	}	
		
	})
	
	
	
	
	
})







