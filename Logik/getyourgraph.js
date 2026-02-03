document.addEventListener("DOMContentLoaded", () => {
    
    const animatedElements = document.querySelectorAll('.js-fade-in');

    animatedElements.forEach((element, index) => {
        
        //Wert wird aus dem HTML geholt, z.B. 500)
        const customDelay = element.getAttribute('data-delay');
        
        let delay;

        if (customDelay !== null) {
            // Wenn im HTML eine Zahl steht, nimm diese in Millisekunden umwandeln
            delay = parseInt(customDelay);
        } else {
            // Falls wir mal vergessen, eine Zahl anzugeben, nimmt es die alte Formel als Fallback
            delay = index * 200; 
        }

        // Timer wird gestartet
        setTimeout(() => {
            element.classList.add('is-visible');
        }, delay);
        
    });
});