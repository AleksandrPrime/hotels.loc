$(function () {

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
    $('.menu__nav').toggleClass('menu__opened');
});

/*$(document).click(function(event) {
    if ($(event.target).closest(".menu__btn").length ) return;
    $('.menu__nav').removeClass('menu__opened').css('display', 'none');
    event.stopPropagation();
});*/

$('.search-form__ex--city').on('click',function(e){
    let
        $this = $(this),
        $target = $(e.currentTarget);

    $this
        .parent()
        .siblings()
        .filter('.search-form__dep-input')
        .val($target.text()
            .split(',')
            .join(''));

});

function check() {

    let data1 = $('#depart').val();
    let data2 = $('#arriv').val();
    if(data1.length != 0 || data2.length != 0) {

        $('.search-form__swap').prop('disabled', false);
    } else {
        $('.search-form__swap').prop('disabled', true);
    }
};
$('#arriv').keyup(check);
$('#depart').keyup(check);

$('.search-form__swap').on('click', function() {
    let
        $depart = $('#depart'),
        $arriv = $('#arriv'),
        arrivVal = $arriv.val(),
        departVal = $depart.val();

    $depart.val(arrivVal);
    $arriv.val(departVal);
});

})