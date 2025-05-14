import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { documentaries, books, documents, type Product } from "../../_data/products";
import { PayPalCheckout } from "./paypal-checkout";
import { StreamingOptions } from "./streaming-options";

interface ProductDetailPageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Get the product based on category and id by awaiting the params promise
  const { category, id } = await params;
  
  let product: Product | undefined;

  switch (category) {
    case "documentaries":
      product = documentaries.find((doc) => doc.id === id);
      break;
    case "books":
      product = books.find((book) => book.id === id);
      break;
    case "documents":
      product = documents.find((doc) => doc.id === id);
      break;
    default:
      break;
  }

  // If product not found, return 404
  if (!product) {
    notFound();
  }

  // Check if the product is a physical product (documentaries or books)
  const isPhysicalProduct = product.category === 'documentaries' || product.category === 'books';
  const isDocumentArchive = product.category === 'documents';
  
  // Check if it's the "Unfortunate Brothers" documentary
  const isUnfortunateBrothers = product.id === 'doc-unfortunate-brothers';

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8">
        <Link href="/store" className="text-primary hover:underline inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Store
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative aspect-video md:aspect-square lg:max-h-[600px] rounded-lg overflow-hidden shadow-md bg-muted flex items-center justify-center">
          {/* Blurred Background Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-md scale-110" // Blur and scale
            style={{ backgroundImage: `url(${product.thumbnail})` }}
          />
          {/* Sharp Foreground Image Layer */}
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain z-10" // Added z-10 to ensure it's above the blur
            priority
            unoptimized={product.thumbnail.startsWith('https://')}
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              {isPhysicalProduct && product.category === 'documentaries' && (
                <span className="inline-block bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300 rounded-full px-3 py-1 text-sm">
                  Physical DVD
                </span>
              )}
              {isPhysicalProduct && product.category === 'books' && (
                <span className="inline-block bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300 rounded-full px-3 py-1 text-sm">
                  Physical Book
                </span>
              )}
              {isPhysicalProduct && product.category === 'documentaries' && product.id !== 'doc-swift-company-k' && product.id !== 'doc-virgin-soldiers' && (
                <span className="inline-block bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-300 rounded-full px-3 py-1 text-sm">
                  Digital Streaming
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            {product.subtitle && (
              <p className="text-lg text-muted-foreground mb-4">{product.subtitle}</p>
            )}
            <p className="text-2xl font-semibold text-primary">${product.price.toFixed(2)}</p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold">Description</h2>
            <div className="text-muted-foreground whitespace-pre-line">
              {product.fullDescription}
            </div>
            {product.notes && (
              <p
                className="text-sm text-muted-foreground mt-4 italic"
                dangerouslySetInnerHTML={{ __html: product.notes }}
              />
            )}
          </div>

          <div className="pt-6">
            {isPhysicalProduct && product.category === 'documentaries' && product.id !== 'doc-swift-company-k' && product.id !== 'doc-virgin-soldiers' && (
              <>
                <StreamingOptions documentaryId={product.id} />
                <div className="my-8 border-t border-gray-200 dark:border-gray-800" />
              </>
            )}
            
            {(isPhysicalProduct || isDocumentArchive) && product.id !== 'doc-kennedy-way' ? (
              <PayPalCheckout product={product} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
} 