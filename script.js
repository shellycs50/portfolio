let timeline_test = gsap.timeline();
const headerBg = document.querySelector('#hd-bg');
gsap.registerPlugin(ScrollTrigger);


// let timeln_1 = gsap.timeline( {
//     scrollTrigger: {
//         trigger: headerBg, 
//         start: 
//         end: 'opacity: 0',
//         scrub: true,
//         markers: true
//     }
// });

// const both_titles = document.querySelector('.titles')

// gsap.from(both_titles, {duration: 1, opacity: 0});
// ** breaks and hides under background **
// timeline_test.to(both_titles, {
//     y: 1
// })



const title1 = document.querySelector('#title-1')


// let timeln_1 = gsap.timeline( {
//     scrollTrigger: {
//         trigger: both_titles,
//         start: '300px',
//         end: '-300px',
//         scrub: true,
//         markers: true
//     }
// });

gsap.from(title1, {duration: 1, y: 50, background: 'none'})

// ************* working title 2 bit *************

const title2 = document.querySelector('#title-2')

gsap.from(title2, {duration: 1, y: -50, background: 'none'})

// working to function -> fades out 
gsap.to(headerBg, { scrollTrigger: {trigger: '.fade-trigger', markers: 'on', start: 'bottom center', end: 'bottom center', toggleActions: 'play none reverse none'},
 opacity: 0});
// fades in 



// const headerBg = document.querySelector('#hd-bg')















// lenis (all the homies hate lenis)

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)