import Image from 'next/image'


import TestimonialImage02 from '@/public/images/vrg.jpeg'


export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Owner</h2>
           
          </div>

          {/* Testimonials */}
          <div className="">

            

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Pemrograman adalah kunci untuk membuka pintu ke dunia teknologi modern, di mana Anda dapat menciptakan solusi untuk tantangan yang kompleks.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Vargas Braja Pamungkas</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Web Developer</a>
              </div>
            </div>

           

          </div>

        </div>
      </div>
    </section>
  )
}
