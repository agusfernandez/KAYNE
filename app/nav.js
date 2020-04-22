function navSlide(){    
        const hamburger= document.querySelector('.hamburger');
        console.log(hamburger);
        const nav= document.querySelector('.menu-list');
        console.log(nav);
        const navLinks= document.querySelectorAll('.menu-list li')
        console.log(navLinks);

        hamburger.addEventListener('click', ()=>{
            nav.classList.toggle('nav-active');

            navLinks.forEach((link, index  )=>{
           
                if(link.style.animation){
                    link.style.animation='';
                } else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1.5}s`;
                }
            })
           

            hamburger.classList.toggle('toggle');

        });


    
}

navSlide();

