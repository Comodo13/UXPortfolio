import React from 'react'

import { FaFacebook, FaInstagram, FaYoutube  } from 'react-icons/fa';
const navigation = {
  main: [
    //{ name: 'Главная', href: '/' },
    { name: 'Специалисты', href: '/team' },
    { name: 'Услуги', href: '/services' },
    //{ name: 'Новости', href: '/blog' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
    
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: <FaFacebook size={24} />
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/waytohealth.by?igshid=MzRlODBiNWFlZA==',
     icon: <FaInstagram size={24} />
    },
    {
      name: 'YouTube',
      href: '/',
      icon: <FaYoutube size={24} />,
    },
  ]
}












export function Footer() {

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-4 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm font-body font-bold leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item, index) => (
            <a key={index} href={item.href} className="text-colormed font-semibold hover:text-colormeddark">
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 font-body text-gray-500">
           Copyright &copy; 2023 Way to Health.
        </p>
      </div>
    </footer>
  );
}
