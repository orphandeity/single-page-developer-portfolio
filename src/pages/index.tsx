import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { type Size, useWindowSize } from "~/lib/useWindowSize";
import {
  Github,
  FrontendMentor,
  LinkedIn,
  Twitter,
  PatternRings,
  PatternCircle,
} from "../lib/icons";
import Button from "~/components/Button";
import ProjectCard from "~/components/ProjectCard";
import ContactForm from "~/components/ContactForm";
import { projects } from "~/lib/data";
import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";

const Home: NextPage = () => {
  const size: Size = useWindowSize();

  return (
    <>
      <Head>
        <title>Frontend Mentor | Single-page Developer Portfolio</title>
        <meta name="description" content="Frontend Mentor Challenge Project" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <HeroSection />

      <section className="my-36 flex flex-col gap-20 px-4 tablet:px-8 desktop:px-40">
        <div className="flex items-center justify-between">
          <h2 className="heading-xs tablet:text-7xl tablet:leading-[72px] tablet:tracking-[-2.05] desktop:text-_heading-xl desktop:leading-_heading-xl desktop:tracking-_heading-xl">
            Projects
          </h2>
          <Link href={"#contact"}>
            <Button text="contact me" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="bg-_darkgray">
        <div className="relative flex grid-cols-2 flex-col items-center justify-center gap-8 px-4 py-20 tablet:px-8 desktop:grid desktop:items-start desktop:px-40">
          <div className="max-w-md text-center lg:text-left">
            <h2 className="heading-xs tablet:text-7xl tablet:leading-[72px] tablet:tracking-[-2.05] desktop:text-_heading-xl desktop:leading-_heading-xl desktop:tracking-_heading-xl">
              Contact
            </h2>
            <p className="mt-9 font-medium text-_gray mobile:leading-[26px] tablet:text-lg tablet:leading-7">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
          <ContactForm />
          <div className="absolute -left-full bottom-20 opacity-80 tablet:bottom-8 tablet:left-0 tablet:-translate-x-full desktop:-translate-x-1/2">
            <PatternRings />
          </div>
        </div>
        <hr className="mx-4 text-_gray tablet:mx-8 desktop:mx-40" />
      </section>
      <Footer />
    </>
  );
};

export default Home;
