import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combat Films Store",
  description: "Explore our collection of combat documentaries, books, and historical documents.",
};

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 