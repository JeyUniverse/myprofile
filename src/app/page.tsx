import Container from "@/components/Container";
import Hero from "@/components/Hero";
import { Card } from "@/components/Card";
import Link from "next/link";

export default async function Home() {
  const services = [
    {
      title: "Administrative Support",
      description: "Handle day-to-day tasks like scheduling, data organization, file management, and general administrative duties to keep your business running smoothly.",
    },
    {
      title: "Email & Calendar Management",
      description: "Professional management of your email inbox, calendar scheduling, meeting coordination, and follow-up organization.",
    },
    {
      title: "Data Entry & Organization",
      description: "Accurate and efficient data entry, spreadsheet management, and information organization tailored to your business processes.",
    },
    {
      title: "Client Communication",
      description: "Professional correspondence, customer inquiries, email responses, and client coordination to maintain strong business relationships.",
    },
    {
      title: "Research & Documentation",
      description: "In-depth research, report compilation, documentation, and information gathering for projects and business initiatives.",
    },
    {
      title: "Project Coordination",
      description: "Help coordinate projects, manage timelines, track progress, and ensure smooth execution of business operations.",
    },
  ];

  return (
    <main>
      <Hero />
      <Container className="mt-24 md:mt-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100 mb-4">
            My Services
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-12">
            I offer comprehensive virtual assistant services designed to support your business growth and efficiency. Here&apos;s what I can help you with:
          </p>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card as="li" key={service.title}>
              <h3 className="mt-6 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </Card>
          ))}
        </ul>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100 mb-4">
            Ready to get started?
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">
            I&apos;d love to learn more about your business needs and how I can support your success. Let&apos;s connect on LinkedIn to discuss your requirements.
          </p>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-teal-500 px-8 py-3 rounded-full dark:bg-black text-sm uppercase border border-teal-800 hover:text-teal-800 dark:hover:text-teal-200 hover:border-teal-700 duration-300"
          >
            Connect on LinkedIn
          </Link>
        </div>
      </Container>
    </main>
  );
}

