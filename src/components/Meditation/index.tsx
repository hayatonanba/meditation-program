import { useEffect, useState } from "react";


const Meditation = () => {
    // カウントダウン時間をuseStateで管理
    const [seconds, setSeconds] = useState(10);
  
    // useEffectでカウントダウンロジックを処理
    useEffect(() => {
      if (seconds > 0) {
        // secondsが0より大きい場合にのみタイマーを設定
        const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
        // タイマーをクリア
        return () => clearTimeout(timerId);
      }
    }, [seconds]);// secondsに依存し、secondsが変更されるたびにtimeoutを再設定する

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