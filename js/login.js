require(["config"], function() {
	require(["jquery", "cookie"], function() {
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
		
		
		
		
		
	})
})