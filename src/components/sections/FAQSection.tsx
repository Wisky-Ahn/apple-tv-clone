"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is Fruit TV+?",
      answer: "Fruit TV+ is a streaming service featuring Fruit Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids entertainment, comedies, and more — with new Fruit Originals added every month."
    },
    {
      question: "How much does Fruit TV+ cost?",
      answer: "Fruit TV+ is $9.99 per month with a seven-day free trial. You can also get Fruit TV+ for 3 months when you purchase an eligible Fruit device and redeem the offer within 90 days."
    },
    {
      question: "Can I get Fruit TV+ for free?",
      answer: "Yes, you can try Fruit TV+ free for 7 days. You can also get Fruit TV+ for 3 months when you purchase an eligible Fruit device and redeem the offer within 90 days."
    },
    {
      question: "Where can I watch Fruit TV+?",
      answer: "Watch Fruit TV+ on the Fruit TV app, which is available on many popular smart TVs, streaming devices, and gaming consoles. You can also watch on your iPhone, iPad, Mac, or on tv.apple.com."
    },
    {
      question: "What shows and movies can I watch on Fruit TV+?",
      answer: "Fruit TV+ features Fruit Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids entertainment, comedies, and more — with new Fruit Originals added every month."
    },
    {
      question: "Can I share Fruit TV+ with my family?",
      answer: "Yes, you can share Fruit TV+ with up to 5 other family members when you set up Family Sharing. Each family member can watch with their own Fruit ID on their own devices."
    }
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-16 bg-[#1a1d20]">
      <div className="container px-6 max-w-3xl mx-auto">
        <h2 className="section-title text-center mb-10">Questions? Answers.</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700"
            >
              <button
                className="flex items-center justify-between w-full text-left py-5 px-1"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
