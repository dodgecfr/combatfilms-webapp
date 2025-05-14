export interface Product {
  id: string;
  title: string;
  category: 'documentaries' | 'books' | 'documents';
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  notes?: string;
  price: number;
  institutionalPrice?: number;
  personalPrice?: number;
  subtitle?: string;
  paypalItemId?: string;
}

export const documentaries: Product[] = [
  {
    "id": "doc-unfortunate-brothers",
    "title": "Unfortunate Brothers",
    "subtitle": "Korea's Reunification Dilemma",
    "category": "documentaries",
    "thumbnail": "/images/products/unfortunate_brothers.jpg",
    "shortDescription": "An exploration of the complex reunification challenges facing North and South Korea through the lens of two brothers separated by war.",
    "fullDescription": `"Even though I live in South Korea, my heart is in North Korea. The [North Koreans] are not strangers, but my brethren." These words spoken by Mr. Lee, the film's main character, reveal an internal conflict in the national psyche of the Korean people. Since the armistice agreement at the end of the Korean War in 1953, tensions between the two nations--still technically at war--have shown little sign of abating. In their sixty years apart, the two Koreas have taken dramatically different paths. South Korea has experienced an economic and cultural explosion that has elevated its status among the top tier of the world's industrialized nations. North Korea, on the other hand, has struggled economically, and its ultra-nationalistic goals have left it isolated and at odds with the western world and the international community. Reunification of the Koreas is a complicated issue, not only for the North and South, but for China, Japan, and the United States as well. While all parties involved express a general desire for reunification, the dynamics of such an event have kept it far beyond reach. Changing opinions in South Korea, a generation gap, North Korean nuclear ambitions, and security concerns from the U.S, China and Japan all hinder potential reunification.

Shot over the course of three years, Unfortunate Brothers: Korea's Reunification Dilemma seeks to explore these issues by following Mr. Lee, a North Korean defector trying to adjust to life in his newly adopted South Korean homeland. Through Mr. Lee's intensely personal account of his journey from North Korea, as well as expert interviews, the film tries to unravel the riddle of Korean unification and promote deeper understanding of two countries many of us know little about.

The Beyond the Border series is a collection of documentary films covering conflict, geography, politics, history and current affairs. Produced by Combat Films & Research for the David M. Kennedy Center for International Studies at Brigham Young University, the series examines events, trends and stories from around the world with an emphasis on international relations.`,
    "notes": "Included in the Special Edition DVD is our award-winning short film, Balloon Man, along with other extras.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-global-car",
    "title": "Global Car",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "/images/products/global_car.jpg",
    "shortDescription": "An examination of globalization through the automotive global supply chain.",
    "fullDescription": `Global Car examines globalization by exploring the dynamics of the automotive global supply chain. The car is a symbol of American ingenuity and technological progress. Beyond that, it is a symbol of the American psyche. But there's probably not truly an American car that's built anymore.

Consumers often do not appreciate how much their lifestyle depends on global networks of goods and services. Trade balance, domestic content, off-shoring, outsourcing - what do these things mean to the average American? By looking at one vehicle - the Dodge Ram pickup - and tracing the origins of its component parts from all over the world, a symbol of the world economy appears, and it is in your garage.

Directed by Dodge Billingsley (Combat Films and Research)

Running Time: 57 minutes PBS version
40 minutes Vimeo version`,
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-launch-pads",
    "title": "Launch Pads and Lily Pads",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "/images/products/launch_pads_lily_pads.jpg",
    "shortDescription": "Explores how the US military adapts its force posture to meet new security challenges.",
    "fullDescription": `New Threats require new strategy. The principles that guided America’s military presence in Europe and elsewhere for fifty years have become less relevant. Launch Pends to Lily Pads explores the US military’s on-going struggle to adapt its force posture to meet new challenges inherent to a shifting American security perimeter.

This film looks back to the past decade as NATO Commander, General James L. Jones, (and eventual National Security Advisor to President Barack Obama), must adapt US forces in Europe for the 21st century. At the heart of the ongoing transformation is a debate regarding what EUCOM’s role should be in the face of emerging threats in Central Asia, the Caucasus, and Africa, all while keeping an eye on traditional long term threats to the US and its allies.

Running time: 57 minutes
Technical Specifications: Standard Definition/Letterbox`,
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-masses-to-masses",
    "title": "From the Masses to the Masses",
    "subtitle": "An Artist in Mao's China",
    "category": "documentaries",
    "thumbnail": "/images/products/masses.jpg",
    "shortDescription": "The story of Jin Zhilin, a Chinese artist whose career was dramatically altered by the currents that shaped Communist China.",
    "fullDescription": `What happens to the individual artist when culture becomes a tool of government? From the Masses to the Masses is the story of Jin Zhilin, a Chinese artist whose career was altered dramatically by the currents that shaped Communist China.

Jin responded to Mao Zedong's call for artists to learn from the masses and create for the masses. But after Mao launched the Cultural Revolution in 1966 to purge China's intellectuals and those he deemed insufficiently "red," Jin found himself on the wrong side of the new artistic mandate and was imprisoned. Sent to Yan'an upon his release, Jin was finally able to pursue his lifelong passion: to learn from the masses, in this case the traditional artists of Yan'an. With his students, Song Ruxin, Feng Shanyun, and Chen Shanqiao, he spent the next seven years capturing his life and history of the revolutionary capital using oil, watercolor and woodblock prints.

From the Masses to the Masses features original art, restored and preserved, and interviews with the artists to document the hardships and dreams of artists during this important watershed period in modern Chinese history.

In English and Chinese with English subtitles.

Available for all regions.
Running Time: 56.46
Technical Specifications: Letterbox`,
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-fog-friction",
    "title": "Fog and Friction",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "/images/products/fog_friction.jpg",
    "shortDescription": "A glimpse into the decision making process at the height of battle and the media's ability to portray an accurate view of war.",
    "fullDescription": `War is complicated and has always been so. From Clausewitz, to Jomini to the think-tank of the twentieth century, the military thinker has struggled with the concepts of Fog and Friction. Today friendly-fire incidents, collateral damage, and plans that fall apart under the stress of combat seem unavoidable. Marines from 3rd Battalion 7 Marine Regiment prepare to cross into Iraq during the race for Baghdad, unsure of the enemy’s strength amidst a number of confusing signals. Later, Marines and soldiers from 1st Battalion of the 187th Combat Brigade find themselves on the outskirts of Baghdad, facing a determined enemy conducting operations from a complex urban landscape. In another part of the world, the pilots and gunners of Bravo Company Apaches take heavy fire requiring them to improvise new tactics ad hoc during Operation Anaconda in eastern Afghanistan. So too, the war reporter in both Afghanistan and Iraq also struggles to make sense of his experience, to convey the story of war, often without the operational knowledge that soldiers receive. Fog and Friction seeks to add clarity to confusion by examining war today as it is fought and reported.

Running Time: 56.46 (26.46 version also on disc)
Technical Specifications: Letterbox
Regions: 1&2`,
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-arms-bazaar",
    "title": "Arms Bazaar",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "/images/products/arms_bazaar.jpg",
    "shortDescription": "An inside look at the largest conventional arms show in the world.",
    "fullDescription": `While world leaders and the international press focus their gaze on the specter of weapons of mass destruction, the conventional arms market quietly does several billion dollars worth of business a year. At tradeshows like Abu Dhabi's International Defense Exhibition, or IDEX, representatives from dozens of countries peruse, examine, and strike deals for a dizzying variety of weapons from assault rifles to tanks, radars to cruise missiles. Even pariah nations such as Iran and Libya do business with their peers without the sanctions generally applied to their activities elsewhere. Buyers and sellers are not the only ones surveying the hundreds of pavilions on site at IDEX. Foreign and local presses report on the most current weapon upgrades and intelligence agents watch the latest armored vehicles go through their paces on the mobility course.

Some argue that the weapons bought and sold at IDEX serve to prolong, intensify and escalate conflicts the world over. Others argue transparency in the arms trade promoted by fairs like IDEX creates stability around the world. Arms Bazaar lets the viewer decide by putting him in the middle of the largest conventional arms show in the world.

Running Time: 26.46
Technical Specifications: Letterbox`,
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-ukraine-sonata",
    "title": "Ukraine Sonata",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "/images/products/ukraine_sonata.jpg",
    "shortDescription": "Examines how Ukraine negotiated post-Soviet changes on a musical level.",
    "fullDescription": `As the shadow of soviet control slipped away from the former satellite states, Ukraine stepped forward and declared its independence. free of Moscow's grip, hone is the state funding that supported the arts. Music is an abandoned program. Once a source of great pride and honor for the former Soviet Republics, many formerly celebrated musicians are now destitute. Young students of music have an uncertain future.

The spiritual repression of the Soviet era, ironically, inspired creative genius and stands in marked contrast to the state of music today in Ukraine. As communism collapsed, a surge of nationalism emerged in the light of freedom as the population and musicians alike searched for a heritage from a history dominated by Russia.

Ukraine Sonata looks at the years before, during, and after the great "Perestroika" of the Soviet Union and how the Independent Republic of Ukraine is negotiating the changes on a musical level.

Running Time: 26.46
Technical Specifications: Letterbox
Regions: 1&2`,
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-chechnya",
    "title": "Chechnya: Separatism or Jihad?",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "/images/products/chechnya.jpg",
    "shortDescription": "Examines the nature of Islam in the ongoing Chechen conflict.",
    "fullDescription": `Chechnya: Separatism or Jihad? examines the nature of Islam in the ongoing Chechen conflict. In early 1995, numerous foreign mujahadeen arrived in Chechnya to assist the separatist movement, and there have been foreigners there ever since. Their contribution on the battlefield and their influence in the political situation within the Chechen resistance is not clear and has often been politically manipulated by all sides in the conflict.

More disturbing, four large-scale hostage taking raids into Russia in the past decade, Budyonnovsk (1995), Kizlar (1996), Moscow Theater

(2002) and Beslan (2004), now referred to as "spectaculars," seem to run parallel to the radicalization of the conflict and serve as a chronological timeline for the story and illustrate an evolution and escalation of militant Chechen tactics.

Chechnya: Separatism or Jihad? explores the larger question of whether or not the Chechen independence movement has been hijacked by militant Islam.

Running Time: 56.46
Technical Specifications: Letterbox
Regions: 1&2`,
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-fault-lines",
    "title": "Fault Lines & Pipelines",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "/images/products/fault_lines_pipelines.jpg",
    "shortDescription": "Explores the conflicts and corruption in the Caucasus region.",
    "fullDescription": `The beautiful and historic Caucasus Mountains are home to three major conflicts in the former Soviet Union, Nagorno-Karabakh, Abkhazia and Chechnya, and multiple minor struggles. Corruption is rampant and coups, random killing and kidnappings are so prevalent that foreigners in Georgia's capitol Tbilisi are warned not to walk after dark in its most affluent district, Rustaveli, more commonly referred to as the "red zone".

Intertwined in this convoluted political and geographic landscape is a significant portion of the world's known oil reserves. The Caspian Sea basin boasts great fields of crude and natural gas with one major caveat-there is no accessible sea route to get the precious energy sources to the world market.

Pipelines, constantly under sabotage, exist running east to west through the Caucasus valleys to the Black sea, while a more aggressive international pipeline project spanning the region is in various stages of planning and preparation. The Baku-Ceyhan pipeline will skirt four regional wars and numerous ethnic enclaves where war can break out at any moment.

Fault Lines and Pipelines examines this intriguing yet treacherous region in the context for a secure pipeline route.

Running Time: 56.46
Technical Specifications: Letterbox
Regions: 1&2`,
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-swift-company-k",
    "title": "Swift & Company K",
    "subtitle": "3/25 Marines Engage in West Africa",
    "category": "documentaries",
    "thumbnail": "/images/products/swift_company_k.jpg",
    "shortDescription": "Follows Kilo Company 3/25 Marines as they interact for the first time with their West African counterparts.",
    "fullDescription": `Swift and Company K follows Kilo Company 3/25 Marines as they interact for the first time with their West African counterparts. As one of only three reserve infantry battalions not activated for deployment since September 11, 2001, this is the unit's first overseas deployment, consisting of a variety of missions including joint patrol, helo insertions, live-fire exercises with multiple weapons, riverine operations, and amphibious landings.

In the context of increased global security concerns, Kilo Company's mission to Africa also marks an increasing US interest in Africa. It also gave the Marines a chance to engage one-to-one with West African soldiers at a time when stereotypes of Africa, Muslims, Christians, and Americans are hazy at best.

Running Time: 58.55
Technical Specifications: Letterbox`,
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-virgin-soldiers",
    "title": "Virgin Soldiers",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "/images/products/virgin_soldiers.jpg",
    "shortDescription": "Follows India Company 3rd Battalion, 7th Marine regiment during the Iraq invasion.",
    "fullDescription": `With unprecedented access, award winning filmmaker Dodge Billingsley tells the story of India Company 3rd Battalion, 7th Marine regiment, crack U.S. frontline troops in Iraq. With some as young as 19, the invasion of Iraq was the first time any of them had actually been sent into combat. Experience a day in the life of these young men as they play a vital role in the liberation of Iraq.

With remarkable battle footage, Virgin Soldiers reveals the true story of men who fought their way into the heart of Baghdad.

"I have never seen a more accurate portrayal of war than Virgin Soldiers. The documentary's greatest strength is showing the perspective of war as lived by our junior enlisted Marines."
- Captain Jeff Pool, Public Affairs Officer for the 2nd Marine Division

"With unprecedented access to US troops during the war in Iraq, Billingsley documented a month of fear, doubt, frustration and boredom as ‘India Company’ made its way towards Baghdad. He captured a picture of what life was really like for frontline soldiers, many of them very young – and in combat for the first time - who fought their way into the heart of the city.

Judge’s Comment: You can feel that the soldiers trusted him, which makes it one cut above other features of embedded journalists. Technically outstanding."
- Channel 4 Television

Running Time: 49.00
Technical Specifications: Letterbox
Warning: Strong Language, Graphic Violence
Regions: 1&2`,
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-helen-foster-snow",
    "title": "Helen Foster Snow",
    "subtitle": "Witness to Revolution",
    "category": "documentaries",
    "thumbnail": "/images/products/helen_foster_snow.jpg",
    "shortDescription": "The story of Helen Foster Snow's decade in China as a writer, activist, and witness to revolution.",
    "fullDescription": `Produced in 2000, this is the 20th anniversary of Combat Films' documentary production of Helen Foster Snow: Witness to Revolution. The content of this film is as relevant today as it was when the film was made. Young Helen Snow's journey begins in China in the 1930's, a decade marked by profound uncertainty and sweeping change. In the wake of the collapse of the ancient dynastic system the country fell into political chaos as competing warlords terrorized the countryside. Chiang Kai-Shek's Nationalist Party was engaged in a mortal struggle against the communist forces of Mao Zedong for control of the nation. Meanwhile, Japan invaded Manchuria, and threatened the survival of China itself. It was in this unstable and dangerous environment that aspiring American Author Helen Foster Snow found herself when she arrived in China in 1931. She spent the next decade working as a writer, an activist, and humanitarian. She is one of the few Western eyewitnesses to the gathering Chinese Communist revolution. Shot on location in China, this carefully documented film considers her important role during this turning point in the birth of modern China.

The DVD version is ideal for libraries, institutions, and historians, those who want quality historical programming "on the shelf."

Running Time: 57:00
Technical Specifications: 4:3 Letterbox
DVD contains both English and Chinese film versions`,
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  },
  {
    "id": "doc-immortal-fortress",
    "title": "Immortal Fortress",
    "subtitle": "A Look Inside Chechnya's Warrior Culture",
    "category": "documentaries",
    "thumbnail": "/images/products/immortal_fortress.jpg",
    "shortDescription": "A behind-the-scenes journey into Chechnya's war-driven culture.",
    "fullDescription": `Award winning Immortal fortress takes the viewer on a dangerous behind-the-scenes journey into Chechnya, exploring the tiny mountain republic's war-driven culture whil searching for its most prolific warrior, Shamil Basayev.

After centuries of blood feuds and resistance to all foreign occupiers, the warrior cult defines Chechen society. Ideally every Chechen man is first a warrior. Shamil Basayev personifies this warrior spirit. to Russia and the west he is a terrorist, but to man in Chechnya a hero. The surprise attack on the Russian city of  Budyonnovsk in 1995 and the invasion of Dagestan in 1999 have given him international attention and brought Russia back to the battlefield.

Immortal fortress is a riveting look behind the scenes of one of the world's most controversial men and least understood cultures. It answers the broader question of why Shamil Basayev and thousands of other Chechens fight.

"The wild west may be gone but there are still a few places on the planet were everyday events are larger than life. One such place is Chechnya, where Dodge Billingsley went to shoot a documentary on the region. the result is on of those rare films that its you in the gut, but makes you a bit more informed at the same time. these people come from a different culture, and the voices and images enable you to connect with it. Not necessarily agree with it, but certainly understand the Chechen thought process. It's not fiction, but fact, and compellingly presented fact at that." -Jim Dunnigan (Author of "How to Make War" and "A Quk Dirty Guide to War")

52 Minutes
Available in NTSC or PAL format`,
    "notes": "",
    "price": 19.99,
    "institutionalPrice": 150,
    "personalPrice": 19.99
  },
  {
    "id": "doc-kennedy-way",
    "title": "The Kennedy Way",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "/images/products/kennedy_way.jpg",
    "shortDescription": "Explores the key values of David M. Kennedy's leadership style and global perspective.",
    "fullDescription": "Explore the key values that contributed to David M. Kennedy's leadership style and global perspective, both of which are inextricably linked to his lifetime of service. Ambassador Kennedy's vision and legacy live on through Brigham Young University's Kennedy Center, students, and alumni.\n\n41 Minutes",
    "notes": "",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99
  }
];

