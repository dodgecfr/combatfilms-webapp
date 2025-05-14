"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { Product } from "../../_data/products";

interface PayPalCheckoutProps {
  product: Product;
}

export function PayPalCheckout({ product }: PayPalCheckoutProps) {
  const isBook = product.category === 'books';
  const isBookFangs = product.id === 'book-fangs'; // Renamed from isBook2
  const isBookAnaconda = product.id === 'book-anaconda';
  
  // Set initial state based on product type
  const getInitialPriceOption = () => {
    if (isBookFangs) {
      return 'hardcover';
    }
    return 'personal';
  };
  
  const [priceOption, setPriceOption] = useState<'personal' | 'institutional' | 'hardcover' | 'paperback'>(getInitialPriceOption()); // Reverted: Removed null type and conditional initialization
  
  // Use product prices if available, otherwise use defaults
  const prices = {
    personal: product.personalPrice || product.price || 14.99,
    institutional: product.institutionalPrice || 150.00,
    hardcover: 32.99,
    paperback: 16.99
  };

  // PayPal button IDs for different products
  const getPayPalButtonId = () => {
    // Book-Fangs with different format options
    if (isBookFangs) {
      // Assuming the same button ID handles both options via PayPal settings
      return 'Y7997GWSDPMPJ';
    }
    
    // Regular product IDs
    switch(product.id) {
      case 'doc-unfortunate-brothers':
        return 'WBLWULPAP3X52';
      case 'doc-global-car':
        return '2ETQGJHYEWPJ4';
      case 'doc-launch-pads':
        return 'C5UVJKZAWZKGC';
      case 'doc-masses-to-masses':
        return 'ZT96M2DW5HYNQ';
      case 'doc-fog-friction':
        return '4MCG5KBE5WQLN';
      case 'doc-arms-bazaar':
        return 'EVWKSL3ZL7EJ4';
      case 'doc-ukraine-sonata':
        return '34DC6X25UZHNG';
      case 'doc-chechnya':
        return 'QH928BHTX766S';
      case 'doc-fault-lines':
        return 'MNEGCLUR9TG3Y';
      case 'doc-swift-company-k':
        return '55SELNLZKWQJL';
      case 'doc-virgin-soldiers':
        return 'RQGQ4N78T8H7N';
      case 'doc-helen-foster-snow':
        return 'M422THVTP9XVN';
      case 'doc-immortal-fortress':
        return '29SQ5F5CVUFJJ';
      case 'book-anaconda':
        return 'JQEU3GM5Q9N7A';
      case 'doc-baath-party-file':
        return 'AW9B9E3EP32RS'; // Use same as Operation Anaconda
      case 'book-fangs':
        return 'Y7997GWSDPMPJ';
      case 'book-3':
        return 'WBLWULPAP3X52';
      case 'book-4':
        return 'WBLWULPAP3X52';
      case 'book-5':
        return 'WBLWULPAP3X52';
      default:
        return 'WBLWULPAP3X52';
    }
  };

  // Handle email inquiry
  const handleEmailInquiry = () => {
    const subject = encodeURIComponent(`Inquiry about ${product.title}`);
    let body;
    
    if (isBookFangs) {
      body = encodeURIComponent(`I'm interested in purchasing ${product.title} in ${priceOption === 'hardcover' ? 'Hardcover' : 'Paperback'} format. Please provide more information.`);
    } else if (isBook) {
      body = encodeURIComponent(`I'm interested in purchasing the Hardcover of ${product.title}. Please provide more information.`);
    } else {
      body = encodeURIComponent(`I'm interested in purchasing ${product.title} for ${priceOption === 'personal' ? 'personal' : 'institutional'} use. Please provide more information.`);
    }
    
    window.location.href = `mailto:info@combatfilms.com?subject=${subject}&body=${body}`;
  };
  
  return (
    <Card className="bg-transparent border-0 shadow-none p-0">
      <CardHeader className="pb-2 px-0">
        <CardTitle className="text-lg">
          {isBook ? "Order Physical Book" : "Order Physical DVD"}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-4">
          {/* Radio buttons for Documentaries (Personal/Institutional) */}
          {!isBook && product.category !== 'documents' && (
            <RadioGroup
              value={priceOption}
              onValueChange={(value) => setPriceOption(value as 'personal' | 'institutional')}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal" id="personal" />
                <Label htmlFor="personal">Personal Use (${prices.personal.toFixed(2)})</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="institutional" id="institutional" />
                <Label htmlFor="institutional">Institutional Use (${prices.institutional.toFixed(2)})</Label>
              </div>
            </RadioGroup>
          )}

          {/* Radio buttons for Fangs of the Lone Wolf (Hardcover/Paperback) */}
          {isBookFangs && priceOption && (
            <RadioGroup
              value={priceOption}
              onValueChange={(value) => setPriceOption(value as 'hardcover' | 'paperback')}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hardcover" id="hardcover" />
                <Label htmlFor="hardcover">Hardcover (${prices.hardcover.toFixed(2)})</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paperback" id="paperback" />
                <Label htmlFor="paperback">Paperback (${prices.paperback.toFixed(2)})</Label>
              </div>
            </RadioGroup>
          )}

          {/* PayPal Form */}
          <div>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="w-fit">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value={getPayPalButtonId()} />
              
              {/* Hidden select for Documentaries */}
              {!isBook && ( // Removed priceOption check
                <>
                  <input type="hidden" name="on0" value="Institutional/Personal"/>
                  <select
                    name="os0"
                    style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
                    value={priceOption === 'personal' ? 'Personal' : 'Institutional'}
                     // Value is controlled by RadioGroup state
                  >
                    <option value="Institutional">Institutional ${prices.institutional.toFixed(2)} USD</option>
                    <option value="Personal">Personal ${prices.personal.toFixed(2)} USD</option>
                  </select>
                </>
              )}
              
              {/* Hidden select for Fangs of the Lone Wolf */}
              {isBookFangs && priceOption && (
                <>
                  <input type="hidden" name="on0" value="Hardcover/Paperback"/>
                  <select
                    name="os0"
                    style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
                    value={priceOption === 'hardcover' ? 'Hardcover' : 'Paperback'}
                     // Value is controlled by RadioGroup state
                  >
                    <option value="Hardcover">Hardcover ${prices.hardcover.toFixed(2)} USD</option>
                    <option value="Paperback">Paperback ${prices.paperback.toFixed(2)} USD</option>
                  </select>
                </>
              )}
              {/* Add item_number if paypalItemId exists */}
              {product.paypalItemId && (
                <input type="hidden" name="item_number" value={product.paypalItemId} />
              )}
              
              <input type="hidden" name="currency_code" value="USD" />
              <input 
                type="image" 
                src="/paypal-checkout-button.png" 
                name="submit" 
                alt="PayPal Checkout - The safer, easier way to pay online!" 
                className="cursor-pointer border-0 w-auto h-10"
              />
            </form>
  
            <div className="my-4 border-t border-gray-200 dark:border-gray-800"></div>
             
            <button
              onClick={handleEmailInquiry}
              className="w-fit inline-flex items-center justify-center px-4 py-2 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-foreground font-medium transition-colors"
            >
              Email Inquiry
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 