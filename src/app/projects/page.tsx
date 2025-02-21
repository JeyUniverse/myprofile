import SimpleLayout from "@/components/SimpleLayout";
import React from "react";
import { type Metadata } from "next";
import { Card } from "@/components/Card";
import { GoLink } from "react-icons/go";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I’ve made trying to put my dent in the website",
};

const ProjectPage = () => {
  const projects = [
    {
      name: "Facebook",
      description:
        "This is my Facebook Account, you can visit and message me here and through messenger",
      link: { href: "https://www.facebook.com/jaylouie.castro.7", label: "https://www.facebook.com/jaylouie.castro.7" },
    },
    {
      name: "Instagram",
      description:
        "Real-time video streaming library, optimized for interstellar transmission.",
      link: { href: "https://www.instagram.com/dyeyylowiii/", label: "https://www.instagram.com/dyeyylowiii/" },
    },
    {
      name: "TikTok",
      description:
        "The operating system that powers our Planetaria space shuttles.",
      link: { href: "https://www.tiktok.com/@ihtbdhsgebzb", label: "https://www.tiktok.com/@ihtbdhsgebzb" },
    },
    {
      name: "YouTube",
      description:
        "The schematics for the first rocket I designed that successfully made it to orbit.",
      link: { href: "https://www.youtube.com/@castrojaylouiet.7379", label: "https://www.youtube.com/@castrojaylouiet.7379" },
    },
  ];
  return (
    <SimpleLayout
      title="Things Ive made trying to put my dent in the website."
      intro="Ive worked on tons of little projects over the years but these are the ones that Im most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and message me through this flatforms below."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank" rel="noopener noreferrer">
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-100">
              <GoLink className="text-lg flex-none" />
              <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="ml-2">
                {project.link.label}
              </a>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
};

export default ProjectPage;
