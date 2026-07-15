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
    <main className="animate-fade-in">
      <Hero />
      <Container className="mt-24 md:mt-28">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 smooth-transition hover:text-teal-accent">
            Legal Support Services
          </h2>
          <p className="text-base text-gray-700 smooth-transition">
            I provide specialized legal assistant support for pre-litigation matters with 5+ years of proven experience in medical records management, case administration, and pre-demand support. Here are the core services I offer:
          </p>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.title} style={{ animationDelay: `${index * 100}ms` }} className="animate-slide-in-up">
              <Card as="div" className="card-hover h-full">
                <h3 className="mt-6 text-lg font-semibold text-foreground smooth-transition group-hover:text-teal-accent">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
        <div className="mt-16 max-w-2xl animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4 smooth-transition hover:text-teal-accent">
            View My Full Resume
          </h2>
          <p className="text-base text-gray-700 mb-6">
            For a complete overview of my experience, education, and certifications, check out my detailed resume. Let&apos;s discuss how I can support your legal team.
          </p>
          <div className="flex gap-4">
            <Link
              href="/resume"
              className="primary-button"
            >
              View Resume
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

