"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface PayPalButtonProps {
  productTitle: string;
  option: 'personal' | 'institutional';
  showSpinner?: boolean;
  compact?: boolean;
}

export function PayPalButton({ productTitle, option, showSpinner = false, compact = false }: PayPalButtonProps) {
  const loadingRef = useRef<HTMLDivElement>(null);

  // Function to submit the PayPal form exactly as provided
  const submitPayPalForm = () => {
    // If we have a loading spinner, hide it
    if (loadingRef.current) {
      loadingRef.current.style.display = "none";
    }
    
    // Create a form exactly matching the provided PayPal code
    const form = document.createElement('form');
    form.method = 'post';
    form.action = 'https://www.paypal.com/cgi-bin/webscr';
    form.target = '_blank';
    
    // Add the hidden inputs
    const cmdInput = document.createElement('input');
    cmdInput.type = 'hidden';
    cmdInput.name = 'cmd';
    cmdInput.value = '_s-xclick';
    form.appendChild(cmdInput);
    
    const buttonIdInput = document.createElement('input');
    buttonIdInput.type = 'hidden';
    buttonIdInput.name = 'hosted_button_id';
    buttonIdInput.value = 'WBLWULPAP3X52';
    form.appendChild(buttonIdInput);
    
    const on0Input = document.createElement('input');
    on0Input.type = 'hidden';
    on0Input.name = 'on0';
    on0Input.value = 'Institutional/Personal';
    form.appendChild(on0Input);
    
    // Create select dropdown
    const select = document.createElement('select');
    select.name = 'os0';
    
    // Create the institutional option
    const institutionalOption = document.createElement('option');
    institutionalOption.value = 'Institutional';
    institutionalOption.textContent = 'Institutional $150.00 USD';
    
    // Create the personal option
    const personalOption = document.createElement('option');
    personalOption.value = 'Personal';
    personalOption.textContent = 'Personal $14.99 USD';
    
    // Add options to select dropdown
    select.appendChild(institutionalOption);
    select.appendChild(personalOption);
    
    // Set the default selected option based on what user chose
    if (option === 'institutional') {
      institutionalOption.selected = true;
    } else {
      personalOption.selected = true;
    }
    
    // Hidden element to contain the dropdown (we don't show this)
    const hiddenDiv = document.createElement('div');
    hiddenDiv.style.display = 'none';
    hiddenDiv.appendChild(select);
    form.appendChild(hiddenDiv);
    
    // Add currency code
    const currencyInput = document.createElement('input');
    currencyInput.type = 'hidden';
    currencyInput.name = 'currency_code';
    currencyInput.value = 'USD';
    form.appendChild(currencyInput);
    
    // Add submit input
    const submitInput = document.createElement('input');
    submitInput.type = 'submit';
    submitInput.value = 'Submit';
    submitInput.style.display = 'none';
    form.appendChild(submitInput);
    
    // Add the form to the body and submit it
    document.body.appendChild(form);
    form.submit();
    
    // Remove the form after submission
    setTimeout(() => {
      document.body.removeChild(form);
    }, 100);
  };

  return (
    <div className={`space-y-4 ${compact ? 'max-w-xs mx-auto' : 'w-full'}`}>
      {showSpinner && (
        <div ref={loadingRef} className="flex justify-center py-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
        </div>
      )}
      
      <div className="flex flex-col space-y-3">
        <Button 
          size={compact ? "sm" : "default"}
          className={`${compact ? 'w-auto mx-auto' : 'w-full'} bg-[#0070ba] hover:bg-[#005ea6] text-white font-medium flex items-center justify-center`}
          onClick={submitPayPalForm}
        >
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 4.876-.032.152a.807.807 0 0 1-.794.679h-2.762a.483.483 0 0 1-.477-.558L8.992 17.5c.009-.07.025-.137.047-.201.197-.575.767-.603 1.216-.603h.966c3.437 0 6.12-1.388 6.9-5.4.033-.169.06-.339.082-.507.22-1.376.1-2.299-.388-3.077-.16-.254-.381-.468-.641-.635a3.75 3.75 0 0 0-.475-.284c.347.944.347 2.245-.06 3.686" fill="#ffffff"/>
              <path d="M18.336 6.887c-.415-.764-1.227-1.305-2.194-1.7-.967-.396-2.13-.602-3.44-.602h-4.5a.796.796 0 0 0-.785.679l-2.312 14.76a.48.48 0 0 0 .477.558h2.323l.583-3.693.002-.01a.795.795 0 0 1 .785-.679h1.633c3.237 0 5.775-1.313 6.514-5.12.345-1.313.282-2.446-.21-3.327a2.461 2.461 0 0 0-.876-.866" fill="#ffffff"/>
            </svg>
            Pay with PayPal
          </span>
        </Button>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        
        <Button 
          variant="outline"
          size={compact ? "sm" : "default"}
          className={`${compact ? 'w-auto mx-auto' : 'w-full'}`}
          onClick={() => window.open(`mailto:orders@combatfilms.com?subject=DVD Order - ${encodeURIComponent(productTitle)}&body=I would like to order "${productTitle}". Please send me payment instructions.`)}
        >
          Contact Us to Order
        </Button>
      </div>
    </div>
  );
} 