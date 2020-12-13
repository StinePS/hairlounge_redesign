//Siden er loadet
window.addEventListener("load", siteLoaded);


function siteLoaded() {
	console.log("siteLoaded");

	// Klik på burgermenu
	document.querySelector("#burgermenu").addEventListener("click", toggleMenu);
}

function toggleMenu() {
	console.log("toggleMenu");

	document.querySelector("#menupunkter").classList.toggle("on");

}
