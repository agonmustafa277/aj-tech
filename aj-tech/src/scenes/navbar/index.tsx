import { div } from "framer-motion/client";
import { useState } from "react";
import Logo from "@/assets/Design ohne Titel.svg"


type Props = {}

const Navbar = (props: Props) => {
  return (
    
<div className="">
    <div className=" absolute inline-block size-40">
    <img src={Logo} alt="" />
    </div>
    <div className="flex flex-col items-center gap-6 p-7 ">
    <nav className="backdrop-blur-lg backdrop-brightness-60  top-0 border-b border-gray-200 dark:border-black rounded-2xl">
  <div className="max-w-[1980px] flex items-center justify-between mx-auto p-4">
  
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex justify-end gap-6 pr-4 text-xl">
      <li>
        <a href="/home" className="capitalize block py-2 px-3 text-white bg-blue-900 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-cyan-400" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/ueber_uns" className="capitalize block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 md:dark:hover:text-cyan-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Über uns</a>
      </li>
      <li>
        <a href="/service" className="capitalize block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 md:dark:hover:text-cyan-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Service</a>
      </li>
      <li>
        <a href="/kontakt" className="capitalize block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 md:dark:hover:text-cyan-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kontakt</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    </div>
</div>
  )
}

export default Navbar