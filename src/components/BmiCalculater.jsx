import React, { useState } from 'react';

const BmiCalculater = ({setBmiCalculaterToggel,setReset,setResult,setDecimalResult,setColor,setBmiMsg,age,setAge,weight,setWeight,height,setHeight}) => {

    

   
    const ageHanddler=(agevalue)=>{
        if(agevalue=="increement"){
            setAge(age+1)
        }
        if(agevalue=="decreement"){
            setAge(age-1)
            if(age===0){
                setAge(0)

            }
        }
    }
    const weightHanddler=(weightvalue)=>{
        if(weightvalue=="increement"){
            setWeight(weight+1)
        }
        if(weightvalue=="decreement"){
            setWeight(weight-1)
            if(weight===0){
                setWeight(0)

            }
        }
    }


// function for Gender toggel switch
    const [genderToggel, setGenderToggel] = useState(false);
    const handdelGenderToggel = () => {
        setGenderToggel(!genderToggel);
    };

//  function forn Bmi calculater button 

const bmiCalculaterButton=()=>{
    setBmiCalculaterToggel(false)
    setReset(true)
     let bmi=(10000*weight)/(height*height)
     console.log(bmi)
     let value=(Math.round(bmi*100)/100).toString().split(".");
     setResult(value[0])
     setDecimalResult(value[1])
     if(bmi<18.5){
        setBmiMsg("Underweight BMI")
        setColor("#60CCF3")
     }
     else if(bmi>18.5 && bmi<22.9){
        setBmiMsg("Normal BMI")
        setColor("#63BC46")
     }
     else if(bmi>22.9 && bmi<24.9){
        setBmiMsg("Risk to Overweight BMI")
        setColor("#FBEC31")
     }
     else if (bmi>24.9 && bmi<29.9 ){
        setBmiMsg("Overweight BMI")
        setColor("#F78F2C")

     }
     else if(bmi>30){
        setBmiMsg("Obesity BMI")
        setColor("#EE3928")

     }
    }
 

    return (
        <div className='bg-[#F4F3FF] min-h-screen flex flex-col justify-between items-center p-4 sm:p-6 lg:p-10'>
            <p className='text-xl sm:text-2xl lg:text-3xl font-semibold'>BMI CALCULATOR</p>
            
            <div className='flex flex-col lg:flex-row w-full lg:w-[50%] justify-around gap-6 mt-6'>
                <div className='flex flex-col w-full lg:w-[40%] gap-4 bg-white rounded-xl items-center py-3'>
                    <p className='text-lg sm:text-xl lg:text-2xl'>Age</p>
                    <h1 className='text-4xl sm:text-5xl font-bold text-[#6C63FF]'>{age}</h1>
                    <div className='flex w-[70%] justify-between'>
                        <p onClick={()=>{ageHanddler("increement")}} className='cursor-pointer h-10 w-10 pb-1 text-2xl flex justify-center items-center rounded-full text-white bg-[#081854]'>+</p>
                        <p onClick={()=>{ageHanddler("decreement")}} className='cursor-pointer h-10 w-10 pb-1 text-2xl flex justify-center items-center rounded-full text-white bg-[#081854]'>-</p>
                    </div>
                </div>

                <div className='flex flex-col w-full lg:w-[40%] gap-4 bg-white rounded-xl items-center py-3'>
                    <p className='text-lg sm:text-xl lg:text-2xl'>Weight (KG)</p>
                    <h1 className='text-4xl sm:text-5xl font-bold text-[#6C63FF]'>{weight}</h1>
                    <div className='flex w-[70%] justify-between'>
                        <p onClick={()=>{weightHanddler("increement")}} className='cursor-pointer h-10 w-10 pb-1 text-2xl flex justify-center items-center rounded-full text-white bg-[#081854]'>+</p>
                        <p onClick={()=>{weightHanddler("decreement")}} className='cursor-pointer h-10 w-10 pb-1 text-2xl flex justify-center items-center rounded-full text-white bg-[#081854]'>-</p>
                    </div>
                </div>
            </div>

            <div className='w-full lg:w-[50%] flex flex-col justify-center items-center gap-3 bg-white rounded-xl p-3 mt-6'>
                <label className='text-lg sm:text-2xl'>Height (CM)</label>
                <h1 className='text-3xl sm:text-4xl font-bold text-[#6C63FF]'>{height}</h1>
                <input 
                value={height}
                onChange={(e)=>{setHeight(e.target.value)}}
                 type='range' min={50} max={300} className='w-full' />
                <div className='flex justify-between w-full'>
                    <p className='text-sm'>50 cm</p>
                    <p className='text-sm'>300 cm</p>
                </div>
            </div>

            <div className='w-full lg:w-[50%] flex flex-col items-center bg-white gap-3 rounded-xl p-3 mt-6'>
                <p className='text-lg sm:text-2xl'>Gender</p>
                <div className='flex justify-around w-full items-center'>
                    <p className='text-base sm:text-xl'>Male</p>
                    <div
                        className={`relative w-full sm:w-[70%] h-10 border-2 rounded-full flex ${
                            genderToggel ? 'justify-end' : 'justify-start'
                        }`}
                        onClick={handdelGenderToggel}
                    >
                        <div className='cursor-pointer h-9 w-9 bg-[#6C63FF] rounded-full'></div>
                    </div>
                    <p className='text-base sm:text-xl'>Female</p>
                </div>
            </div>

            <button 
            onClick={bmiCalculaterButton}
            className="mt-8 py-3 sm:py-4 border-2 text-lg sm:text-2xl w-full sm:w-[75%] lg:w-[25%] rounded-full text-white bg-[#6C63FF]">
                Calculate BMI
            </button>
        </div>
    );
};

export default BmiCalculater;
