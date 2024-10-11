import Header from "@/components/Header";
import Meditation from "@/components/Meditation";
import BgmPlayer from "@/components/ui/bgmPlayer";


const AboutOcean = () => {
  
  return (
    <div className="bg-[url('/image/ocean.avif')] bg-cover bg-center h-screen flex flex-col items-center">
      <Header />
      <div className="m-auto text-4xl text-center font-Shippori">
        <BgmPlayer src="/audio/ocean.mp3" />
        <h1 className="text-white p-4">〜浜辺〜</h1>
        <Meditation />
      </div>
    </div>
  )
}

export default AboutOcean;