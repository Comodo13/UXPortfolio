import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  PlayIcon,
  ServerIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  BoltIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from '@heroicons/react/20/solid'

import Image from 'next/image'
import fink from '../../public/logos/fink.jpg'
import fink2 from '../../public/logos/fink2.jpg'
import fink3 from '../../public/logos/fink4.jpg'
import research from '../../public/logos/research.jpg'
import design from '../../public/logos/design.jpg'
import stats from '../../public/logos/stats.jpg'
import expert from '../../public/logos/uxexpert.jpg'
import test from '../../public/logos/fink5.jpg'
import { PaperClipIcon } from '@heroicons/react/24/solid'

import { Fragment } from 'react'
import { Tab } from '@headlessui/react'


const features = [
  {
    name: 'Educational Focus.',
    description: 'Create a user-friendly and engaging platform that provides customers with valuable financial knowledge.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Technical Integration with "George" Mobile App.',
    description: 'Our team worked diligently to ensure that the integration was aligned with the application overall design and performance standards.',
    icon: BoltIcon,
  },
  {
    name: 'Boost Financial Education.',
    description: 'Enhance users understanding of financial concepts, such as budgeting, investing, and saving.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'User Adoption and Habit Formation.',
    description: 'Our approach included crafting a compelling onboarding experience, designing engaging content, and implementing motivational elements.',
    icon: BoltIcon,
  },
  {
    name: 'User Engagement.',
    description: 'Encourage regular usage of the Financial Coach feature to help customers make informed financial decisions.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Diverse User Preferences.',
    description: 'We introduced personalization options to create an inclusive and effective learning experience.',
    icon: BoltIcon,
  },
]

const features2 = [
  {
    name: '',
    description: 'Increased user engagement, with users spending more time within the app.',
    icon:   HandThumbUpIcon,
    color: 'red',
  },
  {
    name: '',
    description: "Regrettably, I couldn't entirely shift the feature's mindset toward a more user-centric approach.",
    icon: HandThumbDownIcon,
    color: 'green',
  },
  {
    name: '',
    description: 'Feedback from customers, especially in the younger user segment, reported increased confidence in their financial management skills.',
    icon:   HandThumbUpIcon,
    color: 'red',
  },
  {
    name: '',
    description: 'Sometimes it took longer than things started to happen.',
    icon: HandThumbDownIcon,
    color: 'green',
  },
  {
    name: '',
    description: 'Created an innovative service that helped users to increase their financial management skills .',
    icon: HandThumbUpIcon,
    color: 'red',
  },
  {

    name: '',
    description: 'Due to technical constraints and my negotiation skills, not all elements aligned with user experience and usability principles.',
    icon: HandThumbDownIcon,
    color: 'green',
  },
]

