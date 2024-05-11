import { FactoryLandingSection } from '@/features/FactoryPage/factory-landing-section';
import Head from 'next/head';

const FactoryPage = () => {
  return (
    <>
      <Head>
        <title>{"pn products"}</title>
      </Head>
      <div>
        <FactoryLandingSection />
      </div>
    </>
  );
};

export default FactoryPage;
