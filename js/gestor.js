$(document).on('ready', function(){
	$('select').material_select();
	$('.modal').modal();
	$('input#input_text, textarea#tgestion').characterCounter();
	$('.tooltipped').tooltip({delay: 50});
	$('.tooltipped').tooltip({position:"left"});
	$('.datepicker').pickadate({
		container:"body"
	});
	$('.timepicker').pickatime({
		container:"body"
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
