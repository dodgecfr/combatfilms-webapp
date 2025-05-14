"use client";

import { Button } from "@/components/ui/button";

interface StreamingOptionsProps {
  documentaryId: string;
}

interface StreamingLink {
  vimeo: string;
  amazon?: string;
}

// Streaming links for different documentaries
const streamingLinks: Record<string, StreamingLink> = {
  'doc-unfortunate-brothers': {
    vimeo: 'https://vimeo.com/ondemand/unfortunatebrothers',
    amazon: 'https://www.amazon.com/Unfortunate-Brothers-Dodge-Billingsley/dp/B074Q1WBPV?sr=1-2'
  },
  'doc-global-car': {
    vimeo: 'https://vimeo.com/ondemand/globalcar',
    // No Amazon Prime link for Global Car
  },
  'doc-launch-pads': {
    vimeo: 'https://vimeo.com/ondemand/launchpadsandlilypads', // placeholder, replace with actual link
  },
  'doc-masses-to-masses': {
    vimeo: 'https://vimeo.com/ondemand/masses',
  },
  'doc-fog-friction': {
    vimeo: 'https://vimeo.com/ondemand/89695',
  },
  'doc-arms-bazaar': {
    vimeo: 'https://vimeo.com/ondemand/armsbazaar',
  },
  'doc-ukraine-sonata': {
    vimeo: 'https://vimeo.com/ondemand/14577',
  },
  'doc-chechnya': {
    vimeo: 'https://vimeo.com/ondemand/chechnyasop',
  },
  'doc-fault-lines': {
    vimeo: 'https://vimeo.com/ondemand/faultlinesandpipelines',
  },
   'doc-kennedy-way': {
     vimeo: 'https://vimeo.com/109848064'
   },
   
   'doc-immortal-fortress': {
     vimeo: 'https://vimeo.com/ondemand/immortalfortress'
   },
   
   'doc-helen-foster-snow': {
     vimeo: 'https://vimeo.com/ondemand/helenfostersnow'
   },
   
  
  // Add more documentaries as needed
};

// Default fallback if a documentary ID isn't found
const defaultStreamingLink: StreamingLink = {
  vimeo: 'https://vimeo.com/ondemand/unfortunatebrothers',
  amazon: 'https://www.amazon.com/Unfortunate-Brothers-Koreas-Reunification-Dilemma/dp/B08K3K8PT1'
};

export function StreamingOptions({ documentaryId }: StreamingOptionsProps) {
  // Get the links for this documentary, or fall back to the default
  const links = streamingLinks[documentaryId] || defaultStreamingLink;
  
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-3">Also available on:</h3>
      <div className="flex gap-3">
        <Button 
          variant="default" 
          className={links.amazon ? "flex-1 bg-[#1ab7ea] hover:bg-[#0d9dd1] text-white hover:text-white border-[#1ab7ea]" : "w-full bg-[#1ab7ea] hover:bg-[#0d9dd1] text-white hover:text-white border-[#1ab7ea]"}
          onClick={() => window.open(links.vimeo, '_blank')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
            <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797z"/>
          </svg>
          Watch on Vimeo
        </Button>
        {links.amazon && (
          <Button 
            variant="default" 
            className="flex-1 bg-[#00A8E1] hover:bg-[#008CB9] text-white hover:text-white border-[#00A8E1]"
            onClick={() => window.open(links.amazon, '_blank')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 49.24 10.35"
              className="mr-2"
              width="114" // Increased width proportionally
              height="24" // Increased height
            >
              <defs>
                <style>
                  {`.cls-1-${documentaryId} { fill: #fff; }`} {/* Unique class name */}
                </style>
              </defs>
              <path className={`cls-1-${documentaryId}`} d="M46.45,21.33a8.87,8.87,0,0,0-5,1.45c-.41.31-.41.73.1.73,1.65-.21,5.35-.73,6.07.2s-.72,4.36-1.34,6c-.2.52.21.62.62.31,2.78-2.39,3.5-7.26,3-7.88C49.54,21.64,48.09,21.33,46.45,21.33Z" transform="translate(-0.76 -21.33)"/>
              <path className={`cls-1-${documentaryId}`} d="M1.06,22.46a.36.36,0,0,0-.22.13.38.38,0,0,0,.06.52,39,39,0,0,0,10.16,5.82,39.36,39.36,0,0,0,11.53,2.66,37.64,37.64,0,0,0,11.83-1.08,32.72,32.72,0,0,0,10.79-4.85.74.74,0,0,0-.74-1.28l0,0a49.44,49.44,0,0,1-10.63,3.37,46,46,0,0,1-11,.92,47.45,47.45,0,0,1-11-1.91A57.57,57.57,0,0,1,1.33,22.51l0,0A.37.37,0,0,0,1.06,22.46Z" transform="translate(-0.76 -21.33)"/>
            </svg>
            Watch on Prime
          </Button>
        )}
      </div>
    </div>
  );
} 