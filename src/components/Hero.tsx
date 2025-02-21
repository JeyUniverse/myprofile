import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Front End Developer, and quick learner.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I’m Jaylouie Castro, a 21-year-old BS Information Technology student from Zamboanga City, Philippines, with a strong background in web development, database management, and IoT. I’ve worked on projects like developing a car rental reservation system and a clinic appointment system, demonstrating my ability to create efficient, user-friendly solutions. I’m currently seeking freelance opportunities to apply my technical skills and creativity to real-world projects. Whether it’s building dynamic websites, developing custom systems, or managing back-end infrastructure, I’m passionate about delivering high-quality, reliable tech solutions tailored to client needs. Let’s collaborate to bring your ideas to life!
        </p>
      </div>
    </Container>
  );
};

export default Hero;
