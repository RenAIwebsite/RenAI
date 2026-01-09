
import React from 'react';
import { CORE_FEATURES } from '../constants';

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16">World-Class Tech Stack</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {CORE_FEATURES.map((f) => (
            <div key={f.id} className="bg-white p-8 rounded-3xl monday-card group">
              <div className="mb-6 p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
