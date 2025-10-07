import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router";

const BeganJourneyFooter = () => {
   const navigate = useNavigate();

   return (
      <div className="px-4 py-5">
         <div className="flex gap-3">
            <div className="flex items-center">
               <img src="./appfiles/icons/Mic Default.svg" alt="mic" />
            </div>
            <div>
               <p className="font-bold">Voice note to from Hannah</p>
               <p>Voice note</p>
            </div>
         </div>
         <div className="flex justify-between mt-4">
            <Button text="Begin the Journey" onClick={() => navigate("/clue1")} />
         </div>
      </div>
   );
};

export default BeganJourneyFooter;
