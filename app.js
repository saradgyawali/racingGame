$(document).ready(function(){

	$("#start_game").click(function(){

	});

	$("#start_game").keyup(function(event){
		if (event.which === 90) {
			$("#car1").animate({left: "+=20px"}, "fast");
		}
		else if (event.which === 80) {
			$("#car2").animate({left: "+=20px"}, "fast");
		}
	});


});

$(document).ready(function(){
	$(".play_key").hide();
	
	$("#instruction").click(function(){
		$(".play_key").toggle("slow");
		$(".play_key").animate({
			right:"100px",
			opacity:"1",
			height:"40px",
			width:"200px",
		}, linear);
		$("#instruction").css("background-color", "lightgreen");
	});
	$("#start_game").click(function(){
		$("#start_game").css("background-color","skyblue");
	})

});

// Resets the Whole Page
$(document).ready(function(){

    $("#reset").click(function(){
    	location.reload();

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

