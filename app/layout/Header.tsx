import React from 'react'

import Link from 'next/link'

const Header = () => {
  return (
    <div className="border-b flex justify-between">
        <Link href="/" className="text-4xl py-4">
            LOGO
        </Link>
        <button className="text-white bg-black px-4 py-4">Sign in</button>
    </div>
  )
}

export default Header