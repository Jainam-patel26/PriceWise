import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const navIcons = [
    {src : '/assets/icons/search.svg', alt: 'Search Icon'},
    {src : '/assets/icons/black-heart.svg', alt: 'heart Icon'},
    {src : '/assets/icons/user.svg', alt: 'user Icon'},
]

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href='/' className="flex items-center gap-1">
                <Image src="/assets/icons/logo.svg" alt="Pricewise Logo" width={32} height={32} />
                <p className="nav-logo">
                    Price<span className="text-primary text-red-600">Wise</span>
                </p>
            </Link>

            <div className='flex items-center gap-5'>
                {navIcons.map((icon, index) => (
                    <Image key={index} src={icon.src} alt={icon.alt} width={28} height={28} className='object-contain' />
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
