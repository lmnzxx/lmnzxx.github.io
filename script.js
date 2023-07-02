//navbar
var navbare = document.getElementById("navbar");
var menu = document.getElementById("navbar-nav");

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbare.classList.add("sticky");
    }
    else{
        navbare.classList.remove("sticky");
    }
}

var typingEffect = new Typed(".multitext",{
    strings : ["Mahasiswa ITB STIKOM Bali, Prodi Sistem Komputer"],
    // loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    startDelay : 1000,
    backDelay : 1500
})

gsap.from('.konten p',{ duration: 1, x: -300, opacity: 0, ease: 'expo'});
gsap.from('.konten h1',{ duration: 2, x: -300, opacity: 0, ease: 'expo'});
gsap.from('.konten',{ duration: 2.5, x: -300, opacity: 0, ease: 'expo'});
gsap.from('.navbar',{ duration: 2, y: -100, opacity: 0, ease: 'expo'});

