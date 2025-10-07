import { motion, AnimatePresence } from "framer-motion";

interface PopupProps {
   isOpen: boolean;
   onClose: () => void;
   message: string;
}

const Popup = ({ isOpen, onClose, message }: PopupProps) => {
   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               className="fixed inset-0 flex items-center justify-center bg-black/90 z-50"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               onClick={onClose} // close on background click
            >
               {/* Content wrapper */}
               <motion.div
                  className="relative text-white text-center max-w-md w-full px-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()} // prevent background close when clicking text
               >
                  {/* Message */}
                  <p className="text-lg font-medium">{message}</p>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default Popup;
