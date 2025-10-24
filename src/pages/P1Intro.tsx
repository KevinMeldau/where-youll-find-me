import BeganJourneyFooter from "../components/BeganJourneyFooter.tsx";

const P1Intro = () => {
   return (
      <div className="flex flex-col h-dvh">
         {/* Image stays fixed height */}
         <div className="shrink-0">
            <img src="./appfiles/wyfm.png" alt="wyfm" className="w-full h-auto" />
         </div>

         {/* Scrollable text area */}
         <div className="overflow-y-auto flex-1 mt-2 px-4">
            <h1 className="text-xl font-bold mb-2">
               From the start, this was more than a trip. It’s a story I’ve been writing for you.
            </h1>
            <p className="mb-4">
               You’re about to do something bold. A little wild.<br />A little scary. And, if you let it,
               something unforgettable. I need you to trust me.
            </p>
            <p className="mb-4">
               <span className="font-bold">This is the biggest love letter I’ve ever written you</span>. And it isn’t written in ink. It’s
               written in the details only you would notice.
            </p>
            <p>
               <span className="font-bold">You’re not going to work on Monday</span> , I’ve spoken to Hannah about this (listen to her voice recording below).
               <br /><br />
               <span className="font-bold">I will not reply to your
               messages, not yet anyway.</span> But I’m here. In every word. This is real. It’s happening. And it’s all for
               you.
            </p>
         </div>

         <BeganJourneyFooter />
      </div>
   )
}
export default P1Intro