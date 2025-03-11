import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Our Presence | Medica Pharma",
  description: "Discover Medica Pharma's global footprint across continents and our commitment to expanding healthcare access worldwide.",
};

export default function PresencePage() {
  const regions = [
    {
      name: "South Asia",
      countries: ["India", "Bangladesh", "Sri Lanka", "Nepal"],
      description: "Our core market with strong distribution networks and manufacturing facilities."
    },
    {
      name: "South East Asia",
      countries: ["Thailand", "Vietnam", "Indonesia", "Malaysia", "Philippines"],
      description: "Growing presence in rapidly developing healthcare markets."
    },
    {
      name: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Bahrain"],
      description: "Strategic partnerships with leading healthcare providers and distributors."
    },
    {
      name: "Africa",
      countries: ["Nigeria", "Kenya", "South Africa", "Ghana", "Ethiopia"],
      description: "Committed to improving healthcare access in diverse African markets."
    },
    {
      name: "Europe",
      countries: ["UK", "Germany", "France", "Italy", "Spain"],
      description: "Quality-focused presence in regulated European markets."
    },
    {
      name: "Latin America",
      countries: ["Brazil", "Mexico", "Argentina", "Colombia", "Chile"],
      description: "Expanding footprint in growing pharmaceutical markets."
    },
    {
      name: "Far East Asia",
      countries: ["Japan", "South Korea", "Taiwan"],
      description: "Strategic presence in technologically advanced pharmaceutical markets."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative h-[300px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/placeholder.com-1280x720.webp" 
            alt="Global Presence Background" 
            fill 
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="z-10 text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Our Presence</h1>
          <p className="text-xl text-white">Expanding our reach across the globe</p>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Global Footprint</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto mb-10">
              Medica Pharma has established a strong international presence, with our products 
              reaching patients and healthcare providers across multiple continents. Our global 
              footprint continues to expand as we work towards our mission of making quality 
              healthcare accessible worldwide.
            </p>
          </div>

          <div className="mb-16">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden mb-10">
              <Image 
                src="/placeholder.com-1280x720.webp" 
                alt="World Map Showing Medica Pharma's Presence" 
                fill 
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="text-center text-lg">
              Our products are currently available in over 40 countries across 7 major regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{region.name}</h3>
                  <p className="mb-4">{region.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Key Markets:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Focus */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Customer Focus</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              At Medica Pharma, we understand that different markets have unique healthcare needs, 
              regulatory requirements, and cultural considerations. Our global strategy is built 
              on a deep understanding of these differences and a commitment to meeting the specific 
              needs of each market we serve.
            </p>
            <p className="text-lg mb-6">
              Our approach to global expansion includes:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li className="text-lg">
                <strong>Local Partnerships:</strong> We collaborate with local distributors, healthcare 
                providers, and regulatory experts to ensure our products meet the specific needs of each market.
              </li>
              <li className="text-lg">
                <strong>Regulatory Compliance:</strong> Our dedicated regulatory affairs team ensures 
                that our products comply with the diverse regulatory requirements of each country 
                where we operate.
              </li>
              <li className="text-lg">
                <strong>Cultural Sensitivity:</strong> We adapt our approach to respect the cultural 
                nuances and healthcare traditions of different regions.
              </li>
              <li className="text-lg">
                <strong>Market-Specific Product Development:</strong> We develop and adapt our product 
                offerings to address the specific healthcare challenges and priorities of each market.
              </li>
              <li className="text-lg">
                <strong>Accessibility:</strong> We work to make our products accessible and affordable 
                in diverse economic contexts, including developing markets.
              </li>
            </ul>
            <p className="text-lg mb-6">
              Our global presence is a testament to our commitment to improving healthcare outcomes 
              worldwide. As we continue to expand, we remain focused on maintaining the high standards 
              of quality, safety, and efficacy that have earned us the trust of healthcare providers 
              and patients around the world.
            </p>
            <p className="text-lg">
              We are proud of our global footprint and excited about the opportunities to bring our 
              innovative healthcare solutions to new markets in the years to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}