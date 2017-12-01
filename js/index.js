require(["config"],function(){
	require(["jquery","loadheaderfooter"],function(){
		$(".scale img").hover(function(){
			$(this).stop().animate({
				width:"100%"
			},1000)
		},function(){
			$(this).stop().animate({
				width:"105%"
			},1000)
		});
		
	})
})