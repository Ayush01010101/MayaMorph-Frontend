import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import {GradiantButton} from './Button/CustomButtons';
import NavigationFunctions from '../HandleClickFunctions/NavigationClickFunctions/NavigationFunctions';
const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Gradient background with animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-30">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,#A694FF,transparent_40%),radial-gradient(circle_at_70%_70%,#B3D73B,transparent_40%)]"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-gray/50 backdrop-blur-sm mb-8">
            <Sparkles className="h-4 w-4 mr-2 text-secondary-green" />
            <span className="text-sm font-medium">Transform your imagination into art</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="block">Generate stunning images with</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-secondary-green">
              AI-powered imagination
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Create photorealistic images, artistic concepts, and visual inspirations in seconds with our 
            state-of-the-art AI image generator.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <GradiantButton
              handleclick={NavigationFunctions().navigateToLogin}
              text={<>Get Started Free <ArrowRight/> </>}
              extraclassName='px-8 py-4'
            />
            <button className="px-8 py-4 rounded-full border border-secondary-gray hover:border-primary-purple text-white font-semibold text-lg transition-all">
              See Examples
            </button>
          </div>
        </div>

        {/* Hero image */}
        <div className="mt-16 relative mx-auto max-w-5xl">
          <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl shadow-gray-600 border border-secondary-gray/50">
            <img 
              src="https://xrjanivwqpqxxduhxqhy.supabase.co/storage/v1/object/public/images/public/cat%20with%20burger.webp" 
              alt="AI Generated Art Examples"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 28%' }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
          </div>
          
          {/* Floating badges */}
          <div className="absolute -bottom-5 left-[10%] bg-secondary-gray rounded-lg p-3 shadow-lg transform rotate-2 backdrop-blur-sm">
            <div className="text-sm font-medium">10M+ Images Generated</div>
          </div>
          
          <div className="absolute -bottom-5 right-[10%] bg-secondary-gray rounded-lg p-3 shadow-lg transform -rotate-2 backdrop-blur-sm">
            <div className="text-sm font-medium">4.9/5 Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;