import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleFAQ = () => {
    setExpanded(!expanded);
  };

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        aria-expanded={expanded}
        onClick={toggleFAQ}
      >
        <span className="flex-1 text-base-content">{question}</span>
        <svg
          className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${expanded ? '' : 'rotate-90'}`}
          ></rect>
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${expanded ? 'max-h-full' : 'max-h-0'}`}
      >
        <div className="pb-5 leading-relaxed">
          <div className="space-y-2 leading-relaxed">{answer}</div>
        </div>
      </div>
    </li>
  );
};

const FAQSection = () => {
  return (
    <div className="py-24  px-8 max-w-5xl mx-auto  md:flex-row gap-12">
      <div className="flex flex-col text-left basis-1/2">
        <p className="inline-block font-medium  text-primary mb-4">GET TO KNOW US</p>
        <p className="sm:text-4xl text-3xl font-medium text-base-content">Frequently Asked Questions</p>
      </div>
      <ul className="basis-1/2 mt-10">
        <FAQItem
          question="Do I need Sign a contract?"
          answer="We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract."
        />
        <FAQItem
          question="What services do we offer?"
          answer="We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you."
        />
        <FAQItem
          question="How do you ensure user privacy?"
          answer="We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy."
        />
      </ul>
    </div>
  );
};

export default FAQSection;
