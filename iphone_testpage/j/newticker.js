$('.newsticker').newsTicker();
$('.newsticker').newsTicker({
    row_height: 48,
    max_rows: 2,
    speed: 1800,
    direction: 'up',
    duration: 9000,
    autostart: 1,
    pauseOnHover: 0
});
$('.newsticker').newsTicker({
    row_height: 64,
    speed: 1800,
    prevButton:  $('#prev-button'),
    nextButton:  $('#next-button'),
    stopButton:  $('#stop-button'),
    startButton: $('#start-button')
});

var nt = $('.newsticker').newsTicker();
nt.newsTicker('start');
nt.newsTicker('updateOption','direction','down');
var state = nt.newsTicker('getState');

