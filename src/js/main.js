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