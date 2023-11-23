import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import ContactOne from '../components/Contacts/ContactOne'
import Modal from '../components/Modals/ModalOne'
import ServiceTwo from '../components/Services/ServiceTwo'
import product from '../resource/icons/product.png'
import HeroTwo from '../components/Heros/HeroTwo'
import backgroundHero from '../resource/bg/bg.png'
import ReviewsOne from '../components/Reviews/ReviewsOne'
import FeatureThree from '../components/Features/FeatureThree'
import featureIconTwo from '../resource/icons/obl.jpg'
import featureIconOne from '../resource/icons/tmin.jpg'
import featureIconThree from '../resource/icons/boyar.jpg'
import FeatureSeven from '../components/Features/FeatureSeven'
import ModalInfo from '../components/Modals/ModalInfo'
import Smartlook from 'smartlook-client'
import FooterOne from '../components/Footers/FooterOne'
import FeatureFive from '../components/Features/FeatureFive'
import alarm from '../resource/icons/alarm.png'
import heart from '../resource/icons/heart.png'
import dna from '../resource/icons/dna.png'
import molec from '../resource/icons/molec.png'
import Testimonials, { CardType } from '../components/Features/FeatureFive'
import StudyPreview from '../components/Portfolio/StudyPreview'
import pill1 from '../resource/icons/pill1.png'
import pill2 from '../resource/icons/pill2.png'
import pill3 from '../resource/icons/pill3.png'
import Image from 'next/image'
import Hero from '../public/logos/maria7.jpg'

import {
  labelsTimer,
  featureProduct,
  titleHero,
  textFooter,
  titleFeature,
  titleFeatureSeven,
  titleReviews,
  reviews,
  descriptionHero,
  buttonHero,
  buttonFeatureSeven,
  incentives,
  descriptionCookie
} from '../data/dateMX'
import CookieOne from '../components/Banners/CookieOne'
import About from '../components/Portfolio/About'
import { Fragment } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const navigation = [
  { name: 'about', href: '#' },
  { name: 'work', href: '#' },
]





const Home: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  

  return (
    
    <div className="bg-gray-900">
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center fixed ml-0 sm:ml-60 justify-between bg-warm-Gray-900  p-6 lg:px-8" aria-label="Global">
    
  <div className="flex lg:hidden">
    <button
      type="button"
      className="-m-2.5 inline-flex items-center font-heading justify-center rounded-md p-2.5 text-gray-400"
      onClick={() => setMobileMenuOpen(true)}
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
  <div className="hidden lg:flex lg:gap-x-12">
    {navigation.map((item) => (
      <a key={item.name} href={item.href} className="font-body text-2xl leading-6  hover:text-amber-500 text-white">
        {item.name}
      </a>
    ))}
  </div>
 
</nav>
<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
  <div className="fixed inset-0 z-50" />
  <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
    <div className="flex items-center justify-between">
      
      <button
        type="button"
        className="-m-2.5 rounded-md p-2.5 text-gray-400"
        onClick={() => setMobileMenuOpen(false)}
      >
        <span className="sr-only">Close menu</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/25">
        <div className="space-y-2 py-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="py-6">
          
        </div>
      </div>
    </div>
  </Dialog.Panel>
</Dialog>
</header>

<div className="relative isolate overflow-hidden pt-14">
<Image
  src={Hero}
  alt=""
  width={1440}
  height={816}
  className="fixed inset-0 -z-10 h-full w-full object-cover"
/>
<div
  className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  aria-hidden="true"
>
  
</div>
<div className="ml-8 sm:ml-64 max-w-xl pt-32 sm:py-48 lg:py-48 lg:mb-36">
  <div className="hidden sm:mb-8 sm:flex lg:justify-left sm:justify-left">
   
  </div>
  <div className="text-left ">
    <h1 className="font-body font-regular text-white sm:text-6xl">
      Hi, I'm Maria.
    </h1>
    <p className="mt-6 font-body font-thin pb-32 text-4xl leading-8 text-gray-300">
      A <span className="font-thin text-amber-500">Product Designer</span> located in Prague, driven by a passion for crafting visually appealing yet functional interfaces.
    </p>
    
  </div>
</div>

<div className="ml-8 sm:ml-64 max-w-xl pt-32 sm:py-48 lg:py-48 lg:mb-36">
  <div className="hidden sm:mb-8 sm:flex lg:justify-left sm:justify-left">
   
  </div>
  <div className="text-left">
  <h1 className="font-body font-regular text-white sm:text-6xl">
      How can I help you?
    </h1>
    <p className="mt-6 font-body font-thin pb-32 text-4xl leading-8 text-gray-300">
     A <strong className=" text-orange-900">Product Designer </strong> located in Prague, driven by a passion for crafting visually appealing yet functional interfaces.
    </p>
    
  </div>
</div>


<div className="ml-8 sm:ml-64 max-w-xl pt-32 sm:py-48 lg:py-48 lg:mb-36">
  <div className="hidden sm:mb-8 sm:flex lg:justify-left sm:justify-left">
   
  </div>
  <div className="text-left">
  <h1 className="font-body font-regular text-white sm:text-6xl">
      Contact
    </h1>
    <p className="mt-6 font-body font-thin pb-32 text-4xl leading-8 text-gray-300">
      A Product Designer located in Prague, driven by a passion for crafting visually appealing yet functional interfaces.
    </p>
    
  </div>
</div>



</div>
</div>




    )
    
}

export default Home

