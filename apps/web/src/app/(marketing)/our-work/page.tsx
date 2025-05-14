// Removed Tabs, TabsContent, ResponsiveWorkTabs, VideoGrid, and video data imports
import { WorkTabsWrapper } from "./_components/work-tabs-wrapper"; // Added import

export const metadata = {
  title: "Our Work | Combat Films",
  description: "Discover the storytelling projects and films created by Combat Films.",
};

export default function OurWork() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Title */}
      <div className="bg-muted py-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Our Work</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mt-4">
            Compelling stories that educate, inform, and inspire audiences around the world.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        {/* Render the client component wrapper which handles tabs and content */}
        <WorkTabsWrapper />
      </div>
    </div>
  );
} 