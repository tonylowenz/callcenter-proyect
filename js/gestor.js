$(document).on('ready', function(){
	$('.fixed-action-btn').floatingActionButton();
	$('select').formSelect();
	$('.modal').modal();
	$('input#input_text, textarea#tgestion').characterCounter();
	$('.tooltipped').tooltip({delay: 50});
	$('.tooltipped').tooltip({position:"left"});
	$('.datepicker').datepicker({
		container:"body",
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15, // Creates a dropdown of 15 years to control year,
		today: 'Today',
		clear: 'Clear',
		close: 'Ok',
		closeOnSelect: false // Close upon selecting a date,
	});
	$('.timepicker').timepicker({
		default: 'now', // Set default time: 'now', '1:30AM', '16:30'
	    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
	    twelvehour: false, // Use AM/PM or 24-hour format
	    donetext: 'OK', // text for done-button
	    cleartext: 'Clear', // text for clear-button
	    canceltext: 'Cancel', // Text for cancel-button,
	    container: "body", // ex. 'body' will append picker to body
	    autoclose: false, // automatic close timepicker
	    ampmclickable: true, // make AM PM clickable
	    aftershow: function(){} //Function for after opening timepicker
	});
});


$("#expand").click( function () {
	$("#ges").removeClass("div_height");
	$("#ges").addClass("expand");
	$(".phone_box").addClass("phone_box_reduce");
	$("textarea.materialize-textarea").css("height", "8vh");
});
$("#reduce").click( function () {
	$("#ges").removeClass("expand");
	$("#ges").addClass("div_height");
	$(".phone_box").removeClass("phone_box_reduce");
	$("textarea.materialize-textarea").css("height", "20vh");
});

//Intro Modals
$("#search").keyup(function(e){
		if (e.keyCode== 13) {
		$('#modal_busqueda').modal('open');	
		}
});

$("#m_bancarias").on("click", () => {
	$('#modal_bancarias').modal('open');
});

$("#m_pagos").on("click", () => {
	$('#modal_pagos').modal('open');
});

$("#m_agendar").on("click", () => {
	$('#modal_agendar').modal('open');
});
$("#m_agenda").on("click", () => {
	$('#modal_agenda').modal('open');
	$('#modal_agendar').modal('close');

});

$("#m_visitas").on("click", () => {
	$('#modal_visitas').modal('open');
});

$("#m_convenios").on("click", () => {
	$('#modal_convenios').modal('open');
});

$("#m_diarios").on("click", () => {
	$('#modal_diarios').modal('open');
});
$("#m_tabla_diarios").on("click", () => {
	$('#modal_tabla_diarios').modal('open');
	$('#modal_diarios').modal('close');
});

$("#m_saldos").on("click", () => {
	$('#modal_saldos').modal('open');
});
$("#m_estadisticas").on("click", () => {
	$('#modal_estadisticas').modal('open');
});

// End Modals
