var users = [];
$(document).ready(function () {
    $('.modal').modal({
        dismissible: true,
        inDuration: 500
    });
    $('.tabs').tabs();
    $('select').formSelect();
    $('.datepicker').datepicker({
        format:"yyyy-mm-dd"
    });
    select_usuarios('table_user');
});

$("#table_user").delegate('.row_user', 'click', function(){
    $('#modal1').modal("open");
    var index_pos = $(this).closest("tr").attr("id");
    $(".cont_img").css('background-image','url("http://201.172.31.105:8080/sistema/images/usuarios/'+ users[index_pos][0] +'-min.png")');
    $('#id_user').text(users[index_pos][0]);
    $('#puesto').text(users[index_pos][2]);
    $('#name').val(users[index_pos][1]);
    $('#alias').val(users[index_pos][7]);
    $('#sexo').empty();
    $('#sexo').append('<option value="'+ users[index_pos][15]+'">'+ users[index_pos][14] +'</option>' + '<option value="H">Masculino</option><option value="M">Femenino</option>');
    $('#ingreso').val(users[index_pos][3]);
    $('#telefono').val(users[index_pos][13]);
    $('#celular').val(users[index_pos][4]);
    $('#correo').val(users[index_pos][8]);
    $('#jefe').val(users[index_pos][5]);
    // $('#empleado').val(users[index_pos][17]);
    $('#empleado').empty();
    $('#empleado').append('<option value="' + users[index_pos][17] + '">' + users[index_pos][16] + '</option><option value="1">Administrativo</option><option value="0">Operativo</option>');

    $('#sucursal').empty();
    $('#sucursal').append('<option value="' + users[index_pos][9] + '">' + users[index_pos][18] + '</option><option value="1">Monterrey</option><option value="2">Puebla</option>');
    $('#f_nacimiento').val(users[index_pos][3]);
    
    $('select').formSelect();
});

$(".edit").click(function () {
    $(".edit").addClass("hide");
    $(".save").removeClass("hide");
    $(".input-field input").removeAttr("readonly");
    // $("#alias").removeAttr("readonly");
});

$(".save").click(function () {
    $(".save").addClass("hide");
    $(".edit").removeClass("hide");
    $(".input-field input").attr("readonly", "readonly");
});