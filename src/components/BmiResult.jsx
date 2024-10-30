import React from 'react';

const BmiResult = ({ setReset, setGetStart, results, decimalResult, color, bmiMsg,setAge,setWeight,setHeight }) => {
    const resethanddeler = () => {
        setReset(false);
        setGetStart(true);
        setAge(0);
        setWeight(0);
        setHeight(0);
    };

    return (
        <div className="bg-[#F4F3FF] min-h-screen flex flex-col justify-between items-center p-4 sm:p-6 lg:p-10">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                BMI CALCULATOR
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-center">Body Mass Index</h3>
            
            <div className="border-2 bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center gap-4 w-full sm:w-[80%] md:w-[60%] lg:w-[40%]">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold" style={{ color }}>
                    BMI Results
                </h2>
                
                <div className="flex items-end text-center">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold" style={{ color }}>
                        {results}
                    </h1>
                    <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl" style={{ color }}>
                        .
                    </span>
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ color }}>
                        {decimalResult}
                    </span>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl font-semibold" style={{ color }}>
                    {bmiMsg}
                </p>

                <div className="flex flex-col justify-center items-center text-xs sm:text-sm md:text-base font-semibold text-center">
                    <span>Underweight: BMI less than 18.5</span>
                    <span>Normal weight: BMI 18.5 to 22.9</span>
                    <span>Risk to Overweight: BMI 23 to 24.9</span>
                    <span>Overweight: BMI 25 to 29.9</span>
                    <span>Obesity: 30 to 40</span>
                </div>
            </div>
            
            <button
                onClick={resethanddeler}
                className="mt-8 py-3 sm:py-4 border-2 text-lg sm:text-xl md:text-2xl w-full sm:w-[75%] lg:w-[40%] rounded-full text-white bg-[#6C63FF]"
            >
                Reset
            </button>
        </div>
    );
};

export default BmiResult;
