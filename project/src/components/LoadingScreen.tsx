import React from 'react';
import { useLoading } from '../contexts/LoadingContext';
import { Building2, Loader } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-primary-dark z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <Building2 className="w-16 h-16 text-primary-light mx-auto pulse-glow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader className="w-20 h-20 text-accent-light animate-spin opacity-30" />
          </div>
        </div>
        <h1 className="text-2xl font-heading font-bold text-white mb-2">
          NITIN HAIRTWAL
        </h1>
        <p className="text-accent-light text-sm tracking-widest uppercase">
          Civil Contractor
        </p>
        <div className="mt-6 w-64 h-1 bg-shadow-dark rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-light to-accent-light animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;