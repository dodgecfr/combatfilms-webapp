# Combat Films Website Updating Instructions

This guide provides detailed instructions on how to update products in the shop and videos in the "Our Work" section of the Combat Films website.

## Table of Contents
1. [Understanding Data Files](#understanding-data-files)
2. [Updating the Shop](#updating-the-shop)
   - [Product Structure](#product-structure)
   - [Adding New Products](#adding-new-products)
   - [Editing Existing Products](#editing-existing-products)
3. [Updating the "Our Work" Page](#updating-the-our-work-page)
   - [Video Structure](#video-structure)
   - [Adding New Videos](#adding-new-videos)
   - [Editing Existing Videos](#editing-existing-videos)
4. [Images & Media](#images--media)
5. [Testing Your Changes](#testing-your-changes)

## Understanding Data Files

The website uses TypeScript data files to store information about products and videos. These files are located at:

- **Shop Products**: `apps/web/src/app/(marketing)/store/_data/products.ts`
- **Our Work Videos**: `apps/web/src/app/(marketing)/our-work/_data/videos.ts`

Changes to these files will automatically update the website when they're deployed.

## Updating the Shop

### Product Structure

Each product in the shop has the following structure:

```typescript
{
  id: string;              // Unique identifier, e.g., "doc-global-car"
  title: string;           // Product title
  subtitle?: string;       // Optional subtitle
  category: 'documentaries' | 'books' | 'documents';  // Product category
  thumbnail: string;       // URL to the product thumbnail image
  shortDescription: string; // Brief description for product cards
  fullDescription: string; // Detailed description for product page
  price: number;           // Standard price
  institutionalPrice?: number; // Optional institutional pricing
  personalPrice?: number;  // Optional personal use pricing
  notes?: string;          // Optional additional notes
}
```

### Adding New Products

To add a new product to the shop:

1. Open the file `apps/web/src/app/(marketing)/store/_data/products.ts`
2. Locate the appropriate array for your product category:
   - `documentaries` for documentary films
   - `books` for books
   - `documents` for document archives
3. Add a new product object with all required fields (see structure above)
4. Follow the same format as existing products
5. Make sure to use a unique `id` that follows the pattern of existing products

Example of adding a new documentary:

```typescript
// Find the documentaries array
export const documentaries: Product[] = [
  // ... existing products ...
  
  // Add new product
  {
    "id": "doc-new-documentary",
    "title": "New Documentary Title",
    "subtitle": "Optional Subtitle",
    "category": "documentaries",
    "thumbnail": "https://example.com/path/to/image.jpg",
    "shortDescription": "Brief compelling description (shown on cards).",
    "fullDescription": "Detailed description of the documentary...",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": "Any special notes or information"
  },
  
  // Always add a comma after each product except the last one
];
```

### Editing Existing Products

To modify an existing product:

1. Open the file `apps/web/src/app/(marketing)/store/_data/products.ts`
2. Find the product you want to edit by searching for its `id` or `title`
3. Update any fields as needed
4. Save the file

## Updating the "Our Work" Page

### Video Structure

Videos on the "Our Work" page have this structure:

```typescript
{
  id: string;              // Unique identifier, e.g., "unfortunate-brothers"
  title: string;           // Video title
  subtitle?: string;       // Optional subtitle
  category: 'Documentary Feature' | 'Documentary Series' | 'Documentary Short' | 'Biography';
  videoType: 'youtube' | 'vimeo';  // Platform hosting the video
  videoId: string;         // YouTube or Vimeo video ID (not the full URL)
  description: string;     // Brief description of the video
}
```

### Adding New Videos

To add a new video to the "Our Work" page:

1. Open the file `apps/web/src/app/(marketing)/our-work/_data/videos.ts`
2. Locate the appropriate array for your video category:
   - `documentaryFeature` for feature-length documentaries
   - `documentarySeries` for documentary series
   - `documentaryShort` for short documentaries
   - `biography` for biographical films
3. Add a new video object with all required fields (see structure above)
4. Make sure to use a unique `id` that follows the kebab-case pattern (lowercase with hyphens)

Example of adding a new documentary feature:

```typescript
// Find the documentaryFeature array
export const documentaryFeature: Video[] = [
  // ... existing videos ...
  
  // Add new video
  {
    id: "new-documentary-name",
    title: "New Documentary Title",
    subtitle: "Optional Subtitle",
    category: "Documentary Feature",
    videoType: "youtube",  // or "vimeo"
    videoId: "abcD123XYZ", // YouTube or Vimeo ID (not the full URL)
    description: "Description of the documentary that will appear on the card."
  },
  
  // Always add a comma after each video except the last one
];
```

#### How to Get the Video ID

- **For YouTube**: The ID is the part after `v=` in the URL. 
  - Example: In `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`
  
- **For Vimeo**: The ID is the number in the URL.
  - Example: In `https://vimeo.com/76979871`, the ID is `76979871`

### Editing Existing Videos

To modify an existing video:

1. Open the file `apps/web/src/app/(marketing)/our-work/_data/videos.ts`
2. Find the video you want to edit by searching for its `id` or `title`
3. Update any fields as needed
4. Save the file

## Images & Media

For thumbnails, you have two options:

1. **Use an external image hosting service**: 
   - Upload your image to a service like Cloudinary, Imgur, or your own hosting
   - Use the full URL in the `thumbnail` field (e.g., `https://combatfilms.com/images/example.jpg`)

2. **Use a placeholder for temporary purposes**:
   - You can use services like Placehold.co: `https://placehold.co/600x400/333/fff?text=Video+Title`

## Testing Your Changes

After making changes, it's recommended to:

1. Save the file
2. Run the development server locally to preview changes (if you have development access)
3. Check that all content displays correctly
4. Make sure linked pages work as expected
5. Deploy the site to see the changes live

## Important Notes

- Always backup the data files before making significant changes
- Follow the existing patterns for consistency
- Keep descriptions concise and relevant
- Use high-quality images for thumbnails (recommended dimensions: 600x400 pixels)
- Ensure all required fields are completed

For any questions or issues, please contact your development team. 