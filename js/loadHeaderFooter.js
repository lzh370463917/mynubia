define(["jquery","cookie"],function(){
	$.ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){
	})
})