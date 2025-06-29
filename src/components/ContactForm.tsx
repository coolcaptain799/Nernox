import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create email content
      const subject = `New Inquiry from ${formData.name} - NERNOX AQUA ENERGY`;
      const body = `
Dear NERNOX AQUA ENERGY Team,

You have received a new inquiry through your website:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}

Message:
${formData.message}

Please respond to this inquiry at your earliest convenience.

Best regards,
Website Contact Form
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:nernoxaquaenergypvtltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
          <p className="text-gray-600 mb-8">
            Ready to revolutionize your energy solutions? Contact us to learn more about our innovative seawater electrolysis technology.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 rounded-full p-3">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Address</h4>
              <p className="text-gray-600">
                D.No: 4-8-3, Opposite Ambica Theatre<br />
                Western Street, Eluru-1<br />
                Eluru District, Andhra Pradesh - 534001
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-500 rounded-full p-3">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Phone Numbers</h4>
              <div className="text-gray-600 space-y-1">
                <a href="tel:+919949633283" className="block hover:text-green-600 transition-colors">+91 9949633283</a>
                <a href="tel:+917288906697" className="block hover:text-green-600 transition-colors">+91 7288906697</a>
                <a href="tel:+919392243903" className="block hover:text-green-600 transition-colors">+91 9392243903</a>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-600 rounded-full p-3">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <a 
                href="mailto:nernoxaquaenergypvtltd@gmail.com" 
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                nernoxaquaenergypvtltd@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
              placeholder="Tell us about your energy requirements or ask any questions about our technology..."
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5" />
              <span>Email client opened! Please send the pre-filled email to complete your inquiry.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span>Unable to open email client. Please contact us directly at the email above.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-semibold py-3 px-6 rounded-lg transform transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 hover:scale-105'
            } text-white`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Opening Email...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
          
          <p className="text-xs text-gray-500 text-center">
            This will open your email client with a pre-filled message
          </p>
        </form>
      </div>
    </div>
  );
};