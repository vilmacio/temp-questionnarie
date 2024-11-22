"use client";

import { Scale } from "lucide-react";

export function ConsentIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/20">
      <Scale className="h-6 w-6 text-indigo-500" />
    </div>
  );
}