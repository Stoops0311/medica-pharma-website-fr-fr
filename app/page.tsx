import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/placeholder.com-1280x720.webp" 
            alt="Hero Background" 
            fill 
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="z-10 text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            World-class pharmaceuticals for a healthier tomorrow
          </h1>
          <Link href="/products">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Explore Our Products
            </Button>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Medica Pharma is a leading manufacturer and exporter of high-quality pharmaceuticals, APIs, and Ayurvedic medicines. 
              With a focus on excellence and innovation, we are committed to improving global healthcare standards.
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
              Medica Pharma has established a strong international presence across multiple continents, serving diverse markets with high-quality pharmaceutical products.
            </p>
          </div>

          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image 
              src="/placeholder.com-1280x720.webp" 
              alt="World Map" 
              fill 
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href="/presence">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Explore Our Global Reach
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
