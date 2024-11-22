"use client";

import { Button } from "@/components/ui/button";

interface ConsentContentProps {
  onViewTerms: () => void;
}

export function ConsentContent({ onViewTerms }: ConsentContentProps) {
  return (
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Terms of Service Agreement
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        Before continuing to use our services, please review and accept our Terms of Service. By accepting, you acknowledge that you have read and agree to our terms.
        <Button 
          variant="link" 
          onClick={onViewTerms}
          className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 px-1 h-auto"
        >
          View Terms of Service
        </Button>
      </p>
    </div>
  );
}