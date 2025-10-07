import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryImages } from "../utils/Images";
import { useState } from "react";
import ImagePreviewPopup from "./ImagePreviewPopup";

interface GalleryPopupProps {
   isOpen: boolean;
   onClose: () => void;
   children: React.ReactNode;
}

const GalleryPopup = ({ isOpen, onClose, children }: GalleryPopupProps) => {
   const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

   const selectedImage = selectedImageIndex !== null ? galleryImages[selectedImageIndex] : null;

   const navigateImage = (direction: "prev" | "next") => {
      if (selectedImageIndex === null) return;
      const newIndex =
         direction === "next"
            ? (selectedImageIndex + 1) % galleryImages.length
            : (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImageIndex(newIndex);
   };

   return (
      <>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  className="fixed inset-0 flex justify-center z-50 p-4 overflow-auto bg-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={onClose}
               >
                  <motion.div
                     className="relative w-full max-w-2xl text-gray-900 px-6 py-3"
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

                     <div className="mb-4 text-center text-black md:text-base">{children}</div>

                     <div className="columns-2 md:columns-2 gap-3 space-y-3">
                        {galleryImages.map((img, index) => (
                           <img
                              key={index}
                              className="w-full rounded-xl shadow cursor-pointer hover:opacity-80 transition"
                              src={img.src}
                              alt={img.title || `Image ${index + 1}`}
                              loading="lazy"
                              onClick={() => setSelectedImageIndex(index)}
                           />
                        ))}
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>

         {selectedImage && (
            <ImagePreviewPopup
               isOpen={!!selectedImage}
               onClose={() => setSelectedImageIndex(null)}
               image={selectedImage}
               onNavigate={navigateImage}
            >
               Look at the life we've built. The memories we've made. The places we’ve seen, some we dreamed about,
               others we stumbled into. This is what love looks like when it's lived. When it's chosen, day after day.
               This is us, laughing, exploring, figuring it out, holding on.{" "}
               <span className="font-bold text-primary">We made this.</span>
            </ImagePreviewPopup>
         )}
      </>
   );
};

export default GalleryPopup;
