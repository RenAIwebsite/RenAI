mport React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import FeatureGrid from './components/FeatureGrid';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import RenAIAssistant from './components/RenAIAssistant';
import { SOLUTIONS_DATA, SECURITY_FEATURES } from './constants';
import { 
  CheckCircle,
  Building2,
  Cpu,
  ShieldCheck,
  Zap,
  X,
  Send,
  Shield
} from 'lucide-react';

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-[3rem] p-8 lg:p-12 w-full max-w-2xl relative z-10 shadow-2xl animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"><X /></button>
        <h2 className="text-4xl font-black mb-4">开启专业演示</h2>
        <p className="text-slate-500 mb-8 text-lg">留下您的联系方式，我们的顾问将在 24 小时内为您定制专属方案。</p>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('演示申请已收到，我们将尽快联系您！'); onClose(); }}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-slate-500">姓名</label>
              <input required type="text" className="w-full p-4 bg-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="您的姓名" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-slate-500">机构/企业名称</label>
              <input required type="text" className="w-full p-4 bg-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="例如：PR1MA / UTM" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-slate-500">电子邮箱</label>
            <input required type="email" className="w-full p-4 bg-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="work@company.com" />
          </div>
          <button type="submit" className="w-full py-5 gradient-bg text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
            <span>提交申请</span>
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

const HomePage = ({ onNavigate, onShowContact }: { onNavigate: (p: string) => void, onShowContact: () => void }) => (
  <div className="animate-in fade-in duration-500">
    <Hero />
    
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[#676879] uppercase tracking-[0.2em] mb-8">顶级合作伙伴与客户</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-3xl font-black tracking-tighter">CITICORP</div>
            <div className="text-3xl font-black tracking-tighter">UTM_UNIV</div>
            <div className="text-3xl font-black tracking-tighter">GOV_HOUSING</div>
            <div className="text-3xl font-black tracking-tighter">REIT_MALAYSIA</div>
            <div className="text-3xl font-black tracking-tighter">PR1MA_DEV</div>
          </div>
        </div>
      </div>
    </section>

    <ProblemSolution />

    <section className="py-32 bg-[#18191c] text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600/10 blur-[150px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
              您的运营 <br/>
              <span className="text-blue-400">数字化中枢</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
              RenAI 不仅仅是一个工具，它是您资产帝国的数字化基石。系统自动扩展，确保您的 SOP 100% 被执行。
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
          <div className="relative animate-float">
             <div className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="space-y-8 relative z-10">
                   <div className="flex items-center gap-6 p-6 bg-white/10 rounded-[2rem] border border-white/5">
                      <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg"><Building2 className="w-8 h-8" /></div>
                      <div>
                        <div className="font-bold text-xl">资产大屏</div>
                        <div className="text-sm text-slate-400">实时同步 12,402 个单元</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 p-6 bg-white/10 rounded-[2rem] border border-white/5">
                      <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg"><Cpu className="w-8 h-8" /></div>
                      <div>
                        <div className="font-bold text-xl">IoT 通道</div>
                        <div className="text-sm text-slate-400">85,200 条指令已执行</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 p-6 bg-white/10 rounded-[2rem] border border-white/5">
                      <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg"><ShieldCheck className="w-8 h-8" /></div>
                      <div>
                        <div className="font-bold text-xl">合规引擎</div>
                        <div className="text-sm text-slate-400">发票已同步 SQL 会计系统</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f8f9fb] rounded-[4rem] p-16 lg:p-24 border border-gray-100 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mb-8 text-blue-600">
              <Shield className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-black mb-6">政府级 <br/> 安全标准</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              我们深知大型机构对数据主权的要求。RenAI 采用多重加密与隔离技术，确保您的核心资产数据万无一失。
            </p>
          </div>
          <div className="lg:w-2/3 grid md:grid-cols-1 gap-8">
            {SECURITY_FEATURES.map((item, idx) => (
              <div key={idx} className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <FeatureGrid />
    <TeamSection />
  </div>
);

const SolutionsPage = ({ onShowContact }: { onShowContact: () => void }) => (
  <div className="pt-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <section className="bg-[#f5f6f8] py-32 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">行业深度定制</h1>
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
              <button 
                onClick={onShowContact}
                className="w-full py-5 rounded-2xl font-bold border-2 text-slate-900 border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
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
  const [isContactOpen, setIsContactOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'solutions': return <SolutionsPage onShowContact={() => setIsContactOpen(true)} />;
      case 'features': return <div className="pt-24"><FeatureGrid /></div>;
      case 'team': return <div className="pt-24"><TeamSection /></div>;
      case 'success': return (
        <div className="pt-24 bg-white animate-in slide-in-from-right-4 duration-500">
           <section className="monday-button-primary text-white py-32 text-center">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">数据见证成功</h1>
               <p className="text-2xl text-blue-100 max-w-3xl mx-auto">客户如何利用 RenAI 打造自动化运营帝国。</p>
             </div>
           </section>
           <div className="py-32">
              <div className="max-w-5xl mx-auto p-16 bg-[#18191c] rounded-[4rem] text-white relative">
                <div className="text-8xl font-black text-blue-600/20 absolute top-10 left-10 italic">"</div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-12 relative z-10 leading-tight">“在 RenAI 之前，我们是在‘救火’；在 RenAI 之后，我们是在‘看仪表盘’。这就是管理的本质区别。”</h2>
                <div className="flex items-center gap-6">
                  <img src="https://picsum.photos/seed/ceo/100/100" alt="Dato" className="w-16 h-16 rounded-full border-2 border-blue-500" />
                  <div>
                    <div className="text-xl font-bold">Dato' Sri Azman</div>
                    <div className="text-slate-500">Urban Living REIT 执行董事</div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      );
      default: return <HomePage onNavigate={setCurrentPage} onShowContact={() => setIsContactOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} onShowContact={() => setIsContactOpen(true)} />
      
      <main>
        {renderPage()}

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
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="w-full sm:w-auto px-16 py-6 bg-blue-600 text-white rounded-full font-black text-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                  立即申请演示
                </button>
                <div className="flex items-center gap-4 text-slate-500 font-bold">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100"></div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-purple-100"></div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-green-100"></div>
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
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default App;
