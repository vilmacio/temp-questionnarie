"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsentActionsProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function ConsentActions({ onAccept, onDecline }: ConsentActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
      <Button
        variant="outline"
        onClick={onDecline}
        className="border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600"
      >
        Decline
      </Button>
      <Button
        onClick={onAccept}
        className="bg-indigo-500 hover:bg-indigo-600 text-white"
      >
        I Accept
        <CheckCircle className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}