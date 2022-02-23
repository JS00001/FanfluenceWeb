import React from 'react';
import Banner from './Banner';

export default function Navigation() {
  return (
    <>
      <Banner
        message="Under development. Sign up for updates below."
        button="Learn More"
      />
      <nav className="border-gray-200 bg-white px-4 py-5 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-around">
          <a href="#" className="flex text-2xl font-medium text-blue-500">
            fanfluence
          </a>
          <div className="flex md:order-2">
            <button className="rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
              Download
            </button>
          </div>

          <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
            <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <Navitem href="#">Home </Navitem>
              <Navitem href="#">Advertising </Navitem>
              <Navitem href="#">Jobs </Navitem>
              <Navitem href="#">Contact </Navitem>
              <Navitem href="#">Privacy </Navitem>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function Navitem({ children, href }: { children: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        className="block border-b border-gray-100 py-2 pr-4 pl-3 text-base text-gray-700 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
      >
        {children}
      </a>
    </li>
  );
}
