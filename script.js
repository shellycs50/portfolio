
gsap.registerPlugin(ScrollTrigger);

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
                        portfolio_content += `<button id="${biscuit.name}-open" onclick="modalOpen(this.id)"><img src="${biscuit.img}"/></button>` //** disgusting boiler plate (max width -> needs doing .col img) */
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




    //modal functionality

    function modalOpen(id) {
        console.log(`opened ${id}`)
        let name = id.substring(0, id.length - 5)
        console.log(name)

        fetch('biscuits.json')
    .then(res => res.json())
    .then(data => { data.biscuits.forEach(function (biscuit)
        {
            if (biscuit['name'] == name)
        {
            console.log('found')
            //fill modal with content and open modal
            document.querySelector('#modal-title').textContent = biscuit.name;
            document.querySelector('#modal-about').textContent = biscuit.desc;
            document.querySelector('#modal-img').src = biscuit.img;
            document.querySelector('#modal-wrapper').style.display = 'flex';
            return;
        }
        else 
        {
            console.log('not found')
        }

        }) //end of data
        
    }) //end of res
    } //end of modalOpen


    //modal exit functionality

    function modalExit() {
        modalVar = document.querySelector('#modal-wrapper');
        // gsap.to(modalVar, {duration: 1.2, x: 3000})
        modalVar.style.display = 'none';
    }

    // <div id="modal-wrapper">
    // <div id="modal-content">
    //     <h2 id="modal-title">Fill Text Here</h2>
    //     <p id="modal-about"> About here blah blah blah About here blah blah blah</p>
    //     <img id="modal-img" src="images/Malan.webp" width="100px" height="auto">
    //     <footer id="modal-footer"><div>add</div><div>links in</div><div>script</div></footer>
    // </div>

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

//registered at top
// gsap.registerPlugin(ScrollTrigger);


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