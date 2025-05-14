export interface Product {
  id: string;
  title: string;
  category: 'documentaries' | 'books' | 'documents';
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  institutionalPrice?: number;
  personalPrice?: number;
  subtitle?: string;
  notes?: string;
}

export const documentaries: Product[] = [
  {
    id: 'doc-1',
    title: "Unfortunate Brothers – Korea's Reunification Dilemma",
    category: 'documentaries',
    thumbnail: 'https://combatfilms.com/images/unfortunate%20bros%20thumbnail208x294.jpg?crc=4176898668',
    shortDescription: 'An exploration of the complex reunification challenges facing North and South Korea through the lens of two brothers separated by war.',
    fullDescription: 'Unfortunate Brothers explores the painful division of Korea through the story of two brothers separated during the Korean War. This documentary examines the complex political, economic, and social challenges of Korean reunification, featuring interviews with experts, government officials, and families affected by the division. The film provides historical context for the current situation while highlighting the human cost of the continuing separation between North and South Korea. Through personal stories and expert analysis, viewers gain insight into one of the most enduring geopolitical challenges of our time.',
    price: 24.99
  },
  {
    id: 'doc-2',
    title: 'Pacific Theater: Island Warfare',
    category: 'documentaries',
    thumbnail: 'https://placehold.co/600x400/333/fff?text=Pacific+Theater',
    shortDescription: 'Chronicles the brutal island-hopping campaign in the Pacific during World War II.',
    fullDescription: 'Pacific Theater: Island Warfare is a gripping documentary that examines the challenging island-hopping campaign undertaken by Allied forces in the Pacific during World War II. The film details the unique challenges of jungle warfare, the strategic importance of key islands, and the determination of both American and Japanese forces. Through rare footage, maps, and interviews with historians, this documentary provides viewers with a comprehensive understanding of one of the most difficult military campaigns in modern history.',
    price: 19.99
  },
  {
    id: 'doc-3',
    title: 'Desert Storm: The First Gulf War',
    category: 'documentaries',
    thumbnail: 'https://placehold.co/600x400/333/fff?text=Desert+Storm',
    shortDescription: 'Examines the 1991 Gulf War and the coalition forces that liberated Kuwait.',
    fullDescription: 'Desert Storm: The First Gulf War offers a detailed examination of the 1991 conflict that saw a coalition of 35 nations, led by the United States, liberate Kuwait from Iraqi occupation. The documentary covers the diplomatic efforts leading up to the conflict, the air campaign, the ground offensive, and the aftermath of the war. With access to military archives and interviews with key decision-makers, this film provides an authoritative account of a conflict that demonstrated the changing nature of modern warfare.',
    price: 22.99
  },
  {
    id: 'doc-4',
    title: 'Vietnam: The Helicopter War',
    category: 'documentaries',
    thumbnail: 'https://placehold.co/600x400/333/fff?text=Vietnam+War',
    shortDescription: 'Explores how helicopter warfare transformed combat tactics during the Vietnam War.',
    fullDescription: 'Vietnam: The Helicopter War explores the revolutionary impact of helicopter warfare during the Vietnam conflict. This documentary examines how the mobility provided by helicopters changed military tactics, logistics, and medical evacuation procedures. Through interviews with pilots, crew members, and infantry soldiers, the film provides a multifaceted view of how this technology shaped the war experience. The documentary also addresses the cultural impact of the iconic "Huey" helicopter and its enduring association with the Vietnam War in public memory.',
    price: 21.99
  },
  {
    id: 'doc-5',
    title: 'The Cold War: Nuclear Brinkmanship',
    category: 'documentaries',
    thumbnail: 'https://placehold.co/600x400/333/fff?text=Cold+War',
    shortDescription: 'Analyzes the nuclear standoff between superpowers during the Cold War era.',
    fullDescription: 'The Cold War: Nuclear Brinkmanship is a thought-provoking documentary that examines the decades-long nuclear standoff between the United States and the Soviet Union. The film explores key moments of tension, including the Cuban Missile Crisis, and the development of nuclear strategies like Mutually Assured Destruction. Through declassified documents, interviews with former military and intelligence officials, and cultural analysis, this documentary provides insight into how the world lived under the constant threat of nuclear annihilation and how this shaped global politics for generations.',
    price: 23.99
  },
  {
    id: 'doc-6',
    title: 'The Battle of the Bulge: The Forgotten Story',
    category: 'documentaries',
    thumbnail: 'https://placehold.co/600x400/333/fff?text=Battle+of+the+Bulge',
    shortDescription: 'An in-depth look at the Battle of the Bulge, one of the most critical battles of World War II.',
    fullDescription: 'The Battle of the Bulge: The Forgotten Story is a gripping documentary that examines the Battle of the Bulge, one of the most critical battles of World War II. The film explores the strategic importance of this battle, the harsh winter conditions faced by soldiers, and the ultimate Allied victory that helped turn the tide of World War II. Through personal accounts and meticulous research, viewers gain insight into both the military tactics and human experiences that defined this pivotal moment in history.',
    price: 25.99
  }
];

