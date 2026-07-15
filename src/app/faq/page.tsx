import SimpleLayout from "@/components/SimpleLayout";
import Container from "@/components/Container";
import { type Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about virtual assistant services",
};

const FAQPage = () => {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "I work with solopreneurs, small business owners, entrepreneurs, and service-based professionals across various industries. Whether you&apos;re running a single-person operation or a small team, I can adapt my services to meet your specific needs.",
    },
    {
      question: "How do we communicate and collaborate?",
      answer:
        "Communication is key! We can use email, video calls, messaging platforms, or project management tools depending on what works best for you. I&apos;m flexible and can adapt to your preferred communication methods.",
    },
    {
      question: "What are your availability hours?",
      answer:
        "I offer flexible scheduling to accommodate different time zones and business needs. We can discuss the best times to connect when you reach out. I&apos;m committed to providing responsive support during agreed-upon hours.",
    },
    {
      question: "Do you offer ongoing support or project-based work?",
      answer:
        "Both! I can provide ongoing weekly or monthly support for continuous administrative needs, or I can handle specific projects with defined timelines. We can discuss which arrangement works best for your situation.",
    },
    {
      question: "How do you ensure confidentiality and data security?",
      answer:
        "I take confidentiality and data security seriously. All client information is handled with discretion and professionalism. I follow best practices for data protection and can discuss specific security requirements with you.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "My pricing varies depending on the scope and type of work involved. I offer competitive rates and can provide custom quotes based on your specific needs. Let&apos;s connect on LinkedIn to discuss pricing options that fit your budget.",
    },
    {
      question: "How do I know if virtual assistant services are right for me?",
      answer:
        "If you find yourself spending time on administrative tasks that take away from growing your business, or if your plate is too full to handle everything effectively, virtual assistant services can be a game-changer. Common signs include inbox overload, scheduling conflicts, or spending more than a few hours weekly on admin work.",
    },
    {
      question: "Can you handle multiple clients simultaneously?",
      answer:
        "Yes, I work with multiple clients and manage their needs efficiently. I maintain clear boundaries between client work and ensure that each client receives dedicated, quality support according to our agreement.",
    },
    {
      question: "What if I need specialized assistance?",
      answer:
        "If you need specialized skills beyond traditional VA work, let&apos;s discuss your needs. I&apos;m continuously learning and expanding my capabilities, and I&apos;m happy to explore ways I can support your unique business requirements.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple! Connect with me on LinkedIn to discuss your business needs, challenges, and goals. We&apos;ll have a conversation to determine if I&apos;m the right fit for your VA needs, and we can outline a plan moving forward.",
    },
  ];

  return (
    <SimpleLayout
      title="Frequently Asked Questions"
      intro="Have questions about my virtual assistant services? Here are answers to common questions. If you don&apos;t see your question answered, feel free to reach out on LinkedIn."
    >
      <Container className="mt-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <FAQAccordion faqs={faqs} />
        </div>

        <div className="mt-12 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Still have questions?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            I&apos;d love to chat about your specific needs and how I can help your
            business thrive.
          </p>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-teal-500 px-8 py-3 rounded-full dark:bg-black text-sm uppercase border border-teal-800 hover:text-teal-800 dark:hover:text-teal-200 hover:border-teal-700 duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </Container>
    </SimpleLayout>
  );
};

export default FAQPage;
