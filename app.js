$(document).ready(function(){
	$("button").mouseover(function(){
		$("#car1").animate({ "left": "+=50px" }, "slow" );

	});

	$("button").mouseover(function(){
		$("#car2").animate({ "left": "+=40px" }, "slow" );

	});
});