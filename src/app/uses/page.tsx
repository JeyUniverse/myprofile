import { Card } from "@/components/Card";
import Section from "@/components/Section";
import SimpleLayout from "@/components/SimpleLayout";
import React from "react";

const ToolsSection = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) => {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
};

const Tool = ({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) => {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
};

const UsesPage = () => {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking Im being productive when Im really just procrastinating. Heres a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="WorkStation">
          <Tool title="16” Acer Aspire 5, 11th Gen Intel(R) Core(TM) i5-1135G7, 16GB RAM (2023)">
            I was using an Intel-based 16” Acer Aspire 5 prior to this and the
            difference is night and day. Whatever your task, do it all with the feature-packed Acer Aspire 5. Powered by the latest 13th Gen Intel® Core™ Processors1 and NVIDIA® GeForce RTX® graphics1 for crisp multitasking to pursue your passions.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Sublime Text 4">
            I dont care if its missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="Visual Studio Code">
            Im honestly not even sure what features I get with this that aret
            just part of the macOS Terminal but its what I use.
          </Tool>
          <Tool title="Arduino IDE">
          Visual Studio Code (VS Code) is a free, open-source code editor thats available for Windows, macOS, and Linux. Its designed for developers and supports many programming languages. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
          Arduino IDE stands for Arduino Integrated Development Environment. Its a free, open-source program that lets you write and upload code to Arduino boards. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Next.JS">
          Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static rendering.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, its still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
};

export default UsesPage;
