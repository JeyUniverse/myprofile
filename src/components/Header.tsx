"use client";
import Image from "next/image";
import React, { Fragment } from "react";
import profile from "@/img/profile.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  let isActive = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 smooth-transition hover:text-teal-accent",
          isActive
            ? "text-teal-accent font-semibold"
            : "text-foreground"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-1 bg-teal-accent rounded-full" />
        )}
      </Link>
    </li>
  );
};

const DesktopNavigation = (props: React.ComponentPropsWithRef<"nav">) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-md bg-cream-50 px-4 py-2 text-sm font-medium text-foreground shadow-md shadow-black/5 ring-1 ring-black/5 backdrop-blur smooth-transition">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/resume">Resume</NavItem>
        <NavItem href="/portfolio">Portfolio</NavItem>
        <NavItem href="/faq">FAQ</NavItem>
      </ul>
    </nav>
  );
};

const MobileNavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        className="block py-2 hover:text-teal-500 border-b-[1px] border-b-zinc-800 dark:border-b-zinc-100/5 hover:border-b-teal-500/5 duration-300"
      >
        {children}
      </Popover.Button>
    </li>
  );
};

const MobileNavigation = (
  props: React.ComponentPropsWithoutRef<typeof Popover>
) => {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-cream-50 px-4 py-2 text-sm font-medium text-foreground shadow-md shadow-black/5 ring-1 ring-black/5 backdrop-blur smooth-transition hover:bg-cream-200">
        Menu
        <FaChevronDown className="ml-3 h-auto w-2 group-hover:text-teal-accent smooth-transition" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <IoCloseCircleOutline className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/services">Services</MobileNavItem>
                <MobileNavItem href="/resume">Resume</MobileNavItem>
                <MobileNavItem href="/portfolio">Portfolio</MobileNavItem>
                <MobileNavItem href="/faq">FAQ</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};

const Header = () => {
  return (
    <header className="top-0 -mb-3 py-5 w-full mx-auto px-4 md:px-10 flex gap-10 justify-between items-center bg-cream-100 shadow-sm smooth-transition animate-slide-in-down">
      <Link href={"/"}>
        <Image
          src={profile}
          alt="Profile logo"
          className="w-12 h-12 rounded-full object-cover hover:shadow-lg smooth-transition"
        />
      </Link>
      <div className="flex md:flex-1 justify-end md:justify-center">
        {/* desktop navigation */}
        <DesktopNavigation className="pointer-events-auto hidden md:block" />
      </div>
      <div className="flex items-center gap-5">
        {/* "Connect on LinkedIn" button */}
        <a
          href="https://linkedin.com" // Replace with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          LinkedIn
        </a>
        {/* MobileNavigation */}
        <MobileNavigation className="pointer-events-auto md:hidden" />
      </div>
    </header>
  );
};

export default Header;
