import Header from "@/components/Header";
import Meditation from "@/components/Meditation";
import BgmPlayer from "@/components/ui/bgmPlayer";


const AboutStar = () => {

  return (
    <div className="bg-[url('/image/star.avif')] bg-cover bg-center h-screen flex flex-col items-center">
      <Header />
      <div className="m-auto text-4xl text-center font-Shippori">
        <BgmPlayer src="/audio/star.mp3" />
        <h1 className="text-white p-4">〜星空〜</h1>
        <Meditation />
      </div>
    </div>
  )
}

export default AboutStar;