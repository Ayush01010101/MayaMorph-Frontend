import React from 'react';
import { MessageSquare, Sparkles, Image, Download } from 'lucide-react';
import { ColorfulButton } from './Button/CustomButtons';

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon, number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="relative">
        <div className="h-16 w-16 rounded-full bg-primary-purple/20 flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secondary-green flex items-center justify-center text-primary-dark font-bold text-sm">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Our AI image generator is incredibly easy to use. 
            Just follow these simple steps to create stunning visuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Step 
            icon={<MessageSquare className="h-8 w-8 text-primary-purple" />}
            number={1}
            title="Describe Your Vision"
            description="Enter a detailed text description of the image you want to create. The more specific, the better the results."
          />
          
          <Step 
            icon={<Sparkles className="h-8 w-8 text-primary-purple" />}
            number={2}
            title="Choose Style & Settings"
            description="Select from various artistic styles, aspect ratios, and quality settings to customize your output."
          />
          
          <Step 
            icon={<Image className="h-8 w-8 text-primary-purple" />}
            number={3}
            title="Generate & Refine"
            description="Our AI instantly creates multiple variations based on your input. Choose the best one or refine further."
          />
          
          <Step 
            icon={<Download className="h-8 w-8 text-primary-purple" />}
            number={4}
            title="Download & Share"
            description="Save your creation in high resolution and share it with the world or use it in your projects."
          />
        </div>
        
        <div className="mt-20 relative bg-secondary-gray/50 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute opacity-30 -inset-[100%]">
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,#A694FF,transparent_70%)]"></div>
            </div>
          </div>
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to create your first AI masterpiece?</h3>
              <p className="text-lg text-gray-300 mb-6">
                Join thousands of artists, designers, and creative professionals who are already using MayaMorph to bring their ideas to life.
              </p>
              <ColorfulButton
              text={'Start Creating Now'}
              />
            </div>
            
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl">
            <video src="https://xrjanivwqpqxxduhxqhy.supabase.co/storage/v1/object/public/images/public/girl%20with%20flower.mp4"className="w-full h-full object-cover" autoPlay loop muted playsInline ></video>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;