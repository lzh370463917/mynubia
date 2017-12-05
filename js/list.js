require(["config"],function(){
	require(["jquery","template","loadheaderfooter"],function($,template){
		require(["bootstrap"],function(){
			$(".carousel").carousel();
			$.ajax("/mock/data.json").done(function(responseData){
				responseData.data=responseData.data.slice(0,6);
//				console.log(responseData)
				var html=template("floor_template",{floors:responseData.data});
				console.log(html)
				$(".main").html(html);
			})
		})
	})
})