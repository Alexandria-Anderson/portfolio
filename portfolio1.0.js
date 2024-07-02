$(document).ready(function() {

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

    /* Instant Scrolling with Fade Effect */
    let currentSection = 0;
    var sections = $('.section');
    var totalSections = sections.length;

    function scrollToSection(index) {
        if (index >= 0 && index < totalSections) {
            let current = $(sections[currentSection]);
            let next = $(sections[index]);

            current.addClass('fade-out');
            next.addClass('fade-in');

            setTimeout(() => {
                current.removeClass('fade-out');
                current.hide(); // Hide the current section after fade-out
                next.show(); // Show the next section before fade-in
                next.removeClass('fade-in');
                currentSection = index;
                window.scrollTo({
                    top: next.offset().top,
                    behavior: 'instant'
                });
            }, 500); // 500ms matches the transition duration
        }
    }

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    function handleScroll(event) {
        if (event.originalEvent.deltaY > 0) {
            scrollToSection(currentSection + 1);
        } else {
            scrollToSection(currentSection - 1);
        }
        event.preventDefault();
    }

    function handleKeydown(event) {
        if (event.key === "ArrowDown") {
            scrollToSection(currentSection + 1);
        } else if (event.key === "ArrowUp") {
            scrollToSection(currentSection - 1);
        }
    }

    function setupScrollHandlers() {
        if (window.matchMedia("(max-width: 450px)").matches) {
            $(window).off('wheel', handleScroll);
            $(window).off('keydown', handleKeydown);
        } else {
            $(window).on('wheel', debounce(handleScroll, 95));
            $(window).on('keydown', handleKeydown);
        }
    }

    // Initially hide all sections except the first one
    sections.hide().first().show();
    
    setupScrollHandlers();
    window.addEventListener('resize', setupScrollHandlers);

});
