$(document).on('ready', function(){

	/* costume random and preloader*/

	var costume = Math.floor( Math.random() * 3) + 1;
	$("#box_image").empty();
	$("#box_image").append('<img class="width_100" src="images/logoSicsa/logo_sicsa'+costume+'.png">');
	$("#log_in").addClass('button_log'+costume)

	window.onload = function(){
	}

	window.setTimeout( function(){
		$(".container").show(5000);
		$("#preloader").hide();
		$("body").addClass("login"+costume);
	},5000);
	
	/* end costume random and preloader*/

	
});
