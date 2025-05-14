import { aboutInfo } from "../_data/about";

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4"> {/* Added px-4 */}
      <h1 className="text-3xl font-bold mb-8">About Combat Films</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        {/* Main Description */}
        <p>{aboutInfo.mainDescription}</p>
        
        {/* History and Evolution */}
        <p>
          Combat Films was founded in New York City in 1997 when director Dodge Billingsley 
          combined his interests in global affairs and filmmaking into a production company. 
          In 1998, CFR moved to Salt Lake City, Utah to finish its first film, 
          "Immortal Fortress: Inside Chechnya's Warrior Culture."
        </p>
        
        <p>{aboutInfo.evolution}</p>
        
        {/* Broadcasts and Recent Work */}
        <p>{aboutInfo.broadcasts}</p>
        <p>{aboutInfo.recentWork}</p>
        
        {/* Services */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutInfo.services.map((service) => (
              <li key={service} className="text-muted-foreground">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 