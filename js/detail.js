require(["config"],function(){
	require(["jquery","template","loadheaderfooter","cookie"],function($,template){
		
		$.getJSON("/mynubia/mock/smallimg.json",function(responseData){
			var html = template("smallimg_template", {products:responseData.data});
			$(".addsmall").html(html);
		});
		$.getJSON("/mynubia/mock/bigimg.json",function(responseData){
			var html = template("bigimg_template", {products:responseData.data});
			$(".bigimg").html(html);
		});
		
		$(".addsmall").on("click",function(){
			$(this).css({"border":"1px solid #e8380d"});
			console.log(this)
			var html=$(this).html();
			$(".bigimg").html(html);
		})
		
		
/*********************动态加载商品详情和规格参数***********************************/		
		$.getJSON("/mynubia/mock/Commoditydetails.json",function(responseData){
			var html = template("Commoditydetails_template", {products:responseData.details});
			$(".Commoditydetails").html(html);
		});
		$.getJSON("/mynubia/mock/parameter.json",function(responseData){
			var html = template("parameter_template", {parameters:responseData.parameter});
			$(".parameter").html(html);
		});
		//点击商品详情，隐藏规格参数
		$(".Commoditydetails_btn").on("click",function(){
			$(this).css({"color":"#e8380d"});
			$(".parameter_btn").css({"color":"#000000"});
			$(".Commoditydetails").css({"display":"block"});
			$(".parameter").css({"display":"none"});
		})
		//点击规格参数，隐藏商品详情
		$(".parameter_btn").on("click",function(){
			$(this).css({"color":"#e8380d"});
			$(".Commoditydetails_btn").css({"color":"#000000"});
			$(".parameter").css({"display":"block"});
			$(".Commoditydetails").css({"display":"none"});
		});
		
		
		
	})
})