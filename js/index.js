require(["config"],function(){
	require(["jquery","template","loadheaderfooter"],function($,template){
		require(["bootstrap"],function(){
			
			
			//轮播异步加载data数据
			$.ajax("/mynubia/mock/data.json").done(function(responseData){
				responseData.data=responseData.data.slice(6,7);
//				console.log(responseData.data);
				var html=template("carousel_template",{floors:responseData.data});
//				console.log(html)
				$(".carousel-inner").html(html);
			})
			$(".carousel").carousel();//开始轮播
			
			$("#myCarousel").hover(function(){//修改轮播样式
				$(".prev,.next").css({"opacity":0.5})
			},function(){
				$(".prev,.next").css({"opacity":0})
			});
			
			//划过图片缩小
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
})