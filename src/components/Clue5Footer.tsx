import { useState } from "react";
import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router";
import Popup from "../ui/Popup.tsx";
import GalleryPopup from "../ui/GalleryPopup.tsx";

const Clue5Footer = () => {
   const [password, setPassword] = useState("");
   const [showError, setShowError] = useState(false);
   const [showGallery, setShowGallery] = useState(false);
   const navigate = useNavigate();

   const handleNext = () => {
      if (password === import.meta.env.VITE_CLUE6_PASSWORD) {
         navigate("/clue6");
      } else {
         setShowError(true);
      }
   };

   return (
      <div className="px-4 py-5">
         <div className="flex gap-3 justify-between max-w-[70%] mx-auto">
            <img src="./appfiles/icons/Mic Default.svg" alt="mic" />
            <img src="./appfiles/icons/Music Default.svg" alt="music" />
            <img
               src="./appfiles/icons/Photo Default.svg"
               alt="photo"
               className="cursor-pointer"
               onClick={() => setShowGallery(true)}
            />
         </div>

         <div className="mt-4">
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="border-gray-400 border rounded-md w-full px-3 py-2 outline-0 text-sm"
               placeholder="Password"
            />

            <Button text="Next Clue" className="w-full mt-4" onClick={handleNext} />
         </div>

         {/* Error Popup */}
         <Popup
            isOpen={showError}
            onClose={() => setShowError(false)}
            message="Wrong password, try again."
         />

         {/* Gallery Popup */}
         <GalleryPopup
            isOpen={showGallery}
            onClose={() => setShowGallery(false)}
         >
            Look at the life we've built. The memories we've made. The places we’ve seen, some we dreamed about,
            others we stumbled into. This is what love looks like when it's lived. When it's chosen, day after day.
            This is us, laughing, exploring, figuring it out, holding on. <span className="font-bold text-primary">We made this.</span>
         </GalleryPopup>
      </div>
   );
};

export default Clue5Footer;
