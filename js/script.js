$(function() {
    var carouselList = $('#carousel ul');
    setInterval(changeSlide, 3000);

    function changeSlide() {
        carouselList.animate({ 'marginLeft': -400 }, 500, moveFirstSlide);
    }
    function previousSlide() {
        carouselList.animate({ 'marginLeft': 400 }, 500, moveFirstSlide);
    } 
    function moveFirstSlide() {
    	var firstItem = carouselList.find('li:first');
			lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
    }

    var moveLeft = $('.arrow-right'),
    	moveRight = $('.arrow-left');
    moveLeft.click(changeSlide);
    moveRight.click(previousSlide, setInterval(changeSlide, 5000));
});
