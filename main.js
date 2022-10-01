gsap.fromTo('.word-1', {x:-70, opacity: 0},{x: 0, opacity: 1, duration: .6});

gsap.fromTo('.word-2', {x:-70, opacity: 0},{x: 0, opacity: 1, duration: 1});

gsap.fromTo('.word-3', {x:-70, opacity: 0},{x: 0, opacity: 1, duration: 1.4});

gsap.fromTo('.sphere', {x:-70, opacity: 0},{x: 0, opacity: 1, duration: 1.6});


const tlFirstSection = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: '1%',
        end: '10%',
        markers: false
    }
})

tlFirstSection.fromTo('.shaker', {x: -70, opacity:0}, {x: 0, opacity: 1, duration: 1})

tlFirstSection.fromTo('.container-text-1', {x: -70, opacity:0}, {x: 0, opacity: 1, duration: 1})

const tlSecondSection = gsap.timeline({
    scrollTrigger: {
        trigger: '.bartending',
        start: '1%',
        end: '10%',
        markers: false
    }
})

tlSecondSection.fromTo('.computer-img', {x: 70, opacity:0}, {x: 0, opacity: 1, duration: 1})

tlSecondSection.fromTo('.container-text-2', {x: 70, opacity:0}, {x: 0, opacity: 1, duration: 1})

const tlThirdSection = gsap.timeline({
    scrollTrigger: {
        trigger: '.web-development',
        start: '1%',
        end: '10%',
        markers: false
    }
})

tlThirdSection.fromTo('.react-img', {x: -70, opacity:0}, {x: 0, opacity: 1, duration: 1})

tlThirdSection.fromTo('.container-text-3', {x: -70, opacity:0}, {x: 0, opacity: 1, duration: 1})