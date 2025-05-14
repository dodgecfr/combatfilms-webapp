export interface Video {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Documentary Feature' | 'Documentary Series' | 'Documentary Short' | 'Biography';
  videoType: 'youtube' | 'vimeo';
  videoId: string; // YouTube or Vimeo video ID
  description: string;
  storeLink?: string;
  image?: string; // Optional image fallback if no video
}

export const documentaryFeature: Video[] = [
  {
    id: "arts-of-the-monsoon",
    title: "Arts of the Monsoon",
    category: "Documentary Feature",
    videoType: "vimeo",
    videoId: "178058187",
    description: ""
  },
  {
    id: "closing-al-asad",
    title: "Closing Al Asad",
    subtitle: "Anatomy of a Withdrawal",
    category: "Documentary Feature",
    videoType: "vimeo",
    videoId: "",
    description: "",
    image: "/images/work/Closing Al Asad.jpg"
  },
  {
    id: "shah-i-khot",
    title: "Shah-i-Khot",
    subtitle: "Valley Redoubt",
    category: "Documentary Feature",
    videoType: "vimeo",
    videoId: "134009588",
    description: ""
  },
  {
    id: "virgin-soldiers",
    title: "Virgin Soldiers",
    category: "Documentary Feature",
    videoType: "youtube",
    videoId: "OVQEDbsXXHM",
    description: "",
    storeLink: "/store/documentaries/doc-virgin-soldiers",
  },
  {
    id: "helen-foster-snow",
    title: "Helen Foster Snow",
    subtitle: "Witness to Revolution",
    category: "Documentary Feature",
    videoType: "vimeo",
    videoId: "97365270",
    description: "",
    storeLink: "/store/documentaries/doc-helen-foster-snow",
  },
  {
    id: "immortal-fortress",
    title: "Immortal Fortress",
    subtitle: "A Look Inside Chechnya's Warrior Culture",
    category: "Documentary Feature",
    videoType: "vimeo",
    videoId: "189386253",
    description: "",
    storeLink: "/store/documentaries/doc-immortal-fortress",
  },
];

/**
 * Beyond The Border Documentary Series
 * Combat Films, in collaboration with the David M. Kennedy Center for International Studies at Brigham Young University, is proud to present Beyond The Border, a feature length documentary film series telling stories from around the world with an emphasis on international relations.
 * We recently finished our ninth film, Unfortunate Brothers: Korea’s Reunification Dilemma and the companion short documentary, Balloon Man. The film initially aired nationally on HDNet World Report and on PBS affiliate KBYU. It has also screened at notable universities and research institutions around the country. Most recently Unfortunate Brothers has been included in the pre-deployment training for the U.S. Army’s rotational battalions to Republic of Korea.
 * We are currently working on our 10th Beyond the Border film, yet untitled, regarding the challenge of border security in Brazil and the relationship to border security and crime in Brazil’s coastal cities, Rio de Janeiro and Sao Paulo. This film will be completed early 2017.
 * Our Beyond the Border films are available for DVD purchase from our Store page. We offer both individual pricing as well as education/institutional pricing. We are proud that films from this series are in some of the world's best University libraries. We are also in the process of releasing the entire series to our Vimeo-On-Demand page, which allows you to rent or purchase the film for download.
 * If you’d like more information on this Beyond The Border series, or any of our films, do not hesitate to contact us at info@combatfilms.com or call us at 801-521-7737.
 */

