import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
  import Image from 'next/image'
  import fink from '../../public/logos/fink.jpg'
import { PaperClipIcon } from '@heroicons/react/24/solid'


  
  export default function Example() {
    return (
      <div className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-xl font-semibold leading-7 text-blue-600">Česká Spořitelna</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">Finanční Kouč</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Financial advisory feature embedded within Ceska Sporitelna's mobile banking "George". 
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              src={fink}
              alt="App screenshot"
              className="mb-[-12%] rounded-xl"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-4xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-2xl font-semibold leading-7 text-gray-900">Overview</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-md font-medium leading-6 text-gray-900">Project Duration</dt>
            <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">December 2022 - October 2023</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-md font-medium leading-6 text-gray-900">My Role</dt>
            <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">UX Designer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-md font-medium leading-6 text-gray-900">Team</dt>
            <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Product Owner <br></br>Customer Journey Experts<br></br>Behavioural Experts<br></br>Data Analytics<br></br>Front-end Developer<br></br>Back-end Developer</dd>
            
          </div>
    
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-md font-medium leading-6 text-gray-900">Context</dt>
            <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Ceska Sporitelna identified a need to enhance their mobile banking experience by providing a comprehensive financial advisory service. The aim was to empower users with personalized insights and tips to better manage their finances. The solution, named "Financial Coach," utilizes push notifications, emails, and in-app messages to deliver timely and relevant advice.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">


          </div>
        </dl>
      </div>
    </div>
        </div>
      </div>
    )
  }
  