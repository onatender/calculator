let show = $('.show');
show.val('0');
$('button').click(function () {
    let curVal = show.val();
    let btnVal = $(this).text();
    if ("0123456789".includes(btnVal)) {
        if (curVal.length <= 20)
            $('.show').val(curVal + btnVal);
            format();
    }
    if (btnVal == "CE") {
        show.val('0');
    }
    if (btnVal == '.') {
        if (!curVal.includes('.')) {
            $('.show').val('.'+curVal);
        }
    }
});

function format() {
    show.val(parseFloat(show.val()));
}

