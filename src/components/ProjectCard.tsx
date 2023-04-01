import type { Project } from "~/lib/data";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Button from "./Button";
import { type Size, useWindowSize } from "~/lib/useWindowSize";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [active, setActive] = useState(false);

  const size: Size = useWindowSize();

  const desktopStyles = [
    "absolute inset-0 flex-col items-center justify-center gap-12 bg-_black/80",
    active ? "flex" : "hidden",
  ];

  const mobileStyles = "flex gap-8 pt-4";

  const ActionButtons = () => (
    <fieldset
      className={clsx(size.width! >= 1024 ? desktopStyles : mobileStyles)}
    >
      <a href={project.projectUrl}>
        <Button text="view project" />
      </a>
      <a href={project.codeUrl}>
        <Button text="view code" />
      </a>
    </fieldset>
  );

  return (
    <div className="flex flex-col gap-5">
      <div
        className="relative"
        onPointerEnter={() => setActive(true)}
        onPointerLeave={() => setActive(false)}
      >
        <Image src={project.image} alt="" width={686} height={506} />
        {size.width! >= 1024 && <ActionButtons />}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="heading-md uppercase">{project.title}</h4>
        <ul className="flex gap-4 text-lg uppercase text-_gray">
          {project.tech.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
        {size.width! < 1024 && <ActionButtons />}
      </div>
    </div>
  );
};

export default ProjectCard;
