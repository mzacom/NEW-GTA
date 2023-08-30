import React, { useEffect, useState } from 'react';
import styles from '../style'

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
  const [session, setSession] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));

      // Determine the forex session based on current time
      const currentHour = currentTime.getUTCHours();
      if (currentHour >= 0 && currentHour < 8) {
        setSession('Asian');
      } else if (currentHour >= 8 && currentHour < 16) {
        setSession('European');
      } else {
        setSession('US ');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=' text-center  '>
      <div className=' mt-1  sm:mt-[-25px] text-[11px] sm:text-[large]'> Current Currency as of {time} {session} </div>
    </div>
  );
};

export default DigitalClock;
