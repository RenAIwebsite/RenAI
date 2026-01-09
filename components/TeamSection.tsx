
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold mb-8">Right People, Right Job</h2>
          </div>
          <div className="lg:col-span-2 space-y-12">
            {TEAM_MEMBERS.map((m, idx) => (
              <div key={idx} className="flex gap-8 p-8 bg-gray-50 rounded-[2rem]">
                <img src={m.image} alt={m.name} className="w-48 h-64 object-cover rounded-2xl" />
                <div>
                  <h3 className="text-2xl font-bold">{m.name}</h3>
                  <p className="text-blue-600 mb-4">{m.role}</p>
                  <p className="italic">"{m.bio}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
