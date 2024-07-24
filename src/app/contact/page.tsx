'use client';

import { BackgroundBeams } from "@/components/ui/background-beams";


function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 w-full flex flex-col items-center">
              <BackgroundBeams className="z-0 bg-[#0015ff20] min-h-screen" />

        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-3 md:mb-8 text-white">Contact Us</h1>
        <p className="text-gray-400 text-center w-[90%] md:w-[40%] md:text-base text-[13px] mt-2 md:mt-5">We&apos;re here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.</p>
        <div className="flex flex-col items-start w-[90%] md:w-[50%] mt-10 z-10">
            <input type="text" placeholder="Your email address" className="bg-black text-[gray] p-3 outline-cyan-600 w-[100%] rounded-md" />
            <textarea placeholder="Your message" className="bg-black text-[gray] p-3 mt-6 outline-cyan-600 w-[100%] rounded-md h-[150px]" />
            <button className="bg-[#1da075] text-white font-semibold py-2 px-5 mt-6 rounded-md">Send Message</button>
        </div>
    </div>
  )
}

export default page