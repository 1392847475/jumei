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
		async:true,
		data:{pagesize:"80"},
		success:function(data){
			var data = data.data;
			var str2 ="";
			
			/*for(var attr in obj){
				
				console.log(attr)
				for(var i=0;i<data.length;i++){
				
			}
				
			}
				*/
			
			
			
			
			
		}
			
		});




})


