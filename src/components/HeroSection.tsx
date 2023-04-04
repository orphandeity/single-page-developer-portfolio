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
    <main className="relative mx-4 tablet:ml-8 tablet:mr-0 desktop:mx-40">
      <header className="absolute flex w-full flex-col items-center justify-between gap-5 pt-5 tablet:flex-row tablet:gap-0 tablet:pb-16 tablet:pt-10">
        <span className="z-50 text-2xl font-bold leading-[32px] tracking-[-0.44px] tablet:text-[32px]">
          adamkeyes
        </span>
        <menu className="z-30 flex scale-75 gap-8 tablet:mr-8 tablet:scale-100">
          <a href="https://github.com/orphandeity">
            <Github />
          </a>
          <a href="https://www.frontendmentor.io/profile/orphandeity">
            <FrontendMentor />
          </a>
          <LinkedIn />
          <Twitter />
        </menu>
      </header>

      <div className="relative flex flex-col items-center justify-end tablet:flex-row">
        <div className="absolute top-28 -translate-x-1/2 opacity-80 tablet:-left-8">
          <PatternRings />
        </div>
        <div className="absolute bottom-1/2 right-0 z-50 translate-x-20 opacity-70 tablet:bottom-0 tablet:translate-x-16 desktop:bottom-20 desktop:right-1/3 desktop:translate-x-0">
          <PatternCircle />
        </div>
        <div className="z-10 tablet:z-0">
          {size.width! >= 1044 ? (
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

        <div className="inset-0 tablet:absolute tablet:pt-24">
          <div className="z-30 flex flex-col items-center gap-12 text-center tablet:items-start tablet:text-left">
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

      <hr className="mt-20 border-_gray tablet:mr-8 tablet:mt-16 desktop:mr-0 desktop:mt-28" />
      <div className="absolute -right-[110%] -translate-y-16 opacity-80 tablet:-right-80 tablet:bottom-0 tablet:translate-y-1/2 desktop:translate-x-24 desktop:translate-y-20">
        <PatternRings />
      </div>

      <div className="mt-10 grid grid-cols-1 justify-items-center gap-6 tablet:mt-[72px] tablet:grid-cols-2 tablet:justify-items-start tablet:gap-16 desktop:grid-cols-3">
        <div className="flex  flex-col items-center gap-0 tablet:items-start tablet:gap-[14px]">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            HTML
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            4 Years Experience
          </p>
        </div>
        <div className="flex  flex-col items-center gap-0 tablet:items-start tablet:gap-[14px]">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            CSS
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            4 Years Experience
          </p>
        </div>
        <div className="flex  flex-col items-center gap-0 tablet:items-start tablet:gap-[14px]">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            JavaScript
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            4 Years Experience
          </p>
        </div>
        <div className="flex  flex-col items-center gap-0 tablet:items-start tablet:gap-[14px]">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            Accessibility
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            4 Years Experience
          </p>
        </div>
        <div className="flex  flex-col items-center gap-0 tablet:items-start tablet:gap-[14px]">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            React
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            3 Years Experience
          </p>
        </div>
        <div className="flex  flex-col items-center gap-0 tablet:items-start tablet:gap-[14px]">
          <p className="text-[30px] font-bold leading-[40px] tracking-[-1px] tablet:text-_heading-lg tablet:leading-_heading-lg tablet:tracking-_heading-lg">
            Sass
          </p>
          <p className="font-medium leading-6 text-_gray tablet:text-lg tablet:leading-7">
            3 Years Experience
          </p>
        </div>
      </div>

      <hr className="mt-10 border-_gray tablet:mt-0 tablet:hidden " />
    </main>
  );
};

export default HeroSection;
