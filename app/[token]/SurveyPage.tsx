'use client';

import dynamic from 'next/dynamic';

const SurveyComponent = dynamic(() => import('../component'), { ssr: false });

export default function SurveyPage({ token }: { token: string }) {
  return <SurveyComponent id={token} />;
}