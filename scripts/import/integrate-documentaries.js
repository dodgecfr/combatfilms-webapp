/**
 * Integration script for imported documentary data
 * 
 * This script creates a new version of the products.ts file that integrates
 * the imported documentaries with the existing product structure.
 * 
 * Usage:
 * 1. Run the manual-import.js script first
 * 2. Run: node scripts/import/integrate-documentaries.js
 */

const fs = require('fs');
const path = require('path');

// Paths to relevant files
const dataDir = path.join(__dirname, '../../apps/web/src/app/(marketing)/store/_data');
const importedDocumentariesFile = path.join(dataDir, 'imported-documentaries.json');
const productsFile = path.join(dataDir, 'products.ts');
const newProductsFile = path.join(dataDir, 'products.new.ts');

// Check if imported documentaries exist
if (!fs.existsSync(importedDocumentariesFile)) {
  console.error('Error: Imported documentaries file not found. Run manual-import.js first.');
  process.exit(1);
}

// Check if products file exists
if (!fs.existsSync(productsFile)) {
  console.error('Error: Products file not found.');
  process.exit(1);
}

// Read the imported documentaries
const importedDocumentaries = JSON.parse(fs.readFileSync(importedDocumentariesFile, 'utf8'));
console.log(`Loaded ${importedDocumentaries.length} imported documentaries.`);

// Read the existing products file content
const productsContent = fs.readFileSync(productsFile, 'utf8');

// Extract the Product interface and other exported arrays
const productInterfaceMatch = productsContent.match(/export interface Product \{[\s\S]*?\}/);
const productInterface = productInterfaceMatch ? productInterfaceMatch[0] : '';

const booksArrayMatch = productsContent.match(/export const books: Product\[\] = \[[\s\S]*?\];/);
const booksArray = booksArrayMatch ? booksArrayMatch[0] : 'export const books: Product[] = [];';

const documentsArrayMatch = productsContent.match(/export const documents: Product\[\] = \[[\s\S]*?\];/);
const documentsArray = documentsArrayMatch ? documentsArrayMatch[0] : 'export const documents: Product[] = [];';

// Create new product interface with additional fields
const newProductInterface = productInterface.replace(
  /export interface Product \{/,
  `export interface Product {`
).replace(
  /\}/,
  `  institutionalPrice?: number;
  personalPrice?: number;
  subtitle?: string;
  notes?: string;
}`
);

// Format the imported documentaries as a TypeScript array
const documentariesArray = `export const documentaries: Product[] = ${JSON.stringify(importedDocumentaries, null, 2)};`;

// Create the new products file content
const newProductsContent = `${newProductInterface}

${documentariesArray}

${booksArray}

${documentsArray}
`;

// Write the new products file
fs.writeFileSync(newProductsFile, newProductsContent);
console.log(`Created new products file at ${newProductsFile}`);
console.log('Review the new file and replace products.ts if satisfied.');

// Create a backup of the original products file
const backupFile = path.join(dataDir, 'products.backup.ts');
fs.copyFileSync(productsFile, backupFile);
console.log(`Created backup of original products file at ${backupFile}`);

console.log('Done!'); 