 import { motion } from "framer-motion"

const IndexPage = () => {
  return (
    <div>
        <img className="w-[100%]" src="/image/mainimage.avif" alt="" />
        <h1 className="text-center text-6xl underline p-3">About</h1>
        <div className="w-[85%] overflow-hidden">
            <motion.div 
                initial={{ x: "0px" }}
                animate={{ x: "0px" }}
                transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                className="grid grid-flow-col gap-8 justify-center m-10">
                <img className="skew-y-6 rounded-md"  src="/image/star.avif" />
                <img className="skew-y-6 rounded-md" src="/image/fire.avif" />
                <img className="skew-y-6 rounded-md" src="/image/filed.avif" />
                <img className="skew-y-6 rounded-md" src="/image/ocean.avif" />
                <img className="skew-y-6 rounded-md" src="/image/forest.avif" />
                <img className="skew-y-6 rounded-md" src="/image/shishiodoshi.avif" />
            </motion.div> 
        </div>
        <h2 className="text-center text-2xl mb-5">
            数々の心休まる場所をあなたにお届け。<br />
            最高の瞑想体験を。
        </h2>
        <p className="text-center">
            瞑想、冥想（めいそう、英: meditation、英: contemplation）とは、
            心を静めて無心になること、何も考えずリラックスすること、心を静めて神に祈ったり、
            何かに心を集中させること、目を閉じて深く静かに思いをめぐらすことなどとされている。
        </p>

        <h1 className="text-center text-6xl underline p-3">Section</h1>
        <div className="snap-mandatory snap-x w-[90%] flex justify-center overflow-hidden gap-8 m-10">
            <div className="snap-center ">
                <img src="/image/filed.avif" />
            </div>
            <div className="snap-center ">
                <img src="/image/fire.avif" />
            </div>
            <div className="snap-center ">
                <img src="/image/forest.avif" />
            </div>
            <div className="snap-center ">
                <img src="/image/ocean.avif" />
            </div>
            <div className="snap-center ">
                <img src="/image/shishiodoshi.avif" />
            </div>
            <div className="snap-center ">
                <img src="/image/star.avif" />
            </div>
        </div>
    </div>
  )
}

export default IndexPage