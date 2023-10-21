
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
async function pageOpen(){
    // document.querySelector('.transition').style.display = 'flex';
    gsap.to('.transition li', { duration: .01, opacity: 0 })
    await delay(500)
    gsap.to('.transition li', { duration: .01, width: 20, height: 60, })
    await delay(10)
    gsap.to('.transition li', { duration: .5, scaleY: 1, transformOrigin: 'bottom left', stagger: .2})
    gsap.to('.transition li', { duration: .5, opacity: 1, transformOrigin: 'bottom left', stagger: .2})
    await delay(500)
    // hide
    gsap.to('.transition li', { duration: .5, scaleY: 0, transformOrigin: 'bottom left', stagger: .1, delay: .1})
    gsap.to('.transition li', { duration: .5, width: 0, height: 0, transformOrigin: 'bottom left'})
    await delay(100)
    gsap.to('.transition li', { duration: .1, width: 0, height: 0, transformOrigin: 'bottom left'})
    await delay(50)
    gsap.to('.transition li', { duration: .01, opacity: 100 })
}

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
function portfolioFill() {
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

}

// portfolioFill(); *********CALLED IN BARBA



    //modal functionality

    function modalOpen(id) {
        console.log(`opened ${id}`)
        let name = id.substring(0, id.length - 5)
        console.log(name)

        fetch('biscuits.json')
    .then(res => res.json())
    .then(data => { data.biscuits.forEach(function (biscuit) //this is inefficient and defeats (a part of) the purpose of having a JSON, but it works. 
        {
            if (biscuit['name'] == name)
        {
            console.log('found')
            //fill modal with content and open modal
            document.querySelector('#modal-title').textContent = biscuit.name;
            document.querySelector('#modal-about').textContent = biscuit.desc;
            document.querySelector('#modal-img').src = biscuit.img;
            document.querySelector('#modal-footer').innerHTML = `<a href="${biscuit.wikipedia}" target="_blank"><i class="fa-brands fa-github"></i></a><a target="_blank" href="${biscuit.wikipedia}"><i class="fa-brands fa-sith"></i></a><a target="_blank" href="${biscuit.wikipedia}"><i class="fa-solid fa-ghost"></i></footer>`
            // document.querySelector('#modal-wrapper').style.display = 'flex';
            let modalVar = document.querySelector('#modal-wrapper');
            gsap.to(modalVar, {duration: .8, x: 3000})
            
            // attempting to get around slow entry without speeding up animation or using display: none ** could probably work with opacity.
            // let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            // let middleman = vw * 1.5
            // let starting_pos = middleman - (middleman * 2)
            // end_point = middleman
            // gsap.fromTo(modalVar, { x: starting_pos}, { x: end_point, duration: 1 });


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
        let modalVar = document.querySelector('#modal-wrapper');
        gsap.to(modalVar, {duration: 1.2, x: -3000})
        // setTimeout(function () {
        //     modalVar.style.display = 'none';
        // }, 8000)
        
    }

    //BARBA MOCKUP
    function delay(n) {
        n = n || 2000;
        return new Promise(done => {
            setTimeout(() => {
                done();
            }, n);
        });
    };


    async function pageTransition(){
        // document.querySelector('.transition').style.display = 'flex';
        //place items
        gsap.to('.transition li', { duration: 0, opacity: 0, transformOrigin: 'bottom left', stagger: .2})
        gsap.to('.transition li', { duration: .01, width: 20, height: 60, })
        await delay(10)
        gsap.to('.transition li', { duration: .5, scaleY: 1, transformOrigin: 'bottom left', stagger: .2})
        gsap.to('.transition li', { duration: .5, opacity: 1, transformOrigin: 'bottom left', stagger: .2})
        await delay(500)
        // hide
        // gsap.to('.transition li', { duration: .5, scaleY: 0, transformOrigin: 'bottom left', stagger: .1, delay: .1})
        // gsap.to('.transition li', { duration: .5, width: 0, height: 0, transformOrigin: 'bottom left'})
        gsap.to('.transition li', { duration: .5, opacity: 0, transformOrigin: 'bottom left', stagger: .2})
        await delay(100)
        gsap.to('.transition li', { duration: .1, width: 0, height: 0, transformOrigin: 'bottom left'})
        gsap.to('.transition li', { duration: 0, opacity: 0, transformOrigin: 'bottom left', stagger: .2})
    }

// call done after time with some safeguarding and snazz
 
    barba.init({
        sync: true, 

        transitions: [{

            async leave(data) {
                const done = this.async();

                pageTransition();
                await delay(1000)
                done();
            },

            async enter(data) {
                // portfolioFill(); //this is bad. it needs to be called only when getting index, not when getting about or contact.
            },
            async beforeOnce(data) {
                pageOpen();
            }
        }],

        views: [{
            namespace: 'home',
            afterEnter(data) {
              home_jank();
              keyboard_spin()
              burgerMightBeClicked();
              
            }
          }, {
            namespace: 'about',
            afterEnter(data) {
                about_jank();
                burgerMightBeClicked();
              }
            }, {
                namespace: 'contact',
                afterEnter(data) {
                    about_jank();
                    document.querySelector('#contact-form').addEventListener('submit', (e) => {
                        e.preventDefault();
                    })
                    burgerMightBeClicked();
                  }
          }]
    })
// for some reason delaying 1 ms makes the anim work? 
 async function about_jank() {
    await delay(1)
    titleAnimation()
 }

 async function home_jank() {
    portfolioFill();
    await delay(1)
    titleAnimation()
 }

 async function keyboard_spin() {
    
    // gsap.to('#spinning-logo', {duration: .5, rotation: 360, repeat: -1});

    // let tlmlry = gsap.timeline({    
    //     scrollTrigger: {
    //         trigger: '#spinning-logo',
    //         start: '-1500% top',
    //         end: '+1000% bottom',
    //         scrub: true,
    //         toggleActions: 'play pause reverse complete',
    //     }
    // })
    // await delay(2)
    // tlmlry.to('#spinning-logo', {
       
        
    // })
    // await delay(1000)
    // keyboard_spin()
 }

// hook for getting to the top of page: 

barba.hooks.enter((data) => {
    console.log(data.next.namespace);
    //scroll to 400 pixels down from the top
    async function scrollski() {
        gsap.to(window, { duration: .01, scrollTo: 100 });
        await delay(10)
        gsap.to(window, { duration: .2, scrollTo: 0 });
    }
    scrollski();
  });


    
 














    //about me load
    function aboutMe() {
        //not in use anymore -> barba
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




//form submit 

function submitHandler() {
    window.open("https://media.tenor.com/AVgp2MWVZv4AAAAd/did-we-just-become-best-friends-did-we-just-become-best-friends-meme.gif")
}

//aweomse function to redirect to random new page that ISNT the current page

function burgerMightBeClicked(){
    console.log('bURGAH')
    let options = ['index.html', 'about.html', 'contact.html']
    let destination = Math.floor(Math.random() * 3)
    let location = window.location.href.slice(options[destination].length - (options[destination].length * 2)) //in the case that url match, slice down so comparison works.
    if (location == options[destination]) {
        burgerMightBeClicked();
        return;
    }
    else {
        console.log(`location: ${location} --- query: ${options[destination]}`)
        let burg = document.querySelector('#burger')
        burg.href = options[destination]
        // window.location.href = options[destination]
    }
    
}


function possiblyYou(){
    window.open ('https://media.tenor.com/IdPyq7eZoIAAAAPo/possibly-step-brothers.mp4')
}

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






// let timeln_1 = gsap.timeline( {
//     scrollTrigger: {
//         trigger: both_titles,
//         start: '300px',
//         end: '-300px',
//         scrub: true,
//         markers: true
//     }
// });

function titleAnimation() {
    let title1 = document.querySelector('#title-1')
gsap.from(title1, {duration: 1.5, y: 50, opacity: 0})


// ************* working title 2 bit *************
let headerBg = document.querySelector('#hd-bg');
let title2 = document.querySelector('#title-2')

gsap.from(title2, {duration: 1.5, y: -50, opacity: 0})
const tmlnr = gsap.timeline()
// working to function -> fades out 
gsap.to(headerBg, { scrollTrigger: {trigger: '.fade-trigger', start: 'top center', end: 'center center', scrub: true, toggleActions: 'play none reverse none'},
 opacity: 0});
}
















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