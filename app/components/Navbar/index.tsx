"use client";
import Navbar from "./Navbar";
import React, { useEffect } from "react";

const Navbarin: React.FC = () => {
  useEffect(() => {
    // Debounce function to optimize scroll event handling
    const debounce = (fn: Function, delay: number = 100) => {
      let frame: number;
      return (...params: any[]) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = window.setTimeout(() => fn(...params), delay);
      };
    };

    // Update scroll position and set it as a data attribute
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    // Debounced scroll event listener
    const debouncedStoreScroll = debounce(storeScroll);

    document.addEventListener("scroll", debouncedStoreScroll, { passive: true });

    // Initialize scroll position on mount
    storeScroll();

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("scroll", debouncedStoreScroll);
    };
  }, []);

  return <Navbar />;
};

export default Navbarin;
