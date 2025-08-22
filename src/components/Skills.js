import React from 'react';

import CSS from "../images/css (1).png";
import HTML from "../images/html.png";
import JavaScript from "../images/javascript.png";
import ReactImg from "../images/react.png";
import BootstrapImg from "../images/bootstrap.png";
import GitHub from "../images/github.png";
import Tailwind from "../images/tailwind.png";
import Git from "../images/git.png";
import Java from "../images/java-logo.png"
import PHP from "../images/php.png"
import Course from './ui/Course';


const Skills = () => {
  return (
    <div id='skills' name="skills" className="w-full h-screen bg-blue-600 text-white">

        {/* Container */}

        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600">Kurzy</p>
                <p className="py-4">
                  U zkoušky profesní kvalifikace ověřuje uchazeč před autorizovanou osobou, resp. autorizovanými osobami, zda disponuje požadovanými kompetencemi. Kde, kdy a jak je získal není pro účely zkoušky relevantní. Přesto může být užitečné absolvovat přípravné kurzy organizované  některými organizacemi, např. 
                </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
             {/*    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700 cursor-pointer">
                    <p className="my-4">Kurz pokojneho zivota</p>
                    <p className="my-4">29.8.2025</p>
                </div> */}
                
            </div>
            <a 
              href='http://www.jsmeblizkovam.cz/index.php' 
              target="_blank"
              className='hover:underline'
            >
              JSME BLÍZKO VÁM - Institut klinické pastorační péče, z.ú 
            </a>

            <a 
              href='https://poradci-pro-pozustale.cz/' 
              target="_blank"
              className='hover:underline'
            >
              Asociace poradců pro pozůstalé, z.ú. 
            </a>
        </div>

    </div>
  )
}

export default Skills