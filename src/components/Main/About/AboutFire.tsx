import Header from "@/components/Header";
import Meditation from "@/components/Meditation";

const AboutFire = () => {
  return (
    <div className="bg-[url('/image/fire.avif')] bg-cover h-screen flex flex-col items-center">
      <Header />
      <div className="m-auto text-4xl text-center font-Shippori">
        <h1 className="text-white p-4">〜焚き火〜</h1>
        <Meditation />
      </div>
    </div>
  )
}

export default AboutFire;