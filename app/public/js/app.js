// particlesJS.load("particles-js", "assets/particles.json", function() {
//   console.log("callback - particles.js config loaded");
// });

//Fullpagejs Lib
new fullpage("#fullpage", {
    anchors: ["sectionOne", "sectionTwo"],
    sectionsColor: ["#618685", "#36486b"],
    verticalCentered: false,
    onLeave: function(index, nextIndex, direction) {
        if (direction == "down") {
            onSectionTwoLoad();
        }

        if (direction == "up") {
            onSectionOneReturn();
        }
    }
});

//Triggers side panels to move in
function onSectionTwoLoad() {
    // console.log("Y");
    $(".scRight").removeClass("slideOutRight animated");
    $(".scLeft").removeClass("slideOutLeft animated");
    $(".scRight").addClass("slideInRight animated");
    $(".scLeft").addClass("slideInLeft animated");
}

//Relaxes side panels when you scroll back up
function onSectionOneReturn() {
    // console.log("N");
    $(".scRight").removeClass("slideInRight animated");
    $(".scLeft").removeClass("slideInLeft animated");
    $(".scRight").addClass("slideOutRight animated");
    $(".scLeft").addClass("slideOutLeft animated");
}

//Gives button moveSectionDown function
$(document).on("click", "#moveDown", function() {
    fullpage_api.moveSectionDown();
});

$(document).on("mouseover", "#moveDown1", function() {
    fullpage_api.moveSectionDown();
});

//ParticlesJS customization
particlesJS("particles-js", {
    particles: {
        number: { value: 165, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "edge",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 3 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.1538075462839288,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 300,
            color: "#ffffff",
            opacity: 1,
            width: 1
        },
        move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false, mode: "bubble" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});
