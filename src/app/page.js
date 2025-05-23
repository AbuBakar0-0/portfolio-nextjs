"use client";

import { useEffect, useState } from "react";
import HomePage from './home/page';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(splashTimeout);
  }, []);

  if (showSplash) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div id="page">
          <div id="page">
            <div id="container">
              <div id="ring"></div>
              <div id="ring"></div>
              <div id="ring"></div>
              <div id="ring"></div>
              <div id="h3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <HomePage />
    </>
  );
}
