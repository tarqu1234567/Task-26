let btn = document.querySelector(".btn_scroll")



window.onscroll = function(){
    if(window.scrollY >= 600){
        btn.style.display = "block";

    }
    else{
        btn.style.display = "none"; 
    }
}

btn.onclick = function(){
    scrollTo(0,0)
}