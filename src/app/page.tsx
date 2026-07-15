import Container from "@/components/Container";
import Hero from "@/components/Hero";
import { Card } from "@/components/Card";
import Link from "next/link";

export default async function Home() {
  const services = [
    {
      title: "Medical Records Management",
      description: "Expert coordination and organization of medical records for litigation support. Request, track, and organize documentation with meticulous attention to detail.",
    },
    {
      title: "Case Management",
      description: "Comprehensive case management using Filevine and Clio. Handle intake, maintain client communication, track progress, and organize case files.",
    },
    {
      title: "Billing & Balance Verification",
      description: "Accurate review and verification of medical billing statements and balance information to ensure completeness before demand preparation.",
    },
    {
      title: "Insurance Claims Management",
      description: "Expert handling of auto insurance claims, coverage verification, policy limits research, and coordination with insurance carriers.",
    },
    {
      title: "Pre-Litigation Support",
      description: "Comprehensive support for pre-litigation and pre-demand phases, including documentation organization and file advancement tracking.",
    },
    {
      title: "Lien Management & Reviews",
      description: "Professional handling of subrogation claims, lien status monitoring, and final reviews prior to case resolution.",
    },
  ];

  return (
    <main>
      <Hero />
      <Container className="mt-24 md:mt-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100 mb-4">
            Legal Support Services
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-12">
            I provide specialized legal assistant support for pre-litigation matters with 5+ years of proven experience in medical records management, case administration, and pre-demand support. Here are the core services I offer:
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
            View My Full Resume
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">
            For a complete overview of my experience, education, and certifications, check out my detailed resume. Let&apos;s discuss how I can support your legal team.
          </p>
          <div className="flex gap-4">
            <Link
              href="/resume"
              className="inline-block text-teal-500 px-8 py-3 rounded-full dark:bg-black text-sm uppercase border border-teal-800 hover:text-teal-800 dark:hover:text-teal-200 hover:border-teal-700 duration-300"
            >
              View Resume
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-teal-500 px-8 py-3 rounded-full dark:bg-black text-sm uppercase border border-teal-800 hover:text-teal-800 dark:hover:text-teal-200 hover:border-teal-700 duration-300"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

