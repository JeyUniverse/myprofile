import Container from "@/components/Container";
import React from "react";
import portraitImage from "@/img/portrait.jpg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Professional Virtual Assistant"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            About Me
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a detail-oriented legal professional with over 5 years of specialized experience in pre-litigation support, medical records management, and case administration. As a BS Information Technology graduate with a strong emphasis on legal operations, I bring both technical proficiency and legal expertise to streamline complex case workflows. My career foundation in legal administrative support has equipped me to manage high-volume caseloads while maintaining exceptional accuracy and client satisfaction.
            </p>
            <p>
              Throughout my career as a Medical Records Specialist and Assistant Case Manager at a US-based law firm, I&apos;ve honed expertise in client intake, case management, medical records organization, billing verification, and pre-demand documentation. I&apos;m proficient in industry-standard tools including Filevine and Clio, with strong capabilities in Microsoft Office, Google Workspace, and digital file management. My work involves coordinating with medical providers, insurance representatives, and legal teams to ensure all case documentation is complete, accurate, and ready for demand phase.
            </p>
            <p>
              My approach is systematic and detail-focused. I understand that legal cases demand precision—every document must be organized, every balance verified, and every communication tracked. I&apos;ve successfully managed complex Personal Injury caseloads from intake through pre-demand stage, ensuring nothing falls through the cracks. Whether coordinating medical records requests, verifying insurance coverage, or conducting lien reviews, I deliver the meticulous support that legal teams depend on.
            </p>
            <p>
              Beyond my professional experience, I&apos;m committed to continuous learning and staying current with legal industry standards. I hold certifications from multiple professional organizations and regularly engage in professional development. I take pride in being a reliable, proactive team member who understands that exceptional legal support directly impacts client outcomes and case success.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
