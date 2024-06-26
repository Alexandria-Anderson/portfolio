$(document).ready(function() {

    function showImage(src) {
        $('.image-container img').attr('src', src).css('visibility', 'visible');
    }

    function handleHover(elementClass, imageId, imageSrc) {
        $(elementClass).hover(
            function() {
                if (elementClass === '.animation') {
                    $('#thumbnail').html('<video id="hover-video" autoplay muted loop><source src="img/zodiac-virgo-slow.mp4" type="video/mp4"></video>');
                    $(imageId).css('visibility', 'visible');
                } else {
					$('#thumbnail').html('<img src="' + imageSrc + '">');
                    $(imageId).css('visibility', 'visible');
                    showImage(imageSrc);
                }
                console.log('Hovering over ' + elementClass);
            },
            function() {
              $(imageId).css('visibility', 'hidden');
                console.log('Leaving ' + elementClass);
            }
			
			
        );
    }

    // Hover bindings for each element
    handleHover('.illustration', '#illustration', 'img/chair.png');
    handleHover('.animation', '#animation', 'img/zodiac-virgo.png');
    handleHover('.uxuidesign', '#uxuidesign', 'img/Dashboard.png');
    handleHover('.fed', '#fed', 'img/hamburgermenu.png');

    /* Scrolling Text Animation */
    var containerHeight = $('.scrolling-text-container').height();
    var textDivs = $('.scrolling-text div');
    var totalDivs = textDivs.length;
    var animationDuration = totalDivs * 1;

    $('.scrolling-text').css('animation-duration', animationDuration + 's');
    $('.scrolling-text').append(textDivs.first().clone());

    var keyframes = `
    @keyframes scrollText {
        0% { top: 0; }
        ${100 / totalDivs}% { top: -${containerHeight}px; }
        ${200 / totalDivs}% { top: -${2 * containerHeight}px; }
        ${300 / totalDivs}% { top: -${3 * containerHeight}px; }
        ${400 / totalDivs}% { top: -${4 * containerHeight}px; }
        100% { top: -${containerHeight * totalDivs}px; }
    }
    `;

    $('<style>').prop('type', 'text/css').html(keyframes).appendTo('head');

    /* Smooth Scrolling */
    let currentSection = 0;
    var sections = $('.section');
    var totalSections = sections.length;

    function scrollToSection(index) {
        if (index >= 0 && index < totalSections) {
            const topOffset = $(sections[index]).offset().top;
            $('html, body').animate({ scrollTop: topOffset }, 500);
            currentSection = index;
        }
    }

    function debounce(func, wait) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        };
    }

    $(window).on('wheel', debounce(function(event) {
        if (event.originalEvent.deltaY > 0) {
            scrollToSection(currentSection + 1);
        } else {
            scrollToSection(currentSection - 1);
        }
        event.preventDefault();
    }, 100));

    $(window).on('keydown', function(event) {
        if (event.key === "ArrowDown") {
            scrollToSection(currentSection + 1);
        } else if (event.key === "ArrowUp") {
            scrollToSection(currentSection - 1);
        }
    });

});
