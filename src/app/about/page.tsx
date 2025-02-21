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
              alt="image"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            This is me, and this is all about ME.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            A highly motivated BS Information Technology student with a strong foundation in web development, programming, and IoT. Experienced in developing Next.js web applications and Arduino-based projects. Adept at problem-solving, coding, and collaborating on technical projects to create innovative solutions. Eager to leverage technical skills and creativity to contribute to dynamic IT environments and pursue a career in software development and IoT innovation.
            </p>
            <p>
            When I was 18, I developed a deep love for fishing that became one of my favorite pastimes. There was something peaceful yet exciting about being near the water, waiting patiently for the right moment, and feeling the thrill of a catch. Fishing taught me patience, attention to detail, and how to adapt to different environments—skills that I’ve found helpful in my journey as an IT student. It also gave me a sense of calm and focus, which helped me clear my mind and stay grounded, even during challenging times. The memories and lessons from those fishing trips have stayed with me and continue to shape my outlook today.
            </p>
            <p>
            Today, Im a 21-year-old BS Information Technology student from Zamboanga City, Philippines, passionate about technology and innovation. I’m currently working on projects that involve web development using Next.js and Arduino, combining creativity with problem-solving to develop practical tech solutions. My journey in IT has been shaped by hands-on experience, a drive to continuously learn, and the curiosity to explore new technologies. Outside of academics, I still hold onto lessons from my past, like patience and adaptability, which I first learned through fishing. These values guide me in both personal and professional endeavors, as I work toward building a successful career in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
