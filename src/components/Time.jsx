import { useEffect } from "react";
import { useState } from "react";
function Time() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("interval has been setup");
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timeInterval);
      console.log("cancelled the Interval");
    };
  }, []);
  //   let date = new Date(year, monthIndex, day, hours, minutes, seconds);
  return (
    <p className="lead">
      This is the Current time: {time.toLocaleDateString()} -
      {time.toLocaleTimeString()}
    </p>
  );
}

export default Time;
