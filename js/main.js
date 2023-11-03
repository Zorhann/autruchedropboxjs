const menuButton = document.getElementById("menu-button");
const menuDiv = document.getElementById("menu-div");

menuButton.addEventListener("click", function() {
    // Ici on ajoute ou retire la classe hidden pour gérer l'affichage de la div
    menuDiv.classList.toggle("hidden");
    // Ici on ajoute oue retire la classe active pour gérer l'animation de la fléche
    menuButton.classList.toggle("active");
})