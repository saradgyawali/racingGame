$(document).ready(function(){
	
	var player1moves = 0;
	var player2moves = 0;

	$("#start_game").keyup(function(event){
        console.log(event.which, player1moves, player2moves);
		if (event.which === 90) {
			$("#car1").animate({left: "+=20px"}, "fast");
			player1moves++
			if (player1moves === 54) {
				// declare a winner
				alert("Orange Car Wins!!! Red Loses")
			}

		}
		else if (event.which === 80) {
			$("#car2").animate({left: "+=20px"}, "fast");
			// increment a keypress
			player2moves++
			// call your function w/ params
			if (player2moves === 54) {
				alert("Red Car Wins!!! Orange Loses")
			}
		}
	});


	$(".play_key").hide();

	//Resets the Game
    $("#reset").click(function(){
    	location.reload();

    });
	
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
		$("#start_game").css("background-color","red");
	})


});

