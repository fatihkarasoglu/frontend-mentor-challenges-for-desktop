import { useState, useEffect } from "react";

function App() {

  const [category, setCategory] = useState([]);
  const [score, setScore] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/categorys')
    .then(res => res.json())
    .then(res => setCategory(res))
  }, [category])

  useEffect(() => {
    fetch('http://localhost:3002/scores')
    .then(res => res.json())
    .then(res => setScore(res))
  }, [score])

  return (
    <div className="min-w-full min-h-screen flex justify-center items-center">
        <div className="w-2/5 h-96 rounded-3xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] flex flex-row">
            <div  className="w-2/4 h-96 bg-gradient-to-b from-[#7857ff] to-[#2e2be9] rounded-3xl flex flex-col justify-center items-center text-white font-random">
                <p className="opacity-60 text-lg -mt-10">Your Result</p>
                <div className="w-36 h-36 rounded-full bg-gradient-to-t from-[#4e21ca] to-[#2421ca] flex flex-col justify-center items-center mt-6">
                  <p className="font-bold text-5xl ">76</p>
                  <p className="text-sm opacity-40 pt-2 ">of 100</p>
                </div>
                <p className="mt-3 text-xl">Great</p>
                <p className="pl-11 pr-7 text-center mt-2 text-sm opacity-60 flex items-center justify-center">Your score higher than 65% of the people who have taken these tests.</p>
            </div>
  
            <div className="w-2/4 grid flex-col justify-center items-center ">
                <h1 className="w-48 flex  justify-start items-start font-bold">Summary</h1>
                <div className="w-48 h-10 rounded-md flex flex-row justify-between items-center bg-[#ff5757] bg-opacity-10 pl-3 pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#F55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/>
                  </svg>
                  <p className="flex text-[#ff5757] font-bold justify-start items-start -ml-5">
                    {category.map(categorys => {return <p> {categorys.nameR} </p> })}
                  </p>
                  <span className="flex flex-row">
                    <p className="font-bold pr-1">
                      {score.map(scores => {return <p> {scores.value0} </p>} )}
                    </p>/ 100</span>
                </div>

                <div className="w-48 h-10 rounded-md flex flex-row justify-between items-center bg-[#ffb01f] bg-opacity-10 pl-3 pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/>
                    </svg>
                    <p className="flex text-[#ffb01f] font-bold justify-start items-start -ml-5">
                    {category.map(categorys => {return <p> {categorys.nameM} </p> })}
                    </p>
                    <span className="flex flex-row">
                      <p className="font-bold pr-1">
                      {score.map(scores => {return <p> {scores.value1} </p>} )}
                      </p>/ 100</span>
                </div>

                <div className="w-48 h-10 rounded-md flex flex-row justify-between items-center bg-[#00bd91] bg-opacity-10 pl-3 pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"/>
                    </svg>
                    <p className="flex text-[#00bd91] font-bold justify-start items-start -ml-8">
                    {category.map(categorys => {return <p> {categorys.nameVe} </p> })}
                    </p>
                    <span className="flex flex-row">
                      <p className="font-bold pr-1">
                      {score.map(scores => {return <p> {scores.value2} </p>} )}
                      </p>/ 100</span>
                </div>

                <div className="w-48 h-10 rounded-md flex flex-row justify-between items-center bg-[#1125d4] bg-opacity-10 pl-3 pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"/>
                    </svg>
                    <p className="flex text-[#1125d4] font-bold justify-start items-start -ml-9">
                    {category.map(categorys => {return <p> {categorys.nameVi} </p> })}
                    </p>
                    <span className="flex flex-row">
                      <p className="font-bold pr-1">
                      {score.map(scores => {return <p> {scores.value3} </p>} )}
                      </p>/ 100</span>
                </div>

                <button type="button" className="w-48 h-10 rounded-3xl text-white font-bold text-lg bg-[#303b5a]">Continue</button>
            </div>
        </div>
    </div>
  );
}

export default App;