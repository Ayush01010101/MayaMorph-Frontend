import React from 'react';
import { Sparkles, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-gray/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-5">
              <Sparkles className="h-6 w-6 text-primary-purple" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-secondary-green">
                MayaMorph
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming imagination into stunning visual art through the power of advanced AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-purple transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-purple transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-primary-purple transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-primary-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-purple transition-colors">API Access</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-purple transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-purple transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-purple transition-colors">Support Center</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-primary-purple transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-purple transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-secondary-gray pt-8 pb-12">
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-center">Subscribe to our newsletter</h3>
            <p className="text-gray-300 mb-5 text-center">
              Get the latest updates, tips, and inspiration for AI image generation.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-full bg-secondary-gray text-white border border-secondary-gray/80 focus:outline-none focus:border-primary-purple"
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded-full bg-primary-purple text-white font-semibold hover:bg-primary-purple/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-secondary-gray pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} MayaMorph. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;