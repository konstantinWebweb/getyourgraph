AOS.init({ // Einbindung der externen Library (Animate On Scroll für Einblende-Effekte)
    duration: 1000, // Dauer der Animation in Millisekunden (1000ms = 1s)
    once: true,     // Animation soll nur einmal ablaufen (beim ersten Scrollen)
    offset: 100     // Startet die Animation erst, wenn das Element 100px im Bild ist
});

function openProject(projectName){ //Funktion wird aufgerufen bei Klick auf Projektvorschau-> leitet auf Projektsubpage weiter
    console.log("Navigiere zu: " + projectName);
    window.location.href = 'Seiten/projectpage.html'; //nahtlose Weiterleitung auf Unterseite
}

document.addEventListener('DOMContentLoaded', function() {
    const yearContainer = document.getElementById('copyright-year');
    if(yearContainer){
        const currentYear = new Date().getFullYear();
        yearContainer.innerText = "©" + currentYear + "getyourgraph";
    }
});