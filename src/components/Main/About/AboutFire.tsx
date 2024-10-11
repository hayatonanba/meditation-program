import Header from "@/components/Header";
import Meditation from "@/components/Meditation";
import BgmPlayer from "@/components/ui/bgmPlayer";

const AboutFire = () => {
  return (
    <div className="bg-[url('/image/fire.avif')] bg-cover h-screen flex flex-col items-center">
      <Header />
      <div className="m-auto text-4xl text-center font-Shippori">
        <BgmPlayer src="/audio/fire.mp3" />
        <h1 className="text-white p-4">〜焚き火〜</h1>
        <Meditation />
      </div>
    </div>
  )
}

export default AboutFire;