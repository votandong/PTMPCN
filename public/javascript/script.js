const btnScroll = document.querySelector(".vedau");

window.addEventListener("scroll", ()=>{
    if(window.scrollY < 20){
        btnScroll.classList.add("anScroll");
    }
    else{
        btnScroll.classList.remove("anScroll");
    }
})

function scrollToTop(){
    function scroll(){
        if(window.scrollY > 0){
            setTimeout(() => {
                window.scrollTo(0, window.scrollY - 10)
                scroll()
            }, 6);
        }
    }
    scroll();
}

btnScroll.addEventListener("click",scrollToTop);

// chuyen dong slide
var slides = document.querySelectorAll(".slide ul li");
var infoslides = document.querySelectorAll(".infosile ul li a");
console.log(infoslides);

function chuyenDong(){
    setInterval(()=>{
        autoSlide();
    },4000)
}
var chisohientai = 0;
const soluongSlide = slides.length;
function autoSlide(){
    var infosileHienTai = infoslides[chisohientai];
    var phantuhientai = slides[chisohientai];
    chisohientai = (chisohientai < soluongSlide -1) ? (chisohientai + 1) :(chisohientai = 0);
    var phantuTieptheo = slides[chisohientai];
    var infosildTiepTheo = infoslides[chisohientai];

    var xylyHienTaiHetThuc = function(){
        this.classList.remove("vewing");
        this.classList.remove("slideBienMat");
    }
    var xulytiepTheoKthuc = function(){
        this.classList.add("vewing");
        this.classList.remove("slideHienThi");
    }
    phantuhientai.addEventListener("webkitAnimationEnd",xylyHienTaiHetThuc);
    phantuTieptheo.addEventListener("webkitAnimationEnd",xulytiepTheoKthuc);
    
    phantuhientai.classList.add("slideBienMat");
    phantuTieptheo.classList.add("slideHienThi");

    infosileHienTai.classList.remove("Stronging");
    infosildTiepTheo.classList.add("Stronging");
}

chuyenDong();