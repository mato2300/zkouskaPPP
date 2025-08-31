import { Mail, Phone, MapPinHouse } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import foto1 from "../images/1000005813.jpg";
import foto2 from "../images/1000005814.jpg";
import foto3 from "../images/1000005815.jpg";

const Contact = () => {
  return (
    <div name="contact" className="w-full px-40 h-screen bg-blue-600 flex justify-center items-center p-4 flex-col text-white">
        {/* <form method="POST" action="https://getform.io/f/f1f89b36-954f-4614-9734-86a39968603d" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-6">
                <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600 text-fuchsia-200">Contact</p>
                <p className="py-4 text-gray-300">// Submit the form below or shoot me an email</p>
            </div>
            <input className="p-2 bg-[#ccd6f6]" type="text" placeholder="Name" name="name" /> 
            <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" /> 
            <textarea className="p-2" name="message" rows="10" placeholder="Message"></textarea>
            <button className="text-white border-2 hover:bg-fuchsia-600 hover:border-fuchsia-600 px-4 py-3 my-8 mx-auto flex items-center">Podme spolupracovat</button>
         </form> */}
      <div className='flex flex-row  items-center justify-between w-full'>
        <div className='w-72'>
          <h1 className='text-2xl font-bold mb-4'>Kontakt</h1>
          <p>Za přihlášení ke zkoušce se považuje odeslání přihlášky ke zkoušce autorizované osobě.</p>
          <h1 className='text-2xl font-bold mb-4 mt-6'>Zkoušky se konají</h1>
          <p>
            Centrum PRO<br />
            budova Zubní polikliniky<br />
            Opavská 3<br />
            785 01 Šternberk
          </p>
        </div>
        {/* <div className="flex flex-col items-center">
          <Phone className="w-6 h-6 mb-2" />
          <p className='mb-4'>Zavolejte nám</p>
          <span className="text-sm">+420 123 456 789</span>
          <span className="text-sm">+420 123 456 789</span>
        </div> */}
        {/* <div className="flex flex-col items-center">
          <img 
            src={foto1} 
            alt="Naši odborníci" 
            className="w-full h-[200px] rounded-lg shadow-lg "
          />
        </div> */}
                <div className="w-full max-w-[400px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="rounded-lg shadow-lg"
          >
            <SwiperSlide>
              <img
                src={foto1}
                alt="Naši odborníci 1"
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={foto2}
                alt="Naši odborníci 2"
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={foto3}
                alt="Naši odborníci 3"
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col items-center">
          <Mail className="w-6 h-6 mb-2" />
          <p className='mb-4'>Napište nám</p>
          <span className="text-sm">info@example.com</span>
          <span className="text-sm">info@example.com</span>
        </div>
      </div>
      <div className='flex flex-row  items-center justify-between w-full mt-10'>
        <div>
          <div className='flex flex-row items-center mt-10 shadow-2xl rounded-md bg-blue-500 p-4'>
            <MapPinHouse className="w-6 h-6 mr-10" />
            <div>
              <p>Adresa</p>
              <div className="w-60 flex flex-col">
  <span>Centrum PRO</span>
  <span>budova Zubní polikliniky</span>
  <span>Opavská 3</span>
  <span>785 01 Šternberk</span>
</div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[600px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.530267530205!2d17.297015115923805!3d49.7280502793754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712271b1a60e1f7%3A0x84bb9a8db5b5e3a3!2sOpavsk%C3%A1%203%2C%20785%2001%20%C5%A0ternberk%2C%20%C4%8Cesko!5e0!3m2!1scs!2scz!4v1698236523451!5m2!1scs!2scz"
    width="100%"
    height="300"
    allowFullScreen=""
    loading="lazy"
    className="rounded-md shadow-lg border-2 border-white"
  />
        </div>
      </div>
    </div>
  )
}

export default Contact