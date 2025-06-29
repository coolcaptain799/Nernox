import React from 'react';
import { Zap, Droplets, Wind, Cpu, Waves } from 'lucide-react';

export const ElectrolysisSystem: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-200/20">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Hybrid Electrolysis System with IoT Integration
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Input Section */}
        <div className="text-center space-y-4">
          <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto animate-pulse">
            <Waves className="w-8 h-8 text-white" />
          </div>
          <h4 className="font-semibold text-gray-800">Seawater Input</h4>
          <p className="text-sm text-gray-600">Without complete desalination</p>
        </div>

        {/* Process Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-2 right-2">
              <Cpu className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
            <h4 className="font-bold mb-4 text-center">Jalavayu Process</h4>
            
            {/* Electrodes */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-center">
                <div className="w-4 h-12 bg-gradient-to-b from-gray-300 to-gray-500 rounded mx-auto mb-2"></div>
                <span className="text-xs">Anode</span>
              </div>
              
              <div className="flex-1 mx-4 relative">
                <div className="border-t-2 border-dashed border-white/50 relative">
                  <div className="absolute -top-1 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                  <div className="absolute -top-1 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                </div>
                <Zap className="w-6 h-6 text-yellow-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
              
              <div className="text-center">
                <div className="w-4 h-12 bg-gradient-to-b from-gray-300 to-gray-500 rounded mx-auto mb-2"></div>
                <span className="text-xs">Cathode</span>
              </div>
            </div>
            
            <div className="text-center text-sm">
              <p>IoT Controlled Hybrid System</p>
              <p className="text-xs opacity-75">Membrane-less Design</p>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 animate-bounce">
              <Wind className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800">99.99% Pure Oxygen</h4>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 animate-bounce" style={{animationDelay: '0.3s'}}>
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800">99.99% Pure Hydrogen</h4>
          </div>
        </div>
      </div>
      
      {/* IoT Features */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
          <Cpu className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <span className="text-xs text-gray-700">Real-time Monitoring</span>
        </div>
        <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
          <Zap className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <span className="text-xs text-gray-700">Energy Optimization</span>
        </div>
        <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
          <Wind className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <span className="text-xs text-gray-700">Quality Control</span>
        </div>
        <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
          <Waves className="w-6 h-6 text-teal-600 mx-auto mb-2" />
          <span className="text-xs text-gray-700">Remote Access</span>
        </div>
      </div>
    </div>
  );
};