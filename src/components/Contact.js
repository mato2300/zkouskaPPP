import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form method="POST" action="https://getform.io/f/f1f89b36-954f-4614-9734-86a39968603d" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-6">
                <p className="text-4xl font-bold inline border-b-4 border-fuchsia-600 text-fuchsia-200">Contact</p>
                <p className="py-4 text-gray-300">// Submit the form below or shoot me an email</p>
            </div>
            <input className="p-2 bg-[#ccd6f6]" type="text" placeholder="Name" name="name" /> 
            <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" /> 
            <textarea className="p-2" name="message" rows="10" placeholder="Message"></textarea>
            <button className="text-white border-2 hover:bg-fuchsia-600 hover:border-fuchsia-600 px-4 py-3 my-8 mx-auto flex items-center">Podme spolupracovat</button>
         </form>
    </div>
  )
}

export default Contact