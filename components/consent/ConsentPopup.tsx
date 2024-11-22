"use client";

import { useState, useEffect } from "react";
import { TermsDialog } from "./TermsDialog";

export function ConsentPopup({ isOpen }: { isOpen: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleAccept = () => {
    if (isTermsAccepted) {
      localStorage.setItem("termsConsent", "accepted");
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <TermsDialog 
      isOpen={true}
      isTermsAccepted={isTermsAccepted}
      onTermsAcceptedChange={setIsTermsAccepted}
      onAccept={handleAccept}
    />
  );
}