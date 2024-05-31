'use client'

import { useState, useEffect } from 'react';
import { ParticleLayer } from './Scene/particle-layer';

export const HomeLandingSection = () => {
  const [welcomeText, setWelcomeText] = useState('bienvenue?');
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const textSequence = [
      { text: 'bienvenue?', duration: 1500 },
      { text: '...', duration: 1500 },
      { text: 'xin chào?', duration: 500 },
      { text: '!!', duration: 500 },
      { text: 'Γειά σου?', duration: 500 },
      { text: '..namaste ?', duration: 500 },
      { text: 'olá', duration: 400 },
      { text: 'dia dhuit', duration: 350 },
      { text: 'ciao', duration: 300 },
      { text: 'Здраво', duration: 200 },
      { text: 'konnichiwa!', duration: 200 },
      { text: 'hej?!', duration: 200 },
      { text: 'vaṇakkam', duration: 200 },
      { text: 'hola', duration: 300 },
      { text: 'salve!', duration: 400 },
      { text: '..!!', duration: 500 },
      { text: 'welcome!', duration: 2000 },
      { text: ' ', duration: 250 },
      { text: ';)', duration: 2500 },
      { text: 'Take a look around!', duration: 1500 }
    ];

    let currentIndex = 0;

    const changeText = () => {
      setWelcomeText(textSequence[currentIndex].text);
      currentIndex += 1;

      const currentDuration = textSequence[currentIndex - 1].duration || 1500;
      
      if (currentIndex < textSequence.length) {
        setTimeout(changeText, currentDuration);
      } else {
        setAnimationPlayed(true);
      }
    };

    if (!animationPlayed) {
      const timeout = setTimeout(changeText, 1500); // Initial start after 1.5 seconds
      return () => clearTimeout(timeout);
    }
  }, [animationPlayed]);

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <ParticleLayer  />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <p className="text-primary text-4xl md:text-6xl">project_nebula</p>
          <p className="text-light-grey text-xl md:text-3xl font-thin py-4">
            {welcomeText}
          </p>
        </div>
        <div className="flex flex-col mt-[10vh]">
          <a href="ProductsPage">
            <button className="w-[50vw] md:w-[30vw] bg-transparent border-2 border-primary text-primary px-4 py-1 my-1 rounded-md font-medium cursor-pointer">Products</button>
          </a>
          <a href="ParadigmsPage">
            <button className="w-[50vw] md:w-[30vw] bg-transparent text-light-grey px-4 py-1 my-1 rounded-md font-medium cursor-pointer">Paradigms</button>
          </a>
          <a href="FactoryPage">
            <button className="w-[50vw] md:w-[30vw] bg-transparent text-light-grey px-4 py-1 my-1 rounded-md font-medium cursor-pointer">Factory</button>
          </a>
          <a href="ResearchPage">
            <button className="w-[50vw] md:w-[30vw] bg-transparent text-light-grey px-4 py-1 my-1 rounded-md font-medium cursor-pointer">Research</button>
          </a>
        </div>
      </div>
    </div>
  );
};
