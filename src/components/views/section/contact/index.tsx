import React, { useState } from 'react';

const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Form validation state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Format message for WhatsApp
        const whatsappMessage = encodeURIComponent(
          `*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`
        );
        
        // WhatsApp API URL
        const whatsappUrl = `https://wa.me/6282162585692?text=${whatsappMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Reset form and show success message
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setSubmitStatus('success');
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 min-h-screen flex flex-col justify-center bg-gray-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-float-delay"></div>
      </div>
      
      {/* Section Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Lets <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 leading-relaxed">
            Have a project in mind or want to discuss opportunities? Drop me a message and Ill get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-3 gap-0">
              {/* Contact Info Sidebar */}
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 md:p-10 flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 relative">
                    <span className="relative z-10">Contact Info</span>
                    <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 rounded-full"></span>
                  </h3>
                  
                  <div className="space-y-6">
                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-blue-500/20 p-2.5 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
                        <a href="https://wa.me/6282162585692" className="text-gray-400 hover:text-blue-400 transition-colors inline-block mt-1">
                          +62 821-6258-5692
                        </a>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-purple-500/20 p-2.5 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Email</h4>
                        <a href="mailto:stevenjonathanalfredo785@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors inline-block mt-1">
                          stevenjonathanalfredo785@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-green-500/20 p-2.5 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Location</h4>
                        <p className="text-gray-400 mt-1">Semarang, Indonesia</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="mt-12">
                  <h4 className="text-white text-lg font-semibold mb-5 relative">
                    <span className="relative z-10">Follow Me</span>
                    <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500 rounded-full"></span>
                  </h4>
                  <div className="flex gap-3">
                    {/* GitHub */}
                    <a href="https://github.com/StevenJ0" className="bg-gray-800 hover:bg-gray-700 text-white p-2.5 rounded-lg transition-all hover:-translate-y-1 hover:shadow-md">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    
                    {/* LinkedIn */}
                    <a href="www.linkedin.com/in/steven-sihombing" className="bg-gray-800 hover:bg-gray-700 text-white p-2.5 rounded-lg transition-all hover:-translate-y-1 hover:shadow-md">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    
                    
                    {/* Instagram */}
                    <a href="https://www.instagram.com/steven_shmbng/" className="bg-gray-800 hover:bg-gray-700 text-white p-2.5 rounded-lg transition-all hover:-translate-y-1 hover:shadow-md">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Form Section */}
              <div className="md:col-span-2 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-8 relative">
                  <span className="relative z-10">Send a Message</span>
                  <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-blue-500 rounded-full"></span>
                </h3>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 bg-green-500/20 border border-green-500/40 rounded-lg p-4 text-green-400 flex items-start gap-3">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm mt-1 text-green-300">WhatsApp should open in a new tab shortly.</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 bg-red-500/20 border border-red-500/40 rounded-lg p-4 text-red-400 flex items-start gap-3">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">There was an issue</p>
                      <p className="text-sm mt-1 text-red-300">Please check the form for errors and try again.</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 font-medium text-sm">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-gray-800/70 border ${errors.name ? 'border-red-500/70' : 'border-gray-700 hover:border-gray-600'} rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all`}
                          placeholder="Your name"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2 font-medium text-sm">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-gray-800/70 border ${errors.email ? 'border-red-500/70' : 'border-gray-700 hover:border-gray-600'} rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium text-sm">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full bg-gray-800/70 border ${errors.subject ? 'border-red-500/70' : 'border-gray-700 hover:border-gray-600'} rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all`}
                        placeholder="What's this about?"
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  
                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 font-medium text-sm">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full bg-gray-800/70 border ${errors.message ? 'border-red-500/70' : 'border-gray-700 hover:border-gray-600'} rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all`}
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.message}
                      </p>
                    )}
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:-translate-y-0.5 hover:shadow-blue-500/30'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send via WhatsApp</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;