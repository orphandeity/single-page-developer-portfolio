import Image from "next/image";
import Link from "next/link";
import {
  FrontendMentor,
  Github,
  LinkedIn,
  PatternCircle,
  PatternRings,
  Twitter,
} from "~/lib/icons";
import Button from "./Button";
import { useWindowSize } from "~/lib/useWindowSize";

const HeroSection = () => {
  const size = useWindowSize();

  return (
    <main className="relative mx-4 tablet:ml-8 tablet:mr-0 desktop:ml-40">
      <header className="absolute flex w-full flex-col items-center justify-between gap-5 pt-5 tablet:flex-row tablet:gap-0 tablet:pb-16 tablet:pt-10">
        <span className="z-50 text-2xl font-bold leading-[32px] tracking-[-0.44px] tablet:text-[32px]">
          adamkeyes
        </span>
        <menu className="z-30 flex scale-75 gap-8 tablet:mr-8 tablet:scale-100">
          <Github />
          <FrontendMentor />
          <LinkedIn />
          <Twitter />
        </menu>
      </header>

      <div className="relative mb-28 flex flex-col items-center justify-end tablet:relative tablet:flex-row">
        {/* <div className="absolute -left-full top-32 tablet:-left-1/3 tablet:top-0">
          <PatternRings />
        </div> */}
        <div className="relative">
          {/* <div className="absolute -right-40 bottom-0 tablet:-left-16 tablet:bottom-16">
            <PatternCircle />
          </div> */}
          {size.width! >= 1440 ? (
            <Image
              src={"/image-profile-desktop.webp"}
              alt=""
              width={445}
              height={720}
            />
          ) : size.width! >= 768 ? (
            <Image
              src={"/image-profile-tablet.webp"}
              alt=""
              width={322}
              height={600}
            />
          ) : (
            <Image
              src={"/image-profile-mobile.webp"}
              alt=""
              width={174}
              height={383}
            />
          )}
        </div>

        <div className="inset-0 tablet:absolute tablet:pt-28">
          <div className="z-20 flex flex-col items-center gap-12 text-center tablet:items-start tablet:text-left">
            <h1 className="heading-xs mt-16 max-w-xl tablet:text-7xl tablet:leading-[72px] tablet:tracking-[-2.05] lg:max-w-3xl desktop:text-_heading-xl desktop:leading-_heading-xl desktop:tracking-_heading-xl">
              Nice to {size.width! < 1024 && <br />} meet you! I&apos;m{" "}
              <span className="underline decoration-_green underline-offset-[20px]">
                Adam Keyes
              </span>
              .
            </h1>

            <p className="max-w-md font-medium text-_gray mobile:leading-[26px] tablet:text-lg tablet:leading-7">
              Based in the UK, I&apos;m a front-end developer passionate about
              building accessible web apps that users love.
            </p>

            <Link href={"#contact"}>
              <Button text="contact me" />
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-_gray" />

      <div className="relative mt-[72px] grid grid-cols-1 justify-items-center gap-16 tablet:grid-cols-2 tablet:justify-items-start desktop:grid-cols-3">
        <div className="flex  flex-col items-center gap-[14px] tablet:items-start">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            HTML
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            4 Years Experience
          </p>
        </div>
        <div className="flex  flex-col items-center gap-[14px] tablet:items-start">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            CSS
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            4 Years Experience
          </p>
        </div>
        <div className="flex  flex-col items-center gap-[14px] tablet:items-start">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            JavaScript
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            4 Years Experience
          </p>
        </div>
        <div className="flex  flex-col items-center gap-[14px] tablet:items-start">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            Accessibility
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            4 Years Experience
          </p>
        </div>
        <div className="flex  flex-col items-center gap-[14px] tablet:items-start">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            React
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            3 Years Experience
          </p>
        </div>
        <div className="flex  flex-col items-center gap-[14px] tablet:items-start">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            Sass
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            3 Years Experience
          </p>
        </div>
        {/* <div className="absolute -bottom-1/4 -right-[40%]">
          <PatternRings />
        </div> */}
      </div>
    </main>
  );
};

export default HeroSection;
