// import React from 'react';
// import RealWork from "../images/RealWork.png";
// import NameAgeApp from "../images/name-age-app.png";
// import TaskApp from "../images/task-app.png";
// import ProperityApp from "../images/properity-app.png"
// import SearchingMoviesApp from "../images/Searching-movies.app.png"
// import Image1 from "../images/image1.png"

// const Work = () => {
//   return (
//     <div name="documents" className="bg-blue-600 w-full min-h-screen text-white">
//       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600">Dokuemnty ke stahnuti</p>
//         </div>

//         <a 
//           href="/documents/prihlaskaKeZkousce.doc" 
//           download 
//           className="text-lg underline hover:text-fuchsia-300 cursor-pointer"
//         >
//           Prihlaska ke zkousce
//         </a>

        
//         <a 
//           href="/documents/dotazníkKeZkoušce.doc" 
//           download 
//           className="text-lg underline hover:text-fuchsia-300 cursor-pointer"
//         >
//           Dotazník k přihlášce ke zkoušce
//         </a>

//         <a 
//           href="/documents/hodnoticiStandart.pdf" 
//           download 
//           className="text-lg underline hover:text-fuchsia-300 cursor-pointer"
//         >
//           Hodnoticí standart
//         </a>

//         <a 
//           href="/documents/zákonOPohřebnictví.pdf" 
//           download 
//           className="text-lg underline hover:text-fuchsia-300 cursor-pointer"
//         >
//           Zakon o pohřebnictví
//         </a>
       
//       </div>
//     </div>
//   );
// }

// export default Work;

import React from 'react'
import { Download } from 'lucide-react'

const documents = [
  {
    href: "/documents/prihlaskaKeZkousce.doc",
    label: "Přihláška ke zkoušce",
  },
  {
    href: "/documents/dotazníkKeZkoušce.doc",
    label: "Dotazník k přihlášce ke zkoušce",
  },
  {
    href: "/documents/hodnoticiStandart.pdf",
    label: "Hodnoticí standard",
  },
  {
    href: "/documents/zakonOPohrebnictvi.pdf",
    label: "Zákon o pohřebnictví",
  },
]

const Work = () => {
  return (
    <div name="documents" className="bg-gradient-to-b from-blue-600 to-blue-800 w-full min-h-screen text-white py-16">
      <div className="max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full">
        
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600">
            Dokumenty ke stažení
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {documents.map((doc, i) => (
            <a
              key={i}
              href={doc.href}
              download
              className="bg-white text-blue-600 rounded-2xl shadow-md p-6 flex items-center justify-between hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              <span className="font-semibold">{doc.label}</span>
              <Download className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
