const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portifolio-gallery").children;


for (let i=0; i<filterButtons.length; i++){
    filterButtons[i].addEventListener("click", function(){
        for(let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for(let k=0; k<items.length; k++){
            items[k].style.display = "none";
            if(target==items[k].getAttribute("data-id")){
                items[k].style.display="block";
            }
            if(target=="all"){
                items[k].style.display="block";
            }

        }

    })
}

const closeLightBox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
closeLightBox.addEventListener("click", function(){
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
})

const gallery = document.querySelector(".portifolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");
const lightboxImage = lightbox.querySelector("img");

galleryItem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click", function(){
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
    lightboxImage.src = element.querySelector("img").getAttribute("src");
    })
})



// fixar cabeçalho

window.onscroll = function(){
    const docScroolTop = document.documentElement.scrollTop;

    if(window.innerWidth>991){
        if(docScroolTop>100){
            document.querySelector("header").classList.add("fixed");
        }else{
            document.querySelector("header").classList.remove("fixed");
        }
    }
}


// navbar link

const navbar = document.querySelector(".navbar");
    a = navbar.querySelectorAll("a");

    a.forEach(function(element){
        element.addEventListener("click", function(){
            for(let i = 0; i < a.length; i++){
                a[i].classList.remove("active");
            }
            this.classList.add("active");
        })
    })


//ham-burger

const hamBurger = document.querySelector(".ham-burger");

hamBurger.addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("show");
})


