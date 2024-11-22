'use client';

import React, { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import json from "./service.json";
import { ConsentPopup } from "@/components/consent/ConsentPopup";

export default function SurveyComponent({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [survey] = useState(() => {
    const surveyModel = new Model(json);
    surveyModel.onComplete.add((sender, options) => {
      const data = sender.data;
      data.senderId = id;
      data.sentAt = new Date();
      console.log('Survey completed:', {
        id,
        data: JSON.stringify(data, null, 3)
      });
      setIsOpen(true);
    });
    return surveyModel;
  });

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Survey model={survey} />
      <ConsentPopup isOpen={isOpen} />
    </div>
  );
}