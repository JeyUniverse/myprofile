"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden"
        >
          <button
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
            className="w-full px-6 py-4 flex items-center justify-between bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <h3 className="text-left font-semibold text-zinc-900 dark:text-zinc-100">
              {faq.question}
            </h3>
            <ChevronDownIcon
              className={`h-5 w-5 text-zinc-500 transition-transform ${
                expandedIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedIndex === index && (
            <div className="px-6 py-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default FAQAccordion;
