//locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function initAnimations() {
    var tl = gsap.timeline();
    tl.from(".navlogo a", {
        y: -10,
        duration: 0.6,
        opacity: 0,
        delay: 1
    });
    tl.from(".navbar a", {
        y: 8,
        duration: 0.2,
        opacity: 0,
        stagger: 0.1,
        // delay:0.5,
    });
    tl.from(".navicons a", {
        y: 8,
        duration: 0.3,
        opacity: 0,
        stagger: 0.2,
        // delay:0.5,
    });

    var cursor = document.querySelector(".cursor");
    var page1 = document.querySelector(".page1");

    page1.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            duration: 1,
            ease: "back.out"
        });
    });
}
function initScrollAnimations() {
    gsap.from(".page3 img", {
        y: 80,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page3 img",
            scroller: "body",
            start: "top 100%",
            end: "top 50%",
            scrub: 1
        }
    });

    gsap.from(".page3lefttext .box h2", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".page3lefttext .box h2",
            scroller: "body",
            start: "top 100%",
            end: "top 50%",
            scrub: 1
        }
    });

    gsap.from(".page3lefttext .box p", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".page3lefttext .box h2",
            scroller: "body",
            start: "top 100%",
            end: "top 50%",
            scrub: 2
        }
    });

    gsap.from(".page3lefttext .buttonsss", {
        y: 80,
        duration: 0.2,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".page3lefttext .buttonsss",
            scroller: "body",
            start: "top 150%",
            end: "top 90%",
            scrub: 2
        }
    });
}
function initPage3Animations() {
    gsap.from(".page3lefttext .buttonsss a", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".page3lefttext .buttonsss a",
            scroller: "body",
            start: "top 150%",
            end: "top 110%",
            scrub: 2
        }
    });

    gsap.from(".page3righttext .box h2", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".page3righttext .box h2",
            scroller: "body",
            start: "top 100%",
            end: "top 50%",
            scrub: 1
        }
    });

    gsap.from(".page3righttext .box p", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".page3righttext .box h2",
            scroller: "body",
            start: "top 100%",
            end: "top 50%",
            scrub: 2
        }
    });

    gsap.from(".buttonsss", {
        y: 80,
        duration: 0.2,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".buttonsss",
            scroller: "body",
            start: "top 150%",
            end: "top 90%",
            scrub: 2
        }
    });

    gsap.from(".buttonsss a", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".buttonsss a",
            scroller: "body",
            start: "top 150%",
            end: "top 110%",
            scrub: 2
        }
    });
}
function page4n5animation() {
    gsap.from(".page4 img", {
        y: 80,
        duration: 0.2,
        opacity: 0,
        stagger: 0.6,
        scrollTrigger: {
            trigger: ".page4 img",
            scroller: "body",
            start: "top 110%",
            end: "top 50%",
            scrub: 1
        }
    });

    gsap.from(".page4 h2", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
            trigger: ".page4 h2",
            scroller: "body",
            start: "top 80%",
            end: "top 50%",
            scrub: 1
        }
    });

    gsap.from(".page4 p", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".page4 p",
            scroller: "body",
            start: "top 80%",
            end: "top 50%",
            scrub: 1
        }
    });

    gsap.from(".page4 .buttonss", {
        y: 80,
        delay: 1,
        duration: 0.5,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".page4 .buttonss",
            scroller: "body",
            start: "top 80%",
            end: "top 50%",
            scrub: 1
        }
    });

    gsap.from(".page5 .navbar2 a", {
        y: 80,
        delay: 1,
        duration: 0.5,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".page5 .navbar2 a",
            scroller: "body",
            start: "top 110%",
            end: "top 50%",
            scrub: 2
        }
    });

    gsap.from(".page5 img", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 0.6,
        scrollTrigger: {
            trigger: ".page5 img",
            scroller: "body",
            start: "top 110%",
            end: "top 50%",
            scrub: 2
        }
    });

    gsap.from(".cardinfo h2", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".cardinfo h2",
            scroller: "body",
            start: "top 150%",
            end: "top 80%",
            scrub: 1
        }
    });

    gsap.from(".cardinfo p", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".cardinfo p",
            scroller: "body",
            start: "top 150%",
            end: "top 90%",
            scrub: 1
        }
    });
}
function page6animation() {
    gsap.from(".page6 .minsec1 h4", {
        x: -80,
        delay: 1,
        duration: 0.5,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
            trigger: ".page6 .minsec1 h4",
            scroller: "body",
            start: "top 110%",
            end: "top 90%",
            scrub: 2
        }
    });

    gsap.from(".page6 .minsec1 h2", {
        x: -80,
        delay: 1,
        duration: 0.5,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
            trigger: ".page6 .minsec1 h2",
            scroller: "body",
            start: "top 110%",
            end: "top 90%",
            scrub: 2
        }
    });

    gsap.from(".page6 .minsec2 p", {
        x: -80,
        duration: 0.5,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
            trigger: ".page6 .minsec2 p",
            scroller: "body",
            start: "top 110%",
            end: "top 90%",
            scrub: 2
        }
    });

    // gsap.from(".buttonss p",{
    //     x:-80,
    //     duration:0.5,
    //     opacity:0,
    //     stagger:1,
    //     scrollTrigger:{
    //         trigger:".buttonss p",
    //         scroller:"body",
    //         // markers:true,
    //         start:"top 110%",
    //         end:"top 90%",
    //         scrub:2
    //     }
    // });

    gsap.from(".page6 .minsec2 h5", {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
            trigger: ".page6 .minsec2 h5",
            scroller: "body",
            start: "top 130%",
            end: "top 100%",
            scrub: 2
        }
    });

    gsap.from(".page6 .tabsec2 img", {
        x: 80,
        duration: 0.2,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page6 .tabsec2 img",
            scroller: "body",
            start: "top 100%",
            end: "top 40%",
            scrub: 1
        }
    });
}
page6animation();
initScrollAnimations();
page4n5animation();
initAnimations();
initPage3Animations();

const header = document.querySelector('.header');
let lastScrollTop = 0;
let isHeaderAnimating = false;

const initialHeaderStyles = {
    display: header.style.display,
    position: header.style.position,
    top: header.style.top,
};

function handleScroll() {
    if (isHeaderAnimating) return;

    const scrollTop = window.scrollY || window.pageYOffset;

    if (scrollTop > lastScrollTop) {
        // Scrolling down, hide the header
        if (header.style.display !== 'none') {
            isHeaderAnimating = true;
            gsap.to(header, { opacity: 0, duration: 0.5, onComplete: hideHeader });
        }
    } else {
        // Scrolling up, show the header
        if (header.style.display === 'none') {
            isHeaderAnimating = true;
            showHeader();
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

function hideHeader() {
    header.style.display = 'none';
    isHeaderAnimating = false;
}

function showHeader() {
    Object.assign(header.style, initialHeaderStyles);
    gsap.to(header, { opacity: 1, duration: 0.5, onComplete: () => { isHeaderAnimating = false; } });
}

window.addEventListener('scroll', handleScroll);