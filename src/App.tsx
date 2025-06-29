import React from 'react';
import { 
  Waves, 
  Zap, 
  Leaf, 
  Globe, 
  Award, 
  TrendingUp, 
  Shield, 
  DollarSign,
  ChevronDown,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import { ElectrolysisSystem } from './components/ElectrolysisSystem';
import { ContactForm } from './components/ContactForm';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-full p-2">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">NERNOX AQUA ENERGY</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('technology')} className="text-gray-700 hover:text-blue-600 transition-colors">Technology</button>
              <button onClick={() => scrollToSection('why-nernox')} className="text-gray-700 hover:text-blue-600 transition-colors">Why NERNOX</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-green-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Placeholder */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-600 to-green-500 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300">
              <Waves className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              NERNOX
            </span>
            <br />
            <span className="text-3xl md:text-5xl">AQUA ENERGY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Fueling Tomorrow from the Ocean Today
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            Revolutionary seawater electrolysis technology producing 99.99% pure oxygen and hydrogen 
            through our innovative Jalavayu Process with IoT integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('technology')}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Explore Technology
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">NERNOX</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                NERNOX AQUA ENERGY Private Limited is at the forefront of clean energy innovation, 
                specializing in advanced seawater electrolysis technology that transforms ocean water 
                into pure hydrogen and oxygen through our proprietary Jalavayu Process.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Global Vision</h3>
                <p className="text-gray-600">
                  Pioneering sustainable energy solutions that harness the power of our oceans 
                  to create a cleaner, greener future for generations to come.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation Leader</h3>
                <p className="text-gray-600">
                  Our cutting-edge Jalavayu Process represents a breakthrough in electrolysis technology, 
                  delivering unparalleled efficiency and purity in hydrogen and oxygen production.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Excellence</h3>
                <p className="text-gray-600">
                  Committed to delivering 99.99% pure hydrogen and oxygen through our advanced 
                  IoT-controlled systems and rigorous quality assurance processes.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Technology</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                The Jalavayu Process represents a revolutionary approach to seawater electrolysis, 
                combining hybrid system architecture with advanced IoT control for optimal performance.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <ElectrolysisSystem />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <AnimatedSection delay={400}>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Hybrid Design</h4>
                <p className="text-sm text-gray-600">Advanced hybrid electrolysis system for maximum efficiency</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Membrane-less</h4>
                <p className="text-sm text-gray-600">Innovative membrane-less design reduces maintenance costs</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">IoT Controlled</h4>
                <p className="text-sm text-gray-600">Smart IoT integration for real-time monitoring and control</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Direct Processing</h4>
                <p className="text-sm text-gray-600">Processes seawater without complete desalination</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why NERNOX Section */}
      <section id="why-nernox" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">NERNOX</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our innovative approach to clean energy production offers unmatched advantages 
                for businesses and organizations seeking sustainable solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-3 flex-shrink-0">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Eco-Friendly</h3>
                    <p className="text-gray-600">
                      Zero harmful emissions and minimal environmental impact. Our process uses renewable 
                      ocean resources to create clean energy without depleting natural reserves.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Scalable Solutions</h3>
                    <p className="text-gray-600">
                      Our technology scales efficiently from small installations to large industrial 
                      applications, adapting to your specific energy requirements and growth plans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 rounded-full p-3 flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Cost-Effective</h3>
                    <p className="text-gray-600">
                      Lower operational costs through our membrane-less design and IoT optimization, 
                      delivering exceptional ROI and long-term savings on energy production.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
                    <div className="text-sm text-gray-600">Purity Level</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">IoT Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">Zero</div>
                    <div className="text-sm text-gray-600">Emissions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Renewable</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Contact <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Us</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Ready to transform your energy infrastructure? Let's discuss how NERNOX can 
                power your sustainable future with our innovative ocean-based solutions.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-full p-2">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">NERNOX AQUA ENERGY</span>
              </div>
              <p className="text-gray-300">
                Pioneering the future of clean energy through innovative seawater electrolysis technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-white transition-colors">About Us</button>
                <button onClick={() => scrollToSection('technology')} className="block text-gray-300 hover:text-white transition-colors">Technology</button>
                <button onClick={() => scrollToSection('why-nernox')} className="block text-gray-300 hover:text-white transition-colors">Why NERNOX</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p>+91 9949633283</p>
                <p>nernoxaquaenergypvtltd@gmail.com</p>
                <p>Eluru, Andhra Pradesh</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 NERNOX AQUA ENERGY Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;