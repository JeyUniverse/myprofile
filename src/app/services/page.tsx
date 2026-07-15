import SimpleLayout from "@/components/SimpleLayout";
import React from "react";
import { type Metadata } from "next";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Services",
  description: "Virtual Assistant services including administrative support, email management, scheduling, and business coordination",
};

const ServicesPage = () => {
  const services = [
    {
      title: "Administrative Support",
      description:
        "Handle your day-to-day administrative tasks including document management, file organization, scheduling meetings, and general office work to keep your business operations running smoothly.",
      details: [
        "Calendar and appointment management",
        "Document organization and filing",
        "General office administration",
        "Task and project tracking",
      ],
    },
    {
      title: "Email & Communication Management",
      description:
        "Professional management of your inbox, prioritization of important emails, drafting responses, and organizing communication to ensure nothing falls through the cracks.",
      details: [
        "Inbox organization and filtering",
        "Email prioritization",
        "Professional correspondence",
        "Communication templates",
      ],
    },
    {
      title: "Data Entry & Database Management",
      description:
        "Accurate and efficient data entry, spreadsheet management, database updates, and information organization tailored to your business processes and systems.",
      details: [
        "Data entry and verification",
        "Spreadsheet management",
        "Database updates",
        "Information organization",
      ],
    },
    {
      title: "Scheduling & Coordination",
      description:
        "Manage your schedule, coordinate meetings, handle appointment confirmations, and ensure smooth scheduling across all your commitments and client interactions.",
      details: [
        "Meeting coordination",
        "Appointment scheduling",
        "Calendar synchronization",
        "Reminder management",
      ],
    },
    {
      title: "Client Communication & Support",
      description:
        "Professional handling of client inquiries, customer follow-ups, and business correspondence to maintain strong relationships and ensure responsive communication.",
      details: [
        "Customer inquiry responses",
        "Client follow-ups",
        "Professional email management",
        "Response coordination",
      ],
    },
    {
      title: "Research & Documentation",
      description:
        "Comprehensive research on business topics, report compilation, documentation creation, and information gathering to support your business initiatives and decision-making.",
      details: [
        "Business research",
        "Report compilation",
        "Documentation creation",
        "Information synthesis",
      ],
    },
    {
      title: "Project Coordination",
      description:
        "Coordinate multiple projects simultaneously, track progress, manage timelines, and ensure smooth execution of business operations and initiatives.",
      details: [
        "Project management",
        "Timeline tracking",
        "Progress monitoring",
        "Task coordination",
      ],
    },
    {
      title: "Social Media & Online Presence",
      description:
        "Assist with managing social media profiles, content scheduling, and online presence to support your brand visibility and client engagement.",
      details: [
        "Content scheduling",
        "Profile management",
        "Post coordination",
        "Engagement tracking",
      ],
    },
  ];

  return (
    <SimpleLayout
      title="Virtual Assistant Services"
      intro="I offer comprehensive virtual assistant services designed to support your business growth and operational efficiency. Whether you need ongoing support or project-based assistance, I'm equipped to handle your needs professionally and reliably."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
      >
        {services.map((service) => (
          <Card as="li" key={service.title}>
            <h2 className="mt-6 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              {service.title}
            </h2>
            <Card.Description>{service.description}</Card.Description>
            <div className="mt-4 space-y-2">
              <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase">
                Includes:
              </p>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start">
                    <span className="mr-2 text-teal-500">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
};

export default ServicesPage;
