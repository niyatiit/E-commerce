import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import {assets} from '../assets/assets'

const Contect = () => {
  return (
    <>
     <main className="max-w-6xl mx-auto px-6 py-16 mt-30">
      <Title text1={'CONTACT'} text2={'US'} />

      <section className="mt-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={assets.contact_img}
            alt="contact"
            className="rounded-lg shadow-md w-full h-[300px] object-cover"
          />
        </div>

        {/* Right Info */}
        <div className="flex-1 text-gray-700">
          <h3 className="text-lg font-semibold mb-3">Our Store</h3>
          <p className="mb-4 text-sm leading-relaxed">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>

          <p className="text-sm mb-2">Tel: (415) 555-0132</p>
          <p className="text-sm mb-6">Email: admin@forever.com</p>

          <h3 className="text-lg font-semibold mb-2">Careers at Forever</h3>
          <p className="text-sm mb-4">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-gray-800 px-6 py-2 text-sm font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </section>
    </main>
    <NewsLetterBox/>
    </>
  )
}

export default Contect