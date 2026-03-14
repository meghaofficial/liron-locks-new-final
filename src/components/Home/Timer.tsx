import { useEffect, useState } from "react";

const daysLeft = 10;

const Timer = () => {

  const [timeLeftData, setTimeLeftData] = useState({
    daysLeft: daysLeft,
    hoursLeft: 23,
    minLeft: 59,
    secLeft: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeftData((prev) => {
        let { daysLeft, hoursLeft, minLeft, secLeft } = prev;

        if (secLeft > 0) {
          secLeft--;
        } else {
          secLeft = 59;
          if (minLeft > 0) {
            minLeft--;
          } else {
            minLeft = 59;
            if (hoursLeft > 0) {
              hoursLeft--;
            } else {
              hoursLeft = 23;
              if (daysLeft > 0) daysLeft--;
            }
          }
        }

        // Stop at zero
        if (daysLeft === 0 && hoursLeft === 0 && minLeft === 0 && secLeft === 0) {
          clearInterval(timer);
        }

        return { daysLeft, hoursLeft, minLeft, secLeft };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <>
      <div className="sm:flex hidden items-center justify-evenly text-[250%] gap-4" style={{ fontWeight: 500 }}>
        <div className="flex flex-col items-center justify-center">
          <span>{timeLeftData.daysLeft > 9 ? timeLeftData.daysLeft : `0${timeLeftData.daysLeft}`}</span>
          <span className="text-[14px] text-gray-500 font-normal">Days</span>
        </div>
        <Dots />
        <div className="flex flex-col items-center justify-center">
          <span>{timeLeftData.hoursLeft > 9 ? timeLeftData.hoursLeft : `0${timeLeftData.hoursLeft}`}</span>
          <span className="text-[14px] text-gray-500 font-normal">Hours</span>
        </div>
        <Dots />
        <div className="flex flex-col items-center justify-center">
          <span>{timeLeftData.minLeft > 9 ? timeLeftData.minLeft : `0${timeLeftData.minLeft}`}</span>
          <span className="text-[14px] text-gray-500 font-normal">Minutes</span>
        </div>
        <Dots />
        <div className="flex flex-col items-center justify-center">
          <span>{timeLeftData.secLeft > 9 ? timeLeftData.secLeft : `0${timeLeftData.secLeft}`}</span>
          <span className="text-[14px] text-gray-500 font-normal">Seconds</span>
        </div>
      </div>
    </>
  )
}

const Dots = () => {
  return (
    <div className="flex flex-col items-center justify-evenly gap-2.5">
      <div className="bg-black rounded-full h-1.5 w-1.5"></div>
      <div className="bg-black rounded-full h-1.5 w-1.5"></div>
    </div>
  )
}

export default Timer