export const books: Product[] = [
  {
    id: 'book-1',
    title: 'Infantry Tactics: From Napoleonic Wars to Modern Conflict',
    category: 'books',
    thumbnail: 'https://placehold.co/600x400/234/fff?text=Infantry+Tactics',
    shortDescription: 'A comprehensive analysis of how infantry tactics have evolved over two centuries of warfare.',
    fullDescription: 'Infantry Tactics: From Napoleonic Wars to Modern Conflict offers a detailed examination of the evolution of ground combat over the past two centuries. The book traces the development of infantry doctrine from the massed formations of the Napoleonic era through the trenches of World War I, the combined arms approach of World War II, and into the counterinsurgency operations of recent conflicts. With detailed battle maps, firsthand accounts, and analysis of technological developments, this book provides military historians and enthusiasts with a thorough understanding of how infantry combat has transformed in response to changing technologies and strategic requirements.',
    price: 34.99
  },
  {
    id: 'book-2',
    title: 'Generals and Their Campaigns: Decisive Leadership in Combat',
    category: 'books',
    thumbnail: 'https://placehold.co/600x400/234/fff?text=Military+Leadership',
    shortDescription: 'Profiles of history\'s most influential military leaders and their strategic innovations.',
    fullDescription: 'Generals and Their Campaigns examines the careers and strategic approaches of history\'s most influential military commanders. From Alexander the Great to modern generals, this book analyzes the leadership qualities, decision-making processes, and tactical innovations that allowed these individuals to achieve remarkable military successes. Each chapter focuses on a specific general and their signature campaigns, providing context for their achievements and assessing their long-term impact on military thought. With insights into both the personal characteristics and professional methods of these commanders, this book offers valuable lessons on leadership that remain relevant across centuries.',
    price: 29.99
  },
  {
    id: 'book-3',
    title: 'Logistics of War: How Supplies Shape Battlefields',
    category: 'books',
    thumbnail: 'https://placehold.co/600x400/234/fff?text=Military+Logistics',
    shortDescription: 'Explores how supply chains and logistics determine the outcome of military campaigns.',
    fullDescription: 'Logistics of War reveals the often-overlooked but crucial role that supply chains play in determining military outcomes. This comprehensive study examines how the challenges of moving, maintaining, and supplying armies have influenced strategy from ancient times to the present day. Through case studies of campaigns where logistics proved decisive—from Napoleon\'s disastrous Russian campaign to the Allied success in World War II—the book demonstrates that battles are often won or lost before they are fought. With detailed analysis of transportation systems, supply depots, and the evolution of military logistics organizations, this book provides essential reading for understanding the "unglamorous" side of warfare that ultimately determines victory or defeat.',
    price: 32.99
  },
  {
    id: 'book-4',
    title: 'Combat Psychology: The Mind at War',
    category: 'books',
    thumbnail: 'https://placehold.co/600x400/234/fff?text=Combat+Psychology',
    shortDescription: 'An examination of the psychological effects of combat on soldiers throughout history.',
    fullDescription: 'Combat Psychology: The Mind at War offers a profound exploration of how warfare affects the human mind. Drawing on historical accounts, letters, diaries, and modern psychological research, this book examines how soldiers have coped with the extreme stress of combat across different eras and conflicts. The text addresses topics such as courage, fear, unit cohesion, moral injury, and post-traumatic stress, providing insights into both the immediate psychological challenges of battle and the long-term effects of war experiences. By understanding the psychological dimension of warfare, readers gain a more complete picture of military history and a deeper appreciation for the human cost of conflict.',
    price: 27.99
  },
  {
    id: 'book-5',
    title: 'Weapons That Changed Warfare',
    category: 'books',
    thumbnail: 'https://placehold.co/600x400/234/fff?text=Military+Weapons',
    shortDescription: 'Chronicles the development of revolutionary weapons and their impact on military strategy.',
    fullDescription: 'Weapons That Changed Warfare examines the technological innovations that have transformed combat throughout history. From the longbow to nuclear weapons, this book analyzes how new armaments have repeatedly rendered existing tactics obsolete and forced military leaders to adapt. Each chapter focuses on a specific weapon system, explaining its development, technical characteristics, and the strategic and tactical revolutions it sparked. With detailed illustrations and accounts of these weapons in action, this book demonstrates how technological innovation has been a primary driver of military evolution, often with consequences that extend far beyond the battlefield into politics, society, and culture.',
    price: 36.99
  }
];

