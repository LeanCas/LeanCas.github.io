$(function () {

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Count
    $('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 1000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    btn.addEventListener("click", scrollToTop);

    window.onscroll = function () {
        const btn = document.getElementById("scrollToTopBtn");
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };


    // Services Cards Scroll Animation
    function updateServiceCards() {
        const cards = document.querySelectorAll('.service-card');
        const section = document.querySelector('.services-new');
        
        if (!section || cards.length === 0) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Trigger zone: starts when section enters viewport, ends at 50% through section
        const triggerStart = sectionTop - windowHeight * 0.8; // Start earlier when section becomes visible
        const triggerEnd = sectionTop + (sectionHeight * 0.5); // End at 50% of section height
        const triggerZoneHeight = triggerEnd - triggerStart;
        
        // Check if we're in the animation zone
        const inAnimationZone = scrollY >= triggerStart && scrollY <= triggerEnd;
        const afterAnimationZone = scrollY > triggerEnd;
        
        if (inAnimationZone || afterAnimationZone) {
            // Calculate progress (0 to 1) through the animation zone
            let progress = Math.max(0, Math.min(1, (scrollY - triggerStart) / triggerZoneHeight));
            
            // If we're past the animation zone, show all cards
            if (afterAnimationZone) {
                progress = 1;
            }
            
            const totalCards = cards.length;
            const activeCardCount = Math.ceil(progress * totalCards);
            
            // Activate cards progressively with immediate effect
            cards.forEach((card, index) => {
                if (index < activeCardCount) {
                    if (!card.classList.contains('active')) {
                        // Small stagger only for initial activation
                        setTimeout(() => {
                            card.classList.add('active');
                        }, index * 80);
                    }
                } else if (!card.matches(':hover')) {
                    card.classList.remove('active');
                }
            });
        } else {
            // Remove active class from all cards when section is out of view
            cards.forEach(card => {
                if (!card.matches(':hover')) {
                    card.classList.remove('active');
                }
            });
        }
    }
    
    // Throttle scroll event for better performance
    let scrollTicking = false;
    function handleServiceScroll() {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                updateServiceCards();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }
    
    // Service Cards Hover Enhancement
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        card.addEventListener('mouseleave', function() {
            // Small delay to check scroll position after hover ends
            setTimeout(() => {
                updateServiceCards();
            }, 150);
        });
    });
    
    // Initialize on page load
    setTimeout(() => {
        updateServiceCards();
    }, 500);
    
    // Add scroll listener
    window.addEventListener('scroll', handleServiceScroll);
    
    // Add resize listener to recalculate on window resize
    window.addEventListener('resize', () => {
        setTimeout(updateServiceCards, 100);
    });

    // Aos
	AOS.init({
		once: true,
	});

});

