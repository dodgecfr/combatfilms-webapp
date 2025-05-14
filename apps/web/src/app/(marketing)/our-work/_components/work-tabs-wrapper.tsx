"use client";

import * as React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { VideoGrid } from "./video-grid";
import { ResponsiveWorkTabs } from "./responsive-work-tabs";
import { documentarySeries, documentaryFeature, documentaryShort, biography } from "../_data/videos"; // Adjusted path

const TABS_CONFIG = [
  { value: "documentary-feature", label: "Documentary Feature", data: documentaryFeature, description: "Full-length documentaries that provide in-depth exploration of important subjects." },
  { value: "documentary-series", label: "Documentary Series", data: documentarySeries, description: "Combat Films, in collaboration with the David M. Kennedy Center for International Studies at Brigham Young University, is proud to present Beyond The Border, a feature length documentary film series telling stories from around the world with an emphasis on international relations. We recently finished our ninth film, Unfortunate Brothers: Korea’s Reunification Dilemma and the companion short documentary, Balloon Man. The film initially aired nationally on HDNet World Report and on PBS affiliate KBYU. It has also screened at notable universities and research institutions around the country. Most recently Unfortunate Brothers has been included in the pre-deployment training for the U.S. Army’s rotational battalions to Republic of Korea. We are currently working on our 10th Beyond the Border film, yet untitled, regarding the challenge of border security in Brazil and the relationship to border security and crime in Brazil’s coastal cities, Rio de Janeiro and Sao Paulo. This film will be completed early 2017. Our Beyond the Border films are available for DVD purchase from our Store page. We offer both individual pricing as well as education/institutional pricing. We are proud that films from this series are in some of the world's best University libraries. We are also in the process of releasing the entire series to our Vimeo-On-Demand page, which allows you to rent or purchase the film for download. If you’d like more information on this Beyond The Border series, or any of our films, do not hesitate to contact us at info@combatfilms.com or call us at 801-521-7737." },
  { value: "documentary-short", label: "Documentary Short", data: documentaryShort, description: "Concise documentaries that deliver powerful stories in a compact format." },
  { value: "biography", label: "Biography", data: biography, description: "Films focused on the lives and experiences of remarkable individuals." },
];

export function WorkTabsWrapper() {
  const [activeTab, setActiveTab] = React.useState(TABS_CONFIG[0]?.value ?? 'documentary-feature'); // Default to first tab, with fallback

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      {/* Sticky Tab Navigation */}
      <div className="bg-background sticky top-[68px] z-10 border-b mb-8 rounded-md"> {/* Moved rounded-md here */}
        <div className="container mx-auto py-4 px-4"> {/* Removed rounded-md */}
          <ResponsiveWorkTabs
            tabs={TABS_CONFIG.map(({ value, label }) => ({ value, label }))}
            value={activeTab}
            onValueChange={setActiveTab}
          />
        </div>
      </div>

      {/* Tab Content */}
      {TABS_CONFIG.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="px-1">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">{tab.label}</h2>
              <p className="text-muted-foreground mt-2">
                {tab.description}
              </p>
            </div>
            <VideoGrid videos={tab.data} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}