// Select all right items and the overview-left container
const rightItems = document.querySelectorAll('.right-item');
const overviewLeft = document.querySelector('.overview-left');

// Function to update the overview-left content
function updateOverviewLeft(imageSrc, title, description) {
    // Clear previous content except the Buy button
    overviewLeft.innerHTML = '';

    // Create a new div to hold the content
    const leftContent = document.createElement('div');
    leftContent.classList.add('left-content');

    // Create and append the image
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    leftContent.appendChild(img);

    // Create and append the title
    const h3 = document.createElement('h3');
    h3.textContent = title;
    leftContent.appendChild(h3);

    // Create and append the description
    const p = document.createElement('p');
    p.textContent = description;
    leftContent.appendChild(p);

    // Append the left content to overview-left
    overviewLeft.appendChild(leftContent);

    // Create and append the Buy button
    const buyButton = document.createElement('button');
    buyButton.classList.add('buy-button');
    buyButton.textContent = 'Buy';
    overviewLeft.appendChild(buyButton);
}

// Add event listeners to all right items
rightItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get data attributes from the clicked item
        const imageSrc = item.getAttribute('data-image');
        const title = item.getAttribute('data-title');
        const description = item.getAttribute('data-description');

        // Update the overview-left section with new content
        updateOverviewLeft(imageSrc, title, description);
    });
});
