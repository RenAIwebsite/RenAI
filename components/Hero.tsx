
import React from 'react';
import { ArrowRight, PlayCircle, Star, ShieldCheck, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f5f6f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl lg:text-8xl font-black font-heading text-[#323338] leading-[1.1] mb-8">
          专为下一代运营商打造的 <br/>
          <span className="gradient-text">房产管理操作系统</span>
        </h1>
        <p className="text-2xl text-[#676879] mb-12 font-medium max-w-3xl mx-auto">
          从“救火式运营”到“绝对掌控”。RenAI 帮助政府、大学及企业实现管理标准化。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-12 py-5 monday-button-primary text-white rounded-full font-bold text-xl shadow-lg">
            立即免费开始
          </button>
          <button className="w-full sm:w-auto px-12 py-5 bg-white border-2 border-[#d0d4d9] rounded-full font-bold text-xl hover:border-blue-500">
            观看产品演示
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
