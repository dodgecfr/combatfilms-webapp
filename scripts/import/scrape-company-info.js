/**
 * Script to scrape company information from combatfilms.com
 * 
 * This script extracts about and contact information from the website
 * and formats it into JSON files for use in the new site.
 */

const fs = require('fs');
const path = require('path');

// Manually curated company information from combatfilms.com
const companyInfo = {
  about: {
    mainDescription: "Combat Films and Research is a Salt Lake City-based, full-service production company, producing both short and long form documentary, promotional, corporate and biographical films. From Afghanistan to Zanzibar, Combat Films' camera crews cover the world to document cultures and conflicts. For the past two decades, CFR has set itself apart by gaining access to regions of the world otherwise considered impenetrable. Combat Films and Research strives to tell the right story at the right time.",
    history: [
      {
        year: 1997,
        event: "Combat Films was founded in New York City when director Dodge Billingsley had the idea to combine his interests in global affairs and filmmaking into a production company."
      },
      {
        year: 1998,
        event: "CFR moved to Salt Lake City, Utah to finish its first film, Immortal Fortress: Inside Chechnya's Warrior Culture."
      }
    ],
    evolution: "CFR's early films focused on global conflict: first Chechnya, then Afghanistan and Iraq, and later to West Africa. Quickly and unsurprisingly, it was decided that Combat Films would remain in Salt Lake City. As time continued, CFR's focus broadened. CFR now produces a variety of programming for its diverse clientele.",
    broadcasts: "CFR programs have been broadcast on BBC, Discovery, TLC, Military Channel, C4 UK, NHK Japan, TV8 Sweden and other global television outlets.",
    recentWork: "Its most recent films include Unfortunate Brothers: Korea's Reunification Dilemma, a documentary examining the difficult political situation on the Korean Peninsula for the David M. Kennedy Center for International Studies at Brigham Young University, and Arts of the Monsoon, a feature documentary discussing the flow of art and culture along the East Africa littoral for the Smithsonian National Museum of African Art.",
    services: [
      "Documentary Series",
      "Documentary Feature",
      "Documentary Short",
      "Biography",
      "Corporate",
      "Educational"
    ]
  },
  contact: {
    address: {
      street: "825 North 300 West",
      suite: "Suite W311",
      city: "Salt Lake City",
      state: "UT",
      zip: "84103"
    },
    phone: {
      office: "801-521-7737",
      fax: "801-521-6714"
    },
    email: "info@combatfilms.com"
  }
};

// Save to JSON files
const outputDir = path.join(__dirname, '../../apps/web/src/app/(marketing)/_data');

// Make sure the directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Save about data
const aboutFile = path.join(outputDir, 'about.json');
fs.writeFileSync(aboutFile, JSON.stringify(companyInfo.about, null, 2));
console.log(`Saved about data to ${aboutFile}`);

// Save contact data
const contactFile = path.join(outputDir, 'contact.json');
fs.writeFileSync(contactFile, JSON.stringify(companyInfo.contact, null, 2));
console.log(`Saved contact data to ${contactFile}`);

// Create TypeScript files
const aboutTsContent = `
// This file was manually created based on data from combatfilms.com/about.html
export interface HistoryEvent {
  year: number;
  event: string;
}

export interface AboutInfo {
  mainDescription: string;
  history: HistoryEvent[];
  evolution: string;
  broadcasts: string;
  recentWork: string;
  services: string[];
}

export const aboutInfo: AboutInfo = ${JSON.stringify(companyInfo.about, null, 2)};
`;

const contactTsContent = `
// This file was manually created based on data from combatfilms.com/contact.html
export interface Address {
  street: string;
  suite: string;
  city: string;
  state: string;
  zip: string;
}

export interface Phone {
  office: string;
  fax: string;
}

export interface ContactInfo {
  address: Address;
  phone: Phone;
  email: string;
}

export const contactInfo: ContactInfo = ${JSON.stringify(companyInfo.contact, null, 2)};
`;

const aboutTsFile = path.join(outputDir, 'about.ts');
const contactTsFile = path.join(outputDir, 'contact.ts');

fs.writeFileSync(aboutTsFile, aboutTsContent);
console.log(`Saved about TypeScript data to ${aboutTsFile}`);

fs.writeFileSync(contactTsFile, contactTsContent);
console.log(`Saved contact TypeScript data to ${contactTsFile}`);

console.log('Done!'); 