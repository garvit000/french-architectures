const regions = document.querySelectorAll('.region');
const tooltip = document.getElementById('tooltip');

// Show the tooltip
function showTooltip(event, regionName, description) {
    // Update tooltip content
    //tooltip.textContent = regionName;
    tooltip.innerHTML = `<strong>${regionName}</strong><br>${description}<br><span>Click for more details</span>`;
    tooltip.classList.remove('hidden');

    // Position the tooltip near the mouse cursor
    const offsetX = 450;
    const offsetY = 103;
    tooltip.style.left = `${event.clientX - offsetX}px`;
    tooltip.style.top = `${event.clientY - offsetY}px`;
}

// Hide the tooltip
function hideTooltip() {
    tooltip.classList.add('hidden');
}

// Handle region click to navigate
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

    // Redirect to the page
    const url = urlMap[regionName] || "default.html";
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
