import SimpleLayout from "@/components/SimpleLayout";
import React from "react";
import { type Metadata } from "next";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies and portfolio of virtual assistant work and client outcomes",
};

const PortfolioPage = () => {
  const caseStudies = [
    {
      name: "Email Management & Inbox Organization",
      description:
        "Successfully organized and streamlined email workflows for a busy entrepreneur, reducing email response time by 60% and implementing a filing system that improved productivity.",
      outcome: "Saved 5+ hours per week on email management",
    },
    {
      name: "Appointment Scheduling & Coordination",
      description:
        "Managed complex scheduling for a service-based business, coordinating with multiple clients and team members to optimize calendar efficiency.",
      outcome: "Reduced scheduling conflicts by 100%",
    },
    {
      name: "Data Entry & Database Management",
      description:
        "Processed and organized customer databases, ensuring accuracy and accessibility. Implemented systematic data management practices.",
      outcome: "Completed 2,000+ data entries with 99.5% accuracy",
    },
    {
      name: "Client Communication & Follow-up",
      description:
        "Handled customer inquiries and maintained professional correspondence, ensuring no client fell through the cracks.",
      outcome: "Improved client response rate to 95%+",
    },
    {
      name: "Administrative Support & Documentation",
      description:
        "Assisted with report compilation, document organization, and administrative tasks that kept operations running smoothly.",
      outcome: "Enabled business owner to focus on revenue-generating activities",
    },
    {
      name: "Project Coordination & Task Management",
      description:
        "Coordinated multiple projects simultaneously, tracked progress, and ensured timely completion of business initiatives.",
      outcome: "Delivered 100% of projects on time and within scope",
    },
  ];

  return (
    <SimpleLayout
      title="Portfolio & Case Studies"
      intro="I've worked with several clients to streamline their operations and improve productivity. Here are some examples of outcomes I've delivered through professional virtual assistance services."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {caseStudies.map((study) => (
          <Card as="li" key={study.name}>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {study.name}
            </h2>
            <Card.Description>{study.description}</Card.Description>
            <p className="relative z-10 mt-6 text-sm font-medium text-teal-500 dark:text-teal-400">
              ✓ {study.outcome}
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
};

export default PortfolioPage;
