require(["config"],function(){
	require(["jquery","cookie"],function(){
		//电话号码注册
		$("#phone_register").on("click",function(){
			$(this).css({"color":"#e8380d"});
			$(".phone_register").show(0,function(){
				$("#email_regiseter").css({"color":"#333333"})
			});
			$(".email_register").hide();
		})
/***********************************************************************/		
		//用户框失去焦点校验格式是否为手机，并访问数据库，校验是否已被注册，不满足时不能点击提交按钮
		$("#username").on("blur",function(){
			var reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			if(reg.test(this.value)){
				$.ajax({
					type:"post",
					url:"/mynubia/php/check.php",
					data:{username:$("#username").val()},
					success:function(data){
						var responseData=jQuery.parseJSON(data);
	//					console.log(responseData)
						if(responseData.status===1){
							$("#usernametip").html("该号码已被注册")
						}else{
							$("#usernametip").html("可以注册")
						}
					}
				});	
			}else{
				$("#usernametip").html("请输入正确的手机号")
				$("#register_btn").on("click",function(e){
					e.preventDefault();
				})
			}	
		});
/***********************************************************************/			
		//密码框失去焦点，校验格式是否正确
		$("#password").on("blur",function(){
			var reg=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,16}$/;
			
			if(reg.test(this.value)){
				$("#passwordtip").html("格式正确")
			}else{
				$("#passwordtip").html("格式错误")
				$("#register_btn").on("click",function(e){
					e.preventDefault();
				})
			}
		});
		
		//点击提交，访问数据库，插入数据
		$("#register_btn").on("click",function(){
			$.ajax({
				type:"post",
				url:"/mynubia/php/register.php",
				data:{
					username:$("#username").val(),
					password:$("#password").val()
				},
				success:function(data){
					
				}
			});
		})
		//邮箱注册
		$("#email_regiseter").on("click",function(){
			$(this).css({"color":"#e8380d"});
			$(".phone_register").hide();
			$(".email_register").show(0,function(){
				$("#phone_register").css({"color":"#333333"})
			});
		})
		
		
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
		$("#valicode").on("blur",function(){
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
						$("#register_btn").on("click",function(e){
							e.preventDefault();
						})
					}
				}
			});
		})
		
		
		
		
		
		
		
		
		
		
	})
})
