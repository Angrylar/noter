function setCookie(_name,_value,_day){
			// document.cookie = "name=value; expires=xxx";
			var odate = new Date();
			
			odate.setDate(odate.getDate()+_day);			
			document.cookie = _name+"="+_value+"; expires="+odate;
				
		}
    	
		function delCookie(_name,_value){
				
			setCookie(_name,_value,-1);
		}
		
		function getCookie(_name){
			//document.cookie 取出所有的值
			var cookies  =document.cookie.split("; ");
			
			//console.log(cookies);
			
			for(var i=0;i<cookies.length;i++){
				var array = cookies[i].split("=");	
				//console.log(array);
				if(array[0] ==_name){
					
					return array[1];	
				}
			}
		}