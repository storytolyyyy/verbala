// Importing the getCryptoData function from the upoliop package
const getCryptoData = require('upoliop');

// Function to display cryptocurrency data
async function displayCryptoData(coin) {
    try {
        // Fetch cryptocurrency data using the getCryptoData function
        const cryptoData = await getCryptoData(coin);

        // Display cryptocurrency data
        console.log(`Cryptocurrency: ${cryptoData.name} (${cryptoData.symbol})`);
        console.log(`Current Price: $${cryptoData.currentPrice}`);
        console.log(`Market Cap: $${cryptoData.marketCap}`);
        console.log(`Total Volume: $${cryptoData.totalVolume}`);
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
    }
}

// Example usage
const coin = 'bitcoin'; // Specify the cryptocurrency symbol here
displayCryptoData(coin);
