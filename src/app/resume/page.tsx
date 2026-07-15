import Container from "@/components/Container";
import React from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Jay Louie Castro - Legal Assistant & Medical Records Specialist Resume",
};

const ResumePage = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Jay Louie Castro
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Cabatangan, Hidden Valley Zamboanga City | jaylouiec7@gmail.com | +63936-8783-810
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
            Objective
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Detail-oriented and highly organized professional with experience in legal administrative support, client intake, medical records management, billing documentation, and case management. Proficient in maintaining accurate records, communicating with clients, and using case management software such as Filevine, Clio and other software. Seeking a Legal Assistant position where I can contribute my organizational skills, attention to detail, and commitment to supporting legal professionals in delivering excellent client service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
            Work Experience
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                  Legal Assistant
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  January 2025 – February 2026
                </span>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium mb-3">
                US-Based Law Firm: Pre-Litigation
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Managed and organized medical records and billing documents, ensuring accuracy and completeness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Verified outstanding balances and reviewed billing information for consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Opened, maintained, and tracked subrogation claims and case progress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Conducted final lien reviews prior to case resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Coordinated with medical providers and insurance representatives for updates and follow-ups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Maintained accurate case records and ensured timely processing of case tasks</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                  Assistant Case Manager
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  September 2022 – November 2024
                </span>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium mb-3">
                US-Based Law Firm: Pre-Litigation
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Managed a caseload of Personal Injury matters from intake through pre-demand stage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Maintained consistent client communication to monitor treatment status and case updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Opened and managed auto insurance claims, including liability and coverage verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Requested and secured policy limits information, and declaration pages from carriers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Obtained and reviewed medical records and billing statements for completeness and accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Conducted balance verifications to ensure accurate accounting before demand preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Ensured all required documentation was complete prior to advancing files to demand phase</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                  Medical Records Specialist
                </h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  March 2020 – August 2022
                </span>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium mb-3">
                US-Based Law Firm: Pre-Litigation
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Requested, tracked, and organized medical records and billing documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Maintained detailed case files to support litigation and pre-litigation teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Communicated with medical providers and insurance representatives to secure timely documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3">•</span>
                  <span>Assisted in preparing case documentation for attorney review</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Zamboanga Peninsula Polytechnic State University
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Graduated: June 06, 2025 | Dean&apos;s Lister
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                Technical Vocational Livelihood – Front Office
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Zamboanga Peninsula Polytechnic State University
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
            Skills & Tools
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                Digital Tools
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Filevine (Case Management), Microsoft Office (Word, Excel, PowerPoint, Outlook), Google Workspace (Docs, Sheets, Drive, Calendar, Meet), Git & GitHub (Basic), Canva, Zoom, Google Meet, Microsoft Teams
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                Soft Skills
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Customer Service & Client Support, Legal Administrative Support, Client Intake & Case Management, Data Entry & Data Management, Medical Records Management, Billing Documentation & Verification, Document Preparation & File Organization, Administrative Support
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
            Certifications
          </h2>
          <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start">
              <span className="text-teal-500 mr-3">•</span>
              <span>Teleperformance — Asiatown I.T. Park, Cebu City</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-3">•</span>
              <span>Pagasa Visayas Prsd — Airport Road, Lapu-Lapu City</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-3">•</span>
              <span>Worldtech Information Solutions Inc. — Cebu City</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-3">•</span>
              <span>Dynata Philippines Inc. — MEPZ II, Lapu-Lapu City</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-3">•</span>
              <span>Up Cebu Business Incubator for I.T. — Lahug, Cebu City</span>
            </li>
          </ul>
        </section>
      </div>
    </Container>
  );
};

export default ResumePage;
