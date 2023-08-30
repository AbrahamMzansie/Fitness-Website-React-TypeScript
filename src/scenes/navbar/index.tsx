/* eslint-disable @typescript-eslint/no-unused-vars */

import React , {useState} from "react";
import { Bars3Icon , XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png';
import Link from "./Link";
import { SelectedPage } from "../../shared/types";


type Props = {  
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({selectedPage ,setSelectedPage} :Props) => {
  
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
       <div className={`${flexBetween} mx-auto w-5/6`}>
         <div className={`${flexBetween}  w-full gap-16`}>
          <img src={Logo} alt="logo"/>
          <div className={`{flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} page="Home"/>
              <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} page="Benefits"/>
              <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} page="Our Classes"/>
              <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} page="Contact Us"/>
            </div>            
          </div>
          <div className={`${flexBetween} w-full gap-8`}>
          <p>Sign In</p>
          <button>Become A Member</button>
         </div>
         </div>
         
       </div>
      </div>
    </nav>
  )
}

export default NavBar