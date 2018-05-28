function Ajax(obj){
				var obj1 = {
					type:"get",
				}
				for(var i in obj1){
					obj[i] = obj[i] || obj1[i]
				}
				var xhr = new XMLHttpRequest();
				var str ="";
				for(var attr in obj["data"]){
					str += attr+"="+obj["data"][attr]+"&";
				}
				str = str.replace(/&$/,"");
				if(obj["type"].toLowerCase() == "get"){
					if(obj["data"]===undefined){
						xhr.open("get",obj["url"],true);
					}else{
						xhr.open("get",obj["url"]+"?"+str,true)
					}
					xhr.send();
				}else{
					xhr.open("post",obj["url"],true);
					xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
					xhr.send(str);
				}
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(xhr.status==200){
							var data = xhr.responseText;
							obj["success"](data);
						}else{
							if(obj["error"]){
								obj["error"]();
							}
						}
					}
				}
			}