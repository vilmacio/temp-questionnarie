import SurveyPage from './SurveyPage';

export function generateStaticParams() {
  return [{ token: 'demo' }];
}

export default function Page({ params }: { params: { token: string } }) {
  return <SurveyPage token={params.token} />;
}