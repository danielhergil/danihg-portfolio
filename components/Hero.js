import Image from "next/image";
import Link from 'next/link';
import profilePic from "../public/images/profile_retro.jpg";
import Typewriter from "typewriter-effect";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Hero() {
  const [finishAnim, setFinishAnim] = useState(false);
  const [secondFinishAnim, setsecondFinishAnim] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <section className="md:flex md:flex-row flex flex-col">
        <div className="md:hidden relative h-56 w-56 m-10 rounded-full border-2 border-charcoal self-center shadow-2xl">
          <Image
            className="absolute rounded-full"
            src={profilePic}
            alt="Picture of the author"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="basis-1/2 text-start">
          <div className="font-bold md:text-5xl text-burnt-sienna md:ml-52 md:mt-40 md:leading-relaxed md:justify-self-start md:text-start justify-self-center text-3xl text-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(30)
                  .typeString("hi, I'm Daniel ✌")
                  .pauseFor(1000)
                  .typeString("<br />welcome to my portfolio!")
                  .callFunction((state) => {
                    state.elements.cursor.style.animation = "none";
                    state.elements.cursor.style.display = "none";
                    typewriter.stop();
                    setFinishAnim(true);
                  })
                  .start();
              }}
            />
          </div>
          <div className="font-medium md:text-3xl text-maize-crayola md:ml-52 md:mt-10 md:justify-self-start md:text-start m-4 justify-self-center text-xl text-center">
            {finishAnim ? (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(30)
                    .pauseFor(1000)
                    .typeString(
                      "I'm a Software Developer currently working as QA Automation for platforms built in React, Vue and I also automate some games made in ThreeJS. I live in Madrid, Spain."
                    )
                    .pauseFor(1000)
                    .callFunction((state) => {
                      state.elements.cursor.style.animation = "none";
                      state.elements.cursor.style.display = "none";
                      setsecondFinishAnim(true);
                    })
                    .start();
                }}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="hidden md:block relative rounded-[25px] h-[24rem] w-[24rem] m-10 ml-40 border-2 border-charcoal mt-40 shadow-2xl">
          <Image
            className="absolute rounded-[25px]"
            src={profilePic}
            alt="Picture of the author"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>
      <div className={`${secondFinishAnim ? "" : "hidden"}`}>
        <div className={`flex justify-center`}>
          <ChevronDownIcon className="h-10 w-10 text-maize-crayola md:mt-40 mt-40 animate-bounce" />
        </div>
        <div
          ref={ref}
          className={`flex flex-col md:mt-72 mt-40 h-20 transition-opacity duration-[3000ms] ease-out ${
            inView ? "opacity-100" : "opacity-0"
          } justify-center place-items-center`}
        >
          <h1 className="text-burnt-sienna md:text-5xl font-bold text-3xl text-center">Career</h1>
          <div className="md:w-[500px] w-[300px]">
            <h2 className="text-maize-crayola md:text-3xl font-medium text-center mt-10 text-xl">
              Here you will find a brief history of my career since I finished
              my studies till now.
            </h2>
            <div className="flex justify-items-center mt-10 bg-maize-crayola w-full hover:bg-burnt-sienna">
              <button className="text-maize-crayola md:text-3xl text-xl font-medium bg-persian-green m-1 p-3 w-full transition duration-500 hover:bg-charcoal">
                <Link href="/career">Go to Dani's career</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
