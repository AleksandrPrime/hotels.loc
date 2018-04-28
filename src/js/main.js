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

$('.search-form__ex--city').on('click',function(e){
    let
        $this = $(this),
        $target = $(e.currentTarget);

    $this
    // ищем родительский тег
        .parent()
        // ищем братские теги по отношению к родителю
        .siblings()
        // выбираем икомый input
        .filter('.search-form__dep-input')
        // записываем значение
        .val($target.text()
        // разбиваем по запятой
            .split(',')
            // собираем снова
            .join(''));

});
