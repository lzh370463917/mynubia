define(["jquery","cookie"],function(){
	$.ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){
		$("a").css({"text-decoration":"none"});
		
		$(".cellphone").hover(function(){
			$("#z17box").stop().fadeIn();
//			$("#z17box").stop().animate({height:"240px"},600);
		},function(){
			$("#z17box").stop().fadeOut();
//			$("#z17box").stop().animate({height:"0px"},600);
		});
		
		$(".fitting").hover(function(){
			$("#fitbox").stop().fadeIn();
		},function(){
			$("#fitbox").stop().fadeOut();
		});
		
		$(".photograph").hover(function(){
			$("#photobox").stop().fadeIn();
		},function(){
			$("#photobox").stop().fadeOut();
		});
		
		$(".nbui").hover(function(){
			$("#nbuibox").stop().fadeIn();
		},function(){
			$("#nbuibox").stop().fadeOut();
		});
		
		var _width=$(window).width();
		$(".guide div").css({"width":_width,});
		$(".guide div ul li a i").css({"color":"#ffffff"});
		$(".guide div ul li a i").hover(function(){
			$(this).css({"color":"#A9A9A9"})
		},function(){
			$(this).css({"color":"#ffffff"})
		})
		
	});
	
	//尾部微信二维码淡入淡出效果
	$.ajax("/html/include/footer.html").done(function(data){
		$(".footer").html(data);
	}).done(function(){
		$("a").css({"text-decoration":"none"});
		
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