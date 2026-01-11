
import React from 'react';
import { 
  BarChart3, 
  FileText, 
  Building2, 
  GraduationCap, 
  Gavel,
  Cpu,
  ShieldCheck,
  Lock,
  Globe,
  Server
} from 'lucide-react';
import { Feature, NavLink, TeamMember } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: '首页', href: 'home' },
  { label: '行业方案', href: 'solutions' },
  { label: '核心模块', href: 'features' },
  { label: '成功案例', href: 'success' },
  { label: '关于我们', href: 'team' },
];

export const SOLUTIONS_DATA = [
  {
    id: 'government',
    title: '政府项目 (PR1MA/PPR)',
    description: '为大规模公共住房提供端到端的资产底座，确保每一分资金流向都清晰透明。',
    icon: <Gavel className="w-10 h-10 text-[#a25ddc]" />,
    color: '#a25ddc',
    points: ['资金收支实时大屏', '自动化法律追收流程', '资产全生命周期监控']
  },
  {
    id: 'university',
    title: '大学与学生宿舍',
    description: '重新定义学生居住体验，通过无人化智能硬件减少 80% 的前台人力。',
    icon: <GraduationCap className="w-10 h-10 text-[#ff9900]" />,
    color: '#ff9900',
    points: ['智能水电表预付费', '移动端自助报修', '多校校区统一管理']
  },
  {
    id: 'corporate',
    title: '企业运营商 (BTO)',
    description: '专为高增长运营商设计的“业务引擎”，将所有管理环节标准化、自动化。',
    icon: <Building2 className="w-10 h-10 text-[#00ca72]" />,
    color: '#00ca72',
    points: ['LHDN E-Invoicing 自动化', 'CTOS 租客风险评级', 'SQL 会计系统实时同步']
  }
];

export const CORE_FEATURES: Feature[] = [
  {
    id: 'io-bridge',
    title: 'IoT 硬件桥接器',
    description: '通过云端直连门锁与电表，实现欠费自动锁门、充值自动通电。',
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 'risk-engine',
    title: '租客风险引擎',
    description: '集成 CTOS 与行业黑名单库，秒级分析潜在租客的信用评分。',
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 'accounting-hub',
    title: '财务自动化中心',
    description: '支持一键生成电子发票并完成印花税申报，财务报表自动出炉。',
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 'e-agreement',
    title: '无纸化签约模块',
    description: '从签约到印花税缴纳，全程数字闭环，合规且极其高效。',
    icon: <FileText className="w-8 h-8 text-blue-600" />,
  }
];

export const SECURITY_FEATURES = [
  {
    title: "数据主权与加密",
    desc: "符合马来西亚 PDPA 个人数据保护法，所有数据进行 AES-256 企业级加密。",
    icon: <Lock className="w-6 h-6 text-blue-500" />
  },
  {
    title: "银行级灾备",
    desc: "基于混合云架构，提供 99.99% 的系统可用性与实时异地冷备。",
    icon: <Server className="w-6 h-6 text-blue-500" />
  },
  {
    title: "多租户隔离",
    desc: "针对政府与大型集团，提供完全独立的数据环境与专用 API 通道。",
    icon: <Globe className="w-6 h-6 text-blue-500" />
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Rachel Lim',
    role: '创始人 & 首席执行官',
    bio: '13 年资深房产投资经验，致力于用 AI 重新定义房产运营资产底座。',
    image: 'https://picsum.photos/seed/rachel/400/600',
    accomplishments: ['南洋超级品牌大奖 2023', '13年行业积累', '10X 增长架构师']
  },
  {
    name: 'Kelvin Wong',
    role: '首席技术官',
    bio: '深耕 IoT 与企业级系统架构，曾主导多个政府级大规模资产管理系统开发。',
    image: 'https://picsum.photos/seed/kelvin/400/600',
    accomplishments: ['IoT 云架构专家', '数字安全顾问', '自动化引擎专家']
  }
];

export const PAIN_POINTS = [
  { text: '手动追租', status: '混乱', color: 'red' },
  { text: '碎片化沟通', status: '低效', color: 'red' },
  { text: '财务对账难', status: '高风险', color: 'red' },
  { text: '人力成本高', status: '难扩张', color: 'red' }
];

export const SOLUTIONS = [
  { text: '自动化工作流', status: '已解决', color: 'green' },
  { text: '统一通讯中心', status: '已上线', color: 'green' },
  { text: 'SQL 实时同步', status: '已对齐', color: 'green' },
  { text: '规模化扩展', status: '已就绪', color: 'green' }
];
