import { FrontendMentor, Github, LinkedIn, Twitter } from "~/lib/icons";

const Footer = () => {
  return (
    <footer className="bg-_darkgray">
      <div className="px-4 tablet:px-8 desktop:px-40">
        <div className="flex w-full flex-col items-center justify-center gap-5 py-8 tablet:flex-row tablet:justify-between tablet:gap-0">
          <span className="z-50 text-2xl font-bold leading-[32px] tracking-[-0.44px] tablet:text-[32px]">
            adamkeyes
          </span>
          <menu className="z-30 flex scale-75 gap-8 tablet:scale-100">
            <Github />
            <FrontendMentor />
            <LinkedIn />
            <Twitter />
          </menu>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
