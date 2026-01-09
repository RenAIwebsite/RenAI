
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="text-2xl font-bold">Ren<span className="text-green-500">AI</span></span>
            <p className="text-slate-400 mt-6">您的数字化资产底座。</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-blue-400">联系我们</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3"><MapPin className="w-5 h-5" /> Kuala Lumpur</li>
              <li className="flex gap-3"><Phone className="w-5 h-5" /> +60 12 345 6789</li>
              <li className="flex gap-3"><Mail className="w-5 h-5" /> hello@renai.com.my</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-slate-500 text-sm">
          &copy; 2024 RenAI Technology. 版权所有。
        </div>
      </div>
    </footer>
  );
};

export default Footer;
