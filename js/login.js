require(["config"], function() {
	require(["jquery", "cookie"], function() {
/**************************账号登录*******************************/		
		//点击账号登录，隐藏手机登录
		$("#account_login").on("click", function() {
			$(this).css({
				"color": "#e8380d"
			});
			$(".reg_id").show(0,function(){
				$("#phone_login").css({
					"color":"#333333"
				})
			});
			$(".reg_phone").hide();
		});
		
		
		/*失去焦点,正则表达式验证*/
		$("#in_username").on("blur",function(){
			var reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			var reg1=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			if(reg.test(this.value)||reg1.test(this.value)){
				$("#tip1").html("");
				/*点击登录,请求login.php比较数据库是否存在该用户*/
				$("#login_btn").on("click",function(){
					$.ajax({
						url:"/mynubia/php/login.php",
						type:"post",
						data:{
							username:$("#in_username").val(),
							password:$("#in_password").val()
						},
						success:function(data){
							var responseData=jQuery.parseJSON(data);
//							console.log(responseData)
							if(responseData.status===1){
								location="/mynubia/html/list.html";
							}else{
								alert("用户名或密码错误")
							}
					}});
				})
			}else{
				$("#tip1").html("输入错误，请重新输入");
				$("#login_btn").on("click",function(e){
					e.preventDefault();
				})
			}
		})
		
		
		
/***********************************手机登录********************************/

		//点击手机登录，隐藏账号登录	
		$("#phone_login").on("click", function() {
			$(this).css({
				"color": "#e8380d"
			});
			$(".reg_id").hide(0,function(){
				$("#account_login").css({
					"color":"#333333"
				})
			});
			$(".reg_phone").show();
		});
		
		$("#in_phonenum").on("blur",function(){
			var reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			if(reg.test(this.value)){
				$("#phone_tip").html("");
				/*点击登录,请求login.php比较数据库是否存在该用户*/
				$("#login_btn").on("click",function(){
					$.ajax({
						url:"/mynubia/php/login.php",
						type:"post",
						data:{
							username:$("#in_username").val(),
							password:$("#in_password").val()
						},
						success:function(data){
							var responseData=jQuery.parseJSON(data);
//							console.log(responseData)
							if(responseData.status===1){
								location="/mynubia/html/list.html";
							}else{
								alert("用户名或密码错误")
							}
					}});
				})
			}else{
				$("#phone_tip").html("输入错误，请重新输入");
				$("#login_btn").on("click",function(e){
					e.preventDefault();
				})
			}
		});
			
		/*生成验证码图片并校验是否正确函数*/
		function valicode(){
			$.ajax({
				type:"post",
				url: "http://route.showapi.com/932-2",
				data:{
					showapi_appid:"49962",
					showapi_sign:"067933de15174373a9b978961032eb0e"
				},
				dataType:"json",
				success:function(data){
					/*console.log(data)*/
					var getdata=data.showapi_res_body;
					console.log(getdata);
					$(".getcode img").attr("src",getdata.image);
					$(".getcode img").data("sid",getdata.sid);
				}
			});
		};
		valicode();//刷新页面时调用valicode函数，刷新验证码
		$(".getcode").on("click",function(){//点击图片时刷新验证码
			valicode();
		});
	
		/*校验验证码是否输入正确*/
		$("#info_code").on("blur",function(){
			var mydata=this.value.toUpperCase();
			console.log($(".getcode img").data("sid"))
			$.ajax({
				type:"post",
				url:"http://route.showapi.com/932-1",
				data:{
					showapi_appid:"49962",
					showapi_sign:"067933de15174373a9b978961032eb0e",
					checkcode:mydata,
					sid:$(".getcode img").data("sid")
					},
					success:function(responsedata){
					console.log(responsedata)
					if(responsedata.showapi_res_body.valid===true){
						$("#checkcode").html("")
					}else{
						$("#checkcode").html("验证码输入错误");
						$("#login_btn").on("click",function(e){
							e.preventDefault();
						})
					}
				}
			});
		})
	
	})
})