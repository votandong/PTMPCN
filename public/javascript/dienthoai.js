var btnScroll = document.querySelector(".vedau");
console.log(btnScroll);
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 50){
        btnScroll.classList.remove("anScroll");
    }
    else{
        btnScroll.classList.add("anScroll");
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