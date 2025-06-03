$(function () {
    $('.envelope').on('click', function () {
        const $envelope = $(this);

        if (!$envelope.hasClass('open')) {
            $envelope.removeClass('new').addClass('open');
            const $letter = $envelope.find('.letter');
            $letter.hide().fadeIn(300, function () {
                setTimeout(function () {
                    $letter.addClass('reveal');
                }, 1450);
            });
        }
    });
});