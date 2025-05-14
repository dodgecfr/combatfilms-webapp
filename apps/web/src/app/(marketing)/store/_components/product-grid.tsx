import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../_data/products";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow">
          <CardHeader className="p-4 pb-2 space-y-2">
            {/* Container with aspect ratio, relative positioning, and centering */}
            <div className="aspect-video relative rounded-md overflow-hidden mb-3 bg-muted flex items-center justify-center">
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
                className="object-contain" // Keep aspect ratio
                unoptimized={product.thumbnail.startsWith('https://')}
              />
            </div>
            <CardTitle className="text-lg whitespace-normal">{product.title}</CardTitle>
            {product.subtitle && (
              <p className="text-sm text-muted-foreground -mt-1">{product.subtitle}</p>
            )}
          </CardHeader>
          <CardContent className="flex-grow px-4 py-2">
            <div className="flex flex-col gap-1 mb-2">
              <span className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-1 self-start">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3 mt-2">
              {product.shortDescription}
            </p>
            {product.notes && (
              <p
                className="text-xs text-muted-foreground mt-2 italic"
                dangerouslySetInnerHTML={{ __html: product.notes }}
              />
            )}
          </CardContent>
          <CardFooter className="p-4 pt-2 mt-auto">
            <Link href={`/store/${product.category}/${product.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
} 