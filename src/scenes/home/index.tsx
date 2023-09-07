/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SelectedPage } from '../../shared/types';
import ActionButton from '../../shared/ActionButton';
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import useMediaQuery from '../../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    setSelectedPage :(value :SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id='home' className='gap-16
     bg-gray-200 
     pb-10 pt-10 md:h-full md:pb-0'>
        <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
            <div className='z-10 mt-32 md:basis-3/5'>
                <div className='md:-mt-20'>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20
                         before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                            <img src={HomePageText} alt='home-page-text'/>
                        </div>
                    </div>
                    <p className='mt-8 text-sm md:text-start'>
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                    Studios to get the Body Shapes That you Dream of.. Get Your Dream
                    Body Now.
                    </p>
                </div>
                {/* {Actions} */}
                <div className='mt-8 flex items-center gap-8 md:justify-start'>
                    <ActionButton  setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    <AnchorLink href={`#${SelectedPage.ContactUs}`}
                     onClick={()=>setSelectedPage(SelectedPage.ContactUs)} className='text-sm font-bold
                     text-primary-500 underline hover:text-secondary-500'>Learn More</AnchorLink>
                   
                </div>
            </div>
            <div>
                {/* IMAGE */}
            <img src={HomePageGraphic} alt="home-graphics" />
            </div>
        </div>

        {isAboveMediumScreens && (
            <div>
                <div>
                    <div>
                        <img src={SponsorRedBull} alt="red-bull-sponsoer" />
                        <img src={SponsorFortune} alt="fortune-sponsoer" />
                        <img src={SponsorForbes} alt="forbes-sponsoer" />
                    </div>
                </div>
            </div>
        )}
     </section>
  )
}

export default Home