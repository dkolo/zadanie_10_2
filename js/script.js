$(function slider() {
    var carouselList = $('#carousel ul'),
        interval = setInterval(changeSlide, 3000);

    function changeSlide() {
        carouselList.animate({ 'marginLeft': -400 }, 500, moveFirstSlide);
    }

    function previousSlide() {
        var firstItem = carouselList.find('li:first'),
            lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({ marginLeft: -400 });
        carouselList.animate({ 'marginLeft': 0 });
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first'),
            lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({ marginLeft: 0 });

    }

    $('.arrow-right').click(function() {
        changeSlide();
        clearInterval(interval);
    });
    $('.arrow-left').click(function() {
        previousSlide();
        clearInterval(interval);
    });
});