export const documents: Product[] = [
  {
    id: 'doc-archive-1',
    title: 'D-Day Planning Documents: Operation Overlord',
    category: 'documents',
    thumbnail: 'https://placehold.co/600x400/432/fff?text=D-Day+Documents',
    shortDescription: 'Declassified planning documents for the Allied invasion of Normandy in 1944.',
    fullDescription: 'This collection contains declassified planning documents related to Operation Overlord, the Allied invasion of Normandy on June 6, 1944. The archive includes original maps, intelligence assessments, logistical plans, and command directives that reveal the extraordinary complexity of planning the largest amphibious invasion in military history. These documents provide unprecedented insight into the strategic thinking of Allied commanders, the challenges they anticipated, and the deception operations designed to mislead German forces. For historians, researchers, and World War II enthusiasts, this collection offers a rare opportunity to examine the detailed planning that underpinned one of history\'s most consequential military operations.',
    price: 42.99
  },
  {
    id: 'doc-archive-2',
    title: 'Cold War Intelligence Briefings (1960-1975)',
    category: 'documents',
    thumbnail: 'https://placehold.co/600x400/432/fff?text=Cold+War+Intelligence',
    shortDescription: 'Declassified intelligence reports from the height of the Cold War period.',
    fullDescription: 'This archive contains declassified intelligence briefings from a critical fifteen-year period of the Cold War, covering major events such as the Cuban Missile Crisis, the Vietnam War, and détente. The collection includes CIA assessments, National Intelligence Estimates, and diplomatic cables that reveal how American intelligence agencies understood Soviet intentions and capabilities. These documents demonstrate the challenges of intelligence gathering during this period, the analytical frameworks used to interpret information, and how intelligence assessments influenced policy decisions. For researchers studying Cold War history, international relations, or intelligence operations, this collection provides valuable primary sources that illuminate the hidden dimensions of superpower competition.',
    price: 39.99
  },
  {
    id: 'doc-archive-3',
    title: 'Civil War Field Dispatches and Orders',
    category: 'documents',
    thumbnail: 'https://placehold.co/600x400/432/fff?text=Civil+War+Dispatches',
    shortDescription: 'Original military communications from Union and Confederate forces during the American Civil War.',
    fullDescription: 'This comprehensive collection brings together field dispatches, orders, and communications from both Union and Confederate forces during the American Civil War. The documents include battlefield reports, tactical orders, strategic assessments, and correspondence between commanders that reveal the day-to-day reality of Civil War military operations. Organized chronologically and by campaign, these primary sources allow researchers to trace the development of military events as they unfolded, offering insights into command decisions, battlefield conditions, and the fog of war that influenced this pivotal American conflict. Each document is presented with contextual information and annotations to help readers understand its significance within the broader narrative of the war.',
    price: 45.99
  },
  {
    id: 'doc-archive-4',
    title: 'Desert Storm: Coalition Warfare Documents',
    category: 'documents',
    thumbnail: 'https://placehold.co/600x400/432/fff?text=Desert+Storm+Documents',
    shortDescription: 'Official documents detailing the coordination of the multinational coalition during the Gulf War.',
    fullDescription: 'This archive contains official documents related to the formation and operation of the 35-nation coalition during the 1991 Gulf War. The collection includes diplomatic agreements, command structure documents, rules of engagement protocols, and after-action reports that demonstrate the challenges and successes of multinational military cooperation. These materials reveal how different national forces were integrated into a cohesive military effort, how command authority was established and maintained, and how political considerations shaped military operations. For those studying modern warfare, international relations, or coalition operations, these documents provide valuable insights into what has become an increasingly common approach to military interventions in the post-Cold War world.',
    price: 37.99
  },
  {
    id: 'doc-archive-5',
    title: 'Strategic Bombing Survey: World War II',
    category: 'documents',
    thumbnail: 'https://placehold.co/600x400/432/fff?text=Strategic+Bombing+Survey',
    shortDescription: 'Post-war assessment of the effectiveness and impact of strategic bombing campaigns.',
    fullDescription: 'The Strategic Bombing Survey collection contains the comprehensive assessment conducted by Allied forces after World War II to evaluate the effectiveness of strategic bombing campaigns against Germany and Japan. These documents include damage assessments, economic impact analyses, interviews with enemy officials, and evaluations of specific targeting strategies. The survey represents one of history\'s most thorough attempts to objectively assess the military value of strategic bombing and its effects on enemy war production, civilian morale, and military capabilities. These findings not only shaped historical understanding of World War II air campaigns but also influenced the development of air power doctrine during the Cold War and beyond. This collection is essential for researchers studying air warfare, strategic planning, or the economic dimensions of total war.',
    price: 41.99
  }
]; 