const tabs = [
  {
    name: 'UX Researcher',
    features: [
      {
        name: 'UX Researcher',
        description:
          'I conducted user interviews with existing George app users to understand their financial literacy levels, needs, and pain points. Additionally, I performed a comprehensive competitor analysis to inform our design strategy and create an innovative, user-friendly financial advisory tool.',
        imageSrc: research,
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'UX Designer',
    features: [
      {
        name: 'UX Designer',
        description:
          'As a UX Designer for the project, I crafted a user-friendly experience aligned with Ceska Sporitelna style guides, designed clear information architecture, curatied diverse content, mapped out seamless user journeys, and created interactive prototypes for testing and feedback.',
        imageSrc: design,
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
      },
    ],
  },
  {
    name: 'Usability Expert',
    features: [
      {
        name: 'Usability Expert',
        description:
          "I focused was on optimizing the user experience through extensive usability testing and continuous refinement. I analyzed user interactions, and worked closely with the UX team to implement improvements that enhanced the overall usability of the Financial Coach feature.",
        imageSrc: expert,
        imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
      },
    ],
  },

]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



export default function Example() {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-xl font-semibold leading-7 text-blue-600">Česká Spořitelna</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Finanční Kouč</p>
          <p className="mt-6 text-lg leading-6 text-gray-700">
          Financial advisory feature embedded within Česká Spořitelna's mobile banking "George". 
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
      <h3 className="mt-2 text-xl font-bold tracking-tight text-gray-700 sm:text-4xl">Overview</h3>
    </div>
    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-lg font-medium leading-6 text-gray-900">Project Duration</dt>
          <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">December 2022 - September 2023</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-lg font-medium leading-6 text-gray-900">Context</dt>
          <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          Česká Spořitelna identified a need to enhance their mobile banking experience by providing a comprehensive financial advisory service. The aim was to empower users with personalized insights and tips to better manage their finances. The solution, named "Financial Coach," utilizes push notifications, emails, and in-app messages to deliver timely and relevant advice.
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-lg font-medium leading-6 text-gray-900">My Role</dt>
          <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">UX Designer</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-lg font-medium leading-6 text-gray-900">Team</dt>
          <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Product Owner <br></br>Customer Journey Experts<br></br>Behavioural Experts<br></br>Data Analytics<br></br>Front-end Developer<br></br>Back-end Developer</dd>
          
        </div>
  
      
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">


        </div>
      </dl>
    </div>



  </div>

      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={fink2}
            alt="App screenshot"
            className=" rounded-xl"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute" />
          </div>
        </div>

      <div className="relative isolate overflow-hidden bg-white px-6 py-2 sm:py-12 lg:overflow-visible lg:px-0">
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
      </svg>
    </div>





    <div className="bg-white pb-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       
        
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-8 text-lg leading-7 text-gray-700 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Goals</h2>
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Challanges</h2>
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    


    <div className="relative overflow-hidden pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={fink3}
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


    <div className="bg-white">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl pt-12 pb-48 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-8 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-xl font-bold tracking-tight text-gray-700 sm:text-4xl">
              My Role
            </h2>
           
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-blue-600 text-blue-700'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap border-b-2 py-2 text-lg font-medium'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                        <p className="mt-3 text-lg leading-6 text-gray-600">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                          <Image src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>




    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
    
            <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-700 sm:text-4xl">Onboarding</h1>
            <p className="mt-6 text-lg leading-6 text-gray-700 ">
            One of the crucial part for the Financial Coach servise was designing Onboarding experience. We had to consider different needs and expectations of the user groups, and ensure that users feel comfortable and informed as they begin their journey to improve their financial literacy. 
            </p>
          </div>
        </div>
      </div>
      <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <Image
          className="w-[48rem] max-w-none sm:w-[57rem]"
          src={stats}
          alt=""
        />
      </div>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="max-w-xl text-lg leading-7 text-gray-700 lg:max-w-lg">
            <ul role="list" className="space-y-8 text-gray-600">
          
             
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Introduction to Financial Coach.</strong>The onboarding experience highlights the key benefits of using the Financial Coach, such as gaining financial knowledge, making informed decisions, and achieving financial goals.
                </span>
              </li>
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Personalization.</strong> A brief questionnaire was provided to understand the user's financial priorities, such as savings, investing, or budgeting.
                </span>
              </li>
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Educational Modules.</strong> Delivering educational content during onboarding that caters to users with varying levels of financial literacy.
                </span>
              </li>
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Financial Goals Identification.</strong> Helping users define and set realistic financial goals without creating a sense of obligation.
                </span>
              </li>
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Gamification Element.</strong> Encouraging users to engage with Financial Coach consistently.
                </span>
              </li>
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Feedback Collection.</strong>Incorporating feedback mechanisms within the feature to collect user suggestions and identify areas for improvement.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
              fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
              adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
            <p className="mt-6">
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
              Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
              tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
              turpis ipsum eu a sed convallis diam.
            </p>
          </div>
        </div>
      </div>
    </div>




      <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src={test}
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-700 sm:text-4xl">Usability testing</h1>
            <p className="mt-6 text-lg leading-6 text-gray-700 ">
            One of the crucial part for the Financial Coach servise was designing Onboarding experience. We had to consider different needs and expectations of the user groups, and ensure that users feel comfortable and informed as they begin their journey to improve their financial literacy. 
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
          
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Personalization.</strong> A brief questionnaire was provided to understand the user's financial priorities, such as savings, investing, or budgeting.
                </span>
              </li>
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Personalization.</strong> A brief questionnaire was provided to understand the user's financial priorities, such as savings, investing, or budgeting.
                </span>
              </li>
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Personalization.</strong> A brief questionnaire was provided to understand the user's financial priorities, such as savings, investing, or budgeting.
                </span>
              </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


<div className="bg-white pb-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
             <h2 className="my-16 text-2xl font-bold tracking-tight text-gray-900">Results & Takeaways</h2>
        
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-8 text-lg leading-7 text-gray-700 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">

        {features2.map((feature) => (
          <div key={feature.name} className="relative pl-9">
            <dt className={`inline font-semibold text-${feature.color}-600`}>
              <feature.icon className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
              {feature.name}
            </dt>{' '}
            <dd className="inline">{feature.description}</dd>
          </div>
        ))}

        </dl>
      </div>
    </div>
    

  </div>
    </div>
  )
}
