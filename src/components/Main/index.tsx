 import { motion } from "framer-motion"
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/effect-coverflow';


const IndexPage = () => {
  return (
    <div className="bg-[#f8f4e6] font-Shippori">
        <div className="bg-[url('/image/indexpage.jpg')] w-full h-screen bg-cover justify-center">
            <h1 className="text-center text-8xl p-36">潜在意識の最高峰へ。</h1>
        </div>

        <h1 className="text-center text-6xl underline underline-offset-8 p-3">About</h1>
        <div className="w-full overflow-hidden">
            <motion.div 
                animate={{ x: ["0%", "-100%"] }} 
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="grid auto-cols-10rem grid-flow-col gap-20 p-10 w-[calc(100vw/5)]">
                <img className="skew-y-6 rounded-md"  src="/image/star.avif" />
                <img className="skew-y-6 rounded-md" src="/image/fire.avif" />
                <img className="skew-y-6 rounded-md" src="/image/filed.avif" />
                <img className="skew-y-6 rounded-md" src="/image/ocean.avif" />
                <img className="skew-y-6 rounded-md" src="/image/forest.avif" />

                <img className="skew-y-6 rounded-md"  src="/image/star.avif" />
                <img className="skew-y-6 rounded-md" src="/image/fire.avif" />
                <img className="skew-y-6 rounded-md" src="/image/filed.avif" />
                <img className="skew-y-6 rounded-md" src="/image/ocean.avif" />
                <img className="skew-y-6 rounded-md" src="/image/forest.avif" />
            </motion.div>
        </div>
        <h2 className="text-center text-3xl pb-5">
            数々の心休まる場所をあなたにお届け<br />
            最高の瞑想体験を
        </h2>
        <p className="text-center text-xl p-4">
            Meditation-Programとは、<br />
            日々の喧騒から離れ、心を無にして瞑想したい方を支えるWebサイトです。<br />
            心安らぐ音や景色をご用意し、自然な無心への導入を補助いたします。<br />
            加えて、瞑想の呼吸法を効率的に体に身につけるためのリズムサポート機能も搭載しております。
        </p>
        <div className="flex justify-center mx-auto gap-24 w-[30%] shadow-md rounded-sm">
            <img src="/image/explain.avif" />
            <img src="/image/explain.2.jpg" />
        </div>

        <h1 className="text-center text-6xl underline underline-offset-8 p-6">Section</h1>
        <Swiper
            effect={'coverflow'}
            modules={[Navigation, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={3}
            speed={800}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            loop={true}
            navigation={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img className="rounded-md" src="/image/filed.avif" /></SwiperSlide>
            <SwiperSlide><img className="rounded-md" src="/image/fire.avif" /></SwiperSlide>
            <SwiperSlide><img className="rounded-md" src="/image/forest.avif" /></SwiperSlide>
            <SwiperSlide><img className="rounded-md" src="/image/ocean.avif" /></SwiperSlide>
            <SwiperSlide><img className="rounded-md" src="/image/star.avif" /></SwiperSlide>

            <style>{`
                .swiper-button-next, .swiper-button-prev {
                color: #000000; 
                } `}
            </style>
        </Swiper>
        <p className="text-3xl text-center p-5">
            この中から好きなシチュエーションを選択してください。 <br />
            自然の音声とサポート機能があなたを快適な瞑想へと誘います。
        </p>

        <h1 className="text-center text-6xl underline underline-offset-8 p-3">Addtional</h1>
        <p className="text-4xl text-center p-10">〜Coming soon〜</p>

    </div>
  )
}

export default IndexPage;