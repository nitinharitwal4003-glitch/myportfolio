import React from 'react';
import { Instagram, Facebook, MessageCircle, Camera, ExternalLink, Users } from 'lucide-react';

const SocialPage: React.FC = () => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      username: '@Nitinji123',
      status: 'Civil Contractor & Infrastructure Specialist',
      followers: '1.2K',
      icon: Instagram,
      url: 'https://www.instagram.com/p/DLmf-z0RsCzkluZD8-sbpkJI42ou6SJZ8Ui9OQ0/?igsh=MW16bXJtaTRrMzZzbg==',
      color: 'from-pink-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/20'
    },
    {
      name: 'Facebook',
      username: 'NITIN SHARMA',
      status: 'Construction Professional',
      followers: '890',
      icon: Facebook,
      url: 'https://www.facebook.com/share/1ArJZMi3Er/?mibextid=wwXIfr',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/20'
    },
    {
      name: 'Snapchat',
      username: '@nitinsharma4354',
      status: 'Daily Construction Updates',
      followers: '567',
      icon: Camera,
      url: 'https://t.snapchat.com/iYKsPHZY',
      color: 'from-yellow-400 to-yellow-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-900/20'
    },
    {
      name: 'WhatsApp',
      username: 'NITIN SHARMA',
      status: 'Contractor - Available for Projects',
      followers: 'Direct',
      icon: MessageCircle,
      url: 'https://wa.me/918233834003',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-50 dark:from-green-900/20 dark:to-green-900/20'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-light dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark dark:text-white mb-6">
            Connect With Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Follow my journey in civil construction and infrastructure development across multiple social platforms.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto mt-8"></div>
        </div>

        {/* Social Media Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.name}
                className={`${platform.bgColor} p-8 rounded-2xl hover-scale transition-all duration-300 fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${platform.color} shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </a>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {platform.username}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {platform.status}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {platform.followers} {platform.name === 'WhatsApp' ? 'Contact' : 'Followers'}
                    </span>
                  </div>
                  
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-2 rounded-full bg-gradient-to-r ${platform.color} text-white text-sm font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    {platform.name === 'WhatsApp' ? 'Chat Now' : 'Follow'}
                  </a>
                </div>

                {/* Platform specific features */}
                {platform.name === 'Instagram' && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      📸 Daily project updates and behind-the-scenes content
                    </p>
                  </div>
                )}

                {platform.name === 'Facebook' && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      🏗️ Professional updates and project showcases
                    </p>
                  </div>
                )}

                {platform.name === 'Snapchat' && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ⚡ Real-time construction progress and site updates
                    </p>
                  </div>
                )}

                {platform.name === 'WhatsApp' && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      💬 Direct communication for project inquiries
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-heading font-bold text-primary-dark dark:text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to discuss your next construction project? Connect with me on any platform 
            or reach out directly for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918233834003"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold hover-scale"
            >
              Start WhatsApp Chat
            </a>
            <a
              href="tel:+918233834003"
              className="px-8 py-4 rounded-full border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-white transition-all duration-300 hover-scale"
            >
              Call Direct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;