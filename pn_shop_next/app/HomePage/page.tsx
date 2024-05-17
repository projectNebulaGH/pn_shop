'use client'

import Head from "next/head";
import { HomeLandingSection } from "@/app/HomePage/home-landing-section";

const HomePage = () => {
    return (
      <>
        <Head>
          <title>{"pn shop"}</title>
        </Head>
        <div>
          <HomeLandingSection />
        </div>
      </>
    );
  };
  
  export default HomePage;