'use client';

import './globals.css'
import Link from "next/link"
import Image from "next/image"
import ThemeChanger from "./darkSwitch";
import { Inter } from 'next/font/google'
import { Disclosure } from "@headlessui/react";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ko">
      <head>
        <title>헤리메포의 개발 이야기</title>
      </head>
      <body className={inter.className}>
        <div className='w-full'>
          <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                    <Link href="/">
                      <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                        <span>
                          <Image
                            src="/img/icon.png"
                            alt="N"
                            width="32"
                            height="32"
                            className="w-8"
                          />
                        </span>
                        <span>헤리메포 개발 이야기</span>
                      </span>
                    </Link>

                    <Disclosure.Button
                      aria-label="Toggle Menu"
                      className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                      <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        {open && (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                          />
                        )}
                        {!open && (
                          <path
                            fillRule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                          />
                        )}
                      </svg>
                    </Disclosure.Button>
                  </div>
                </>
              )}
            </Disclosure>

            <div className="hidden text-center lg:flex lg:items-center">
              <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                  <li className="mr-3 nav__item">
                    <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                      Home
                    </Link>
                    <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                      Presentation
                    </Link>
                    <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                      Resume
                    </Link>
                    <Link href="https://dmdwls5780.github.io/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                      Blog
                    </Link>
                    <Link href="https://github.com/dmdwls5780/dmdwls5780" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                      Github
                    </Link>
                  </li>
              </ul>
            </div>
            <div className="hidden mr-3 space-x-4 lg:flex nav__item">
              <div className="px-6 py-2 text-black md:ml-5"></div>
              <ThemeChanger />
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  )
}
