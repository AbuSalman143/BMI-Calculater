import React, { useState } from 'react'
import Landdingpage from './components/Landdingpage'
import BmiCalculater from './components/BmiCalculater'
import BmiResult from './components/BmiResult'


const App = () => {

  const [getStart,setGetStart]=useState(true);
  const [bmiCalculaterToggel,setBmiCalculaterToggel]=useState(false);
  const [reset,setReset]=useState(false);
  const [results,setResult]=useState(0);
  const [decimalResult,setDecimalResult]=useState("00");
  const [color,setColor]=useState("");
  const [bmiMsg,setBmiMsg]=useState("");
  const [age,setAge]=useState(0)
  const [weight,setWeight]=useState(0)
  const [height,setHeight]=useState(0)
  
  return (
    <div>
    {getStart&&<Landdingpage  setGetStart={setGetStart} setBmiCalculaterToggel={setBmiCalculaterToggel} />}

    {bmiCalculaterToggel&&<BmiCalculater  setBmiCalculaterToggel={setBmiCalculaterToggel} setReset={setReset} setResult={setResult} setDecimalResult={setDecimalResult} setColor={setColor} setBmiMsg={setBmiMsg} age={age} setAge={setAge} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight}/>}

    {reset&&<BmiResult  setReset={setReset} setGetStart={setGetStart} results={results} decimalResult={decimalResult} color={color}  bmiMsg={bmiMsg} setAge={setAge} setWeight={setWeight} setHeight={setHeight}/>}
      
      
      
    </div>
  )
}

export default App