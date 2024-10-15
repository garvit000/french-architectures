const regions = document.querySelectorAll('.region');
let tooltipTextElement;

// Function to create and append the tooltip text element inside the SVG
function createTooltipTextElement() {
    const svg = document.querySelector('svg');
    tooltipTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    tooltipTextElement.setAttribute('id', 'tooltip-text');
    tooltipTextElement.setAttribute('text-anchor', 'middle'); // Center the text horizontally
    tooltipTextElement.setAttribute('dominant-baseline', 'middle'); // Center the text vertically
    tooltipTextElement.setAttribute('fill', 'black'); // Set the text color
    tooltipTextElement.setAttribute('font-size', '14px'); // Set the font size
    tooltipTextElement.classList.add('hidden'); // Initially hidden
    svg.appendChild(tooltipTextElement); // Add the text element to the SVG
}

// Function to show the tooltip inside the region
function showTooltip(event, regionName) {
    // Get the bounding box of the region
    const regionRect = event.target.getBoundingClientRect();

    // Calculate the center of the region
    const centerX = regionRect.left + (regionRect.width / 2);
    const centerY = regionRect.top + (regionRect.height / 2);

    // Set the position and content of the tooltip text
    tooltipTextElement.setAttribute('x', event.target.getBBox().x + event.target.getBBox().width / 2);
    tooltipTextElement.setAttribute('y', event.target.getBBox().y + event.target.getBBox().height / 2);
    tooltipTextElement.textContent = regionName;
    tooltipTextElement.classList.remove('hidden');
}

// Function to hide the tooltip
function hideTooltip() {
    tooltipTextElement.classList.add('hidden');
}

// Function to handle click on regions
function handleClick(regionName) {
    const urlMap = {
        "Hauts de France": "./states/hauts-de-france.html",
        "Grand Est": "./states/grand-est.html",
        "Provence Alpes Côte d'Azur": "./states/provence-alpes-cote-d-azur.html",
        "Auvergne Rhône Alpes": "./states/auvergne-rhone-alpes.html",
        "Bourgogne Franche Comté": "./states/bourgogne-franche-comte.html",
        "Occitanie": "./states/occitanie.html",
        "Pays de la Loire": "./states/pays-de-la-loire.html",
        "Bretagne": "./states/bretagne.html",
        "Normandie": "./states/normandie.html",
        "Corse": "./states/corse.html",
        "Nouvelle Aquitaine": "./states/nouvelle-aquitaine.html",
        "Centre Val de Loire": "./states/centre-val-de-loire.html",
        "Île-de-France": "./states/ile-de-france.html"
    };

    // Redirect to the corresponding page
    const url = urlMap[regionName] || "default.html";
    window.location.href = url;
}

// Initialize the tooltip text element
createTooltipTextElement();

// Function to handle mouse events for each region
regions.forEach(region => {
    const regionName = region.getAttribute('name');

    // Mouse over event to show tooltip
    region.addEventListener('mouseover', (event) => {
        showTooltip(event, regionName);
    });

    // Mouse out event to reset tooltip
    region.addEventListener('mouseout', () => {
        hideTooltip();
    });

    // Click event to navigate to the page
    region.addEventListener('click', () => {
        handleClick(regionName);
    });
});
