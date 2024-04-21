import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="inline-block" aria-label="Cruip">
                  <div className='d-flex'>
                    <img src="/images/logo.jpeg" alt="" className='rounded-full w-10 h-10' />
                  </div>
                </Link>
          </div>

          
          <nav className="hidden md:flex md:grow">
            
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/#"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Masuk
                </Link>
              </li>
              <li>
                <Link href="/#" className="btn-sm text-white bg-green-600 hover:bg-green-700 ml-3">
                  Daftar
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
