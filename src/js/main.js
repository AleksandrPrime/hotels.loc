$('#data-1, #data-2').datepicker({
});
$( "#speed" ).selectmenu();

$('#check-box').click(function () {
    if ($('#check').prop('checked') == true){
        $('#data-2').prop('disabled', false);

    } else {
        $('#data-2').prop('disabled', true);
    }
});

let nav = $('.menu__nav');

$('.menu__btn').click(function () {
    $(nav).slideToggle(400);
    $('.menu__nav').css('display', 'block');

});

$('.search-form__ex').on('click',function(e){
    if($('.search-form__ex--imp-1').click) {
        $("#depart").val($(this).text());
    } else if ($('.search-form__ex--imp-2').click){
        $("#arriv").val($(this).text());
    }
});
