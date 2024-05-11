import { ResearchLandingSection } from '@/features/ResearchPage/research-landing-section';
import Head from 'next/head';

const ResearchPage = () => {
  return (
    <>
      <Head>
        <title>{"pn products"}</title>
      </Head>
      <div>
        <ResearchLandingSection />
      </div>
    </>
  );
};

export default ResearchPage;
