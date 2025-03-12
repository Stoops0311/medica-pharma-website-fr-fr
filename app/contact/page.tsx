import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Contact Us | Medica Pharma",
  description: "Get in touch with Medica Pharma. We'd love to hear from you and answer any questions about our pharmaceutical products and services.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative h-[300px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/placeholder.com-1280x720.webp" 
            alt="Contact Us Background" 
            fill 
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="z-10 text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Get In Touch With Us!</h1>
          <p className="text-xl text-white">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8">
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Our Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic">
                      <p className="mb-1">Block No.: 8/28, 1st floor,</p>
                      <p className="mb-1">Near Kokan Mercantile Co-operative Bank,</p>
                      <p className="mb-1">Mumbai, Dist- Thane,</p>
                      <p>State- Maharashtra, India. (PIN code- 421301)</p>
                    </address>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Contact Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-1">Phone:</h3>
                      <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <a href="tel:+919167923386" className="hover:text-primary transition-colors">+919167 923386</a>
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email:</h3>
                      <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <a href="mailto:info@medicapharma.in" className="hover:text-primary transition-colors">info@medicapharma.in</a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 2:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Client Name</Label>
                        <Input id="name" placeholder="Your Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Client Email</Label>
                        <Input id="email" type="email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Client No</Label>
                      <Input id="phone" placeholder="Your Phone Number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="requirement">Requirement Description</Label>
                      <Textarea id="requirement" placeholder="Describe your requirements" rows={6} />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Submit Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto mb-10">
              Find us at our office in Mumbai, Maharashtra. We're conveniently located 
              and easily accessible.
            </p>
          </div>
          <div className="h-[400px] w-full rounded-lg overflow-hidden">
            <Image 
              src="/placeholder.com-1280x720.webp" 
              alt="Map showing Medica Pharma's location" 
              fill 
              style={{ objectFit: "cover" }}
              className="relative"
            />
          </div>
        </div>
      </section>
    </div>
  );
}