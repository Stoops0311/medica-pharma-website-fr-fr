import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About Us | Medica Pharma",
  description: "Learn more about Medica Pharma and our journey in the pharmaceutical industry.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative h-[250px] sm:h-[300px] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-black/50" 
          style={{
            backgroundImage: "url('/Assets-And-Images/about us.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2" style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"}}>About Us</h1>
          <p className="text-xl text-white" style={{textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)"}}>Learn more about Medica Pharma and our journey</p>
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
              Medica Pharma is a vertically integrated pharmaceutical company manufacturing and distribution of high qulaity Pharmaceuticals APIs, Drug Intermediates, Finished Formulations, Surgicals & Othopaedics. Our products are formulated using high grade raw material as per the requirements of pharma and chemical industries.
            </p>
            <p className="text-lg">
              We thrive to establish an end-to-end supply chain which can cater to the healthcare needs of people around the globe, thus have built a strong network of clientele in countries like India, UAE, United Kingdom, Pakistan, Bangladesh, USA etc.
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
                  Our flagship division focuses on the manufacturing and distribution of high-quality 
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

      {/* Our Team */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Behind Medica Pharma&apos;s success is a team of talented professionals who bring a wealth 
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

    </div>
  );
}