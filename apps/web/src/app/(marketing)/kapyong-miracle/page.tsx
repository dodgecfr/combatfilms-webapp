import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Timeline } from "./_components/timeline";
import { Testimonials } from "./_components/testimonials";
import { PhotoGallery } from "./_components/photo-gallery";

export default function KapyongMiraclePage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Utah 213th and the Miracle at Gapyeong, 1951
          </h1>
          <p className="max-w-[42rem] text-muted-foreground leading-normal sm:text-xl sm:leading-8">
            The remarkable story of 250 Utah soldiers who faced 4,000 Chinese troops - and all came home alive
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/kapyong/kapyong_miracle.jpg"
              alt="Utah 213th Battalion at Gapyeong"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Testimonials - Veterans' Voices */}
      <section className="py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">Veterans' Voices</h2>
        <Testimonials />
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2>The Battle that Defied the Odds</h2>
            <p>
              In late May of 1951, roughly 250 soldiers of the 213th Field Artillery Battalion (FAB) 
              fought a critical battle against an estimated 4,000 Communist Chinese soldiers in the 
              Gapyeong (Kapyong) Valley, Korea. More than half of the 213th were Utah guardsmen from 
              southern Utah, including the commander Colonel Dalley and his headquarters staff.
            </p>
            <p>
              The men of the 213th fought fiercely and admirably to protect each other — they were 
              neighbors, family members and fellow members of their church from the same home towns. 
              Normally artillery units like the 213th would have operated behind the front line—out 
              of direct contact with the enemy. But in the pre-dawn hours of May 27th, 1951, the battle 
              commenced at such great speed that elements of the 213th found themselves surrounded 
              and behind enemy lines.
            </p>
            <blockquote>
              <p>"I was just going on guard duty at five minutes to two, and all hell broke loose. 
              If you've ever seen fireworks, it was there that night."</p>
              <footer>
                — Gordon Farnsworth, Member of the 213th, on the beginning of the battle at KapYong
              </footer>
            </blockquote>
            <p>
              This was not an artillery duel; the men of the 213th fought with small arms, their personal 
              weapons, as the Communist Chinese were "in the perimeter." The official report said 350 
              Chinese were killed and 831 captured, with some estimates of deaths as high as 500. 
              Remarkably, not a single soldier/national guardsman was lost during the battle.
            </p>
            <p>
              It wasn't the 213th's first or last battle while deployed to the Korean conflict but later, 
              after returning from deployment, the Utahns that comprised the 213th realized that they 
              had all returned from deployment. It was the miracle of Gapyeong and they were the 
              "Miracle Battalion" — not one fatality!
            </p>
            
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 mt-8">Timeline of Events</h2>
          </div>
          
          {/* Timeline component */}
          <div className="py-8">
            <Timeline />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>The Documentary Project</h2>
            <p>
              Combat Films & Research is working to document this remarkable story through interviews 
              with historians, military experts, and family members of the 213th veterans. The documentary 
              aims to preserve the legacy of these brave soldiers and the miraculous events at Gapyeong.
            </p>
            <p>
              Through archival footage, photographs, letters, and personal accounts, the film will 
              reconstruct the battle and explore the bonds of brotherhood that helped these men survive 
              against overwhelming odds.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          {/* Production Info Box */}
          <div className="bg-muted rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Production Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Status</h4>
                <p>Feature Documentary - In Production</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Director</h4>
                <p>Combat Films & Research</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Support the Project</h4>
                <Link
                  href="https://www.gofundme.com/f/213th-field-artillery-at-battle-of-gapyeong-1951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2"
                >
                  <Button>
                    GoFundMe Fundraiser
                    <ExternalLink className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.facebook.com/KapyongMiracle213th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2"
                >
                  <Button>
                    Facebook Page
                    <ExternalLink className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.instagram.com/kapyongmiracle213th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2"
                >
                  <Button>
                    Instagram Page
                    <ExternalLink className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Historic Photos Box */}
          <div className="bg-muted rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Historic Documentation</h3>
            <p className="mb-4">In an effort to depict this story as accurately as possible, Combat Films has collected images, letters, journals, and other documents.</p>
            <a
              href="/contact"
              className="block w-full text-center py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition mb-6"
            >
              Searching for more materials related to the Korean War? Contact Us
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="/docs/kapyong/Battle_Honors_Citation_of_Units.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square flex items-center justify-center rounded border border-gray-300 bg-gray-800 text-white text-center p-4 hover:bg-gray-700 transition"
              >
                Battle Honors – Citation of Units (1951)
              </a>
              <a
                href="/docs/kapyong/Korean_Testimonial_Brig_Gen_Ham_Byong_Sun.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square flex items-center justify-center rounded border border-gray-300 bg-gray-800 text-white text-center p-4 hover:bg-gray-700 transition"
              >
                Korean Testimonial from Brig. Gen. Ham Byong Sun (1951)
              </a>
              <a
                href="/docs/kapyong/Service_Manual_105MM_Priest_Howitzer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square flex items-center justify-center rounded border border-gray-300 bg-gray-800 text-white text-center p-4 hover:bg-gray-700 transition"
              >
                Service Manual for 105-MM Priest Howitzer (1942)
              </a>
              <a
                href="/docs/kapyong/P9_B59_8_KG0679_Chou,%20Hsu%20Kang_539th%20Reg_Ch'unch'on_28May.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square flex items-center justify-center rounded border border-gray-300 bg-gray-800 text-white text-center p-4 hover:bg-gray-700 transition"
              >
                Prisoner of War Interrogation Report
              </a>
            </div>
          </div>

          {/* Related Content Box */}
          <div className="bg-muted rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Related Content</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="text-primary hover:underline hover:text-primary/80 flex items-center"
                >
                  <span>Unfortunate Brothers: Korea's Reunification Dilemma</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-primary hover:underline hover:text-primary/80 flex items-center"
                >
                  <span>The Korean War Documentary Series</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Historical Photo Gallery */}
      <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Historical Photo Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of photographs documenting the 213th Field Artillery Battalion during their service in the Korean War
          </p>
        </div>
        <PhotoGallery />
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto text-center space-y-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Support Our Documentary Projects</h2>
        <p className="text-muted-foreground">
          Help us bring more untold stories to light through our documentary work
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