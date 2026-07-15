import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Legal Assistant & Medical Records Specialist
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m a detail-oriented legal professional with 5+ years of experience in pre-litigation support, medical records management, and case administration. I specialize in client intake, case management using industry-standard tools like Filevine and Clio, medical records organization, billing verification, and pre-demand documentation. My background in legal administrative support, combined with proven expertise in managing complex caseloads, enables me to deliver accurate, efficient support for legal teams. Whether you need medical records coordination, case file management, or pre-litigation support, I&apos;m ready to help streamline your legal operations.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
