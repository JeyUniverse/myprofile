import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Professional Virtual Assistant Services
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m a dedicated Virtual Assistant helping businesses streamline operations and focus on growth. I specialize in administrative support, email management, scheduling, data entry, and client communication. With a background in organization and attention to detail, I provide reliable, efficient support tailored to your business needs. Whether you need daily administrative tasks handled or project-based assistance, I&apos;m here to help you work smarter and more productively. Let&apos;s connect and discuss how I can support your business goals.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
