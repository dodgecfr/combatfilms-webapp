import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductGrid } from "./_components/product-grid";
import { documentaries, books, documents } from "./_data/products";

export default function StorePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Title */}
      <div className="bg-muted py-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Combat Films Store</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="documentaries" className="w-full">
          {/* Tab Navigation as a Banner */}
          <div className="bg-background sticky top-[68px] z-10 border-b mb-8">
            <div className="container mx-auto py-4 px-4">
              <TabsList className="w-full flex bg-transparent h-auto p-0 justify-between gap-2">
                <TabsTrigger 
                  value="documentaries" 
                  className="flex-1 min-w-0 px-2 sm:px-6 py-2.5 border border-input rounded-md shadow-sm transition-all 
                  hover:bg-accent hover:text-accent-foreground
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-md text-sm sm:text-base"
                >
                  Documentaries
                </TabsTrigger>
                <TabsTrigger 
                  value="books" 
                  className="flex-1 min-w-0 px-2 sm:px-6 py-2.5 border border-input rounded-md shadow-sm transition-all 
                  hover:bg-accent hover:text-accent-foreground
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-md text-sm sm:text-base"
                >
                  Books
                </TabsTrigger>
                <TabsTrigger 
                  value="documents" 
                  className="flex-1 min-w-0 px-2 sm:px-6 py-2.5 border border-input rounded-md shadow-sm transition-all 
                  hover:bg-accent hover:text-accent-foreground
                  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                  data-[state=active]:shadow-md text-sm sm:text-base"
                >
                  <span className="truncate">Document Archive</span>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <TabsContent value="documentaries" className="px-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Documentaries</h2>
                <p className="text-muted-foreground mt-2">
                  Explore our collection of combat documentaries that provide insight into historical conflicts.
                </p>
              </div>
              <ProductGrid products={documentaries} />
            </div>
          </TabsContent>
          
          <TabsContent value="books" className="px-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Books</h2>
                <p className="text-muted-foreground mt-2">
                  Discover our selection of books covering various aspects of military history and combat.
                </p>
              </div>
              <ProductGrid products={books} />
            </div>
          </TabsContent>
          
          <TabsContent value="documents" className="px-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Document Archive</h2>
                <p className="text-muted-foreground mt-2">
                  Access our archive of historical documents related to military operations and conflicts.
                </p>
              </div>
              <ProductGrid products={documents} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 