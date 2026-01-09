
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import FeatureGrid from './components/FeatureGrid';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import RenAIAssistant from './components/RenAIAssistant';
import { SOLUTIONS_DATA } from './constants';
import { 
  CheckCircle,
  BarChart,
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  Cpu,
  ShieldCheck,
  Zap
} from 'lucide-react';

const HomePage = ({ onNavigate }: { onNavigate: (p: string) => void }) => (
  <div className="animate-in fade-in duration-500">
    <Hero />
    
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[#676879] uppercase tracking-[0.2em] mb-4">顶级合作伙伴与客户</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-3xl font-black">CITICORP</div>
            <div className="text-3xl font-black">UTM_UNIV</div>
            <div className="text-3xl font-black">GOV_HOUSING</div>
            <div className="text-3xl font-black">REIT_MALAYSIA</div>
            <div className="text-3xl font-black">PR1MA_DEV</div>
          </div>
        </div>
      </div>
    </section>

    <ProblemSolution />

    {/* Section for core platform value */}
    <section className="py-24 bg-[#18191c] text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600/10 blur-[150px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              您的运营 <br/>
              <span className="text-blue-400">数字化中枢</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              RenAI 不仅仅是一个工具，它是您资产帝国的数字化基石。无论是 50 间房还是 50,000 间房，系统都能自动扩展，确保您的 SOP 100% 被执行。
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <div className="text-5xl font-black text-blue-400 mb-2">70%</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">成本缩减</div>
              </div>
              <div>
                <div className="text-5xl font-black text-[#00ca72] mb-2">10X</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">规模上限提升</div>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('features')}
              className="mt-12 px-10 py-5 bg-blue-600 rounded-full font-bold text-lg hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <span>探索核心技术模块</span>
              <Zap className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
             <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl">
                <div className="space-y-6">
                   <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center"><Building2 /></div>
                      <div>
                        <div className="font-bold">资产大屏</div>
                        <div className="text-sm text-slate-400">实时同步 12,402 个单元</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center"><Cpu /></div>
                      <div>
                        <div className="font-bold">IoT 通道</div>
                        <div className="text-sm text-slate-400">85,200 条硬件指令已执行</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center"><ShieldCheck /></div>
                      <div>
                        <div className="font-bold">合规引擎</div>
                        <div className="text-sm text-slate-400">所有发票已同步 SQL 会计系统</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <FeatureGrid />
    <TeamSection />
  </div>
);

const SolutionsPage = () => (
  <div className="pt-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <section className="bg-[#f5f6f8] py-24 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-8xl font-black mb-8">行业深度定制</h1>
        <p className="text-2xl text-[#676879] max-w-3xl mx-auto leading-relaxed">
          我们深知不同资产类型的运营逻辑。RenAI 提供针对政府、大学及企业的专项模块。
        </p>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {SOLUTIONS_DATA.map((item) => (
            <div key={item.id} className="p-12 monday-card rounded-[3rem] bg-white group cursor-default">
              <div className="mb-10 p-6 bg-[#f5f6f8] w-fit rounded-3xl group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: item.color }}>{item.title}</h3>
              <p className="text-lg text-[#676879] mb-10 leading-relaxed">{item.description}</p>
              <ul className="space-y-4 mb-10">
                {item.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                    <CheckCircle className="w-6 h-6" style={{ color: item.color }} />
                    {p}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 rounded-2xl font-bold border-2 text-slate-900 border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                获取定制方案
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'solutions': return <SolutionsPage />;
      case 'features': return <div className="pt-24"><FeatureGrid /></div>;
      case 'team': return <div className="pt-24"><TeamSection /></div>;
      case 'success': return (
        <div className="pt-24 bg-white animate-in slide-in-from-right-4 duration-500">
           <section className="monday-button-primary text-white py-32 text-center">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h1 className="text-6xl md:text-8xl font-black mb-8">数据见证成功</h1>
               <p className="text-2xl text-blue-100 max-w-3xl mx-auto">客户如何利用 RenAI 打造自动化运营帝国。</p>
             </div>
           </section>
           <div className="py-32">
              <div className="max-w-5xl mx-auto p-16 bg-[#18191c] rounded-[4rem] text-white relative">
                <div className="text-8xl font-black text-blue-600/20 absolute top-10 left-10 italic">"</div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-12 relative z-10 leading-tight">“在 RenAI 之前，我们是在‘救火’；在 RenAI 之后，我们是在‘看仪表盘’。这就是管理的本质区别。”</h2>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="text-xl font-bold">Dato' Sri Azman</div>
                    <div className="text-slate-500">Urban Living REIT 执行董事</div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      );
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main>
        {renderPage()}

        {/* Action Bar / Contact Trigger */}
        <section className="py-32 bg-[#f5f6f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[4rem] p-16 lg:p-24 text-center border border-gray-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>
              <h2 className="text-5xl lg:text-7xl font-black mb-10 text-[#323338] tracking-tight">
                准备好进入 <br/>
                <span className="text-blue-600">Property 3.0 时代</span> 了吗？
              </h2>
              <p className="text-2xl text-[#676879] mb-12 max-w-2xl mx-auto leading-relaxed">
                加入 1,000+ 顶级运营商。在未来 3 年内，我们将助力管理超过 100,000 个单元。
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <button className="w-full sm:w-auto px-16 py-6 bg-blue-600 text-white rounded-full font-black text-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95">
                  立即申请演示
                </button>
                <div className="flex items-center gap-4 text-slate-500 font-bold">
                  <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-100"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-green-100"></div>
                  </div>
                  <span>已有 500+ 企业已加入</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <RenAIAssistant />
    </div>
  );
};

export default App;
