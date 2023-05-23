'use client';

import './globals.css'
import Link from "next/link"
import Image from "next/image"
import ThemeChanger from "./darkSwitch";
import { Inter } from 'next/font/google'
import { Disclosure } from "@headlessui/react";
import Container from "./container";
import heroImg from "/public/img/main.png";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const navigation = [
    "Home",
    "Presentation",
    "Resume",
    "Blog"
  ];

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
                        <span>이응진 개발 이야기</span>
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

                    <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                      <>
                        {navigation.map((item, index) => (
                          <Link key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                              {item}
                          </Link>
                        ))}
                        <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
                            Get Started
                        </Link>
                      </>
                    </Disclosure.Panel>
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
                    <Link legacyBehavior href="https://dmdwls5780.github.io/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                      <a target="_blank">Blog</a>
                    </Link>
                  </li>
              </ul>
            </div>
            <div className="hidden mr-3 space-x-4 lg:flex nav__item">
              <div className="px-6 py-2 text-black md:ml-5">
                LEE EUNG JIN
              </div>
              <ThemeChanger />
            </div>
          </nav>
        </div>
        {/* 메인페이지 */}
        <Container className="flex flex-wrap ">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                안녕하세요<br/>프론트엔드 개발자 이응진<br/>소개 사이트에<br/>오신 것을 환영합니다
              </h1>
              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                개발 첫 시작을 졸업 작품으로 시작해서, 취직 후에 다양한 경험을 통해서
                시각화에 조금 더 흥미를 느끼고 프론트엔드 공부를 열심히 하고 있습니다
              </p>
              <p className="py-5 text-xl leading-normal text-red-500 lg:text-xl xl:text-2xl  dark:text-gray-300 underline">
              개발을 잘하는 사람이 되지는 못하더라도, 꾸준히 개발을 하고 도전을
                하는 개발자로 남고 싶습니다
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="">
              <Image
                src={heroImg}
                width="616"
                height="617"
                className={"object-cover"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
        </Container>
        <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            About Me
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            {/* <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <VerizonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonyLogo />
            </div> */}
          </div>
        </div>
        </Container>
        {children}
      </body>
    </html>
  )
}
