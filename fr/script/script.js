const regions = document.querySelectorAll('.region');
const tooltip = document.getElementById('tooltip');

// Show the tooltip
function showTooltip(event, regionName, description) {
    // Update tooltip content
    tooltip.innerHTML = `
        <strong>${regionName}</strong>
        <br>${description}
        <br><span class="click-hint">Cliquez pour plus de détails</span>
    `;
    tooltip.classList.remove('hidden');

    // Calculate viewport boundaries
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipRect = tooltip.getBoundingClientRect();

    // Dynamic positioning with boundary checking
    let offsetX = 20;
    let offsetY = 20;
    let posX = event.clientX + offsetX;
    let posY = event.clientY + offsetY;

    // Adjust if tooltip would overflow right edge
    if (posX + tooltipRect.width > viewportWidth) {
        posX = event.clientX - tooltipRect.width - offsetX;
    }

    // Adjust if tooltip would overflow bottom edge
    if (posY + tooltipRect.height > viewportHeight) {
        posY = event.clientY - tooltipRect.height - offsetY;
    }

    // Apply calculated position
    tooltip.style.left = `${posX}px`;
    tooltip.style.top = `${posY}px`;
}

// Hide the tooltip
function hideTooltip() {
    tooltip.classList.add('hidden');
    tooltip.style.left = '-1000px';  // Move off-screen when hidden
}

// Handle region click to navigate
function handleClick(regionName) {
    const urlMap = {
        "Hauts de France": "./states/hauts-de-france.html",
        "Grand Est": "./states/grand-est.html",
        "Provence Alpes Côte d'Azu": "./states/provence-alpes-cote-d-azur.html",
        "Auvergne Rhône Alpes": "./states/auvergne-rhone-alpes.html",
        "Burgundy": "./states/burgundy.html",
        "Occitanie": "./states/occitanie.html",
        "Pays de la Loire": "./states/pays-de-la-loire.html",
        "Bretagne": "./states/bretagne.html",
        "Normandie": "./states/normandie.html",
        "Corse": "./states/corse.html",
        "Nouvelle Aquitaine": "./states/nouvelle-aquitaine.html",
        "Centre Val de Loire": "./states/centre-val-de-loire.html",
        "Île de France": "./states/ile-de-france.html"
    };

    // Redirect to the page
    const url = urlMap[regionName] || "index.html";
    window.location.href = url;
}

// Attach event listeners
regions.forEach(region => {
    const regionName = region.getAttribute('name');
    const description = region.getAttribute('data-description');

    // Show tooltip on mouseover
    region.addEventListener('mouseover', (event) => {
        showTooltip(event, regionName, description);
    });

    // Move tooltip with mouse
    region.addEventListener('mousemove', (event) => {
        showTooltip(event, regionName, description);
    });

    // Hide tooltip on mouseout
    region.addEventListener('mouseout', () => {
        hideTooltip();
    });

    // Handle click event
    region.addEventListener('click', () => {
        handleClick(regionName);
    });
});

function changeLanguage(language) {
    if(language === 'fr') {
    window.location.href = 'https://garvit000.github.io/french-architectures/fr/index.html';
}
else if(language === 'en') {
    window.location.href = 'https://garvit000.github.io/french-architectures/index.html';
}
}
