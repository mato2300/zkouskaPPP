import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import { Link } from 'react-scroll';
import { Download } from "lucide-react";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-blue-600">
        {/* Container */}
        <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full">
            {/* <h1 className="text-4xl sm:text-7xl font-bold text-black"></h1> */}
            <p className="text-white py-4 max-w-[1100px] text-2xl"><span className='text-4xl font-bold max-w-[1100px]'>Profesní kvalifikace Poradce/poradkyně pro pozůstalé</span> <br></br> je potvrzením, že daný pracovník disponuje
nejen určitými znalostmi, ale také dovednostmi <br></br> a potřebnými osobnostními dispozicemi, aby mohl být
pozůstalým efektivním zdrojem opory <br></br> a pomoci.
            </p>
      <div className='flex flex-row justify-between gap-4 p-4 mb-10'>
<a 
  href="/documents/PPP_Nejčastější dotazy.odt" 
  download 
  className="w-48 h-32 flex items-center justify-center gap-2 text-center text-white bg-blue-500 rounded-xl shadow-md hover:scale-105 transition transform"
>
  <Download className="w-5 h-5" />
  Nejčastější dotazy
</a>

<a 
  href="/documents/PPP_PoradceProPozůstalé.docx" 
  download 
  className="w-60 h-32 flex items-center justify-center gap-2 text-center text-white bg-blue-500 rounded-xl shadow-md hover:scale-105 transition transform"
>
  <Download className="w-5 h-5" />
  Poradce pro pozůstalé
</a>

        <a 
  href="/documents/PPP_Kompetence.docx" 
  download 
  className="w-48 h-32 flex items-center justify-center gap-2 text-center text-white bg-blue-500 rounded-xl shadow-md hover:scale-105 transition transform"
>
  <Download className="w-5 h-5" />
  Kompetence
</a>
        </div>
            <div>
                <Link to="skills" smooth={true} duration={500}>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5f9df9] hover:border-[#5f9df9]">
                        Prohlédnout si seznam kurzů
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Home
