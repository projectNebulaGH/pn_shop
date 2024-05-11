import { ProductsLandingSection } from '@/features/ProductsPage/products-landing-section';
import Head from 'next/head';

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>{"pn products"}</title>
      </Head>
      <div>
        <ProductsLandingSection />
      </div>
    </>
  );
};

export default ProductsPage;
