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
  InformationCircleIcon,

} from '@heroicons/react/20/solid'

import {
  FaceSmileIcon,
  FaceFrownIcon,
} from '@heroicons/react/24/outline'


import Image from 'next/image'
import toyland from '../../public/logos/toyland3.jpg'
import fink2 from '../../public/logos/fink2.jpg'
import fink3 from '../../public/logos/fink11.jpg'
import research from '../../public/logos/research.jpg'
import design from '../../public/logos/design.jpg'
import stats from '../../public/logos/stats.jpg'
import expert from '../../public/logos/uxexpert.jpg'
import test from '../../public/logos/fink5.jpg'
import statistic from '../../public/logos/statistic.jpg'
import issues from '../../public/logos/issues.jpg'
import { PaperClipIcon } from '@heroicons/react/24/solid'

import { Fragment } from 'react'
import { Tab } from '@headlessui/react'




function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



export default function Example() {
  return (
    <div className="bg-sky-200 py-12 sm:py-24">
    <div className="mx-auto max-w-8xl px-6 lg:px-8">
      <div className="mx-auto max-w-3xl sm:text-center">
      
          <p className="mt-2 text-xl font-bold tracking-tight text-gray-800 sm:text-4xl">How we increased Direct Traffic and Conversions by 38% with a Website Redesign </p>
          
      </div>
     </div>
       <div className="relative overflow-hidden pt-8">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <Image
          src={toyland}
          alt="App screenshot"
          className=""
          width={4000}
          height={1442}
        />
        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-x-20 bottom-0 " />
        </div>
      </div>
    </div>










    <div className="bg-white px-6 py-32 lg:px-8">
    <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      
      <h1 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Background</h1>
      <p className="mt-6 text-lg leading-8">
        
Toyland is a chain of ukrainian offline toy stores. At the beginning of 2021, the Toyland team contacted us to audit the website and based on the data obtained, improve the effectiveness of marketing activities. We began to study the audience and analytics data.
      </p>
      <div className="mt-10 max-w-2xl">
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Goals</h2>
<ul role="list" className="mt-6 max-w-2xl space-y-4 text-gray-600 list-disc pl-5">
<li>
  <strong className="font-medium text-lg text-gray-900">Redesign of the initial website</strong>
</li>

<li>
  <strong className="font-medium  text-lg text-gray-900">Improvement of the conversions from Google Shopping campaigns</strong>
</li>
<li>
  <strong className="font-medium  text-lg text-gray-900">Increase customer lifetime value</strong> 
</li>
</ul>

<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Previous Version Of The Website</h2>
        <p className="mt-8 text-lg">
        According to Google Analytics, 80% of the website traffic came from Google Shopping ads that lead to a specific product page. At the same time, 75% of users visited the website from mobile devices. Direct traffic share was 4%, which became the second most effective among other channels. Thus, users landed on the main page or catalog page.
        </p>
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">The issues we found</h2>
<ul role="list" className="mt-4 max-w-2xl space-y-4 text-gray-900 list-disc pl-5">
<li>
  <strong className="font-normal text-lg text-gray-900">The visual focus on the main page was moved to a bright design from the products</strong>
</li>

<li>
  <strong className="font-normal  text-lg text-gray-800">There were no tools for encouraging loyal users</strong>
</li>
<li>
  <strong className="font-normal  text-lg text-gray-800">On the product page, the secondary elements attracted more attention than the CTA button</strong> 
</li>
<li>
  <strong className="font-normal text-lg text-gray-800">Many users ended sessions quickly because the initial website wasn't engaging enough</strong> 
</li>
<li>
  <strong className="font-normal text-lg text-gray-800">The old version of the website had suffered from severe accessibility issues</strong> 
</li>
 <figure className="mt-16">
        <Image
          className="aspect-video rounded-xl bg-gray-50 object-cover"
          src={issues}
          alt=""
        />
        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
          <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
          Faucibus commodo massa rhoncus, volutpat.
        </figcaption>
      </figure> 
</ul>
        
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">From beginner to expert in 3 hours</h2>
        <p className="mt-6">
          Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
          Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
          mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
          ipsum eu a sed convallis diam.
        </p>
        <figure className="mt-10 border-l border-indigo-600 pl-9">
          <blockquote className="font-semibold text-gray-900">
            <p>
              “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
              dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
              tristique.”
            </p>
          </blockquote>
          <figcaption className="mt-6 flex gap-x-4">
            <img
              className="h-6 w-6 flex-none rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-sm leading-6">
              <strong className="font-semibold text-gray-900">Maria Hill</strong> – Marketing Manager
            </div>
          </figcaption>
        </figure>
        <p className="mt-10">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
          sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
        </p>
      </div>
     
      <div className="mt-16 max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Everything you need to get up and running</h2>
        <p className="mt-6">
          Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
          amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
          Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
          ac. Cras fermentum convallis quam.
        </p>
        <p className="mt-8">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
          sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
        </p>
      </div>
    </div>
  </div>

    </div>

  )
}
