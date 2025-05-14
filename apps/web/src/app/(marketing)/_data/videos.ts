export interface DocumentaryEntry {
  title: string;
  videoUrl?: string;
  image?: string;
  description?: string;
  link?: string;
}

export const documentaryFeature: DocumentaryEntry[] = [
  {
    title: "Arts of the Monsoon",
    videoUrl: "https://player.vimeo.com/video/178058187?color=ff9933",
  },
  {
    title: "Closing Al Asad",
    description: "Anatomy of a Withdrawal",
    image: "/images/closing%20al%20asad.jpg",
  },
  {
    title: "Shah-i-Khot",
    description: "Valley Redoubt",
    videoUrl: "https://player.vimeo.com/video/134009588",
  },
  {
    title: "Virgin Soldiers",
    image: "/images/virgin%20soldiers.jpg",
    link: "/virgin-soldiers.html",
  },
  {
    title: "Helen Foster Snow",
    description: "Witness to Revolution",
    videoUrl: "https://player.vimeo.com/video/97365270",
    link: "/helen-foster-snow.html",
  },
  {
    title: "Immortal Fortress",
    description: "A Look Inside Chechnya's Warrior Culture",
    videoUrl: "https://player.vimeo.com/video/189386253",
    link: "/immortal-fortress.html",
  },
];

export const documentarySeries: DocumentaryEntry[] = [];
export const documentaryShort: DocumentaryEntry[] = [];
export const biography: DocumentaryEntry[] = [];