export const documentarySeries: Video[] = [
  {
    id: "fronteira-da-grandeza",
    title: "Fronteira da Grandeza",
    category: "Documentary Series",
    videoType: "vimeo",
    videoId: "211715497",
    description: "",
    storeLink: "https://www.journeyman.tv/film/7837/fronteira-da-grandeza"
  },
  {
    id: "unfortunate-brothers",
    title: "Unfortunate Brothers",
    category: "Documentary Series",
    videoType: "vimeo",
    videoId: "189386253",
    description: "",
    storeLink: "/store/documentaries/doc-unfortunate-brothers"
  },
  {
    id: "global-car",
    title: "Global Car",
    category: "Documentary Series",
    videoType: "vimeo",
    videoId: "94208622",
    description: "",
    storeLink: "/store/documentaries/doc-global-car"
  },
  {
    id: "launch-pads-to-lily-pads",
    title: "Launch Pads to Lily Pads",
    category: "Documentary Series",
    videoType: "vimeo",
    videoId: "190935981",
    description: "",
    storeLink: "/store/documentaries/doc-launch-pads"
  },
  {
    id: "chechnya",
    title: "Chechnya: Separatism Or Jihad?",
    category: "Documentary Series",
    videoType: "vimeo",
    videoId: "190936415",
    description: "",
    storeLink: "/store/documentaries/doc-chechnya"
  },
  {
    id: "fault-lines",
    title: "Fault Lines and Pipelines",
    category: "Documentary Series",
    videoType: "vimeo",
    videoId: "190944919",
    description: "",
    storeLink: "/store/documentaries/doc-fault-lines"
  },
  {
    id: "ukraine-sonata",
    title: "Ukraine Sonata",
    category: "Documentary Series",
    videoType: "vimeo",
    videoId: "189050260",
    description: "",
    storeLink: "/store/documentaries/doc-ukraine-sonata"
  },
  {
    id: "from-the-masses",
    title: "From the Masses to the Masses",
    category: "Documentary Series",
    videoType: "vimeo",
    videoId: "166845425",
    description: "",
    storeLink: "/store/documentaries/doc-masses-to-masses"
  },
  {
    id: "arms-bazaar",
    title: "Arms Bazaar",
    category: "Documentary Series",
    videoType: "vimeo",
    videoId: "190936972",
    description: "",
    storeLink: "/store/documentaries/doc-arms-bazaar"
  },
  {
    id: "fog-and-friction",
    title: "Fog and Friction",
    category: "Documentary Series",
    videoType: "vimeo",
    videoId: "189059406",
    description: "",
    storeLink: "/store/documentaries/doc-fog-friction"
  }
];

export const documentaryShort: Video[] = [
  {
    id: "fog-friction",
    title: "Fog and Friction",
    category: "Documentary Short",
    videoType: "youtube",
    videoId: "MqLzT7QeRqg", // Example YouTube ID
    description: "A glimpse into the decision making process at the height of battle and the media's ability to portray an accurate view of war."
  },
  {
    id: "ukraine-sonata",
    title: "Ukraine Sonata",
    category: "Documentary Short",
    videoType: "vimeo",
    videoId: "76979871", // Example Vimeo ID
    description: "Examines how Ukraine negotiated post-Soviet changes on a musical level."
  },
  {
    id: "chechnya",
    title: "Chechnya: Separatism or Jihad?",
    category: "Documentary Short",
    videoType: "youtube",
    videoId: "HG4jCJJTEzE", // Example YouTube ID
    description: "Examines the nature of Islam in the ongoing Chechen conflict."
  }
];

export const biography: Video[] = [
  {
    id: "helen-foster-snow",
    title: "Helen Foster Snow",
    subtitle: "Witness to Revolution",
    category: "Biography",
    videoType: "youtube",
    videoId: "S9BQ1Ub-MvI", // Example YouTube ID
    description: "The story of Helen Foster Snow's decade in China as a writer, activist, and witness to revolution."
  },
  {
    id: "virgin-soldiers",
    title: "Virgin Soldiers",
    category: "Biography",
    videoType: "vimeo",
    videoId: "76979871", // Example Vimeo ID
    description: "Follows India Company 3rd Battalion, 7th Marine regiment during the Iraq invasion."
  },
  {
    id: "kennedy-way",
    title: "The Kennedy Way",
    category: "Biography",
    videoType: "youtube",
    videoId: "QW9EJtJjIag", // Example YouTube ID
    description: "Explores the key values of David M. Kennedy's leadership style and global perspective."
  }
];