import { type NextPage } from "next";
import Head from "next/head";
import { Github, FrontendMentor, LinkedIn, Twitter } from "../lib/icons";
import Button from "~/components/Button";

const Home: NextPage = () => {
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
      <main className="container mx-auto">
        <header className="flex items-center justify-between py-8">
          <h1 className="text-[32px] font-bold leading-[32px] tracking-[-0.44px] text-white">
            adamkeyes
          </h1>
          <menu className="flex gap-8">
            <Github />
            <FrontendMentor />
            <LinkedIn />
            <Twitter />
          </menu>
        </header>

        <div className="my-28 flex flex-col items-start gap-12 text-white">
          <h2 className="heading-xl">
            Nice to meet you!
            <br /> I&apos;m{" "}
            <span className="underline decoration-_green underline-offset-[20px]">
              Adam Keyes
            </span>
            .
          </h2>

          <p className="max-w-md text-lg leading-7">
            Based in the UK, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>

          <Button text="contact me" />
        </div>

        <hr />

        <div>
          <p>HTML</p> <p>4 Years Experience</p>
        </div>
        <div>
          <p>CSS</p> <p>4 Years Experience</p>
        </div>
        <div>
          <p>JavaScript</p> <p>4 Years Experience</p>
        </div>
        <div>
          <p>Accessibility</p> <p>4 Years Experience</p>
        </div>
        <div>
          <p>React</p> <p>3 Years Experience</p>
        </div>
        <div>
          <p>Sass</p> <p>3 Years Experience</p>
        </div>

        <p>Projects</p>
        <p>Contact me</p>
        <div>
          <p>Design portfolio</p>
          <p>HTML CSS</p>
          <p>View project</p>
          <p>View code</p>
        </div>
        <div>
          <p>E-learning landing page</p>
          <p>HTML CSS</p>
          <p>View project</p>
          <p>View code</p>
        </div>
        <div>
          <p>Todo web app</p>
          <p>HTML CSS JavaScript</p>
          <p>View project</p>
          <p>View code</p>
        </div>
        <div>
          <p>Entertainment web app</p>
          <p>HTML CSS JavaScript</p>
          <p>View project</p>
          <p>View code</p>
        </div>
        <div>
          <p>Memory Game</p>
          <p>HTML CSS JavaScript</p>
          <p>View project</p>
          <p>View code</p>
        </div>
        <div>
          <p>Art gallery showcase</p>
          <p>HTML CSS JavaScript</p>
          <p>View project</p>
          <p>View code</p>
        </div>

        <p>Contact</p>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
        <div>
          <p>Name</p>
          <p>Email</p>
          <p>Message</p>
        </div>
        <p>Send message</p>
        <p>adamkeyes</p>
      </main>
    </>
  );
};

export default Home;
