define(["jquery","cookie"],function(){
	$.ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){});
	
	//尾部微信二维码淡入淡出效果
	$.ajax("/html/include/footer.html").done(function(data){
		$(".footer").html(data);
	}).done(function(){
		$("#QRcode").hover(function(){
			$("#QRcode .qrcodepic").stop().fadeIn(1000);
		},function(){
			$("#QRcode .qrcodepic").stop().fadeOut(1000);
		})
	}).done(function(){
		$("#weix").hover(function(){
			$("#weix .qrcodepic").stop().fadeIn(1000);
		},function(){
			$("#weix .qrcodepic").stop().fadeOut(1000);
		})
	});
})