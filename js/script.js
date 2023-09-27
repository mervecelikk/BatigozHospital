
// hero-slider start
var heroSlider=document.querySelector(".hero-slider");
    $(heroSlider).owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 800,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },

        }
    });
    console.log(heroSlider);

// hero-slider end
    

// services-slider start
    const nextIcon= '<img src="./img/ball-next.png" alt:"next" class="next">';
    const prevIcon= '<img src="./img/ball-prev.png" alt:"prev" class="prev">';
    var servicesSlider=document.querySelector(".services-slider");
    $(servicesSlider).owlCarousel({
        loop: true,
        margin:30,
        dots:false,
        nav:true,
        navText:[
            prevIcon,
            nextIcon,
        ],
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 800,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                
            },
            600: {
                items: 2,
                
            },
            1000: {
                items: 3,
                
            },
        }
    });
    console.log(servicesSlider);

    
    var prev= document.querySelector(".prev");
    var next= document.querySelector(".next");
    prev.addEventListener("mouseover",()=>{
    setTimeout(() => {
        prev.style.marginLeft="-53%";
        prev.style.opacity="1";
        },300);
        
    })
    prev.addEventListener("mouseleave",()=>{
        setTimeout(() => {
            prev.style.marginLeft="-50%";
            prev.style.opacity="0"; 
        },300);
    })
        
            
    next.addEventListener("mouseover",()=>{
        setTimeout(() => {
            next.style.marginLeft="49.7%"
            next.style.opacity="1";
        },300);
    })
    next.addEventListener("mouseleave",()=>{
        setTimeout(() => {
            next.style.marginLeft="46.5%";
            next.style.opacity="0";  
            
        },300);
        
    })
    console.log(next);
    console.log(prev);
// services-slider end


// canlı destek start
    $(function(){
        $("#live-support").click(function(){
                $(".canli").css("display","flex")
            })
        }) 
    $(function(){
        $(".fa-bars").mouseenter(function(){
            $(".exit").show()  
            $(".fa-x").click(function(){
                $(".canli").css("display","none")
            })
            $(".fa-x").mouseleave(function(){
                $(".exit").hide()
            })
        })
        
    })
// canlı destek start

// wy-us-nav start
    function openNavItem(evt, pane) {
        var i, whyUsPane, whyNavItem;
    var whyUsPane = document.getElementsByClassName("why-us-pane");
        for (i = 0; i < whyUsPane.length; i++) {
        whyUsPane[i].style.display = "none";
        }
        whyNavItem = document.getElementsByClassName("why-nav-item");
        for (i = 0; i < whyNavItem.length; i++) {
        whyNavItem[i].className = whyNavItem[i].className.replace(" active", " ");
        }
        document.getElementById(pane).style.display = "block";
        evt.currentTarget.className += " active";
    }
    document.getElementById("defaultOpen").click();
    
// wy-us-nav end


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        764:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        767:{
            items:3
        },
        990:{
            items:4
        }
    }
})

$('.owl-carousel3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
       576:{
            items:2
        },
        992:{
            items:3
        }
    }
})



















 
