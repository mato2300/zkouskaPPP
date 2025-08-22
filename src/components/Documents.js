import React from 'react';
import RealWork from "../images/RealWork.png";
import NameAgeApp from "../images/name-age-app.png";
import TaskApp from "../images/task-app.png";
import ProperityApp from "../images/properity-app.png"
import SearchingMoviesApp from "../images/Searching-movies.app.png"
import Image1 from "../images/image1.png"

const Work = () => {
  return (
    <div name="documents" className="bg-blue-600 w-full min-h-screen text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600">Dokuemnty ke stahnuti</p>
        </div>

        <a 
          href="/documents/prihlaskaKeZkousce.doc" 
          download 
          className="text-lg underline hover:text-fuchsia-300 cursor-pointer"
        >
          Prihlaska ke zkousce
        </a>

        
        <a 
          href="/documents/dotazníkKeZkoušce.doc" 
          download 
          className="text-lg underline hover:text-fuchsia-300 cursor-pointer"
        >
          Dotazník k přihlášce ke zkoušce
        </a>

        <a 
          href="/documents/hodnoticiStandart.pdf" 
          download 
          className="text-lg underline hover:text-fuchsia-300 cursor-pointer"
        >
          Hodnoticí standard
        </a>

        <a 
          href="/documents/zákonOPohřebnictví.pdf" 
          download 
          className="text-lg underline hover:text-fuchsia-300 cursor-pointer"
        >
          Zakon o pohřebnictví
        </a>
       
      </div>
    </div>
  );
}

export default Work;