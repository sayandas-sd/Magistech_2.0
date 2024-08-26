"use client";

import { useState, useEffect } from "react";

interface Timecount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (expiry: string): Timecount => {
  let days = '00';
  let hours = '00';
  let minutes = '00';
  let seconds = '00';

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days, hours, minutes, seconds };
  }

  days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
  minutes = Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, '0');
  seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');

  return { days, hours, minutes, seconds };
};

export default function Timer({ launchDate }: { launchDate: string }) {
  const [timeLeft, setTimeLeft] = useState<Timecount>({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  // Return a placeholder until the component is mounted on the client side
  if (!hasMounted) {
    return <div className="flex flex-col items-center justify-center text-white">
      <div className="mb-6 text-xl font-medium">We are Launching Soon.....</div>
      <div className="flex space-x-4 md:text-3xl text-xl font-extrabold border border-1 p-6 rounded-xl">
        <div className="text-center">00 : <div></div></div>
        <div className="text-center">00 : <div></div></div>
        <div className="text-center">00 : <div></div></div>
        <div className="text-center">00 <div></div></div>
      </div>
    </div>;
  }

  return (
    
    <div className="flex flex-col items-center justify-center text-white">
      <div className="mb-6 text-xl font-medium font-baskervville">We are Launching Soon.....</div>
      <div className="flex space-x-4 md:text-3xl text-xl font-extrabold border-2 border-violet-500 p-8 rounded-xl">
        <div className="text-center">
          <span>{timeLeft.days}</span> :
         
        </div>
        <div className="text-center">
          <span>{timeLeft.hours}</span> :
          
        </div>
        <div className="text-center">
          <span>{timeLeft.minutes}</span> :
          
        </div>
        <div className="text-center">
          <span>{timeLeft.seconds}</span>
          
        </div>
      </div>
    </div>
  );
}
