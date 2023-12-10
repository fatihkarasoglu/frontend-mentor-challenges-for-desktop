import { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaCirclePlus, FaCircleMinus  } from "react-icons/fa6";

export default function Fag() {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const firstOpenHandle = () => {
        setIsOpen1(!isOpen1)
        setIsOpen2(false)
        setIsOpen3(false)
        setIsOpen4(false)
    }

    const secondOpenHandle = () => {
        setIsOpen2(!isOpen2)
        setIsOpen1(false)
        setIsOpen3(false)
        setIsOpen4(false)
    }

    const thirdOpenHandle = () => {
        setIsOpen3(!isOpen3)
        setIsOpen1(false)
        setIsOpen2(false)
        setIsOpen4(false)
    }

    const fourtOpenHandle = () => {
        setIsOpen4(!isOpen4)
        setIsOpen1(false)
        setIsOpen2(false)
        setIsOpen3(false)
    }

    return(
        <div className="min-w-full min-h-screen flex justify-center items-center">
            <div className="w-2/5 h-auto bg-white text-black rounded-xl">
                <div className="w-full text-[#2f1533] flex flex-row mx-10 mt-10 justify-start items-center">
                    <PiStarFourFill className="w-8 h-8 mr-4 text-[#ca00d1]" />
                    <h1 className="text-5xl font-bold text-[#2f1533] font-random">FAQs</h1>
                </div>
                <div className="w-full flex flex-row justify-around items-center mt-10">
                    <span className="font-bold text-[#2f1533]">What is Frontend Mentor, and how will it help me?</span>
                    {isOpen1 ? (
                        <button type="button" onClick={firstOpenHandle}>
                            <FaCircleMinus className="w-5 h-5 text-[#2f1533]" />
                        </button>
                    ) : (
                        <button type="button" onClick={firstOpenHandle}>
                            <FaCirclePlus className="w-5 h-5 text-[#ca00d1]" />
                        </button>
                    )}
                </div>
                <div className="w-full text-sm opacity-40 font-random px-9 mt-5">
                    {isOpen1 && (
                        <div>
                            Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
                        </div>
                    )}
                </div>

                <div className="w-full flex flex-row justify-between items-center mt-10 px-9">
                    <div className="justify-start">
                        <span className="font-bold text-[#2f1533]">Is Frontend Mentor free?</span>
                    </div>
                    <div className="justify-end">
                    {isOpen2 ? (
                        <button type="button" onClick={secondOpenHandle}>
                            <FaCircleMinus className="w-5 h-5 text-[#2f1533]" />
                        </button>
                    ) : (
                        <button type="button" onClick={secondOpenHandle}>
                            <FaCirclePlus className="w-5 h-5 text-[#ca00d1]" />
                        </button>
                    )}
                    </div>
                </div>
                <div className="w-full text-sm opacity-40 font-random px-9 mt-5">
                    {isOpen2 && (
                        <div>
                            Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.
                        </div>
                    )}
                </div>

                <div className="w-full flex flex-row justify-between items-center mt-10 px-9">
                    <div className="justify-start">
                        <span className="font-bold text-[#2f1533]">Can I use Frontend Mentor projects in my portfolio?</span>
                    </div>
                    <div className="justify-end">
                    {isOpen3 ? (
                        <button type="button" onClick={thirdOpenHandle}>
                            <FaCircleMinus className="w-5 h-5 text-[#2f1533]" />
                        </button>
                    ) : (
                        <button type="button" onClick={thirdOpenHandle}>
                            <FaCirclePlus className="w-5 h-5 text-[#ca00d1]" />
                        </button>
                    )}
                    </div>
                </div>
                <div className="w-full text-sm opacity-40 font-random px-9 mt-5">
                    {isOpen3 && (
                        <div>
                            Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!
                        </div>
                    )}
                </div>

                <div className="w-full flex flex-row justify-between items-center mt-10 px-9">
                    <div className="justify-start">
                        <span className="font-bold text-[#2f1533]">How can I get help if I'm stuck on a Frontend Mentor challenge?</span>
                    </div>
                    <div className="justify-end">
                    {isOpen4 ? (
                        <button type="button" onClick={fourtOpenHandle}>
                            <FaCircleMinus className="w-5 h-5 text-[#2f1533]" />
                        </button>
                    ) : (
                        <button type="button" onClick={fourtOpenHandle}>
                            <FaCirclePlus className="w-5 h-5 text-[#ca00d1]" />
                        </button>
                    )}
                    </div>
                </div>
                <div className="w-full text-sm opacity-40 font-random px-9 mt-5 pb-4">
                    {isOpen4 && (
                        <div>
                            The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}