$(window).on('load', function () {
    $(document).ready(function() {

        var progress = $('.progressbar .progress')

        function counterInit( fValue, lValue ) {

            var counter_value = parseInt( $('.counter').text() );
            counter_value++;

            if( counter_value >= fValue && counter_value <= lValue ) {
                $('.counter').text( counter_value + '%' );
                progress.css({ 'width': counter_value + '%' });

                setTimeout( function() {
                    counterInit( fValue, lValue );
                }, 30 );
            } else {
                $(".pre-loader").delay("slow").fadeOut(function() {
                    $('.pre-loader').hide();
                });
            }

        }
        counterInit( 0, 100 );
    })
});