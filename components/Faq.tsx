'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // Correct import for Heroicons v2

const faqData = [
  {
    question: 'What is Uplift?',
    answer: 'Uplift is a platform designed to help small and medium-sized businesses (SMEs) in Africa streamline operations, track sales, and manage inventory effectively.',
  },
  {
    question: 'How can Uplift benefit my business?',
    answer: 'Uplift enables SMEs to manage their business processes efficiently, offering tools for live cart management, financial tracking, and detailed performance analytics.',
  },
  {
    question: 'Does Uplift offer a free trial?',
    answer: 'Yes, Uplift offers a 30-day free trial with access to all features so you can explore how it benefits your business.',
  },
  {
    question: 'Can I customize Uplift for my specific business needs?',
    answer: 'Yes, Uplift provides customizable options to tailor the platform to fit the unique needs of your business, whether you’re in retail, services, or another sector.',
  },
  {
    question: 'What kind of support does Uplift offer?',
    answer: 'We offer 24/7 customer support through live chat, email, and phone to assist you with any issues or questions.',
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
              <Accordion.Trigger className="flex justify-between items-center w-full text-left text-lg font-semibold bg-transparent p-4 mb-2 rounded-lg">
                {item.question}
                <ChevronDownIcon className="h-5 w-5" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="bg-transparent p-4 mb-2 rounded-lg text-gray-50">
              {item.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default FAQ;
