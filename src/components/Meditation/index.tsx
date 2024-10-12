import { useEffect, useState } from "react";


const Meditation = () => {

    const [seconds, setSeconds] = useState(4);
    const [seconds2, setSeconds2] = useState(8);

    useEffect(() => {
      if (seconds > 0) { 
        const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
        return () => clearTimeout(timerId);
      }
     
      if (seconds2 > 0) {
        const timerId2 = setTimeout(() => setSeconds2(seconds2 - 1), 1000);
        return () => clearTimeout(timerId2);
      }
     
      if (seconds === 0 && seconds2 === 0) {
        setSeconds(4);
        setSeconds2(8);
      }
    }, [seconds,seconds2]);

  return (
    <div className="text-white text-4xl border-stone-50 border-4 bg-black rounded-[50%] h-96 w-96">
      {seconds > 0 && (
          <h1 className="flex justify-center translate-y-3/4">息を吸って</h1>
        )}
        {seconds === 0 && (
          <h1 className="flex justify-center translate-y-3/4">息を吐いて</h1>
        )}
        <h2 className="flex justify-center text-8xl translate-y-20">
          {seconds > 0 ? seconds : seconds2}
        </h2>
    </div>
  )
}

export default Meditation;