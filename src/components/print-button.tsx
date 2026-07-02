"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-zinc-700 print:hidden"
    >
      <Printer size={16} />
      Print / Save as PDF
    </button>
  );
}
