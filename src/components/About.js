import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-blue-500 text-black">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600 text-white">O nás</p>
                </div>
                <div>
                </div>
            </div>
                <div className="max-w-[1300px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:tetxt-right text-white">
                        <h2 className='text-2xl font-bold'>PhDr. et Mgr. Naděžda Špatenková, Ph.D., MBA</h2>
                        <p>Vystudovala jednooborovou psychologii na Filozofické fakultě Univerzity Palackého v Olomouci a
                            tamtéž sociologii a andragogiku v profilaci na sociální práci. Působila jako sociální pracovnice v rodinné
                            poradně, krizový intervent, odborný garant a supervizor na linkách důvěry. Absolvovala výcviky v
                            krizové intervenci a v PCA poradenství a terapii. Je frekventantkou výcviku v logoterapii a existenciální
                            analýze. Působila jako vysokoškolská učitelka, přednášela na katedře sociologie, andragogiky a kulturní
                            antropologie Filozofické fakulty Univerzity Palackého v Olomouci. Je garantem studijního oboru
                            Edukační péče o seniory na Slezské univerzitě v Opavě. V současné době se však zaměřuje primárně na
                            klinickou praxi, působí jako psycholog ve zdravotnictví v Odborném léčebném ústavu Paseka a
                            v Psychiatrické nemocnici ve Šternberku. Profesně se specializuje především na problematiku zvládání
                            náročných životních situací, gerontologii, thanatologii a péči o pozůstalé. Je autorkou a spoluautorkou
                            mnoha odborných publikací, například Zármutek a pomoc pozůstalým, Poradenství pro pozůstalé, Krize a
                            krizová intervence, Krize jako psychologický a sociologický fenomén, Reminiscenční terapie, Domácí
                            násilí, O posledních věcech člověka, Zármutek dětí a pozůstalých, Náročné, krizové a mimořádné situace
                            v kontextu rezidenčních služeb, Sexualita a intimita v závěru života atd. Spolupracuje s různými
                            institucemi, například s Asociací poradců pro pozůstalé, Dlouhou cestou apod. Je průkopníkem
                            poradenství pro pozůstalé v ČR a první autorizovanou osobou v této oblasti.
                        </p>
                    </div>
                    <div className='text-white'>
                        <h2 className='text-2xl font-bold'>Mgr. et Mgr. Drahomír Ševčík</h2>
                        <p>
                            Vystudoval jednooborovou psychologii na Filozofické fakultě Univerzity Palackého v Olomouci.
                            Absolvoval dlouhodobý psychoterapeutický výcvik v komunitě SUR. Od roku 1994 se pohyboval v
                            oblasti sociální práce, pracoval jako kurátor pro mládež, probační a mediační úředník, vedoucí DONA
                            Centra Bílého kruhu bezpečí v Ostravě – specializované poradny pro oběti domácího násilí. Působil jako
                            koordinátor pro problematiku domácího násilí Olomouckého kraje a psycholog intervenčního centra. Byl
                            dlouhodobým jednatelem a poradcem regionální pobočky Bílého kruhu bezpečí v Olomouci, jež
                            poskytuje pomoc obětem a svědkům trestné činnosti. V současné době pracuje jako psycholog ve
                            zdravotnictví, působí v paliativním týmu Fakultní nemocnice v Olomouci a má také vlastní
                            psychologickou praxi AARON v Olomouci. Je autorem a spoluautorem řady publikací, například Domácí
                            násilí, O posledních věcech člověka apod. Disponuje profesní kvalifikací Poradce pro pozůstalé a je
                            autorizovanou osobou v této oblasti.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About