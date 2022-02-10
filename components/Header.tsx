import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      {/* Left */}
      <div>
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div>
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* Center */}

      {/* Right */}
    </div>
  )
}

export default Header
