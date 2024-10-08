const titles = ["Privacy", "Tools", "Rouwtaken", "Rouwtaak een", "Rouwtaak twee", "Rouwtaak drie", "Rouwtaak vier", "Persoonlijke Reis", "Ontmoet Yana", "Jouw keuze"]; // Array met titels voor elke stap
const totalSteps = 10; // Aantal stappen dat je wilt tonen
let currentStep = 0; // Start bij de eerste stap

function createProgressBlocks() {
    const container = document.getElementById("progress-container");
    
    // Verwijder bestaande blokjes (voor het geval de functie opnieuw wordt aangeroepen)
    container.innerHTML = '';

    // Maak de initiële set blokjes aan
    for (let i = 0; i < totalSteps; i++) {
        const block = document.createElement("div");
        block.classList.add("progress-block");
        block.style.width = `${i === currentStep ? 50 : 40}px`; // Maak het actieve blokje groter
        container.appendChild(block);
    }

    updateProgressBlocks();
    updateTitle();
}

function updateProgressBlocks() {
    const container = document.getElementById("progress-container");
    const blocks = container.getElementsByClassName("progress-block");

    // Reset en update de zichtbare blokken
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].classList.remove('active', 'inactive');

        // Controleer of dit het actieve blok is
        if (i === currentStep) {
            blocks[i].classList.add('active');
            blocks[i].style.width = '50px'; // Maak het actieve blokje groter
        } else {
            blocks[i].classList.add('inactive');
            blocks[i].style.width = '40px'; // Maak inactieve blokjes kleiner
        }
    }
}

function updateTitle() {
    const titleElement = document.getElementById("page-titel");
    titleElement.textContent = titles[currentStep]; // Update de titel naar de huidige stap
}

function nextPage() {
    console.log("Next button clicked"); // Controleer of dit werkt
    if (currentStep < titles.length - 1) {
        currentStep++;
        updateProgressBlocks(); 
        updateTitle(); 
    }
}

function prevPage() {
    console.log("Previous button clicked"); // Controleer of dit werkt
    if (currentStep > 0) {
        currentStep--;
        updateProgressBlocks();
        updateTitle(); 
    }
}

// Genereer de voortgangsblokken bij het laden van de pagina
createProgressBlocks();