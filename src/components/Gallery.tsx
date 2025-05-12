import React from 'react';
import { BlackButton } from './Button/CustomButtons';

// Sample images from Pexels
const images = [
  {
    id: 1,
    url: "https://xrjanivwqpqxxduhxqhy.supabase.co/storage/v1/object/public/images/public/alient%20ai%20generrate%20image%20(1).webp",
    prompt: "Aliens at earth taking picture with family while looking at camera",
    style: "Futuristic"
  },
  {
    id: 2,
    url: "https://xrjanivwqpqxxduhxqhy.supabase.co/storage/v1/object/public/images/public/indian%20train%20gibli.webp",
    prompt: "A indian family in indian train",
    style: "Gibili (UM)"
  },
  {
    id: 3,
    url: "https://xrjanivwqpqxxduhxqhy.supabase.co/storage/v1/object/public/images/public/gray%20cat%20with%20dog.webp",
    prompt: "A gray cat taking selfie with angry dog",
    style: "Photorealistic"
  },
  {
    id: 4,
    url: "https://xrjanivwqpqxxduhxqhy.supabase.co/storage/v1/object/public/images/public/thrnoy%20image.webp",
    prompt: "Ultra-detailed macro photograph of intertwining thorny bug creature branches",
    style: "Digital Art"
  },
  {
    id: 5,
    url: "https://xrjanivwqpqxxduhxqhy.supabase.co/storage/v1/object/public/images/public/anime%20image%20girl.webp",
    prompt: "A girl holding cigarette with sad feeling while playing video games",
    style: "Anime"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/10153643/pexels-photo-10153643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    prompt: "Minimalist Japanese scene with cherry blossoms",
    style: "Photorealistic"
  },
];

const Gallery: React.FC = () => {

  return (
    <section id="gallery" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute opacity-20 -inset-[30%]">
          <div className="w-full h-full bg-[radial-gradient(circle_at_80%_20%,#A694FF,transparent_50%)]"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery of Possibilities</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Explore a selection of AI-generated masterpieces created with our platform.
            The only limit is your imagination.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="group relative rounded-xl overflow-hidden aspect-square transition-all duration-300 hover:shadow-xl hover:shadow-primary-purple/20"
            
            >
              <img 
                src={image.url} 
                alt={image.prompt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs font-semibold text-secondary-green mb-2 uppercase tracking-wider">
                    {image.style}
                  </div>
                  <p className="text-white text-sm md:text-base font-medium">
                    "{image.prompt}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <BlackButton
          text={'View More Examples'}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;