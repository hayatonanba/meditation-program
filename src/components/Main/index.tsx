 import { motion } from "framer-motion"
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/effect-coverflow';


const IndexPage = () => {
  return (
    <div className="bg-[#f8f4e6] font-Shippori">
        <div className="bg-[url('/image/indexpage.jpg')] w-full h-screen bg-cover justify-center">
            <h1 className="text-center text-8xl p-36">潜在意識の最高峰へ</h1>
        </div>
        <h1 className="text-center text-6xl underline underline-offset-8 p-3">About</h1>
        <div className="w-[85%] overflow-hidden">
            <motion.div 
                initial={{ x: "300%" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                className="grid grid-flow-col gap-10 justify-center p-10">
                <img className="skew-y-6 rounded-md"  src="/image/star.avif" />
                <img className="skew-y-6 rounded-md" src="/image/fire.avif" />
                <img className="skew-y-6 rounded-md" src="/image/filed.avif" />
                <img className="skew-y-6 rounded-md" src="/image/ocean.avif" />
                <img className="skew-y-6 rounded-md" src="/image/forest.avif" />
            </motion.div>
        </div>
        <h2 className="text-center text-2xl pb-5">
            数々の心休まる場所をあなたにお届け。<br />
            最高の瞑想体験を。
        </h2>
        <p className="text-center">
            瞑想、冥想（めいそう、英: meditation、英: contemplation）とは、
            心を静めて無心になること、何も考えずリラックスすること、心を静めて神に祈ったり、
            何かに心を集中させること、目を閉じて深く静かに思いをめぐらすことなどとされている。
        </p>

        <h1 className="text-center text-6xl underline underline-offset-8 p-6">Section</h1>
        <Swiper
            effect={'coverflow'}
            modules={[Navigation, EffectCoverflow, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            navigation={true}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img className="rounded-md" src="/image/filed.avif" /></SwiperSlide>
            <SwiperSlide><img className="rounded-md" src="/image/fire.avif" /></SwiperSlide>
            <SwiperSlide><img className="rounded-md" src="/image/forest.avif" /></SwiperSlide>
            <SwiperSlide><img className="rounded-md" src="/image/ocean.avif" /></SwiperSlide>
            <SwiperSlide><img className="rounded-md" src="/image/star.avif" /></SwiperSlide>
        </Swiper>
        <p className="text-xl text-center p-5">
            この中から好きなシチュエーションを選択し、
            自然の音声と瞑想のサポート機能があなたを快適な瞑想へと誘います。
        </p>

        <h1 className="text-center text-6xl underline underline-offset-8 p-3">Addtional</h1>
        <p className="text-4xl text-center p-10">〜Coming soon〜</p>

    </div>
  )
}

export default IndexPage;