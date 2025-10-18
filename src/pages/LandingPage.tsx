import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="relative">
      {/* Full-screen pink background layer */}
      <div className="fixed inset-0 bg-primary"></div>
      {/* If you prefer a gradient: */}
      {/* <div className="fixed inset-0 bg-gradient-to-b from-[#fe5a7d] to-[#ff9cb1]"></div> */}

      {/* Content on top */}
      <div className="relative z-10 min-h-dvh w-full flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-whitef !text-[44px] leading-tight">
          Ready for <br /> an Adventure?
        </h1>

        <Link to={"/intro"} className="pulse-ring-wrapper w-[200px] h-[200px] mt-10">
          <span className="relative flex w-[200px] h-[200px]">
            <span className="absolute inline-flex h-full w-full animate-[ping_2.5s_linear_infinite] rounded-full bg-whitef opacity-75"></span>
            <span className="relative inline-flex w-[200px] h-[200px] rounded-full bg-whitef flex items-center justify-center text-center text-blackf font-bold text-[24px] cursor-pointer select-none">
              Tap here <br /> to start
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
