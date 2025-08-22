import React from 'react';
import RealWork from "../images/RealWork.png";
import NameAgeApp from "../images/name-age-app.png";
import TaskApp from "../images/task-app.png";
import ProperityApp from "../images/properity-app.png"
import SearchingMoviesApp from "../images/Searching-movies.app.png"
import Image1 from "../images/image1.png";
import Image2 from "../images/image2.png";
import Image3 from "../images/image3.png";
import Image4 from "../images/image4.png";

const Work = () => {
  return (
    <div name="work" className="bg-blue-500 w-full min-h-screen text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600">Knihy</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${Image1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="relative group shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center h-64"
          >
            {/* Tlačidlo sa objaví len na hover */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://www.grada.cz/poradenstvi-pro-pozustale-(2)-13427/?utm_source=google&utm_medium=cpc&utm_campaign=326_999_PMAX_ALL-
                    PRODUCTS&utm_id=15989233195&gad_source=1&gad_campaignid=15994019258&gbraid=0AAAAADndr97ueFSh66-

                    jbqy8eVHoe2Z76&gclid=CjwKCAjw49vEBhAVEiwADnMbbOB3SJL7kCMsgRhE4pE60QSNnjIALV5xAML04tZTcd0pjxAD7mW5aBoCUdkQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                  Web
                </button>
              </a>
            </div>
          </div>

            {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${Image2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="relative group shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center h-64"
          >
            {/* Tlačidlo sa objaví len na hover */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://www.grada.cz/zarmutek-deti-a-dospivajicich-13429/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                  Web
                </button>
              </a>
            </div>
          </div>

           {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${Image3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="relative group shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center h-64"
          >
            {/* Tlačidlo sa objaví len na hover */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://www.grada.cz/krize-a-krizova-intervence-8367/?

                    349579861&utm_source=google&utm_medium=cpc&utm_campaign=326_999_PMAX_ALL-
                    PRODUCTS&utm_id=15989233195&gad_source=1&gad_campaignid=15984111021&gbraid=0AAAAADndr96EG51qp5Jys-1xjBc51-

                    5zu&gclid=CjwKCAjw49vEBhAVEiwADnMbbMDZf1hoH0ZLYl0icgFltXXcxT4MnyvEYihYpgFu4UVobmbGvtV50BoC0_gQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                  Web
                </button>
              </a>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${Image4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="relative group shadow-lg shadow-[#040c16] rounded-md flex justify-center items-center h-64"
          >
            {/* Tlačidlo sa objaví len na hover */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://www.databazeknih.cz/knihy/o-poslednich-vecech-cloveka-315773"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                  Web
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Work;