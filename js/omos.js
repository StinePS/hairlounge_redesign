//Siden er loadet
window.addEventListener("load", loadside);

function loadside() {
    console.log("side er loadet");
    document.querySelector("#text2").classList.remove("show");
    document.querySelector("#text2").classList.add("hide");
    document.querySelector("#text1").classList.add("show");

    document.querySelector("#knap_right").classList.remove("opacity");
    document.querySelector("#knap_left").classList.add("opacity");
    document.querySelector("#knap_right").addEventListener("click", rightslide);
}

function rightslide() {
    console.log("klik");
    document.querySelector("#text1").classList.remove("show");
    document.querySelector("#text1").classList.add("hide");

    document.querySelector("#knap_left").classList.remove("opacity");
     document.querySelector("#knap_right").classList.add("opacity");

    document.querySelector("#text2").classList.add("show");
    document.querySelector("#knap_left").addEventListener("click", loadside);
}
