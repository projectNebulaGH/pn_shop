import { HomeLandingSection } from '@/features/HomePage/home-landing-section';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{"pn docs"}</title>
      </Head>
      <div>
        <HomeLandingSection />
      </div>
    </>
  );
};

export default HomePage;
