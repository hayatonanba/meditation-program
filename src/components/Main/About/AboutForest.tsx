import Header from "@/components/Header";
import Meditation from "@/components/Meditation";
import BgmPlayer from "@/components/ui/bgmPlayer";


const AboutForest = () => {
  return (
    <div className="bg-[url('/image/forest.avif')] bg-cover bg-center h-screen flex flex-col items-center">
      <Header />
      <div className="m-auto text-4xl text-center font-Shippori">
        <BgmPlayer src="/audio/forest.mp3" />
        <h1 className="text-white p-4">〜森林〜</h1>
        <Meditation />
      </div>
    </div>
  )
}

export default AboutForest;