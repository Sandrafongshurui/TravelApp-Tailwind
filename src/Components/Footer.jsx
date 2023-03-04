import React from 'react'
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <div class="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        <div className="flex justify-center mb-2">
          <BsFacebook className="mx-4" />
          <BsTwitter className="mx-4" />
          <BsInstagram className="mx-4" />
          <BsGoogle className="mx-4" />
        </div>
        © 2023 Copyright:
        <a
          class="text-neutral-800 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          Travel My Way
        </a>
      </div>
    </footer>
  )
}

export default Footer
