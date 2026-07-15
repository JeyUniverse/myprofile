import SimpleLayout from "@/components/SimpleLayout";
import { type Metadata } from "next";
import { ServiceDropdown } from "@/components/ServiceDropdown";

export const metadata: Metadata = {
  title: "Services",
  description: "Legal assistant services including medical records management, case file organization, pre-litigation support, and billing verification",
};

const ServicesPage = () => {
  const services = [
    {
      title: "Medical Records Management",
      description:
        "Expert organization and coordination of medical records for litigation support. I request, track, obtain, and organize medical documentation with meticulous attention to detail ensuring completeness and accuracy for legal proceedings.",
      details: [
        "Medical records requests and tracking",
        "Records organization and filing",
        "Provider coordination",
        "Completeness verification",
      ],
    },
    {
      title: "Case Management & Client Intake",
      description:
        "Comprehensive case management using industry-standard tools like Filevine and Clio. I handle intake processes, maintain client communication, track case progress, and ensure all case files are properly organized and documented.",
      details: [
        "Client intake and case opening",
        "Case file management (Filevine, Clio)",
        "Client communication tracking",
        "Case status monitoring",
      ],
    },
    {
      title: "Billing Documentation & Verification",
      description:
        "Accurate review and verification of medical billing statements and balance information. I ensure all billing documentation is complete, accurate, and ready for demand preparation with meticulous reconciliation.",
      details: [
        "Billing statement review",
        "Balance verification",
        "Billing accuracy checks",
        "Documentation organization",
      ],
    },
    {
      title: "Insurance Claims & Coverage Management",
      description:
        "Expert handling of auto insurance claims, coverage verification, and policy documentation. I obtain policy limits information, declaration pages, and maintain coordination with insurance carriers for timely updates.",
      details: [
        "Insurance claim opening and tracking",
        "Coverage verification",
        "Policy limits research",
        "Carrier coordination",
      ],
    },
    {
      title: "Pre-Litigation Documentation & Support",
      description:
        "Comprehensive support for pre-litigation and pre-demand phases. I organize all required documentation, conduct thorough file reviews, and ensure case files are complete before advancing to demand phase.",
      details: [
        "Pre-litigation file organization",
        "Documentation completeness review",
        "File advancement tracking",
        "Quality assurance checks",
      ],
    },
    {
      title: "Lien Management & Reviews",
      description:
        "Professional handling of subrogation claims and final lien reviews. I track lien status, conduct detailed reviews prior to case resolution, and ensure all lien documentation is properly organized and verified.",
      details: [
        "Subrogation claim tracking",
        "Lien status monitoring",
        "Final lien reviews",
        "Resolution documentation",
      ],
    },
    {
      title: "Provider & Carrier Coordination",
      description:
        "Professional communication and coordination with medical providers and insurance representatives. I manage follow-ups, obtain necessary information, and ensure timely responses to support case progress.",
      details: [
        "Provider communication",
        "Carrier coordination",
        "Follow-up management",
        "Information requests",
      ],
    },
    {
      title: "Legal Administrative Support",
      description:
        "General legal administrative support including document preparation, file organization, and office administration to support your legal team&apos;s efficiency and case management.",
      details: [
        "Document preparation and filing",
        "Administrative organization",
        "Task coordination",
        "File management",
      ],
    },
  ];

  return (
    <SimpleLayout
      title="Legal & Pre-Litigation Support Services"
      intro="I offer specialized legal assistant services designed to support law firms in pre-litigation matters. With 5+ years of dedicated experience in medical records management, case administration, and pre-demand support, I&apos;m equipped to handle complex caseloads with precision and professionalism."
    >
      <ul
        role="list"
        className="space-y-4"
      >
        {services.map((service) => (
          <li key={service.title} className="animate-fade-in">
            <ServiceDropdown
              title={service.title}
              description={service.description}
              details={service.details}
            />
          </li>
        ))}
      </ul>
    </SimpleLayout>
  );
};

export default ServicesPage;
