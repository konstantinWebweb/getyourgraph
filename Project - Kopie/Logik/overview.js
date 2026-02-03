// Daten --> Inhalte für Karten:

const designer = [
    { name: "KAIZO MURATA", 
      text: "Kaizo Murata ist ein japanischer Grafikdesigner und Interface-Stratege, bekannt für seine radikal minimalistischen Entwürfe und die tiefe Verwurzelung in der Zen-Ästhetik. Sein Design stellt die Reduktion, die Stille und die funktionale Klarheit in den Mittelpunkt. Stilrichtung (Extremer Minimalismus): Diese Richtung setzt auf ein Minimum an Elementen, eine monochrome Farbpalette und die gezielte Platzierung von kalligrafischen Akzenten in digitalen Rastern. Muratas Ziel ist eine objektive, zeitlose Gestaltung, die nicht nur gesehen, sondern als Raum erfahren wird.",
      img: "../Assets/Bilder getyourgraph/Kaizo Murata/Proj1Murata.jpg",
      link: "designerpageMurata.html"},

    { name: "SOFIA LORENZ", 
      text: "Sofia Lorenz ist eine deutsche Gestalterin, die sich auf ökologisches Design und nachhaltige Drucktechniken spezialisiert hat. Ihr Design stellt die Materialehrlichkeit, die Kreislaufwirtschaft und die visuelle Harmonie zwischen Natur und Technik in den Mittelpunkt. Stilrichtung (Eco-Minimalism): Diese Stilrichtung setzt auf reduzierte Farbinventare (Erdtöne), den Verzicht auf toxische Veredelungen und die Nutzung von geometrischen Rastern als ordnendes Element. Ziel ist eine verantwortungsbewusste, langlebige Gestaltung, die den ökologischen Fußabdruck minimiert, ohne an visueller Kraft zu verlieren.", 
      img: "../Assets/Bilder getyourgraph/Sofia Lorenz/Lorenz02.png",
      link: "designerpageSofia.html"},
      
    { name: "CLARA SULLIVAN", 
      text: "Clara Sullivan ist eine britische Designerin, die für ihre radikale Nutzung von Neonfarben und kinetischer Typografie international bekannt wurde. Ihr Design stellt die Dynamik, den Kontrast und die bewusste Regelbrechung in den Mittelpunkt. Stilrichtung (Digital Maximalism): Diese Stilrichtung setzt auf hochgesättigte Farbräume, sich ständig verändernde Schrifttypen und die Auflösung klassischer Hierarchien. Ziel ist eine provokante, lebendige und zukunftsorientierte Ästhetik, die die Grenzen zwischen statischem Grafikdesign und digitaler Performance verwischt.", 
      img: "../Assets/Bilder getyourgraph/Clara Sullivan/Projektserie 2/Proj2.2.png",
      link: "designerpageClara.html"},

    { name: "JULIEN MOREAU",
      text: "Julien Moreau ist ein französischer Grafikdesigner, dessen Werk die Grenze zwischen analoger Zerstörung und digitaler Präzision erkundet. Er ist bekannt für seine radikalen Cut-Out-Kompositionen, die durch grobe Dotted Textures und deplatzierte anatomische Fragmente eine tiefgreifende Gesellschaftskritik formulieren. Stilrichtung (Neo-Dadaismus / Analog-Digital-Hybrid): Diese Stilrichtung setzt auf bewusste Fragmentierung, haptische Rastereffekte und handgezeichnete Scribbles. Ziel ist eine provokante, ungeschönte Ästhetik, welche die Komplexität menschlicher Identität im Informationszeitalter visualisiert.", 
      img: "../Assets/Bilder getyourgraph/Julien Moreau/Projetc/P1.png",
      link: "designerpageMoreau.html"}
];

// Funktion, die HTML baut (DOM) --> geht jeden Designer in der Liste durch & erstellt dür jeden eine card (div)

function renderGrid(){
    const grid = document.getElementById("designer-grid");


// grid wurde in html gefunden: 
if (grid){
    designer.forEach(person => { /* für jede person (designer) wird eine card erstellt*/
        // div für die Karte erstellen:
        const card = document.createElement("div");
        //card.href = person.link; /*Verknüpfung Card mit HTML Seite aus Array oben*/
        card.className = "designer-card"; // --> nutzt CSS für Grid

        


        // Card mit Bild & Text füllen --> Class aus CSS nutzen: .designer-image:
        card.innerHTML = `
        <a href="${person.link}">
          <img src ="${person.img}" class="designer-image">
        </a> 
        <h2 style="border-bottom: 1px solid black; padding-bottom: 10px; padding-top: 10px; font-size:2rem; font-weight: lighter; text-transform: uppercase;">${person.name}</h2>
        <p class="designer-text">${person.text}</p>

        `;

        // JS nimmt fertige Karte & schiebt sie in die Section id="designer-grid" ins HTML:
        grid.appendChild(card);

    });
}
}

// Automatischer Start, wenn Seite geladen ist: 
window.addEventListener("DOMContentLoaded", renderGrid);


