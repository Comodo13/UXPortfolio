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
import Hero from '../public/logos/maria.jpg'

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




const Home: NextPage = () => {


  return (
   
      <div className="relative bg-main_gray">
        <div className="mx-auto max-w-7xl max-h-screen lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="pl-32 mx-auto max-w-2xl lg:mx-0">
              
              
              <h1 className="mt-0 text-4xl font-semibold tracking-tight text-blue-500 sm:mt-0 sm:text-6xl">
                Hi,
              </h1>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-100 sm:mt-4 sm:text-6xl">
                I'm Maria
              </h1>
              
              <p className="mt-6 mb-64 text-lg leading-8 text-gray-100">
                A PRODUCT DESIGNER
              </p>
              
             
              
           
            </div>
          </div>
          <div className="inherit lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              className=" w-full bg-gray_ain object-cover lg:inherit lg:inset-0 lg:aspect-full lg:h-full"
              src={Hero}
              alt=""
              width={741}
          height={816}
            />
          </div>
        </div>
      </div>
    )
    //  <StudyPreview />

     
   
  
}

export default Home
