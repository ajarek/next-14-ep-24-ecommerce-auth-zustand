'use client'

import Link from 'next/link'

import { useState } from 'react'

const DropdownMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleItemClick = () => {
    setMenuOpen(false)
  }

  return (
    <div className='flex flex-col items-center justify-center bg-white text-black px-2'>
      <button onClick={toggleMenu}>Admin</button>

      {isMenuOpen && (
        <ul className='mt-2'>
          <Link
            href={'/login'}
            className='border border-input bg-white text-black hover:text-accent-foreground h-10 px-4 py-2  '
            onClick={() => handleItemClick()}
          >
            Login
          </Link>
        </ul>
      )}
    </div>
  )
}

export default DropdownMenu
