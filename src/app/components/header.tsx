import { MapPin, Mail, MessageSquare } from "lucide-react";
import Link from "next/link"


export default function Header() {
  return(
    <header className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="w-full bg-[#3751e4] text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:gap-6 items-center mb-2 md:mb-0">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span className="text-sm">Plano, TX 75074</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={16} />
              <span className="text-sm">info@asakawa-it.com</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-sm">Office Hours: 8:00 AM - 6:45 PM</div>            
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            Logo
          </div>

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
            <Link href="#" className="font-medium text-gray-800 hover:text-[#3751e4] flex items-center">
              Home 
            </Link>
            <Link href="#" className="font-medium text-gray-800 hover:text-[#3751e4] flex items-center">
              Company 
            </Link>
            <Link href="#" className="font-medium text-gray-800 hover:text-[#3751e4] flex items-center">
              Services 
            </Link>
            <Link href="#" className="font-medium text-gray-800 hover:text-[#3751e4]">
              Contact
            </Link>
          </nav>

          <div className="flex items-center">
            <div className="bg-[#3751e4] text-white p-2 rounded-md">
              <MessageSquare size={20} />
            </div>
            <div className="ml-2">
              <p className="text-xs text-gray-500">Have any Questions?</p>
              <p className="text-sm font-medium">info@asakawa-it.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}