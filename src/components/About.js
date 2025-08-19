import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-blue-500 text-black">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600 text-fuchsia-200">O nas</p>
                </div>
                <div>
                </div>
            </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:tetxt-right text-4xl font-bold">
                        <p>Učíme, jak být oporou v nejtěžších chvílích. Kurzy jsou postavené na praxi i lidském přístupu.</p>
                    </div>
                    <div>
                        <p>Centrum PRO je vzdělávací platforma zaměřená na poradenství pro pozůstalé. Naším cílem je připravovat kvalifikované odborníky, kteří dokážou citlivě a profesionálně provázet klienty v těžkých životních chvílích. Nabízíme kurzy vycházející z aktuálních standardů a požadavků na profesní kvalifikaci. Věříme, že péče o pozůstalé si zaslouží odborný a lidský přístup.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About