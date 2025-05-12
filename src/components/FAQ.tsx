import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC<FAQItem & { isOpen: boolean; toggle: () => void }> = ({ 
  question, answer, isOpen, toggle 
}) => {
  return (
    <div className="border-b border-secondary-gray last:border-none">
      <button
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
        onClick={toggle}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary-purple flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs: FAQItem[] = [
    {
      question: "How does the AI image generator work?",
      answer: "Our AI image generator uses advanced deep learning models to create images based on text descriptions. It analyzes your prompt, understands the concepts, objects, styles, and relationships described, and then generates an image that matches your description using trained neural networks."
    },
    {
      question: "Can I use the generated images commercially?",
      answer: "Yes, images created on our Pro and Enterprise plans can be used for commercial purposes. The Free plan is limited to personal use only. You own all rights to the images you create on our platform, subject to our terms of service."
    },
    {
      question: "How accurate are the image generations?",
      answer: "The accuracy depends on the clarity and specificity of your prompt. More detailed prompts with clear descriptions of elements, style, lighting, and composition will produce more accurate results. You can also use our editing tools to refine any aspects that need adjustment."
    },
    {
      question: "Is there a limit to how many images I can generate?",
      answer: "Yes, each plan has different generation limits. The Free plan includes 25 generations per month, the Pro plan includes 500 generations per month, and the Enterprise plan offers unlimited generations. You can always upgrade your plan if you need more."
    },
    {
      question: "What types of images can I create?",
      answer: "You can create almost any type of image including photorealistic scenes, artistic illustrations, concept art, character designs, landscapes, product mockups, abstract art, and more. Our AI is trained on diverse visual styles and can adapt to specific aesthetics when prompted correctly."
    },
    {
      question: "Can I edit the images after they're generated?",
      answer: "Yes, our Pro and Enterprise plans include advanced editing tools that allow you to make adjustments to your generated images. You can modify specific elements, change colors, adjust lighting, or even blend multiple generations together."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-secondary-gray/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our AI image generator.
          </p>
        </div>
        
        <div className="bg-secondary-gray/30 rounded-2xl p-6">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggle={() => handleToggle(index)}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="mb-4 text-gray-300">
            Still have questions? We're here to help.
          </p>
          <button className="px-6 py-3 rounded-full border border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white font-semibold transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;