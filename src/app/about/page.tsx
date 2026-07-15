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
              I&apos;m a professional Virtual Assistant dedicated to helping businesses and entrepreneurs streamline their operations and achieve their goals. With a strong background in organization, communication, and administrative excellence, I provide reliable support that lets you focus on what matters most—growing your business.
            </p>
            <p>
              My expertise spans administrative support, email and calendar management, data entry, scheduling, and client coordination. I take pride in being detail-oriented, proactive, and committed to delivering high-quality work. Every project I handle reflects my commitment to professionalism and reliability. I understand that time is your most valuable resource, and I&apos;m here to manage the tasks that would otherwise consume it.
            </p>
            <p>
              Over time, I&apos;ve developed a passion for helping businesses run more efficiently. Whether you&apos;re a solopreneur, a small business owner, or part of a larger team, I&apos;m equipped to handle the administrative workload that keeps operations smooth. My approach is flexible and tailored to your specific needs—I work with you to understand your priorities and deliver exactly what your business requires.
            </p>
            <p>
              Beyond the office, I value continuous learning and personal growth. The skills I&apos;ve developed—patience, adaptability, problem-solving, and attention to detail—drive everything I do. When I&apos;m not supporting clients, I enjoy staying updated on business trends and best practices to bring added value to every engagement.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
