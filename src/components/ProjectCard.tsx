import type { Project } from "~/lib/data";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [active, setActive] = useState(false);

  const Overlay = () => (
    <div
      className={clsx([
        "absolute inset-0 flex-col items-center justify-center gap-12 bg-_black/80",
        active ? "flex" : "hidden",
      ])}
    >
      <Button text="view project" />
      <Button text="view code" />
    </div>
  );

  return (
    <div className="flex flex-col gap-5">
      <div
        className="relative"
        onPointerEnter={() => setActive(true)}
        onPointerLeave={() => setActive(false)}
      >
        <Image src={project.image} alt="" width={686} height={506} />
        <Overlay />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="heading-md uppercase">{project.title}</h4>
        <ul className="flex gap-4 text-lg uppercase text-_gray">
          {project.tech.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
