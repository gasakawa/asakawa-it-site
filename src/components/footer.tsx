"use client";
import { Mail, Phone, MapPin, PhoneCall, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <Link href="/">
              <Image
                src="/images/logo-text-white.png"
                width={200}
                height={128}
                alt="Asakawa IT Solutions"
              />
            </Link>
            <p className="text-gray-400 mb-6 mt-2">
              Transforming Your Business with Innovative Technology
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  2100 14th St Ste 107 Plano, TX 75074
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-gray-400">hello@asakawa-it.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-gray-400">
                  Mon - Fri 8:00 AM – 7:45 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Asakawa IT Solutions LLC. All rights
              reserved..
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
