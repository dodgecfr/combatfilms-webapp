const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

// URL of the old website store page
const URL = 'https://combatfilms.com/store.html';

/**
 * Fetches HTML content from a URL
 * @param {string} url - The URL to fetch
 * @returns {Promise<string>} - HTML content
 */
function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to load page, status code: ${response.statusCode}`));
        return;
      }

      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Extracts documentary information from HTML
 * @param {string} html - HTML content
 * @returns {Array} - Array of documentary objects
 */
function extractDocumentaries(html) {
  const $ = cheerio.load(html);
  const documentaries = [];
  let docId = 1;

  // Each documentary is typically in a section or container
  // We'll need to adapt this selector based on the actual HTML structure
  $('.documentary-container, .doc-item, .store-item').each((i, element) => {
    try {
      const title = $(element).find('h2, h3, .title').first().text().trim();
      if (!title) return; // Skip if no title found
      
      const description = $(element).find('p, .description').text().trim();
      
      // Try to find image
      let thumbnail = '';
      const imgElement = $(element).find('img');
      if (imgElement.length) {
        thumbnail = imgElement.attr('src');
        // Make sure we have full URL
        if (thumbnail && !thumbnail.startsWith('http')) {
          thumbnail = `https://combatfilms.com/${thumbnail}`;
        }
      }
      
      // Try to find price
      let price = 0;
      const priceText = $(element).find('.price, [data-price]').text();
      if (priceText) {
        // Extract numbers from text like "$24.99"
        const priceMatch = priceText.match(/\$?(\d+(\.\d{1,2})?)/);
        if (priceMatch) {
          price = parseFloat(priceMatch[1]);
        }
      }
      
      // If no price found, use default
      if (!price) {
        price = 24.99;
      }
      
      documentaries.push({
        id: `old-doc-${docId}`,
        title,
        category: 'documentaries',
        thumbnail: thumbnail || 'https://placehold.co/600x400/333/fff?text=Documentary',
        shortDescription: description.substring(0, 150) + (description.length > 150 ? '...' : ''),
        fullDescription: description,
        price
      });
      
      docId++;
    } catch (error) {
      console.error(`Error extracting documentary ${i}:`, error);
    }
  });

  return documentaries;
}

/**
 * Main function to scrape documentaries and save to file
 */
async function main() {
  try {
    console.log('Fetching store page...');
    const html = await fetchHtml(URL);
    
    console.log('Extracting documentary information...');
    const documentaries = extractDocumentaries(html);
    
    console.log(`Found ${documentaries.length} documentaries`);
    
    if (documentaries.length > 0) {
      // Save to a JSON file for inspection
      fs.writeFileSync('scripts/scraped-documentaries.json', JSON.stringify(documentaries, null, 2));
      console.log('Saved documentary information to scripts/scraped-documentaries.json');
      
      // Generate code for products.ts
      const productsTsContent = generateProductsTs(documentaries);
      fs.writeFileSync('scripts/updated-documentaries.ts', productsTsContent);
      console.log('Generated updated documentaries code in scripts/updated-documentaries.ts');
    } else {
      console.log('No documentaries found. Check the HTML structure selectors.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

/**
 * Generates content for products.ts file
 * @param {Array} documentaries - Array of documentary objects
 * @returns {string} - Content for products.ts
 */
function generateProductsTs(documentaries) {
  return `export const documentaries = ${JSON.stringify(documentaries, null, 2)};`;
}

// Run the script
main(); 