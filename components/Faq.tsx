'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // Correct import for Heroicons v2

const faqData = [
  {
    question: 'What is TrackMe?',
    answer: 'TrackMe is a platform for managing sales, inventory, and analytics for various industries.',
  },
  {
    question: 'How does TrackMe help my business?',
    answer: 'TrackMe helps you streamline sales, manage your inventory, and generate detailed reports to track performance.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial with no credit card required.',
  },
  {
    question: 'Can I cancel at any time?',
    answer: 'Yes, you can cancel your subscription at any time without any cancellation fees.',
  },
  {
    question: 'Do you offer support?',
    answer: 'Yes, we offer 24/7 customer support via chat, email, and phone.',
  },
];

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <Accordion.Root type="single" collapsible>
        {faqData.map((item, index) => (
          <Accordion.Item key={index} value={`faq-${index}`}>
            <Accordion.Header>
              <Accordion.Trigger className="flex justify-between items-center w-full text-left text-lg font-semibold bg-gray-100 p-4 mb-2 rounded-lg">
                {item.question}
                <ChevronDownIcon className="h-5 w-5" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="bg-white p-4 mb-2 rounded-lg text-gray-600">
              {item.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default FAQ;
