const menuButton = document.getElementById("menu-button");
const menuDiv = document.getElementById("menu-div");

menuButton.addEventListener("click", function() {
    // Inverser la visibilité de la div en ajoutant ou en supprimant la classe "hidden"
    menuDiv.classList.toggle("hidden");
    // Ajouter ou supprimer la classe "active" à la div pour la rotation du chevron
    menuButton.classList.toggle("active");
    menuDiv.style.maxHeight = menuDiv.style.maxHeight ? null : `${menuDiv.scrollHeight}px`;
});