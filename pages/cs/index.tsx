import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  PlayIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import fink from '../../public/logos/fink.jpg'
import fink2 from '../../public/logos/fink.jpg'
import fink3 from '../../public/logos/fink.jpg'
import stats from '../../public/logos/fink.jpg'
import { PaperClipIcon } from '@heroicons/react/24/solid'



export default function Example() {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-xl font-semibold leading-7 text-blue-600">Česká Spořitelna</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Finanční Kouč</p>
          <p className="mt-6 text-lg leading-6 text-gray-700">
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
            className="mb-[-12%] rounded-xl"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute" />
          </div>
        </div>

      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
 
        
  
      </svg>
    </div>
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
    
            <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-700 sm:text-4xl">User Research </h1>
            <p className="mt-6 text-lg leading-6 text-gray-700 ">
            In-depth user research was a crucial component of the Financial Coach project, especially considering the challenging financial landscape in the Czech Republic.
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
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <ul role="list" className="space-y-8 text-gray-600">
            <p className="mt-6 text-lg leading-6 text-gray-700 ">
            According to an Ipsos survey, a significant portion of adults face difficulties in building long-term financial reserves. Key findings from the survey include:
            </p>
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Lack of Long-Term Financial Reserves.</strong> Approximately one in six adults reported not building up any long-term financial reserves.
Banks noted that even for those who do save, the amounts are often insufficient.
                </span>
              </li>
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Retirement Challenges.</strong> Banks recommend having CZK 2 million in an account for retirement.
Achieving this amount is feasible by setting aside lower units of thousands of crowns per month.
                </span>
              </li>
              <li className="flex gap-x-3">
                <PlayIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                  vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
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

  </div>
    </div>
  )
}
