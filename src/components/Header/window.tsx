import { X } from "lucide-react"

type WindowDate = {
    openWindow : boolean;
    onClose: () => void;
}

const Window = ({openWindow, onClose} : WindowDate) => {
if (!openWindow) {
    return null;
}

  return (
    <div className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
        <div 
        className="bg-white rounded-md font-Shippori w-[50%] h-[90%]">
            <button
            onClick={onClose} 
            className="">
                <X />
            </button> 
            <h1>瞑想とは？</h1>
            <div className="bg-gray-300 rounded-md m-5">
                <h2 className="text-3xl text-center">混濁した思考を一掃する心の洗濯</h2>
                <p className="text-center text-xl">
                    瞑想、冥想（めいそう、英: meditation、英: contemplation）とは、<br />
                    心を静めて無心になること、何も考えずリラックスすること、心を静めて神に祈ったり、<br />
                    何かに心を集中させること、目を閉じて深く静かに思いをめぐらすことなどとされている。<br />
                    各々の宗教の伝統や修行の段階、目的等により内容は様々である。<br />
                    本来は冥想と書くと思われる。この呼称は、単に心身の静寂を取り戻すために行うような比較的日常的なものから、<br />
                    絶対者（神）をありありと体感したり、究極の智慧を得るようなものまで、<br />
                    広い範囲に用いられる。現代では、健康の向上や心理的治療、自己成長、<br />
                    自己向上などの世俗的な目的をもって、様々な瞑想が行われている。
                </p>
                <img className="w-[50%] justify-center" src="/image/motalwindow.avif" />
            </div>
        </div>
    </div>
  )
}

export default Window