import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-normal sm:text-xl sm:leading-8">
          From documentaries to digitizing your family history, we offer a wide range of media services to help you tell your story and preserve your memories.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left/Main */}
        <div className="lg:col-span-2 space-y-12">
          {/* Research */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Research</h2>
            <p>
              Our team conducts in-depth research to uncover compelling stories, historical context, and accurate information to support your project or documentary.
            </p>
          </section>

          {/* Documentaries */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Documentaries</h2>
            <p>
              We produce high-quality documentary films that inform, inspire, and engage audiences, covering a wide range of topics from conflict zones to cultural heritage.
            </p>
          </section>

          {/* Educational Pieces */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Educational Pieces</h2>
            <p>
              We create educational videos and materials designed to inform and educate viewers, tailored for schools, museums, and online platforms.
            </p>
          </section>

          {/* Fundraising Videos */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Fundraising Videos</h2>
            <p>
              We craft compelling fundraising videos that help organizations connect emotionally with donors and effectively communicate their mission.
            </p>
          </section>

          {/* Social Media & YouTube */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Social Media & YouTube Channel Management</h2>
            <p>
              We manage your social media presence and YouTube channels, creating engaging content and growing your audience across platforms.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-muted rounded-lg p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-semibold mb-4">Digitizing & Archiving</h3>
            <p>
              We specialize in preserving your precious memories by digitizing and archiving all vintage formats. Whether you have old family videos on VHS, film reels, audio cassettes, or printed photographs, we can convert them into high-quality digital files that will last for generations.
            </p>
            <p>
              Our team uses professional-grade equipment to ensure the best possible transfer quality. We handle your materials with the utmost care and confidentiality, providing you with digital copies that are easy to share and store.
            </p>
            <p>
              We can digitize VHS tapes, film reels, slides, negatives, photos, audio cassettes, and more. Protect your family's history from deterioration and make it easy to share with loved ones.
            </p>
            <p className="font-semibold">
              Don't let your family history fade away — contact us today to safeguard your legacy!
            </p>
            <Link href="/contact" className="block mt-4">
              <Button size="lg" className="w-full">Get a Free Quote</Button>
            </Link>
          </div>

          <div className="bg-muted rounded-lg p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Have a project in mind? Reach out and let's discuss how we can help.</p>
            <Link href="/contact" className="block">
              <Button variant="outline" size="lg" className="w-full">Contact Form</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto text-center space-y-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Ready to Get Started?</h2>
        <p className="text-muted-foreground">
          Whether you need a documentary produced or your family memories preserved, we're here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">Learn More</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}