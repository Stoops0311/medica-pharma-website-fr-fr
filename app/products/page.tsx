import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Our Products | Medica Pharma",
  description: "Explore our wide range of pharmaceutical products including APIs, Drug Intermediates, Finished Formulations, and Surgical Products.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative h-[300px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/placeholder.com-1280x720.webp" 
            alt="Products Background" 
            fill 
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="z-10 text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Our Products</h1>
          <p className="text-xl text-white">Explore our wide range of pharmaceutical products</p>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto mb-10">
              At Medica Pharma, we offer a comprehensive range of pharmaceutical products 
              designed to meet the diverse needs of healthcare providers and patients worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* API Section */}
            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-60 w-full">
                <Image 
                  src="/placeholder.com-1280x720.webp" 
                  alt="API Products" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">API (Active Pharmaceutical Ingredients)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Biologically active components of medicines (e.g., tablets, capsules). 
                  APIs are the ingredients in drugs that produce the intended effects.
                </p>
                <p className="mb-4">
                  Our API portfolio includes a wide range of therapeutic categories such as:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Analgesics and Anti-inflammatory</li>
                  <li>Antimicrobials and Antibiotics</li>
                  <li>Cardiovascular</li>
                  <li>CNS Agents</li>
                  <li>Gastrointestinal</li>
                  <li>Respiratory</li>
                  <li>Hormones and Steroids</li>
                </ul>
                <p>
                  All our APIs are manufactured in state-of-the-art facilities that adhere to 
                  global quality standards and regulatory requirements.
                </p>
              </CardContent>
            </Card>

            {/* Drug Intermediates Section */}
            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-60 w-full">
                <Image 
                  src="/placeholder.com-1280x720.webp" 
                  alt="Drug Intermediates" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Drug Intermediates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Raw materials used for the production of bulk drugs. Drug intermediates are the 
                  chemical compounds that form the building blocks of active pharmaceutical ingredients.
                </p>
                <p className="mb-4">
                  Our drug intermediates are known for their:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>High purity and consistent quality</li>
                  <li>Compliance with international standards</li>
                  <li>Competitive pricing</li>
                  <li>Timely delivery</li>
                  <li>Technical support and documentation</li>
                </ul>
                <p>
                  We supply drug intermediates to pharmaceutical manufacturers globally, 
                  helping them streamline their production processes and ensure the quality 
                  of their final products.
                </p>
              </CardContent>
            </Card>

            {/* Finished Formulations Section */}
            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-60 w-full">
                <Image 
                  src="/placeholder.com-1280x720.webp" 
                  alt="Finished Formulations" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Finished Formulations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Complete and ready-to-use pharmaceutical products, available in various 
                  dosage forms and therapeutic categories.
                </p>
                <p className="mb-4">
                  Our formulation portfolio includes:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Allopathic Medicines:</strong> Modern pharmaceuticals across therapeutic areas</li>
                  <li><strong>Ayurvedic Medicines:</strong> Traditional herbal preparations based on ancient Indian medicinal system</li>
                  <li><strong>Veterinary Medicines:</strong> Pharmaceuticals specifically formulated for animal health</li>
                  <li><strong>Homeopathic Medicines:</strong> Alternative medical products based on the principle of "like cures like"</li>
                </ul>
                <p>
                  All our formulations are manufactured under strict quality controls and 
                  comply with relevant pharmacopeia standards.
                </p>
              </CardContent>
            </Card>

            {/* Surgicals & Paramedicals Section */}
            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-60 w-full">
                <Image 
                  src="/placeholder.com-1280x720.webp" 
                  alt="Surgicals & Paramedicals" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Surgicals & Paramedicals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Complete range of surgical and paramedical products essential for 
                  healthcare facilities and professionals.
                </p>
                <p className="mb-4">
                  Our surgical and paramedical product line includes:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Syringes and Needles</li>
                  <li>Surgical Gloves and Masks</li>
                  <li>Bandages and Dressings</li>
                  <li>Sutures and Staplers</li>
                  <li>Lumbar Belts and Support Products</li>
                  <li>Orthopedic Supports</li>
                  <li>Diagnostic Equipment</li>
                  <li>Surgical Instruments</li>
                </ul>
                <p>
                  We ensure that all our surgical and paramedical products meet the highest 
                  standards of quality, reliability, and safety for patient care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Connect */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto mb-10">
              Looking for specific products or have questions about our offerings? 
              Our team is ready to help you find the right pharmaceutical solutions for your needs.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="shadow-lg max-w-2xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <Image 
                    src="/placeholder.com-1280x720.webp" 
                    alt="Social Connect" 
                    width={600}
                    height={400}
                    className="rounded-md mb-6"
                  />
                  <p className="text-lg mb-4">
                    Connect with our product specialists to discuss your specific requirements, 
                    bulk orders, customization options, or any questions about our pharmaceutical products.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="mailto:info@medicapharma.in" 
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
                    >
                      Email Us
                    </a>
                    <a 
                      href="tel:+919167923386" 
                      className="bg-white border border-primary text-primary hover:bg-gray-50 px-6 py-3 rounded-md transition-colors"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}