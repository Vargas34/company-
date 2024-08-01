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
            
          
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
