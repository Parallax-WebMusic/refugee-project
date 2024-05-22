let docTitle=document.title
window.addEventListener("blur", ()=>{
    document.title="Come back";
})
window.addEventListener("focus", ()=>{
    document.title=docTitle;
})
let d = document;
// menu functions /////////////////////////////////////////////////////////////////
function openMenu(){
    d.getElementById("chSc-btn").style.animation='scrollSectBtn .5s ease'
    d.getElementById("chSc-btn").style.animationFillMode='both'
    d.getElementById("closeIcon").style.visibility='visible'
    d.getElementById("rotatedDecSect").style.animation='decoSect-rotate-1 .5s ease'
    d.getElementById("chSc-sect").style.animation='menuContOpen 1s ease'
    d.getElementById("chSc-sect").style.animationFillMode='both'

    d.getElementById("chSc-sect").style.background='white'

    d.getElementById("chSc-btn-pageNav").style.animation='scrollSectBtn-reverse .5s'
    d.getElementById("chSc-btn-pageNav").style.animationFillMode='both'
    d.getElementById("chSc-sect-pageNav").style.animation='pageNavOut'
    d.getElementById("chSc-sect-pageNav").style.animationFillMode='both'
}
function closeMenu(){
    d.getElementById("chSc-btn").style.animation='scrollSectBtn-reverse .5s'
    d.getElementById("chSc-btn").style.animationFillMode='both'
    d.getElementById("closeIcon").style.visibility='hidden'
    d.getElementById("rotatedDecSect").style.animation='decoSect-rotate-2 .5s ease'
    d.getElementById("chSc-sect").style.animation='menuContClose 1s ease'
    d.getElementById("chSc-sect").style.animationFillMode='both'

    d.getElementById("chSc-sect").style.background='none'
}
function openPageNav(){
    d.getElementById("chSc-btn-pageNav").style.animation='scrollSectBtn .5s ease'
    d.getElementById("chSc-btn-pageNav").style.animationFillMode='both'
    d.getElementById("chSc-sect-pageNav").style.animation='pageNavOpen 1s ease'
    d.getElementById("chSc-sect-pageNav").style.animationFillMode='both'

    d.getElementById("chSc-sect-pageNav").style.background='white'

    d.getElementById("chSc-btn").style.animation='scrollSectBtn-reverse .5s'
    d.getElementById("chSc-btn").style.animationFillMode='both'
    d.getElementById("closeIcon").style.visibility='hidden'
    d.getElementById("rotatedDecSect").style.animation='decoSect-rotate-2 .5s ease'
    d.getElementById("chSc-sect").style.animation='menuContOut'
    d.getElementById("chSc-sect").style.animationFillMode='both'
}
function closePageNav(){
    d.getElementById("chSc-btn-pageNav").style.animation='scrollSectBtn-reverse .5s'
    d.getElementById("chSc-btn-pageNav").style.animationFillMode='both'
    d.getElementById("chSc-sect-pageNav").style.animation='pageNavClose 1s ease'
    d.getElementById("chSc-sect-pageNav").style.animationFillMode='both'

    d.getElementById("chSc-sect-pageNav").style.background='none'
}
// second screen content //////////////////////////////////////////////////////////
function scrollToDiv(culture) {
    var div = document.getElementById("culture");
    if(div){
        div.scrollIntoView({ behavior: 'smooth' });
        var mainDiv = document.getElementById("filler");
        mainDiv.style.transform="translate(0,0)"
        var MainDiv = document.getElementById("filller");
        MainDiv.style.transform="translate(0,0)"
    }
}
function scrollToDivO(climate) {
    var div = document.getElementById("climate");
    if(div){
        div.scrollIntoView({ behavior: 'smooth' });
        var mainDiv = document.getElementById("filler");
        mainDiv.style.transform="translate(0,-550px)"
        var MainDiv = document.getElementById("filller");
        MainDiv.style.transform="translate(0,-550px)"
    }
}
function scrollToDivS(residency) {
    var div = document.getElementById("residency");
    if(div){
        div.scrollIntoView({ behavior: 'smooth' });
        var mainDiv = document.getElementById("filler");
        mainDiv.style.transform="translate(0,-1100px)"
        var MainDiv = document.getElementById("filller");
        MainDiv.style.transform="translate(0,-1100px)"
    }
}
function scrollToDivT(medicine) {
    var div = document.getElementById("medicine");
    if(div){
        div.scrollIntoView({ behavior: 'smooth' });
        var mainDiv = document.getElementById("filler");
        mainDiv.style.transform="translate(0,-1650px)"
        var MainDiv = document.getElementById("filller");
        MainDiv.style.transform="translate(0,-1650px)"
    }
}