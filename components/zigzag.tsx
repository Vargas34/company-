import Image from 'next/image'

import FeatImage01 from '@/public/images/iot.jpg'
import FeatImage02 from '@/public/images/web.jpg'
import FeatImage03 from '@/public/images/apk.jpg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Solusi Untuk Pekerjaan dan Tugas Anda</h1>
            
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3">Internet Of Thing</h3>
                  <p className="text-xl text-gray-400 mb-4">Internet of Things adalah sebuah konsep yang terhubung dengan perangkat sebagai media komunikasi berbasis internet. Dengan adanya IoT, seorang user dapat saling terhubung dan berkomunikasi untuk melakukan aktivitas tertentu, mencari, mengolah, dan mengirimkan informasi secara otomatis.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2"> 
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3">Website</h3>
                  <p className="text-xl text-gray-400 mb-4">Website adalah kumpulan halaman web atau lokasi di internet tempat Anda menyimpan informasi dan menyajikannya agar bisa diakses oleh siapa pun secara online. Informasi ini bisa tentang diri Anda, bisnis, atau bahkan topik yang Anda minati.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3">Aplikasi Mobile</h3>
                  <p className="text-xl text-gray-400 mb-4">Aplikasi mobile adalah perangkat lunak yang dirancang khusus untuk dijalankan pada perangkat mobile seperti smartphone atau tablet.</p>
                  
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
