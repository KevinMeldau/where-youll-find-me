import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImagePreviewPopupProps {
   isOpen: boolean;
   onClose: () => void;
   image: { src: string; title: string; description: string } | null;
   onNavigate?: (direction: "prev" | "next") => void;
   children?: React.ReactNode;
}

const ImagePreviewPopup = ({ isOpen, onClose, image, onNavigate, children }: ImagePreviewPopupProps) => {
   if (!image) return null;

   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               className="fixed inset-0 flex justify-center z-50 overflow-auto bg-white"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               onClick={onClose}
            >
               <motion.div
                  className="relative w-full max-w-2xl text-gray-900 px-6 py-3 rounded-2xl bg-white"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
               >
                  <div className="flex justify-center">
                     <button
                        onClick={onClose}
                        className="mb-4 text-gray-300 hover:text-gray-900 cursor-pointer"
                     >
                        <X size={28} />
                     </button>
                  </div>

                  {children && (
                     <div className="mb-4 text-center text-black md:text-base">{children}</div>
                  )}

                  <div className="relative flex items-center justify-center">
                     {onNavigate && (
                        <>
                           <button
                              onClick={() => onNavigate("prev")}
                              className="absolute left-0 p-2 text-gray-400 hover:text-gray-900"
                           >
                              <ChevronLeft size={32} />
                           </button>
                           <button
                              onClick={() => onNavigate("next")}
                              className="absolute right-0 p-2 text-gray-400 hover:text-gray-900"
                           >
                              <ChevronRight size={32} />
                           </button>
                        </>
                     )}

                     <img
                        src={image.src}
                        alt={image.title}
                        className="w-full object-contain max-h-[70vh] rounded-xl"
                     />
                  </div>

                  {image.description && (
                     <div className="mt-4 text-center text-gray-700 leading-relaxed">
                        {image.description}
                     </div>
                  )}
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default ImagePreviewPopup;
