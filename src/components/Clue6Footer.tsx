import { useState } from "react";
import Popup from "../ui/Popup.tsx";
import GalleryPopup from "../ui/GalleryPopup.tsx";

const Clue6Footer = () => {
   const [showError, setShowError] = useState(false);
   const [showGallery, setShowGallery] = useState(false);

   return (
      <div className="px-4 py-5">
         <div className="flex gap-3 justify-between max-w-[70%] mx-auto">
            <img src="./appfiles/icons/Mic Default.svg" alt="mic" className={"w-[50px]"} />
            <img src="./appfiles/icons/Music Default.svg" alt="music" className={"w-[50px]"} />
            <img
               src="./appfiles/icons/Photo Default.svg"
               alt="photo"
               className="cursor-pointer w-[50px]"
               onClick={() => setShowGallery(true)}
            />
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

export default Clue6Footer;
