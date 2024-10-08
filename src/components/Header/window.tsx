import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"

type WindowDate = {
    openWindow : boolean;
    onClose: () => void; 
}

const Window = ({openWindow, onClose,} : WindowDate) => {

  return (
    
    <AnimatePresence>
        {openWindow && (
        <div className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-md  w-[50%] h-[90%]">
                <div className="flex justify-between p-3">
                    <h1 className="text-3xl font-medium">自然によって得られる力</h1>
                        <button
                        onClick={onClose}>
                            <X />
                        </button>
                </div>
                <div className="bg-gray-100 rounded-md m-5">
                    <h2 className="text-2xl font-medium text-center p-4">混濁した思考を一掃する心の洗濯</h2>
                    <p className="text-center font-medium text-xl p-3">
                        人は自然に触れることで自律神経を整え健康を維持できるという力があります。
                        例えば、森林浴は交感神経の活動が低下しリラックスする副交感神経が <br />優位になります。
                        これにより、ストレスホルモンであるコルチゾールの分泌が抑えられ、精神的なリラックスが促進されます。
                        またこのような自然と触れることによって得られる効果は、実際に自然の中に身を置くことができなくても
                        自然の画像や音声に触れるだけである程度のリラックス効果が得られることが研究で確認されています。
                        自然の画像を見ることは、都市環境での活動に比べて、より大きなリラックス効果が得られるとされています。
                        加えて、自然の音（鳥のさえずり、川のせせらぎ、風の音など）を聴くことは、 <br />心拍数を安定させ、
                        ストレスを軽減する効果があります。
                    </p>
                    <img className="p-3 mx-auto w-[40%]" src="/image/motalwindow.png" />
                </div>
            </motion.div> 
            </div>
        )}
    </AnimatePresence>
   
  )
}

export default Window