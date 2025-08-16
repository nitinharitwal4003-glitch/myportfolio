import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Instagram, Facebook, MessageCircle, Camera, Star, Users, Award, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/p/DLmf-z0RsCzkluZD8-sbpkJI42ou6SJZ8Ui9OQ0/?igsh=MW16bXJtaTRrMzZzbg==',
      color: 'from-pink-500 to-orange-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/1ArJZMi3Er/?mibextid=wwXIfr',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/918233834003',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Snapchat',
      icon: Camera,
      url: 'https://t.snapchat.com/iYKsPHZY',
      color: 'from-yellow-400 to-yellow-500'
    }
  ];

  const stats = [
    { icon: Award, label: 'Projects Completed', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Clock, label: 'Years Experience', value: '10+' },
    { icon: Star, label: 'Success Rate', value: '98%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-white rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            {/* Profile Photo Placeholder */}
            <div className="mb-8 flex justify-center">
              <div className="w-40 h-40 bg-gradient-to-br from-accent-light to-primary-light rounded-full p-1 pulse-glow">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-primary-dark text-4xl font-bold">
                  NH
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 tracking-tight">
              NITIN HAIRTWAL
            </h1>
            <p className="text-xl md:text-2xl text-accent-light mb-6 tracking-widest uppercase">
              Contractor
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Constructing your vision into reality
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/gallery"
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center space-x-2 hover-scale"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-primary-dark transition-all duration-300 hover-scale"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gradient-to-r ${social.color} text-white hover-scale transition-all duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-dark dark:text-white mb-6">
              About Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                We are a trusted civil contracting firm specializing in infrastructure projects. 
                From roads and bridges to utilities and site development, we deliver high-quality 
                construction services with a focus on safety, efficiency, and exceptional results.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Based in Sikar, Rajasthan, our team brings years of experience and expertise 
                to every project, ensuring your vision becomes a solid reality.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-primary-light text-white rounded-full text-sm">
                  Road Construction
                </span>
                <span className="px-4 py-2 bg-accent-light text-white rounded-full text-sm">
                  Bridge Development
                </span>
                <span className="px-4 py-2 bg-primary-light text-white rounded-full text-sm">
                  Site Development
                </span>
                <span className="px-4 py-2 bg-accent-light text-white rounded-full text-sm">
                  Infrastructure
                </span>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center p-6 bg-light dark:bg-gray-800 rounded-xl hover-scale">
                      <Icon className="w-10 h-10 text-primary-light mx-auto mb-4" />
                      <div className="text-2xl font-bold text-primary-dark dark:text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-light dark:bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-heading font-bold text-primary-dark dark:text-white mb-8">
            Ready to Start Your Project?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+918233834003"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center space-x-2 hover-scale"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/918233834003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-white transition-all duration-300 hover-scale"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;