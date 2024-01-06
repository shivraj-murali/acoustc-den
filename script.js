new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    autoplay: false,
    pauseOnHover: false,
    arrows: false,
    pagination: true,
    speed: 1000,
    interval: 3000,
    easing: 'cubic-bezier(.42,.65,.27,.99)',
    breakpoints: {
        768: {
            perPage: 1,
        }
    }
}).mount();




const menu = document.querySelector('.hamburgerMenu');
    menu.addEventListener("click", function(){
        gsap.to(".nav-tab", {
            width: "100%",
            duration: 1,
            stagger: 0.5
        })
        
        gsap.to(menu, {
            width: "0%",
            display: "none",
            // position: "relative",
            // delay: 1,
            // duration: 1,
        })

        gsap.to(".nav-list", {
            display: "block",
          })
    }
    )

    // menu.addEventListener("click", function(){
    //     gsap.to(".nav-list", {
    //        color: '#dadada',
    //         delay: 1,
    //         duration: 1,
    //     }) 
    // }
    // )

    menu.addEventListener("click", function(){
        gsap.to(".cross", {
            width: "5rem",
            // display: "none",
            duration: 1,
        })
        
    }
    )

    menu.addEventListener("click", function(){
        gsap.to(".nav-list", {
           color: '#dadada',
            // delay: 1,
            duration: 1,
        }) 
    }
    )

    const cross = document.querySelector('.cross')


    cross.addEventListener("click", function(){
        gsap.to(".nav-tab", {
            width: "0%",
            duration: 0.5,
            stagger: 0.5,
        }) 
        gsap.to(".nav-list", {
            display: "none",
          })

    }
    )

    cross.addEventListener("click", function(){
        gsap.to(".cross", {
            width: "0%",
            duration: 0,
        }) 
    }
    )

    cross.addEventListener("click", function(){
        gsap.to(menu, {
            width: "5rem",
            // delay: 1,
            duration: 0.3,
            display: "block",
        }) 
    }
    )

    cross.addEventListener("click", function(){
        gsap.to(".nav-list", {
           color: '#1d1d1d',
        }) 
    }
    )

    const links = document.querySelector('.list1')
    links.addEventListener("click", function(){
        gsap.to(".nav-tab", {
            width: "0%",
            duration: 0.5,
            delay:1,
        })

        gsap.to(".nav-list", {
        display: "none",
        delay: 0.8,
        // duration: ,
        })
    })

    links.addEventListener("click", function(){
        gsap.to(".cross", {
           width: "0%",
            duration: 0.5,
            delay:1,
        })
    })

    links.addEventListener("click", function(){
        gsap.to(".hamburgerMenu", {
            width: "5rem",
            duration: 0.5,
            display: "block",
            delay:1,
        })
    })



    const link2 = document.querySelector('.list2')
    link2.addEventListener("click", function(){
        gsap.to(".nav-tab", {
            width: "0%",
            duration: 0.5,
            delay:1,
        })

        gsap.to(".nav-list", {
        display: "none",
        delay: 0.8,
        // duration: ,
        })
    })

    link2.addEventListener("click", function(){
        gsap.to(".cross", {
           width: "0%",
            duration: 0.5,
            delay:1,
        })
    })

    link2.addEventListener("click", function(){
        gsap.to(".hamburgerMenu", {
            width: "5rem",
            duration: 0.5,
            display: "block",
            delay:1,
        })
    })



    const link3 = document.querySelector('.list3')
    link3.addEventListener("click", function(){
        gsap.to(".nav-tab", {
            width: "0%",
            duration: 0.5,
            delay:1,
        })

        gsap.to(".nav-list", {
        display: "none",
        delay: 0.8,
        // duration: ,
        })
    })

    link3.addEventListener("click", function(){
        gsap.to(".cross", {
           width: "0%",
            duration: 0.5,
            delay:1,
        })
    })

    link3.addEventListener("click", function(){
        gsap.to(".hamburgerMenu", {
            width: "5rem",
            duration: 0.5,
            display: "block",
            delay:1,
        })
    })

    const link4 = document.querySelector('.list4')
    link4.addEventListener("click", function(){
        gsap.to(".nav-tab", {
            width: "0%",
            duration: 0.5,
            delay:1,
        })

        gsap.to(".nav-list", {
        display: "none",
        delay: 0.8,
        // duration: ,
        })
    })

    link4.addEventListener("click", function(){
        gsap.to(".cross", {
           width: "0%",
            duration: 0.5,
            delay:1,
        })
    })

    link4.addEventListener("click", function(){
        gsap.to(".hamburgerMenu", {
            width: "5rem",
            duration: 0.5,
            display: "block",
            delay:1,
        })
    })

    const link5 = document.querySelector('.list5')
    link5.addEventListener("click", function(){
        gsap.to(".nav-tab", {
            width: "0%",
            duration: 0.5,
            delay:1,
        })

        gsap.to(".nav-list", {
        display: "none",
        delay: 0.8,
        // duration: ,
        })
    })

    link5.addEventListener("click", function(){
        gsap.to(".cross", {
           width: "0%",
            duration: 0.5,
            delay:1,
        })
    })

    link5.addEventListener("click", function(){
        gsap.to(".hamburgerMenu", {
            width: "5rem",
            duration: 0.5,
            display: "block",
            delay:1,
        })
    })

    const link6 = document.querySelector('.list6')
    link6.addEventListener("click", function(){
        gsap.to(".nav-tab", {
            width: "0%",
            duration: 0.5,
            delay:1,
        })

        gsap.to(".nav-list", {
        display: "none",
        delay: 0.8,
        // duration: ,
        })
    })

    link6.addEventListener("click", function(){
        gsap.to(".cross", {
           width: "0%",
            duration: 0.5,
            delay:1,
        })
    })

    link6.addEventListener("click", function(){
        gsap.to(".hamburgerMenu", {
            width: "5rem",
            duration: 0.5,
            display: "block",
            delay:1,
        })
    })

    const link7 = document.querySelector('.list7')
    link7.addEventListener("click", function(){
        gsap.to(".nav-tab", {
            width: "0%",
            duration: 0.5,
            delay:1,
        })

        gsap.to(".nav-list", {
        display: "none",
        delay: 0.8,
        // duration: ,
        })
    })

    link7.addEventListener("click", function(){
        gsap.to(".cross", {
           width: "0%",
            duration: 0.5,
            delay:1,
        })
    })

    link7.addEventListener("click", function(){
        gsap.to(".hamburgerMenu", {
            width: "5rem",
            duration: 0.5,
            display: "block",
            delay:1,
        })
    })
