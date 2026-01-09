
import React from 'react';
import { PAIN_POINTS, SOLUTIONS } from '../constants';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">告别运营混沌，迎接数字化控制</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-12 rounded-[2.5rem] bg-[#fef5f6] border border-gray-200">
            <h3 className="text-xl font-bold text-[#ff3d57] mb-10">传统运营痛点</h3>
            <div className="space-y-6">
              {PAIN_POINTS.map((p, idx) => (
                <div key={idx} className="flex justify-between p-4 bg-white rounded-xl">
                  <span>{p.text}</span>
                  <span className={`px-4 py-1 rounded-full text-xs status-badge-${p.color}`}>{p.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 rounded-[2.5rem] bg-[#f0fff4] border border-gray-200">
            <h3 className="text-xl font-bold text-[#00ca72] mb-10">RenAI 解决方案</h3>
            <div className="space-y-6">
              {SOLUTIONS.map((s, idx) => (
                <div key={idx} className="flex justify-between p-4 bg-white rounded-xl">
                  <span>{s.text}</span>
                  <span className={`px-4 py-1 rounded-full text-xs status-badge-${s.color}`}>{s.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
