import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    PlayIcon,
    AcademicCapIcon,
    BanknotesIcon,
    ServerIcon,
    RocketLaunchIcon,
    CheckCircleIcon,
    BoltIcon,
    HandThumbUpIcon,
    HandThumbDownIcon,
    UserGroupIcon,
  
  } from '@heroicons/react/20/solid'
  
  import {
    FaceSmileIcon,
    FaceFrownIcon,
  } from '@heroicons/react/24/outline'
  
  
  import Image from 'next/image'
  import toyland from '../../public/logos/toyland.jpg'
  import fink2 from '../../public/logos/fink2.jpg'
  import fink3 from '../../public/logos/fink11.jpg'
  import research from '../../public/logos/research.jpg'
  import design from '../../public/logos/design.jpg'
  import stats from '../../public/logos/stats.jpg'
  import expert from '../../public/logos/uxexpert.jpg'
  import test from '../../public/logos/fink5.jpg'
  import statistic from '../../public/logos/statistic.jpg'
  import { PaperClipIcon } from '@heroicons/react/24/solid'
  
  import { Fragment } from 'react'
  import { Tab } from '@headlessui/react'
  


  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  
  
  export default function Example() {
    return (
      <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-2xl font-semibold leading-7 text-amber-700">E-commerce Website Redesign</h2>
            <p className="mt-2 text-xl font-bold tracking-tight text-gray-700 sm:text-4xl">How we managed to Increase Direct Traffic and Conversions by 38%</p>
            
        </div>
       </div>
         <div className="relative overflow-hidden pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={toyland}
            alt="App screenshot"
            className="rounded-2xl"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 " />
          </div>
        </div>
      </div>


      </div>

    )
  }
  