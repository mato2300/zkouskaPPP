const Gallery = () => {
  return (
    <div name="gallery" className="bg-blue-500 w-full min-h-screen text-gray-300">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600 text-fuchsia-200">
            Galéria
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/nas_g3FdlVg?si=m6j4YB1orQRsHsgM"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/xCmeBC3zsRU?si=4Yel8Psky6hcWLKJ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        {/* Video 3 */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/PG88nC8o-bE?si=kbRwpbL2q_5FRKbW"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

            {/* Video 4 */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/ttDGPPjQYVM?si=S77COsjeGlGjJCe9"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

            {/* Video 5 */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/FfV9RfsgUak?si=7KGMqAfoL1SJ74nz"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

            {/* Video 6 */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/XS38Cpw0Fvc?si=vul44a2MpVlY1sfh"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

            {/* Video 7 */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src="https://www.youtube.com/embed/O4Gymzno4Yc?si=_HB4fT3NVpBQuT2A"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Gallery;