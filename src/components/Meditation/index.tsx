import { useEffect, useState } from "react";


const Meditation = () => {
  
    const [seconds, setSeconds] = useState(10);
  
    useEffect(() => {
      if (seconds > 0) {
        const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
        return () => clearTimeout(timerId);
      }
    }, [seconds]);

  return (
    <div className="text-white text-4xl border-stone-50 border-4 bg-black rounded-[50%] h-96 w-96">
      <div className="">
        <h1 className="flex justify-center translate-y-3/4">息を吸って</h1>
        <h2>{seconds}</h2>
      </div>
    </div>
  )
}

export default Meditation;