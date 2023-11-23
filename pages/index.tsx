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
import Hero from '../public/logos/maria2.jpg'

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
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'ABOUT', href: '#', current: true },
  { name: 'PROJECTS', href: '#', current: false },
  { name: 'CONTACT', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



const Home: NextPage = () => {


  return (
    <>

    
   
      <div className="relative bg-main_gray">




      <Disclosure as="nav" className="bg-transparent">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-32">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

             
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>









        
        <div className="mx-auto max-w-7xl max-h-screen lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="pl-32 mx-auto max-w-2xl lg:mx-0">
              
              
              <h1 className="mt-0 text-4xl font-semibold tracking-tight text-blue-500 sm:mt-0 sm:text-6xl">
                Hi,
              </h1>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-100 sm:mt-4 sm:text-6xl">
                I'm Maria
              </h1>
              
              <p className="mt-6 lg:mb-64 text-lg leading-8 text-gray-100">
                A PRODUCT DESIGNER
              </p>
              
             
              
           
            </div>
          </div>
          <div className="inherit lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              className=" w-full bg-gray_ain object-unset lg:inherit lg:inset-0 lg:aspect-full lg:h-full"
              src={Hero}
              alt=""
              width={745}
          height={816}
            />
          </div>
        </div>
      </div>
      </>
    )
    
   

     
   
  
}

export default Home
