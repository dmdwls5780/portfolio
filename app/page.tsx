import Image from 'next/image';
import Container from "./container";
import heroImg from "/public/img/main.png";

export default function Home() {
  return (
    <>
      <Container className="flex flex-wrap ">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                안녕하세요<br/>프론트엔드 개발자<br/>이응진<br/>소개 사이트에<br/>오신 것을 환영합니다
              </h2>
              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                개발 첫 시작을 졸업 작품으로 시작해서, 취직 후에 다양한 경험을 하고나니
                사용자에게 보여주는 부분에 흥미를 느끼고 프론트엔드 공부를 열심히 하고 있습니다
              </p>
              <p className="py-5 text-xl leading-normal text-red-500 lg:text-xl xl:text-2xl  dark:text-gray-300 underline">
                개발을 잘하는 사람이 되지는 못하더라도, 꾸준히 개발을 하고 도전을 하는 개발자로 남고 싶습니다
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
            dmdwls5780@gmail.com
          </div>
        </div>
        </Container>
       
    </>
  )
}