export const books: Product[] = [
  {
    id: 'book-anaconda',
    title: 'Operation Anaconda',
    subtitle: "America's First Major Battle in Afghanistan",
    category: 'books',
    thumbnail: '/images/products/operation_anaconda.jpg',
    shortDescription: 'A complete account of the intense 13-day battle in the Shar-i Kot Valley, highlighting coalition operations and lessons learned.',
    fullDescription: `Long before it became “Obama’s War,” the long-running conflict in Afghanistan was launched by President George W. Bush in retaliation for the 9/11 attacks on the United States. Only a few months later, Operation Anaconda sent American-led coalition forces into their most intensely brutal confrontation with Al Qaeda and their Taliban hosts in the Shar-i Kot Valley near the Pakistan border. The result was an unexpected set piece of conventional fighting in what has become an era of guerrilla warfare.

Drawing upon previously unavailable or neglected sources, Lester Grau and Dodge Billingsley give us the most complete and accurate account of this thirteen-day firefight waged in mountainous terrain nearly two miles above sea level. They describe how allied troops fought a fierce and well-entrenched enemy to a standstill, close to an old Soviet battlefield, and then drove them completely out of Afghanistan.

Grau and Billingsley's account also highlights problems encountered in Anaconda and the lessons we should learn from their in-depth study. The Army and Air Force operated under conflicting views regarding the appropriate application of Close Air Support, and airpower both crippled and aided the overall effort. In addition, severe shortages of transport, attack helicopters, and artillery hampered the effort, while the acquisition and timely sharing of intelligence barely occurred at all and coalition relations frayed under the intense pressures of combat.

As an added bonus, the authors also include with the book a documentary on DVD that features interviews with soldiers who fought in Anaconda, provides additional information concerning major phases of the battle, and presents insightful commentary by Grau and by Billingsley, who was on the ground with U.S. forces for the operation.

Written by Lester W. Grau and Dodge Billingsley

Published by University Press of Kansas part of its Modern War Studies series. 464 pages, 32 photographs, 47 maps`,
    notes: "Includes the 52-minute documentary film, Shah-i-Khot: Valley Redoubt on DVD. <a href='https://vimeo.com/ondemand/shahikhot/134009588' target='_blank' rel='noopener noreferrer' class='text-primary underline hover:text-primary/80'>View Trailer</a>",
    price: 31.99 // Hardcover price
  },
  {
    id: 'book-fangs',
    title: 'Fangs of the Lone Wolf',
    subtitle: 'Chechen Tactics in the Russian Chechen Wars 1994-2009',
    category: 'books',
    thumbnail: '/images/products/fangs_lone_wolf.jpg',
    shortDescription: 'A tactical perspective on guerrilla combat in the Chechen wars, told by survivors. Signed by author.',
    fullDescription: `Books on guerrilla war are seldom written from the tactical perspective and even less seldom from the guerrilla’s perspective. Fangs of the Lone Wolf: Chechen Tactics in the Russian-Chechen Wars 1994-2009 is an exception. These are the stories of low-level guerrilla combat as told by the survivors. They cover fighting from the cities of Grozny and Argun to the villages of Bamut and Serzhen-yurt, and finally the hills, river valleys and mountains that make up so much of Chechnya. The author embedded with Chechen guerrilla forces and knows the conflict, country and culture. Yet, as a Western outsider, he is able to maintain perspective and objectivity. He traveled extensively to interview Chechen former combatants now displaced, some now in hiding or on the run from Russian retribution and justice. The military professional will appreciate the book’s crisp narration, organization by type of combat, accurate color maps and insightful analysis and commentary. The civilian reader will discover the complexity of “simple guerrilla tactics” and the demands on individual perseverance and endurance that guerrilla warfare exacts.

The book is organized into vignettes that provide insight on the nature of both Chechen and Russian tactics utilized during the two wars. They show the chronic problem of guerrilla logistics, the necessity of digging in fighting positions, the value of the correct use of terrain and the price paid in individual discipline and unit cohesion when guerrillas are not bound by a military code and law. Guerrilla warfare is probably as old as man, but has been overshadowed by maneuver war by modern armies and recent developments in the technology of war. As Iraq, Afghanistan, the Philippines and Chechnya demonstrate, guerrilla war is not only still viable, but is increasingly common. Fangs of the Lone Wolf provides a unique insight into what is becoming modern and future war.


"Massively outnumbered and out gunned by the Russian military, the story of the Chechens' ability to hold and then humble them in the First Chechen War is an extraordinary one, hardly overshadowed by the Russians' capacity to learn from their mistakes in the Second. Through well-chosen case studies, this book explores the tactics of both sides and in the process becomes the best military study of this conflict yet."
-Mark Galeotti, Professor of Global Affairs at the Center for Global Affairs at New York University


"Fangs of the Lone Wolf sheds light on a poorly understood unconventional war and does so from a rare perspective, that of Chechens who fought against Russia from 1994 to 2009. Billingsley captures the voices of the Chechens from years of interviews conducted in Chechnya and in exile."
-Mark von Hagen, Professor of History and Global Studies at Arizona State University


"Dodge Billingsley saw the Chechen War from the inside. His insights into the extraordinary battle between one of the world's largest armies and the insurgents who fought it to a standstill are second to none."
-Thomas de Waal, Russia and Eurasia Program Carnegie Endowment for International Peace and author A Small Victorious War


"The author's unique insights, enabled by his close working relationship with the Chechens, makes for a technical but interesting read. His narrative is blunt, honest and balanced and he does not shy away from critical conclusions of the Chechen efforts where warranted."
-Canadian Army Journal`,
    notes: "Signed by author. Also available in Paperback for $16.99 (Contact for details).", // Added note about paperback
    price: 32.99 // Hardcover price
  }
];

export const documents: Product[] = [
  {
    id: 'doc-baath-party-file',
    title: 'Baath Party Personnel File',
    category: 'documents',
    thumbnail: 'https://placehold.co/600x400/432/fff?text=Baath+Party+File', // Using placeholder image
    shortDescription: 'A glimpse into the mundane reality of being a low level Baathist under Saddam Hussein.',
    fullDescription: 'This Baath party file was taken from the Iraqi government and military facility at Salman Pak Iraq on April 6th, 2003 during the US push to Baghdad. The file itself is a glimpse into the mundane reality of being a low level Baathist under Saddam Hussein...',
    notes: "",
    price: 19.95,
    paypalItemId: 'DA01'
  }
];
