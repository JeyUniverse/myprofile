import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-10 border-t-2 border-cream-200 py-10 flex items-center justify-between bg-cream-100 smooth-transition">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-foreground">
        <Link href={"/about"} className="hover:text-teal-accent smooth-transition">About</Link>
        <Link href="/services" className="hover:text-teal-accent smooth-transition">Services</Link>
        <Link href="/resume" className="hover:text-teal-accent smooth-transition">Resume</Link>
        <Link href="/portfolio" className="hover:text-teal-accent smooth-transition">Portfolio</Link>
        <Link href="/faq" className="hover:text-teal-accent smooth-transition">FAQ</Link>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-accent hover:text-teal-600 smooth-transition font-semibold"
        >
          LinkedIn
        </a>
      </div>

      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Jay Louie Castro - Legal Assistant & Medical Records Specialist.
      </p>
    </footer>
  );
};

export default Footer;
