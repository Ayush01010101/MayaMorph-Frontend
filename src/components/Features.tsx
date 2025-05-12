import React from 'react';
import { Wand2, Infinity, Zap, Image, Lightbulb, DownloadCloud } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-2xl bg-secondary-gray/50 hover:bg-secondary-gray/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary-purple/5 border border-secondary-gray/80">
      <div className="h-12 w-12 rounded-lg bg-primary-purple/20 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Wand2 className="h-6 w-6 text-primary-purple" />,
      title: "Text-to-Image Generation",
      description: "Transform your written descriptions into vivid visual content with precise control over style and aesthetics."
    },
    {
      icon: <Infinity className="h-6 w-6 text-primary-purple" />,
      title: "Unlimited Creativity",
      description: "Create an infinite variety of unique images spanning any style, era, or artistic influence you can imagine."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary-purple" />,
      title: "Lightning Fast",
      description: "Generate high-quality images in seconds, allowing you to iterate and refine your creative vision rapidly."
    },
    {
      icon: <Image className="h-6 w-6 text-primary-purple" />,
      title: "High Resolution (UM)",
      description: "Produce stunning 4K images suitable for professional applications, print media, and digital displays."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary-purple" />,
      title: "Style Customization (UM)",
      description: "Choose from dozens of artistic styles or define custom parameters to achieve your exact creative vision."
    },
    {
      icon: <DownloadCloud className="h-6 w-6 text-primary-purple" />,
      title: "Instant Downloads",
      description: "Export your creations in multiple formats with commercial usage rights included in all plans."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-dark to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Image Generation</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Leverage cutting-edge AI technology to create stunning visuals with unprecedented ease and control.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;