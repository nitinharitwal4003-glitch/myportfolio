import React, { useState } from 'react';
import { Filter, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', count: 5 },
    { id: 'roads', name: 'Roads', count: 2 },
    { id: 'bridges', name: 'Bridges', count: 1 },
    { id: 'sites', name: 'Sites', count: 1 },
    { id: 'utilities', name: 'Utilities', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Highway Construction Project',
      category: 'roads',
      description: 'Complete highway development with modern infrastructure and safety features.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      location: 'Sikar-Jaipur Highway',
      duration: '8 months',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Urban Road Development',
      category: 'roads',
      description: 'City road infrastructure improvement with drainage and lighting systems.',
      image: 'https://images.pexels.com/photos/161709/architecture-buildings-business-city-161709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      location: 'Sikar City Center',
      duration: '4 months',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'River Bridge Construction',
      category: 'bridges',
      description: 'Modern concrete bridge spanning major river with reinforced structure.',
      image: 'https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      location: 'Sikar District',
      duration: '12 months',
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'Industrial Site Development',
      category: 'sites',
      description: 'Complete site preparation and development for industrial complex.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      location: 'Sikar Industrial Area',
      duration: '6 months',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Water Supply Infrastructure',
      category: 'utilities',
      description: 'Underground water supply network installation and maintenance.',
      image: 'https://images.pexels.com/photos/159397/construction-site-build-construction-work-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      location: 'Multiple Locations',
      duration: '10 months',
      status: 'Ongoing'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      const nextIndex = (selectedImage + 1) % filteredProjects.length;
      setSelectedImage(nextIndex);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const prevIndex = selectedImage === 0 ? filteredProjects.length - 1 : selectedImage - 1;
      setSelectedImage(prevIndex);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-light dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark dark:text-white mb-6">
            Project Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our completed and ongoing construction projects showcasing quality craftsmanship and innovative solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto mt-8"></div>
        </div>

        {/* Filter Categories */}
        <div className="mb-12 slide-in-left">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Filter Projects
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover-scale ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-light to-accent-light text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover-scale cursor-pointer fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-700'
                          : project.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {project.status}
                      </span>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Location:</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {project.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {project.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image and Details */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <img
                  src={filteredProjects[selectedImage].image}
                  alt={filteredProjects[selectedImage].title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-primary-dark dark:text-white mb-2">
                        {filteredProjects[selectedImage].title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        {filteredProjects[selectedImage].description}
                      </p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      filteredProjects[selectedImage].status === 'Completed' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : filteredProjects[selectedImage].status === 'In Progress'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                    }`}>
                      {filteredProjects[selectedImage].status}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400 block mb-1">Location:</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {filteredProjects[selectedImage].location}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400 block mb-1">Duration:</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {filteredProjects[selectedImage].duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary-light to-accent-light rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can bring your construction vision to life with the same quality and expertise shown in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary-light rounded-full font-semibold hover-scale transition-all duration-300"
            >
              Get Quote
            </a>
            <a
              href="https://wa.me/918233834003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-light rounded-full font-semibold transition-all duration-300"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;