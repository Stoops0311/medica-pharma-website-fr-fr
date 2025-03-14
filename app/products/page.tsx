import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Our Products | Medica Pharma",
  description: "Explore our wide range of pharmaceutical products including APIs, Drug Intermediates, Finished Formulations, and Surgical Products.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative h-[250px] sm:h-[300px] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-black/50" 
          style={{
            backgroundImage: "url('/Assets-And-Images/OurProducts.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2" style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"}}>Our Products</h1>
          <p className="text-xl text-white" style={{textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)"}}>Explore our wide range of pharmaceutical products</p>
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
              <div className="relative h-48 sm:h-60 w-full">
                <Image 
                  src="/product_images/API.jpg" 
                  alt="API Products" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
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
              <div className="relative h-48 sm:h-60 w-full">
                <Image 
                  src="/product_images/Drug%20intermediates.jpg" 
                  alt="Drug Intermediates" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
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
              <div className="relative h-48 sm:h-60 w-full">
                <Image 
                  src="/product_images/Finished%20Formulations.jpg" 
                  alt="Finished Formulations" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                  <li><strong>Homeopathic Medicines:</strong> Alternative medical products based on the principle of &quot;like cures like&quot;</li>
                </ul>
                <p>
                  All our formulations are manufactured under strict quality controls and 
                  comply with relevant pharmacopeia standards.
                </p>
              </CardContent>
            </Card>

            {/* Surgicals & Paramedicals Section */}
            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-48 sm:h-60 w-full">
                <Image 
                  src="/product_images/Surgical%20%26%20ortho.png" 
                  alt="Surgicals & Paramedicals" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
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

      {/* Download Brochure */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Brochure</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto mb-10">
              Download our comprehensive product catalog to explore our full range of pharmaceutical offerings.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="shadow-lg max-w-2xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <Image 
                    src="/Logo.webp" 
                    alt="Medica Pharma Logo" 
                    width={120}
                    height={120}
                    className="mx-auto mb-6"
                  />
                  <p className="text-lg mb-6">
                    Our product brochure contains detailed information about our pharmaceutical products, 
                    including specifications, applications, and packaging options.
                  </p>
                  <Link href="/Medica_Export_Profile.pdf" target="_blank" download>
                    <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      Download Product Brochure
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}