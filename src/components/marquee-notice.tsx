"use client";
import React from "react";

export default function MarqueeNotice() {
  const text =
    "⚠️ We are currently preparing to launch and are not yet in operation. Stay tuned for updates! ";

  return (
    <div className="relative w-full overflow-hidden bg-yellow-100 border-t border-b border-yellow-300 py-2">
      <div className="whitespace-nowrap text-yellow-900 font-medium text-sm flex justify-center">
        <span className="px-4">{text}</span>
      </div>
    </div>
  );
}
