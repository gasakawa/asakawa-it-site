"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg z-50">
      <p className="text-sm text-gray-800 text-center md:text-left">
        We use cookies to improve your experience. By using this site, you
        accept our{" "}
        <Link href="/privacy-policy" className="text-blue-800" target="_blank">
          Privacy Policy
        </Link>
        .
      </p>
      <button
        onClick={handleAccept}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
      >
        Accept
      </button>
    </div>
  );
}
