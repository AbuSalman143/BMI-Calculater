import landdingImg from '../assets/ladding img.png';

const Landdingpage = ({setGetStart,setBmiCalculaterToggel}) => {


  const landingToggel=()=>{
    setGetStart(false)
    setBmiCalculaterToggel(true)
  }
  return (
    <div className="bg-[#6D63FF] h-screen flex flex-col justify-evenly items-center px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">BodyBliss</h1>
      
      <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[70%] items-center gap-8">
        <div className="w-full lg:w-[40%] flex justify-center">
          <img src={landdingImg} className="w-full max-w-xs lg:max-w-full" />
        </div>
        
        <div className="w-full lg:w-[55%] flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-white">
            Get Started with Tracking Your Health!
          </h1>
          <p className="text-[#BDBAFA] text-lg sm:text-xl">
            Calculate your BMI and stay on top of your wellness journey, effortlessly.
          </p>
        </div>
      </div>
      
      <button 
      onClick={landingToggel}
      className="py-4 lg:py-4 border-2 text-2xl sm:text-3xl lg:text-2xl w-full sm:w-[50%] lg:w-[25%] rounded-full text-[#17265E] bg-white">
        Get Started
      </button>
    </div>
  );
}

export default Landdingpage;
