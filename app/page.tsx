"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState({
    days: 25,
    hours: 18,
    minutes: 17,
    seconds: 30,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTime((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(countdownInterval);
          return prevTime;
        }
        let newDays = days;
        let newHours = hours;
        let newMinutes = minutes;
        let newSeconds = seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <main className="bg-[url('/img/background.png')] h-screen w-screen overflow-hidden p-4 py-8 text-white">
      <h1 className="font-medium text-3xl text-center lg:text-left lg:pl-8">
        Kai<span className="text-blue-600">Z</span>en
      </h1>
      <div className="p-4 flex flex-col justify-around lg:flex-row lg:justify-between items-center w-full h-full lg:p-16">
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-left">
            We are <span className="text-blue-600">Coming</span> soon.
          </h1>

          <div className="flex flex-row justify-center items-center lg:items-start lg:justify-start gap-4 lg:gap-16">
            <span className="flex flex-col text-xs text-center lg:text-left">
              <span className="text-4xl lg:text-5xl">{time.days}</span>
              Days
            </span>
            <span className="flex flex-col text-xs text-center lg:text-left">
              <span className="text-4xl lg:text-5xl">{time.hours}</span>
              Hours
            </span>
            <span className="flex flex-col text-xs text-center lg:text-left">
              <span className="text-4xl lg:text-5xl">{time.minutes}</span>
              Minutes
            </span>
            <span className="flex flex-col text-xs text-center lg:text-left">
              <span className="text-4xl lg:text-5xl">{time.seconds}</span>
              Seconds
            </span>
          </div>
          <span className="text-base leading-7 text-center lg:text-left">
            The user interface is currently being designed and developed. <br />
            In the meantime, you can take a look at our API specification
            document.
          </span>
          <div className="text-center lg:text-left">
            <a
              href="https://kaizen-api-30at.onrender.com/api/document"
              rel="noreferrer"
              className="font-bold p-4 rounded-md border border-1 transition-all duration-300 cursor-pointer hover:bg-red-50 hover:text-blue-500"
            >
              View API Document
            </a>
          </div>
        </div>
        <div className="rocket-container w-1/4 mt-4 lg:mt-0 mx-auto lg:w-1/5">
          <Image
            className="rocket"
            src="/img/rocket.png"
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
