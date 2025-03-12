"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./button";

export default function DownloadBrochure() {
  return (
    <div className="flex justify-center mt-8">
      <Link href="/Medica_Export_Profile.pdf" target="_blank" download>
        <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
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
  );
}