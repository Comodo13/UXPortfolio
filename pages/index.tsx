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
   
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <img
                className="h-11"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                  <a href="#" className="whitespace-nowrap font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                Data to enrich your online business
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    )
    //  <StudyPreview />

     
   
  
}

export default Home
