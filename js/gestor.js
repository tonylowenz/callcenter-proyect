$(document).on('ready', function(){
	$('select').material_select();
	$('.modal').modal();
	$('input#input_text, textarea#tgestion').characterCounter();
	$('.tooltipped').tooltip({delay: 50});
	$('.tooltipped').tooltip({position:"left"});


	
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
$("#m_gestiones").on("click", () => {
	$('#modal_gestiones').modal('open');
});
$("#m_bancarias").on("click", () => {
	$('#modal_bancarias').modal('open');
});
$("#m_pagos").on("click", () => {
	$('#modal_pagos').modal('open');
});
$("#m_agenda").on("click", () => {
	$('#modal_agenda').modal('open');
});
$("#m_visitas").on("click", () => {
	$('#modal_visitas').modal('open');
});
$("#m_convenios").on("click", () => {
	$('#modal_convenios').modal('open');
});
$("#m_config").on("click", () => {
	$('#modal_config').modal('open');
});
$("#m_diarios").on("click", () => {
	$('#modal_diarios').modal('open');
});
$("#m_saldos").on("click", () => {
	$('#modal_saldos').modal('open');
});

// End Modals
