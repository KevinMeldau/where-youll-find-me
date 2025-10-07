import CenteredArea from "./ui/CenteredArea.tsx";
import { BrowserRouter, Route, Routes } from 'react-router';
import { Suspense } from "react";
import LoadingBlock from "./ui/LoadingBlock.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import P1Intro from "./pages/P1Intro.tsx";
import Clue1 from "./pages/Clue1.tsx";
import Clue2 from "./pages/Clue2.tsx";
import Clue3 from "./pages/Clue3.tsx";
import Clue4 from "./pages/Clue4.tsx";
import Clue5 from "./pages/Clue5.tsx";
import Clue6 from "./pages/Clue6.tsx";

function App() {

  return (
       <CenteredArea maxWidthClass="max-w-lg">
         <BrowserRouter>
                 <Suspense fallback={<LoadingBlock/>}>
                   <Routes>
                      <Route path="/" element={<LandingPage />}/>
                      <Route path="/intro" element={<P1Intro />}/>
                      <Route path="/clue1" element={<Clue1 />}/>
                      <Route path="/clue2" element={<Clue2 />}/>
                      <Route path="/clue3" element={<Clue3 />}/>
                      <Route path="/clue4" element={<Clue4 />}/>
                      <Route path="/clue5" element={<Clue5 />}/>
                      <Route path="/clue6" element={<Clue6 />}/>
                     {/*<Route path="*" element={<NotFound/>}/>*/}
                   </Routes>
                 </Suspense>
         </BrowserRouter>
       </CenteredArea>
  )
}

export default App
