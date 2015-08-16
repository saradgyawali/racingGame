$(document).ready(function(){

	$("#start_game").click(function(){

	});

	$("#start_game").keyup(function(event){
		if (event.which === 90) {
			$("#car1").animate({left: "+=10px"}, "fast");
		}
		else if (event.which === 80) {
			$("#car2").animate({left: "+=10px"}, "fast");
		}
	});

});

$(document).ready(function(){
	$(".play_key").hide();
	
	$("#instruction").click(function(){
		$(".play_key").toggle("slow");
		$(".play_key").animate({
			left:"120px",
			opacity:"1",
			height:"50px",
			width:"200px"
		});
		$("#instruction").css("background-color", "lightgreen");
	});

});

// $(document).ready(function(){
// 	$("#start_game").click(function(){
// 		$(".go").toggle();
// 		$(".go").animate({
// 			left:"200px";
// 		});
// 	});

// });

// $("button").mouseleave(function(){
// 		$("#car1").animate({ "left": "+=10px" }, "fast" );
// 	});

// $("button").mouseleave(function(){
// 		$("#car1").animate({ "left": "+=10px" }, "fast" );
// 	});

// 	$("button").mouseenter(function(){
// 		$("#car2").animate({ "left": "+=9px" }, "fast" );

// 	});
// 	$("button").mouseleave(function(){
// 		$("#car2").animate({ "left": "+=9px" }, "fast" );
// 	});

