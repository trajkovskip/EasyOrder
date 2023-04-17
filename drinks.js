// Get the QR code data from the URL
const urlParams = new URLSearchParams(window.location.search);
const qrCodeData = urlParams.get('data');

// Parse the JSON data
const formData = JSON.parse(qrCodeData);

// Get the drinks list element
const drinksList = document.getElementById('drinks-list');

// Loop through the form data and add each drink to the list
for (const [drink, quantity] of Object.entries(formData)) {
    if (quantity > 0) {
        const drinkItem = document.createElement('li');
        drinkItem.innerHTML = `<h2>${drink}${quantity}</h2>`;
        drinksList.appendChild(drinkItem);
    }
}