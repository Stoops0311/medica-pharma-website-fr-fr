import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About Us | Medica Pharma",
  description: "Learn more about Medica Pharma and our journey in the pharmaceutical industry.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative h-[300px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/placeholder.com-1280x720.webp" 
            alt="About Us Background" 
            fill 
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="z-10 text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">About Us</h1>
          <p className="text-xl text-white">Learn more about Medica Pharma and our journey</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Medica Pharma is a leading manufacturer and exporter of high-quality pharmaceuticals, 
              Active Pharmaceutical Ingredients (APIs), and Ayurvedic medicines. With a strong 
              commitment to quality and innovation, we have established ourselves as a trusted 
              name in the global pharmaceutical industry.
            </p>
            <p className="text-lg mb-4">
              Our state-of-the-art manufacturing facilities and dedicated research teams 
              ensure that we deliver products that meet the highest standards of quality 
              and efficacy. We take pride in our ability to adapt to the evolving needs 
              of the healthcare sector while maintaining our core values of integrity, 
              excellence, and customer satisfaction.
            </p>
            <p className="text-lg">
              At Medica Pharma, we believe that access to quality healthcare is a 
              fundamental right, and we work tirelessly to make this a reality for 
              people around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision, Mission, and Commitment */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Vision, Mission, and Commitment</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  To be a global leader in pharmaceutical excellence, providing innovative healthcare 
                  solutions that enhance quality of life for people worldwide. We envision a world 
                  where quality healthcare is accessible to all, and we strive to make this vision 
                  a reality through our products and services.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  To develop, produce, and distribute pharmaceutical products of the highest quality 
                  standards that meet the diverse needs of our global customers. We are committed to 
                  continuous innovation, maintaining strict quality controls, and fostering strong 
                  relationships with healthcare providers, patients, and business partners.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  We are committed to ethical practices, environmental sustainability, and continuous 
                  innovation in all aspects of our operations. We believe in transparency, integrity, 
                  and accountability in all our business dealings. Our commitment extends beyond 
                  business success to include social responsibility and environmental stewardship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Ethics */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Ethics</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              At Medica Pharma, ethical conduct is the foundation of our business. We adhere to the highest 
              ethical standards in all our operations, from research and development to manufacturing 
              and distribution. Our ethical framework encompasses:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg">
                <strong>Integrity:</strong> We conduct our business with honesty and transparency, maintaining 
                trust with our stakeholders.
              </li>
              <li className="text-lg">
                <strong>Compliance:</strong> We strictly adhere to all applicable laws, regulations, and industry 
                standards across the markets we serve.
              </li>
              <li className="text-lg">
                <strong>Quality:</strong> We never compromise on the quality and safety of our products, ensuring 
                that they meet the highest standards.
              </li>
              <li className="text-lg">
                <strong>Responsibility:</strong> We take responsibility for our actions and their impact on 
                patients, communities, and the environment.
              </li>
            </ul>
            <p className="text-lg">
              Our commitment to ethical practices has earned us the trust of healthcare professionals, 
              patients, and business partners worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Medica Group */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Medica Group</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto mb-10">
              The Medica Group comprises three verticals, each focusing on a specific aspect of healthcare delivery:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Medica Pharma</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our flagship division focuses on the manufacturing and export of high-quality 
                  pharmaceuticals, APIs, and Ayurvedic medicines to markets worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Medica Export</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Dedicated to expanding our global footprint, this division handles the export 
                  and international distribution of our products, ensuring compliance with 
                  diverse regulatory requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Medica Pharmacies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our retail arm brings our high-quality products directly to consumers through 
                  a network of modern pharmacies that prioritize customer care and health education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Behind Medica Pharma's success is a team of talented professionals who bring a wealth 
              of experience and expertise to our operations. Our leadership team comprises 
              industry veterans with backgrounds in pharmaceutical research, manufacturing, 
              quality assurance, regulatory affairs, and business management.
            </p>
            <p className="text-lg mb-6">
              Our team members are united by a shared commitment to our mission and values. 
              They work collaboratively to drive innovation, maintain quality standards, 
              and ensure customer satisfaction. We invest in their professional development 
              and create a work environment that fosters creativity, integrity, and excellence.
            </p>
            <p className="text-lg">
              Together, we are working towards building a healthier tomorrow for communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Medica Pharma serves a diverse client base that spans across different sectors and regions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg">
                <strong>Individual Consumers:</strong> Through our pharmacy network, we serve individuals 
                seeking quality healthcare products.
              </li>
              <li className="text-lg">
                <strong>Small and Medium Businesses:</strong> We partner with local pharmacies, 
                clinics, and healthcare providers to supply them with essential pharmaceuticals.
              </li>
              <li className="text-lg">
                <strong>Corporate Clients:</strong> We work with large healthcare systems, 
                hospital chains, and pharmaceutical distributors.
              </li>
              <li className="text-lg">
                <strong>Government Institutions:</strong> We participate in government tenders 
                and supply essential medicines to public healthcare systems.
              </li>
              <li className="text-lg">
                <strong>Global Conglomerates:</strong> We collaborate with multinational 
                pharmaceutical companies through licensing agreements and contract manufacturing.
              </li>
            </ul>
            <p className="text-lg">
              Our global footprint extends across South Asia, South East Asia, Middle East, Africa, 
              Europe, Latin America, and Far East Asia, reflecting our commitment to making 
              quality healthcare accessible worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}