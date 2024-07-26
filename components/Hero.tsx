import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TopButton } from "./ui/TopButton";
import { FaLocationArrow } from "react-icons/fa6";
import { FloatingNav } from "./ui/floating-navbar";

function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div id="one">
        <Spotlight
          className="-top-40 -left-10 md:-left-30 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[200vh] w-[50vh]"
          fill="green"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        id="two"
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white-100/[0.015] bg-grid-black/[0.015] flex items-center justify-center absolute top-0 left-0 "
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div id="three" className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-cs text-center text-blue-100 max-w-100">
            John Moody
          </h2>
          <TextGenerateEffect
            className="text-center text-3xl md:text-5xl lg:text-6xl"
            words="Passion in Engineering"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m John
          </p>
          <a href="/about">
            <TopButton
              title="My Work"
              position="right"
              icon={<FaLocationArrow />}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
