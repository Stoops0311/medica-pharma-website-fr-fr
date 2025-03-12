"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/Logo.webp" alt="Medica Pharma Logo" width={40} height={40} />
              <span className="text-lg font-bold">Medica Pharma</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              World-class pharmaceuticals for a healthier tomorrow
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Our Products" },
                { href: "/contact", label: "Contact Us" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                "API",
                "Drug Intermediates",
                "Finished Formulations",
                "Surgicals & Paramedicals"
              ].map((product) => (
                <li key={product}>
                  <Link href="/products" className="text-gray-600 hover:text-primary transition-colors">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p className="mb-2">
                <strong>Phone:</strong> +919167 923386
              </p>
              <p className="mb-2">
                <strong>Email:</strong> info@medicapharma.in
              </p>
              <p>
                Block No.: 8/28, 1st floor, <br />
                Near Kokan Mercantile Co-operative Bank, <br />
                Mumbai, Dist- Thane, <br />
                State- Maharashtra, India. (PIN code- 421301)
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-gray-600 text-sm">
          <p>&copy; {year} Medica Pharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}