import React from 'react'
import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    children :React.ReactNode;
    setSelectedPage:(value :SelectedPage) =>void;
}

const Menu = ({children , setSelectedPage}: Props) => {
  return (
    <AnchorLink href='#contactus' onClick={()=>setSelectedPage(SelectedPage.ContactUs)} className="rounded-md
     bg-secondary-500 px-10 py-2
     hover:bg-primary-500
      hover:text-white">{children}</AnchorLink>
  )
}

export default Menu;