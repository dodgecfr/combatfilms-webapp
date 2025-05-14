
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

export const aboutInfo: AboutInfo = {
  "mainDescription": "Combat Films and Research is a Salt Lake City-based, full-service production company, producing both short and long form documentary, promotional, corporate and biographical films. From Afghanistan to Zanzibar, Combat Films' camera crews cover the world to document cultures and conflicts. For the past two decades, CFR has set itself apart by gaining access to regions of the world otherwise considered impenetrable. Combat Films and Research strives to tell the right story at the right time.",
  "history": [
    {
      "year": 1997,
      "event": "Combat Films was founded in New York City when director Dodge Billingsley had the idea to combine his interests in global affairs and filmmaking into a production company."
    },
    {
      "year": 1998,
      "event": "CFR moved to Salt Lake City, Utah to finish its first film, Immortal Fortress: Inside Chechnya's Warrior Culture."
    }
  ],
  "evolution": "CFR's early films focused on global conflict: first Chechnya, then Afghanistan and Iraq, and later to West Africa. Quickly and unsurprisingly, it was decided that Combat Films would remain in Salt Lake City. As time continued, CFR's focus broadened. CFR now produces a variety of programming for its diverse clientele.",
  "broadcasts": "CFR programs have been broadcast on BBC, Discovery, TLC, Military Channel, C4 UK, NHK Japan, TV8 Sweden and other global television outlets.",
  "recentWork": "Its most recent films include Unfortunate Brothers: Korea's Reunification Dilemma, a documentary examining the difficult political situation on the Korean Peninsula for the David M. Kennedy Center for International Studies at Brigham Young University, and Arts of the Monsoon, a feature documentary discussing the flow of art and culture along the East Africa littoral for the Smithsonian National Museum of African Art.",
  "services": [
    "Documentary Series",
    "Documentary Feature",
    "Documentary Short",
    "Biography",
    "Corporate",
    "Educational"
  ]
};
