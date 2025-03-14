import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div 
        className="w-full h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/F-BYL-how-to-build-generational-wealth-hero (1).jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative"
        }}
      >
        <div className="text-center px-4 sm:px-6 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6" style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"}}>
            World-class pharmaceuticals for a healthier tomorrow
          </h1>
          <Link href="/products">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Explore Our Products
            </Button>
          </Link>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Medica Pharma is a leading exporter of high qulaity Pharmaceuticals APIs, Drug Intermediates, Finished Formulations, Surgicals & Othopaedics. With a focus on excellence and innovation, we are committed to improving global healthcare standards.
            </p>
            <div className="mt-8">
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision, Mission, and Commitment Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Vision, Mission, and Commitment</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  To be a global leader in pharmaceutical excellence, providing innovative healthcare solutions that enhance quality of life.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  To develop, produce, and distribute pharmaceutical products of the highest quality standards that meet the diverse needs of our global customers.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  We are committed to ethical practices, environmental sustainability, and continuous innovation in all aspects of our operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto mb-10">
              Discover our comprehensive range of pharmaceutical products designed to meet diverse healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "API",
                description: "Biologically active components of medicines (e.g., tablets, capsules)"
              },
              {
                title: "Drug Intermediates",
                description: "Raw materials used for the production of bulk drugs"
              },
              {
                title: "Finished Formulations",
                description: "Allopathic, Ayurvedic, Veterinary, and Homeopathic medicines"
              },
              {
                title: "Surgicals & Paramedicals",
                description: "Complete range of surgical and paramedical products"
              }
            ].map((product, index) => (
              <Card key={index} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href="/products" className="text-primary hover:underline">
                    Learn more →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Our global footprint extends across APAC, EMEA, North America & Latin America with clients based in countries like India, UAE, United Kingdom, Pakistan, Bangladesh, USA etc. Reflecting our commitment to making quality healthcare accessible worldwide.
            </p>
            <div className="text-lg max-w-3xl mx-auto mt-6">
              <ul className="list-disc pl-5 text-left space-y-2">
                <li><strong>Corporate Clients:</strong> We work with large healthcare systems, hospital chains, and pharmaceutical distributors.</li>
                <li><strong>Government Institutions:</strong> We participate in government tenders and supply essential medicines to public healthcare systems.</li>
                <li><strong>Global Conglomerates:</strong> We collaborate with multinational pharmaceutical companies through licensing agreements and contract manufacturing.</li>
              </ul>
            </div>
          </div>

          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <div style={{
              width: "100%",
              height: "100%",
              backgroundImage: "url('/placeholder.com-1280x720.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}