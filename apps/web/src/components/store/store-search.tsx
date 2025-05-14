"use client";

import { useState, useEffect, Dispatch, SetStateAction, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { documentaries, books, documents, Product } from "@/app/(marketing)/store/_data/products";

interface StoreSearchProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function StoreSearch({ setIsOpen }: StoreSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  // Combine all products for search - use useMemo to prevent recreation on every render
  const allProducts = useMemo(() => {
    return [...documentaries, ...books, ...documents];
  }, []);

  // Function to perform the search
  const performSearch = useMemo(() => {
    return (query: string) => {
      if (query.trim() === "") {
        return [];
      }
      
      const searchTerm = query.toLowerCase();
      return allProducts.filter(product => {
        return (
          product.title.toLowerCase().includes(searchTerm) ||
          (product.subtitle && product.subtitle.toLowerCase().includes(searchTerm)) ||
          product.shortDescription.toLowerCase().includes(searchTerm) ||
          product.fullDescription.toLowerCase().includes(searchTerm)
        );
      });
    };
  }, [allProducts]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    
    // Simulate a slight delay for better UX when typing
    const timer = setTimeout(() => {
      const results = performSearch(searchQuery);
      setSearchResults(results);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, performSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClear = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const getCategoryDisplay = (category: string) => {
    const categories: Record<string, string> = {
      documentaries: "Documentary",
      books: "Book",
      documents: "Document"
    };
    return categories[category] || category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="mt-4 space-y-4">
      <style jsx global>{`
        /* Hide browser's default clear button on search inputs */
        input[type="search"]::-webkit-search-cancel-button {
          display: none;
        }
      `}</style>
      <div className="relative bg-background border rounded-md flex items-center px-4">
        <Search className="h-4 w-4 text-muted-foreground mr-3 flex-shrink-0" />
        <Input
          type="search"
          placeholder="Search for documentaries, books, and documents..."
          className="pl-0 pr-10 border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
          value={searchQuery}
          onChange={handleSearchChange}
          autoFocus
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
            onClick={handleSearchClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {loading && (
        <div className="flex justify-center py-8">
          <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      )}

      {!loading && searchResults.length > 0 && (
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Found {searchResults.length} result{searchResults.length === 1 ? "" : "s"}
            </div>
            <div className="space-y-2">
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  href={`/store/${product.category}/${product.id}`}
                  onClick={closeDialog}
                  className="flex gap-4 rounded-lg p-3 transition-colors hover:bg-accent"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      className="object-cover"
                      unoptimized={product.thumbnail.startsWith('https://')}
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-col">
                      <h4 className="font-medium leading-none">{product.title}</h4>
                      {product.subtitle && (
                        <p className="text-xs text-muted-foreground">{product.subtitle}</p>
                      )}
                    </div>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {getCategoryDisplay(product.category)}
                      </Badge>
                      <span className="text-sm font-medium">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollArea>
      )}

      {!loading && searchQuery !== "" && searchResults.length === 0 && (
        <div className="py-8 text-center">
          <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
          <p className="text-sm text-muted-foreground mt-1">
            Try different keywords or check for typos
          </p>
        </div>
      )}

      {!loading && searchQuery === "" && (
        <div className="py-8 text-center">
          <p className="text-muted-foreground">Start typing to search for products</p>
        </div>
      )}
    </div>
  );
}