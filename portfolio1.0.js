$(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);
	 gsap.to('.intro',{
	opacity: 1,
	duration: 0.5
});


	var tl = gsap.timeline({delay: 0.1});
	
	const slide = gsap.utils.toArray('.slide');
	const slideSlow = gsap.utils.toArray('.slide-slow');
	const targets = gsap.utils.toArray('.main-page-overlay');
	const bgImages = gsap.utils.toArray('.blur');
	const op = gsap.utils.toArray('.opacity');
	const titles = gsap.utils.toArray('.title-overlay');
	const fill = gsap.utils.toArray('.yellow-bg');
	const fill2 = gsap.utils.toArray('.white-bg');
	const fill3 = gsap.utils.toArray('.bg-gray');
	const pins = gsap.utils.toArray('.pin');
	const lineSpacer = gsap.utils.toArray('.line-spacer');
	const sciBgStyler = gsap.utils.toArray('.image-container-sciquel');
	const fadeIn = gsap.utils.toArray('.fade-in');
	const textScroll = $('.scroll-text');
	let buddytl = gsap.timeline({delay: 0.1});
	let texttl = gsap.timeline({delay: 0.1});
	let stairtl = gsap.timeline({delay: 0.1});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}	
//controlling the return button text
gsap.to(".button-overlay", {
	scrollTrigger: {
		trigger: '.button-overlay',
		pin: true,
		scrub: 1,
		toggleActions: "play none none none",
		start: "top bottom-=20%", 
		end: "bottom bottom",
		endTrigger: '#end-trigger-3'
  }
});

//Staircase functionality
stairtl.fromTo("#step-1", {
	scrollTrigger: {
		trigger: '#step-1',
		start: 'top bottom'
	}, 
	opacity: 0,
	y: '-50vh',
	delay: 0.1
},{
	opacity: 1,
	y: '0vh',
	duration: 2,
	delay: 0.1
	
});

stairtl.fromTo("#step-2", {
	scrollTrigger: {
		trigger: '#step-2',
		start: 'top bottom',
		delay: 0.5
	}, 
	opacity: 0,
	y: '-50vh'
},{
	opacity: 1,
	y: '0vh',
	duration: 2,
	delay: 0.5
	
});

stairtl.fromTo("#step-3", {
	scrollTrigger: {
		trigger: '#step-2',
		start: 'top bottom',
		delay: 0.75
	}, 
	opacity: 0,
	y: '-50vh'
},{
	opacity: 1,
	y: '0vh',
	duration: 2,
	delay: 0.75
	
});
//Illustration text rotating on mobile
gsap.to('.layer-mobile', {
	rotate: 100, 
	scrollTrigger:{
		scrub: true, 
		trigger: '.Illustration', 
		start: 'top bottom', 
		end: 'bottom top'
	}
});
	
	
//text scrolling effect on mobile (development)
	
texttl.to(".scroll-text", {
	scrollTrigger:{
		scrub: true, 
		trigger: ".scroll-text", 
		start: "top bottom",
		end: "bottom top"
	},
	x: '100vh'
});
	
//controlling the desktop animations on the landing page
if (window.innerWidth >= 500){

//line animation
lineSpacer.forEach((line) => {
  	gsap.to(line, {
		scrollTrigger: {
		  toggleActions: "restart none resume restart",
		  trigger: line,
		  start: "top bottom",
		  end: "top top-=90%",
		  scrub: 1

		},
		width: '90%',
		duration: 3
  });
});

//fading in effect for text and images
	
fadeIn.forEach((element)=> {
	gsap.to(element, {
		scrollTrigger: {
			toggleActions: "restart none resume restart",
			trigger: element,
			start: "top bottom",
			end: "bottom bottom"
		},
		opacity: "100%", 
		duration: 1
	});
});
//controlling the overlay animation
targets.forEach((text) => {
	tl.to(text, {
		scrollTrigger: {
			toggleActions: "restart none resume restart",
			trigger: text, 
			start: 'center bottom', 
			end: 'bottom center+=35%', 
			scrub: 1
		},
		x: '100%',
		duration: 3
	});
});
	
titles.forEach((title) => {
	tl.to(title, {
	scrollTrigger: {
			toggleActions: "restart none resume restart",
			trigger: title, 
			start: 'center bottom', 
			end: 'center center', 
			scrub: 1
		},
		x: '100%',
		duration: 3
	});
});
	
bgImages.forEach((image) => {	
	 tl.to(image, {
        scrollTrigger: {
            toggleActions: "restart none resume restart",
            trigger: image,
            start: 'top bottom',
            end: 'top top',
            scrub: 1
        },
        filter: 'blur(0px) brightness(1)', 
        duration: 3,
        ease: 'linear'
	 });
});

//blurring the background fills
	
fill.forEach((i) => {
	 tl.to(i, {
        scrollTrigger: {
            toggleActions: "restart none resume restart",
            trigger: i,
            start: 'top bottom',
            end: 'top top',
            scrub: 1
        },
        filter: 'blur(0px) brightness(1)', // Initial filter values
        duration: 3,
        ease: 'linear'});
	});
	
fill2.forEach((x) => {	
	 tl.to(x, {
        scrollTrigger: {
            toggleActions: "restart none resume restart",
            trigger: x,
            start: 'top bottom',
            end: 'top top',
            scrub: 1
        },
        filter: 'blur(0px) brightness(1)', // Initial filter values
        duration: 3,
        ease: 'linear'	
	 });
});

fill3.forEach((j) => {	
	tl.to(j, {
        scrollTrigger: {
            toggleActions: "restart none resume restart",
            trigger: j,
            start: 'top bottom',
            end: 'top top',
            scrub: 1
        },
        filter: 'blur(0px) brightness(1)', // Initial filter values
        duration: 3,
        ease: 'linear'	
	});
});

// allows for the opacity class to make the element transparent
op.forEach((item) => {
	tl.from(item, {
		scrollTrigger: {
			scrub: 1,
			toggleActions: "restart none resume restart",
			trigger: item,
			start: 'bottom bottom',
			end: 'top top'
		},
		opacity: 0,
		duration: 2
	});
});

	
// 2 different sliding speeds
slide.forEach((slide) => {
	tl.to(slide, {
		scrollTrigger: {
			scrub: 1,
			toggleAction: "restart none resume restart",
			trigger: slide,
			start: 'center bottom',
			end: 'bottom center'	
		},
		x: '-140%',
		y: 40,
		duration: 2
	});
});
	
slideSlow.forEach((slide) => {
	
	tl.to(slide, {
		scrollTrigger: {
			scrub: 1,
			toggleAction: "restart none resume restart",
			trigger: slide,
			start: 'center bottom',
			end: 'bottom center'	
		},
		x: '-30%',
		y: 20,
		duration: 2
	});
});
	
	}
});
