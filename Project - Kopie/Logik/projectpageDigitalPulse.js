/* js/data.js */

const projects = [
    {
        id: 1,
        title: "Projectname 1",
        year: 2019,
        image: "assets/img/project1.jpg"
    },
    {
        id: 2,
        title: "Projectname 2",
        year: 2020,
        image: "assets/img/project2.jpg"
    }
   
];

const designerInfo = {
    name: "Max Mustermann",
    city: "Hamburg"
};

/* js/main.js */

console.log("Website loaded.");



/* js/project.js */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- HERO SLIDER LOGIK ---
    const heroImage = document.querySelector('.hero-img');
    
    // Array mit Bildquellen für die Rotation
  
    const sliderImages = [
        '../Assets/Bilder getyourgraph/Clara Sullivan/Projektserie 1/Proj1.1.png', // Bild 1 (Standard)
        '../Assets/Bilder getyourgraph/Clara Sullivan/Projektserie 1/Proj1.2.png', 
        '../Assets/Bilder getyourgraph/Clara Sullivan/Projektserie 1/Proj1.3.png',
        '../Assets/Bilder getyourgraph/Clara Sullivan/Projektserie 1/Proj1.4.png' 
    ];

    let currentIndex = 0;
    const intervalTime = 3000; // Wechselt alle 3 Sekunden

    function rotateImage() {
        currentIndex++;
        
        // Wenn wir am Ende sind, fange von vorne an
        if (currentIndex >= sliderImages.length) {
            currentIndex = 0;
        }

        heroImage.src = sliderImages[currentIndex];
    }

    // Starte das Intervall nur, wenn das Element existiert
    if(heroImage) {
        setInterval(rotateImage, intervalTime);
    }
});