const titles = ["Privacy", "Tools", "Rouwtaken", "Rouwtaak een", "Rouwtaak twee", "Rouwtaak drie", "Rouwtaak vier", "Persoonlijke Reis", "Ontmoet Yana", "Jouw keuze"];
const texts = [
    "Jouw privacy en comfort zijn onze prioriteit. Alles wat je deelt blijft vertrouwelijk.",
    "We hebben tools samengesteld om je te ondersteunen in je reis door rouw. Straks geven we een rondleiding binnen de omgeving. Laten we nu eerst samen het landschap van rouw verkennen.", 
    "Onze methode is gebaseerd op de erkende rouwtaken van William Worden, Amerikaans rouwexpert, zorgvuldig samengesteld om jou te ondersteunen tijdens je rouwreis. Ontdek met ons de betekenis en steun die het jou kan bieden.", 
    "Ontdek hoe je de realiteit van het verlies kunt omarmen", 
    "Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken.",
    "Vind jouw weg in een wereld die nu anders is door het verlies van je dierbare.",
    "Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven.",
    "Nu je meer weet over de rouwtaken zelf, is het tijd om jouw persoonlijke reis te samen te stellen. Rouw is een uniek proces en niet lineair, daarom bieden we ondersteuning om je verder te helpen.",
    "Maak kennis met Yana, jouw persoonlijke digitale hulp. Yana is getraind met informatie uit een breed scala literatuur over rouw. Yana kan je voorzien van een programma dat bij jou aansluit.",
    "Als Yana iets vraagt wat je liever niet beantwoordt, is dat helemaal oké. Je kunt vragen overslaan wanneer jij dat wilt, je hoeft dit alleen maar aan te geven. Liever zelf kiezen waar je start? Dat is ook mogelijk. Kies hieronder dan voor je eigen pad. Je kan op elk moment schakelen tussen de verschillende rouwtaken. Jouw reis, jouw tempo."
];

// Array met paden naar SVG-bestanden
const svgs = [
    '../assets/privacy.svg',
    '../assets/tools.svg',
    '../assets/rouwtaken.svg',
    '../assets/rouwtaak1.svg',
    '../assets/rouwtaak2.svg',
    '../assets/rouwtaak3.svg',
    '../assets/rouwtaak4.svg',
    '../assets/persoonlijkereis.svg',
    '../assets/yana.svg',
    '../assets/jouwkeuze.svg'
];

const totalSteps = 10;
let currentStep = 0;

function createProgressBlocks() {
    const container = document.getElementById("progress-container");
    container.innerHTML = '';
    for (let i = 0; i < totalSteps; i++) {
        const block = document.createElement("div");
        block.classList.add("progress-block");
        block.style.width = `${i === currentStep ? 50 : 40}px`;
        container.appendChild(block);
    }
    updateProgressBlocks();
    updateContent();
}

function updateProgressBlocks() {
    const blocks = document.getElementsByClassName("progress-block");
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].classList.remove('active', 'inactive');
        if (i === currentStep) {
            blocks[i].classList.add('active');
            blocks[i].style.width = '50px';
        } else {
            blocks[i].classList.add('inactive');
            blocks[i].style.width = '40px';
        }
    }
}

function updateContent() {
    const titleElement = document.getElementById("page-titel");
    const textElement = document.getElementById("page-text");
    const svgContainer = document.getElementById("svg-container");

    titleElement.textContent = titles[currentStep];
    textElement.textContent = texts[currentStep];
    
    // Laad de SVG via fetch
    fetch(svgs[currentStep])
    .then(response => response.text())
    .then(svgContent => {
        svgContainer.innerHTML = svgContent;
        const svgElement = svgContainer.querySelector('svg');
        if (svgElement) {
            svgElement.classList.add(`svg-step-${currentStep}`);
            // Voeg deze regel toe om te controleren of de SVG is geladen
            console.log('SVG loaded:', svgElement);
        }
    })
    .catch(error => console.error('Error loading the SVG:', error));
}


function nextPage() {
    if (currentStep < titles.length - 1) {
        currentStep++;
        updateProgressBlocks(); 
        updateContent();
    }
}

function prevPage() {
    if (currentStep > 0) {
        currentStep--;
        updateProgressBlocks();
        updateContent();
    }
}

createProgressBlocks();