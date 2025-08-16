import React, { useState } from 'react';
import { GraduationCap, Heart, Briefcase, MapPin, Phone, Mail, Camera, Car, Waves, Ticket as Cricket, Palette, Search, ChevronDown, ChevronUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const hobbies = [
    { name: 'Photography', icon: Camera, description: 'Capturing moments and construction progress' },
    { name: 'Cricket', icon: Cricket, description: 'Team sports and strategic thinking' },
    { name: 'Driving', icon: Car, description: 'Exploring new routes and destinations' },
    { name: 'Swimming', icon: Waves, description: 'Fitness and mental clarity' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-light dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark dark:text-white mb-6">
            Personal Details
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my education, interests, and professional journey in civil construction.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto mt-8"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Education Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden slide-in-left">
            <button
              onClick={() => toggleSection('education')}
              className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-dark dark:text-white">Education</h2>
                  <p className="text-gray-600 dark:text-gray-400">Academic background and qualifications</p>
                </div>
              </div>
              {activeSection === 'education' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            
            {activeSection === 'education' && (
              <div className="px-8 pb-8 border-t border-gray-100 dark:border-gray-700">
                <div className="mt-6 space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-primary-dark dark:text-white mb-2">
                      Bachelor's Degree
                    </h3>
                    <p className="text-primary-light font-medium mb-2">
                      Pandit Deen Dayal Upadhyay University
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Graduated with comprehensive knowledge in civil engineering principles
                    </p>
                    <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm rounded-full">
                      Completed
                    </span>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-primary-dark dark:text-white mb-2">
                      Secondary Education
                    </h3>
                    <p className="text-primary-light font-medium mb-2">
                      Bright Carrier Senior Secondary School
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Strong foundation in mathematics and sciences
                    </p>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm rounded-full">
                      Graduated
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interests & Hobbies Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden slide-in-right">
            <button
              onClick={() => toggleSection('interests')}
              className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-dark dark:text-white">Interests & Hobbies</h2>
                  <p className="text-gray-600 dark:text-gray-400">Personal passions and activities</p>
                </div>
              </div>
              {activeSection === 'interests' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            
            {activeSection === 'interests' && (
              <div className="px-8 pb-8 border-t border-gray-100 dark:border-gray-700">
                <div className="mt-6">
                  {/* Hobbies Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {hobbies.map((hobby) => {
                      const Icon = hobby.icon;
                      return (
                        <div key={hobby.name} className="bg-light dark:bg-gray-700 p-6 rounded-xl hover-scale">
                          <div className="flex items-center space-x-3 mb-3">
                            <Icon className="w-6 h-6 text-primary-light" />
                            <h3 className="text-lg font-semibold text-primary-dark dark:text-white">
                              {hobby.name}
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {hobby.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Additional Interests */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <Palette className="w-6 h-6 text-orange-500" />
                        <h3 className="text-lg font-semibold text-primary-dark dark:text-white">
                          Fashion & Style
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Passionate about fashion and maintaining a great sense of dressing
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <Search className="w-6 h-6 text-teal-500" />
                        <h3 className="text-lg font-semibold text-primary-dark dark:text-white">
                          Deep Learning
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        "I like to go deeper into things" - Always exploring and understanding concepts thoroughly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Professional Work Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden fade-in">
            <button
              onClick={() => toggleSection('professional')}
              className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-gradient-to-r from-primary-light to-accent-light rounded-xl">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-dark dark:text-white">Professional Work</h2>
                  <p className="text-gray-600 dark:text-gray-400">Career and expertise details</p>
                </div>
              </div>
              {activeSection === 'professional' ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>
            
            {activeSection === 'professional' && (
              <div className="px-8 pb-8 border-t border-gray-100 dark:border-gray-700">
                <div className="mt-6 space-y-6">
                  <div className="bg-gradient-to-r from-primary-light/10 to-accent-light/10 p-6 rounded-xl">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary-dark dark:text-white mb-2">
                          Civil Contractor
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>Sikar, Rajasthan, India</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm rounded-full">
                        Active
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      As a leading civil contractor, we provide comprehensive solutions for complex construction 
                      projects. Our team of skilled professionals is dedicated to managing every phase of a 
                      project, from initial planning to final execution, ensuring it's completed on time, 
                      on budget, and to the highest industry standards.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary-dark dark:text-white mb-2">
                          Specializations:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {['Road Construction', 'Bridge Development', 'Site Development', 'Infrastructure Work', 'Utility Installation'].map((spec) => (
                            <span key={spec} className="px-3 py-1 bg-primary-light text-white rounded-full text-sm">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary-dark dark:text-white mb-3">
                          Contact Methods:
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <a
                            href="https://wa.me/918233834003"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors"
                          >
                            <Phone className="w-5 h-5 text-green-600" />
                            <span className="text-green-700 dark:text-green-400 font-medium">WhatsApp</span>
                          </a>
                          <a
                            href="mailto:nitinharitwal4003@gmail.com"
                            className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                          >
                            <Mail className="w-5 h-5 text-blue-600" />
                            <span className="text-blue-700 dark:text-blue-400 font-medium">Email</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-light to-accent-light rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Let's Discuss Your Next Project
          </h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            With years of experience and a passion for excellence, I'm ready to bring your construction vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918233834003"
              className="px-8 py-4 bg-white text-primary-light rounded-full font-semibold hover-scale transition-all duration-300"
            >
              Call Now
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

export default AboutPage;