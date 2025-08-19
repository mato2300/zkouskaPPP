import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-blue-600">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            {/* <h1 className="text-4xl sm:text-7xl font-bold text-black"></h1> */}
            <p className="text-white py-4 max-w-[900px] text-2xl"><span className='text-4xl'>P</span>rofesní kvalifikace Poradce/poradkyně pro pozůstalé je potvrzením, že daný pracovník disponuje
nejen určitými znalostmi, ale také dovednostmi a potřebnými osobnostními dispozicemi, aby mohl být
pozůstalým efektivním zdrojem opory a pomoci.
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
