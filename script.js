


// JSON HANDLING

// let portfolio_content = '<div class="row">';
// fetch('biscuits.json')
// .then((res) => res.json())
// .then((data) => {
//     data.biscuits.forEach((biscuit) => {
//     console.log(biscuit);
//     portfolio_content += `<div class="row"> ${biscuit.name} </div>`;
// });

//     document.querySelector('#portfolio-content').innerHTML = portfolio_content;
    
let portfolio_content = ''
fetch('biscuits.json')
    .then(res => res.json())
    .then(data => {
        data.biscuits.forEach(function (biscuit) {
            console.log(biscuit.name)
            //**condition for testing */
            // if (biscuit.name != 'Digestive')
            // {
            //     return;
            // }
            portfolio_content += `<div class="project-wrapper">`
                portfolio_content += `<div class="row">`
                    portfolio_content += `<div class="col">`
                        portfolio_content += `<img src="${biscuit.img}">` //** disgusting boiler plate (max width -> needs doing .col img) */
                    portfolio_content += `</div>`
                    portfolio_content += `<div class="col">`
                        portfolio_content += `<h3>${biscuit.name}</h3>`
                        portfolio_content += `<p> ${biscuit.desc.slice(0, 60)}</p>`
                        portfolio_content += `<div class="portfolio-link">`
                            portfolio_content += `<a href="${biscuit.wikipedia}"><i class="fa-brands fa-github"></i></a>`
                            portfolio_content += `<a href="${biscuit.wikipedia}"><i class="fa-regular fa-eye"></i></a>`
                        portfolio_content += `</div>`
                    portfolio_content += `</div>`
                portfolio_content += `</div>`
        portfolio_content += `</div>`
        })
        document.querySelector('#portfolio-content').innerHTML = portfolio_content;

    })

    // portfolio_content += `<a id="${biscuit.name}-open"<img src="${biscuit.img}"></a>
//         <!-- 2 columns, both taking 50% (including padding) where each row is a project and a representative image. -->
//         <div class="row">
//             <div class="col">
//                 <img src="codestockimage.jpg" width="400px" height="auto">
//             </div>
            
//             <div class="col">
//                 <h3> Title of Project</h3>
//                 <p>Very brief description of the project about this long exactly.</p>
//                 <a href="#">Github</a>
//                 <a href="#">Live</a>

//             </div>










// BEGINNING OF GSAP, SCROLLTRIGGER ETC. 







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

gsap.from(title1, {duration: 1.5, y: 50, opacity: 0})


// ************* working title 2 bit *************

const title2 = document.querySelector('#title-2')

gsap.from(title2, {duration: 1.5, y: -50, opacity: 0})

// working to function -> fades out 
gsap.to(headerBg, { scrollTrigger: {trigger: '.fade-trigger', start: 'top center', end: 'top center', toggleActions: 'play none reverse none'},
 opacity: 0});
// fades in 



// const headerBg = document.querySelector('#hd-bg')















//lenis (all the homies hate lenis)

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)