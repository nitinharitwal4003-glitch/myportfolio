import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle, Clock, Globe } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('projectType', data.projectType);
      formData.append('message', data.message);

      const response = await fetch('https://formspree.io/f/nitinharitwal4003@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Road Construction',
    'Bridge Development',
    'Site Development',
    'Infrastructure Work',
    'Utility Installation',
    'General Inquiry'
  ];

  const smsTemplates = [
    { label: 'Request Quote', message: 'Hi, I would like to request a quote for my construction project. Please contact me.' },
    { label: 'Project Inquiry', message: 'Hello, I have a construction project inquiry and would like to discuss the details.' },
    { label: 'General Query', message: 'Hi, I have some questions about your construction services. Please get in touch.' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-light dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to start your construction project? Get in touch with us through any of the convenient methods below.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Email Form Section */}
          <div className="lg:col-span-2 slide-in-left">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-dark dark:text-white">
                    Send Message
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill out the form below for detailed project inquiries
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 bounce-in">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        className="form-input w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        className="form-input w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className="form-input w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light focus:border-transparent"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        {...register('projectType')}
                        className="form-input w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={6}
                      className="form-input w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light focus:border-transparent resize-none"
                      placeholder="Please describe your project requirements, timeline, and any specific details..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full px-8 py-4 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner w-5 h-5 border-2 border-white/20 border-t-white rounded-full"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Methods Sidebar */}
          <div className="space-y-8 slide-in-right">
            {/* Call Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark dark:text-white">
                    Call Direct
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Immediate response
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Phone Number:</p>
                  <p className="text-lg font-semibold text-primary-dark dark:text-white">
                    +91 8233834003
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Available: 9 AM - 7 PM (Mon-Sat)</span>
                </div>

                <a
                  href="tel:+918233834003"
                  className="btn-primary w-full px-6 py-3 rounded-lg text-white font-semibold text-center block hover-scale"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* WhatsApp Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark dark:text-white">
                    WhatsApp Chat
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Quick messaging
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/918233834003"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg text-center transition-colors hover-scale"
              >
                Start WhatsApp Chat
              </a>
            </div>

            {/* SMS Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark dark:text-white">
                    Quick SMS
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Pre-filled templates
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {smsTemplates.map((template, index) => (
                  <a
                    key={index}
                    href={`sms:+918233834003?body=${encodeURIComponent(template.message)}`}
                    className="block w-full px-4 py-3 border border-gray-200 dark:border-gray-600 hover:border-primary-light rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {template.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Location Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-dark dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Service area
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Based in:</p>
                  <p className="text-lg font-semibold text-primary-dark dark:text-white">
                    Sikar, Rajasthan, India
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Globe className="w-4 h-4" />
                  <span>Serving Rajasthan & nearby states</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;