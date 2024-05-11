import { HomeLandingSection } from '@/features/HomePage/home-landing-section';
import { ParadigmsLandingSection } from '@/features/ParadigmsPage/paradigms-landing-section';
import Head from 'next/head';

const ParadigmsPage = () => {
  return (
    <>
      <Head>
        <title>{"pn shop"}</title>
      </Head>
      <div>
        <ParadigmsLandingSection />
      </div>
    </>
  );
};

export default ParadigmsPage;
