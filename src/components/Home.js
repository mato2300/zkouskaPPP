import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#94bdf9]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:text-7xl font-bold text-fuchsia-200">Poradce pro pozůstalé jako profesní kvalifikace</h1>
            <p className="text-gray-800 py-4 max-w-[700px]">V zahraničí je poradenství pro pozůstalé již plně etablované. I v České republice se
                situace pomalu, ale jistě mění a poradenství pro pozůstalé se postupně legitimizuje a
                institucionalizuje.
            </p>
            <div>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5f9df9] hover:border-[#5f9df9]">
                    Vidiet zoznam kurzov 
                    <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3" />
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home
