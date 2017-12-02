require(["config"],function(){
	require(["jquery","loadheaderfooter"],function($){
		require(["bootstrap"],function(){
			$(".scale img").hover(function(){
				$(this).stop().animate({
					width:"100%"
				},1000)
			},function(){
				$(this).stop().animate({
					width:"105%"
				},1000)
			});
			$(".carousel").carousel();
			
			$("#myCarousel").hover(function(){
				$(".prev,.next").css({"opacity":0.5})
			},function(){
				$(".prev,.next").css({"opacity":0})
			});
			
			$("a").css({"text-decoration":"none"});
		})
		
	})
})