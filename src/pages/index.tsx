import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { type Size, useWindowSize } from "~/lib/useWindowSize";
import { Github, FrontendMentor, LinkedIn, Twitter } from "../lib/icons";
import Button from "~/components/Button";
import ProjectCard from "~/components/ProjectCard";
import ContactForm from "~/components/ContactForm";
import { projects } from "~/lib/data";

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

      <main className="container max-w-6xl px-8 lg:mx-auto">
        <div className="relative mb-28 flex justify-end">
          <div className="absolute inset-0 flex flex-col items-start gap-12">
            <header className="flex w-full items-center justify-between py-8">
              <span className="text-[32px] font-bold leading-[32px] tracking-[-0.44px]">
                adamkeyes
              </span>
              <menu className="mr-8 flex gap-8">
                <Github />
                <FrontendMentor />
                <LinkedIn />
                <Twitter />
              </menu>
            </header>
            <h1 className="heading-xl mt-16 max-w-xl lg:max-w-3xl">
              Nice to {size.width! < 1024 && <br />} meet you! I&apos;m{" "}
              <span className="underline decoration-_green underline-offset-[20px]">
                Adam Keyes
              </span>
              .
            </h1>

            <p className="max-w-md text-lg leading-7 text-_gray">
              Based in the UK, I&apos;m a front-end developer passionate about
              building accessible web apps that users love.
            </p>

            <Link href={"#contact"}>
              <Button text="contact me" />
            </Link>
          </div>
          <Image
            src={"/image-profile-desktop.webp"}
            alt=""
            width={445}
            height={720}
          />
        </div>

        <hr className="border-_gray" />

        <div className="mt-[72px] grid grid-cols-2 gap-16 lg:grid-cols-3">
          <div className="flex  flex-col gap-[14px]">
            <p className="heading-lg">HTML</p>
            <p className="text-_gray">4 Years Experience</p>
          </div>
          <div className="flex  flex-col gap-[14px]">
            <p className="heading-lg">CSS</p>
            <p className="text-_gray">4 Years Experience</p>
          </div>
          <div className="flex  flex-col gap-[14px]">
            <p className="heading-lg">JavaScript</p>
            <p className="text-_gray">4 Years Experience</p>
          </div>
          <div className="flex  flex-col gap-[14px]">
            <p className="heading-lg">Accessibility</p>
            <p className="text-_gray">4 Years Experience</p>
          </div>
          <div className="flex  flex-col gap-[14px]">
            <p className="heading-lg">React</p>
            <p className="text-_gray">3 Years Experience</p>
          </div>
          <div className="flex  flex-col gap-[14px]">
            <p className="heading-lg">Sass</p>
            <p className="text-_gray">3 Years Experience</p>
          </div>
        </div>
      </main>

      <section className="container my-36 flex max-w-6xl flex-col gap-20 px-8 lg:mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="heading-xl">Projects</h2>
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
        <div className="container flex max-w-6xl grid-cols-2 flex-col items-center justify-center gap-40 px-8 py-20 lg:mx-auto lg:grid lg:items-start">
          <div className="max-w-md text-center lg:text-left">
            <h2 className="heading-xl">Contact</h2>
            <p className="mt-9 text-lg text-_gray">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
          <ContactForm />
        </div>
        <hr />
      </section>

      <footer className="bg-_darkgray">
        <div className="container flex max-w-6xl items-center justify-between px-8 py-8 lg:mx-auto">
          <span className="text-[32px] font-bold leading-[32px] tracking-[-0.44px]">
            adamkeyes
          </span>
          <menu className="flex gap-8">
            <Github />
            <FrontendMentor />
            <LinkedIn />
            <Twitter />
          </menu>
        </div>
      </footer>
    </>
  );
};

export default Home;
