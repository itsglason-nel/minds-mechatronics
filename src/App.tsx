/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, 
  Wrench, 
  Cpu, 
  Factory, 
  Layout, 
  Code, 
  Rocket, 
  Package, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Globe,
  ChevronRight,
  Star,
  Plus,
  Menu,
  X,
  Bot,
  Monitor,
  HardHat,
  Zap,
  Target,
  Lock,
  Plug,
  Car,
  Pill,
  Layers,
  Activity,
  ShieldCheck,
  FlaskConical
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const moveCursor = (e: MouseEvent) => {
      const cursor = document.getElementById('cursor-dot');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.borderRadius = '50%';
        cursor.style.backgroundColor = '#FFD600';
        cursor.style.position = 'fixed';
        cursor.style.transform = 'translate(-50%, -50%)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const stats = [
    { label: 'Years Experience', value: 6 },
    { label: 'Machines Deployed', value: 200 },
    { label: 'Satisfaction', value: 98, suffix: '%' },
  ];

  const services = [
    { id: 'oem', icon: <Factory className="w-8 h-8" />, title: 'OEM', desc: "Original Equipment Manufacturer. Defined as a company whose goods are used as components in another company's products, built to their exact needs and specifications." },
    { id: 'design', icon: <Layout className="w-8 h-8" />, title: 'Design', desc: "Mechanical and Electrical Design. We provide automation machines designed from scratch or convert manual/traditional work into automated machines with efficiency and faster output." },
    { id: 'programming', icon: <Code className="w-8 h-8" />, title: 'Programming', desc: "Machine Programming. We provide new machine programs, program edits and modernization, and program improvements to optimize your existing industrial systems." },
    { id: 'development', icon: <Rocket className="w-8 h-8" />, title: 'Development', desc: "Modernization and Conversion. We keep pace with fast-evolving technology providing improvements on mechanical/electrical designs, programming, robotics, and production line automation." },
    { id: 'spareparts', icon: <Package className="w-8 h-8" />, title: 'Spare Parts', desc: "Looking for pneumatic cylinders, motors, cameras, LED lights, PLC controllers, and automation products? We source them and also offer jigs or machine fixture replacements." },
    { id: 'troubleshoot', icon: <Wrench className="w-8 h-8" />, title: 'Troubleshooting', desc: "Rapid diagnosis and repair of mechanical, electrical, and software failures. Minimize downtime with our responsive on-site and remote support team available when you need us." },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f5f5] font-sans selection:bg-[#FFD600] selection:text-[#080808]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] transition-all duration-300 ${isScrolled ? 'py-3 bg-[#080808]/95 backdrop-blur-lg border-b border-[#FFD600]/10' : 'py-5 bg-transparent'}`}>
        <a href="#" className="flex flex-col leading-none no-underline group">
          <div className="font-sans font-extrabold text-2xl tracking-[1px] text-[#FFD600]">MIndS</div>
          <div className="text-[0.6rem] tracking-[2px] uppercase text-white/60 mt-1 group-hover:text-white/90 transition-colors font-bold">Mechatronics Industrial Solutions</div>
        </a>
        
        <ul className="hidden md:flex items-center gap-9 list-none">
          {['About', 'Services', 'Clients', 'Industries'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-[0.78rem] font-semibold tracking-[2px] uppercase hover:text-[#FFD600] transition-colors relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFD600] hover:after:w-full after:transition-all">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="bg-[#FFD600] text-[#080808] px-6 py-2 font-bold text-[0.78rem] tracking-[2px] uppercase [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))] hover:bg-white transition-colors">
              Get a Quote
            </a>
          </li>
        </ul>

        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[280px] bg-[#080808] flex flex-col p-8 border-l border-white/10 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex flex-col leading-none">
                  <div className="font-sans font-extrabold text-xl tracking-[1px] text-[#FFD600]">MIndS</div>
                  <div className="text-[0.5rem] tracking-[1.5px] uppercase text-white/60 mt-1 font-bold">Mechatronics Industrial Solutions</div>
                </div>
                <button 
                  className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-full hover:bg-[#FFD600] hover:text-[#080808] transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mb-auto items-end">
                {['About', 'Mission', 'Services', 'Clients', 'Training', 'Contact'].map((item, i) => (
                  <motion.a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="font-display text-base tracking-[2px] hover:text-[#FFD600] transition-colors w-fit text-right uppercase"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10 flex flex-col items-end">
                <div className="text-[0.55rem] tracking-[3px] uppercase text-white/30 mb-4 text-right">Get in Touch</div>
                <div className="flex flex-col gap-4 items-end">
                  <a href="tel:+639171137305" className="flex items-center gap-3 text-[0.7rem] text-white/60 hover:text-[#FFD600] transition-colors justify-end text-right">
                    +63 917 113 7305 <Phone className="w-3.5 h-3.5 text-[#FFD600]" />
                  </a>
                  <a href="tel:0495567723" className="flex items-center gap-3 text-[0.7rem] text-white/60 hover:text-[#FFD600] transition-colors justify-end text-right">
                    049-556-7723 <Phone className="w-3.5 h-3.5 text-[#FFD600]" />
                  </a>
                  <a href="mailto:info@mechatronicsindustrial.com" className="flex items-center gap-3 text-[0.7rem] text-white/60 hover:text-[#FFD600] transition-colors justify-end text-right">
                    info@mechatronicsindustrial.com <Mail className="w-3.5 h-3.5 text-[#FFD600]" />
                  </a>
                  <div className="flex items-start gap-3 text-[0.65rem] text-white/40 justify-end text-right max-w-[200px]">
                    National Highway, Brgy. Makiling, Calamba City, Laguna <MapPin className="w-3.5 h-3.5 text-[#FFD600] flex-shrink-0 mt-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
        <div className="flex flex-col justify-center px-[5vw] pt-32 pb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#FFD600]/10 border border-[#FFD600]/25 px-4 py-1.5 text-[0.65rem] tracking-[3px] uppercase text-[#FFD600] mb-8 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD600] animate-pulse" />
            Est. 2019 — Calamba City, Laguna PH
          </motion.div>
          
          <div className="flex items-center gap-3 text-[0.75rem] tracking-[4px] uppercase text-[#FFD600] mb-4">
            <div className="w-6 h-[2px] bg-[#FFD600]" />
            Industrial Automation
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.92] tracking-[2px] mb-8">
            WE<br />ENABLE<br />YOU TO<br /><span className="text-transparent [text-stroke:1px_#FFD600] [-webkit-text-stroke:1px_#FFD600] sm:[text-stroke:2px_#FFD600] sm:[-webkit-text-stroke:2px_#FFD600]">CREATE</span>
          </h1>
          
          <p className="text-lg text-white/60 leading-relaxed max-w-md mb-10">
            MIndS — Mechatronics Industrial Solutions delivers cutting-edge machine design, automation systems,
            and technical support — built to boost quality, safety, and productivity on the factory floor.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-14">
            <a href="#services" className="bg-[#FFD600] text-[#080808] px-9 py-3.5 font-bold text-[0.8rem] tracking-[2px] uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-white hover:-translate-y-0.5 transition-all">
              Explore Services
            </a>
            <a href="#contact" className="border border-white/25 px-9 py-3.5 font-bold text-[0.8rem] tracking-[2px] uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:border-[#FFD600] hover:text-[#FFD600] hover:-translate-y-0.5 transition-all">
              Get a Quote
            </a>
          </div>
          
          <div className="flex gap-10 flex-wrap">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-5xl text-[#FFD600] leading-none tracking-[2px]">
                  {stat.value}{stat.suffix || '+'}
                </div>
                <div className="text-[0.65rem] tracking-[2px] uppercase text-white/40 mt-1">
                  {stat.label.split(' ').map((word, i) => <div key={i}>{word}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-[#111111] min-h-[400px] lg:min-h-screen overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(60vw,460px)] h-[min(60vw,460px)] opacity-[0.07] animate-[spin_40s_linear_infinite]">
            <Settings className="w-full h-full text-[#FFD600]" />
          </div>
          <div className="absolute top-[20%] right-[10%] w-[min(20vw,160px)] h-[min(20vw,160px)] opacity-[0.1] animate-[spin_20s_linear_infinite_reverse]">
            <Settings className="w-full h-full text-[#FFD600]" />
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-12">
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#FFD600]/5 border border-[#FFD600]/20 p-6 md:p-8 w-full max-w-xs"
            >
              <div className="text-[#FFD600] mb-3"><Settings className="w-8 h-8" /></div>
              <div className="font-display text-2xl tracking-[2px] text-[#FFD600]">Machine Design & Build</div>
              <div className="text-sm text-white/50 mt-1 leading-relaxed">Custom industrial machines engineered precisely for your production line.</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              className="bg-[#FFD600]/5 border border-[#FFD600]/20 p-6 md:p-8 w-full max-w-xs"
            >
              <div className="text-[#FFD600] mb-3"><Bot className="w-8 h-8" /></div>
              <div className="font-display text-2xl tracking-[2px] text-[#FFD600]">Automation Systems</div>
              <div className="text-sm text-white/50 mt-1 leading-relaxed">Smart automation reducing manual labor and maximizing uptime.</div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-12 left-12 [writing-mode:vertical-rl] text-[0.65rem] tracking-[3px] uppercase text-white/20">
            Industrial · Mechatronics · Automation
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-[1px] h-[50px] bg-gradient-to-b from-[#FFD600] to-transparent animate-pulse" />
          <span className="text-[0.6rem] tracking-[3px] uppercase text-white/30">Scroll</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-[5vw] bg-[#111111]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative hidden md:block">
            <div className="aspect-[3/4] bg-[#1a1a1a] [clip-path:polygon(0_0,88%_0,100%_8%,100%_100%,12%_100%,0_92%)] overflow-hidden flex flex-col items-center justify-center gap-6">
              <div className="font-sans font-extrabold text-6xl lg:text-8xl text-[#FFD600]/10 tracking-[2px]">MIndS</div>
              <div className="flex gap-4 lg:gap-8">
                <Settings className="w-10 h-10 lg:w-14 lg:h-14 text-[#FFD600]" />
                <Wrench className="w-10 h-10 lg:w-14 lg:h-14 text-[#FFD600]" />
                <Cpu className="w-10 h-10 lg:w-14 lg:h-14 text-[#FFD600]" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-24 h-24 lg:w-36 lg:h-36 bg-[#FFD600] [clip-path:polygon(0_0,80%_0,100%_20%,100%_100%,0_100%)] flex flex-col items-center justify-center">
              <div className="font-display text-2xl lg:text-4xl text-[#080808]">2019</div>
              <div className="text-[0.45rem] lg:text-[0.55rem] tracking-[2px] uppercase text-[#080808]/60">Est.</div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#FFD600] mb-5">
              <div className="w-5 h-[2px] bg-[#FFD600]" />
              ABOUT MIndS
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-[2px] mb-8">
              BUILT FOR<br /><span className="text-transparent [-webkit-text-stroke:1.5px_#FFD600]">INDUSTRY</span>
            </h2>
            <p className="text-[#f5f5f5]/60 text-lg leading-relaxed mb-6">
              MIndS — Mechatronics Industrial Solutions, Inc. started in 2019. Our personnel has wide technical
              experience in Factory Automation. We guarantee to provide good services to our customers.
            </p>
            <p className="text-[#f5f5f5]/60 text-lg leading-relaxed mb-8">
              Our mission: <strong className="text-[#FFD600]">Our Customers Come First.</strong> We
              provide technical support creating machines that ensure quality outputs, process improvements, productivity,
              and safety in operations.
            </p>
            
            <div className="mb-10">
              <h4 className="font-display text-xl tracking-[3px] text-[#FFD600] mb-4">Our Values</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Quality', 'Safety', 'Integrity', 'Community'].map((val) => (
                  <div key={val} className="flex items-center gap-3 p-3 border border-white/5 hover:border-[#FFD600] hover:bg-[#FFD600]/5 transition-all group">
                    <div className="w-2 h-2 bg-[#FFD600] rounded-full group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="bg-[#FFD600] text-[#080808] px-9 py-3.5 font-bold text-[0.8rem] tracking-[2px] uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-white transition-all">
                Our Services
              </a>
              <a href="#contact" className="border border-white/25 px-9 py-3.5 font-bold text-[0.8rem] tracking-[2px] uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:border-[#FFD600] hover:text-[#FFD600] transition-all">
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 px-[5vw] bg-[#080808]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#FFD600] mb-5">
              <div className="w-5 h-[2px] bg-[#FFD600]" />
              Our Mission
            </div>
            <div className="font-display text-5xl md:text-8xl leading-[0.95] tracking-[2px] text-white mb-8">
              "WE<br />ENABLE<br />YOU TO<br /><span className="text-[#FFD600]">CREATE"</span>
            </div>
            <div className="w-20 h-[3px] bg-[#FFD600] mb-8" />
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              To provide technical solutions by creating and developing machines that will ensure
              customers quality product outputs, process improvements, productivity, safety in production operations, and
              manpower reductions.
            </p>
            <p className="text-white/45 leading-relaxed">
              We also provide machine services like program modifications, design modifications, and
              machine troubleshooting — backed by years of factory automation experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <Settings className="w-8 h-8" />, value: 200, label: 'Machines Built', desc: 'Custom machines designed & deployed' },
              { icon: <Factory className="w-8 h-8" />, value: 50, label: 'Partner Companies', desc: 'Trusted by manufacturers nationwide' },
              { icon: <Monitor className="w-8 h-8" />, value: 300, label: 'Programs Written', desc: 'PLC programs created & modernized' },
              { icon: <HardHat className="w-8 h-8" />, value: 40, label: '% Avg Manpower Saved', desc: 'Average workforce reduction per line', suffix: '%' },
            ].map((ach) => (
              <div key={ach.label} className="p-6 sm:p-8 border border-white/5 bg-white/[0.02] text-center hover:border-[#FFD600]/30 hover:bg-[#FFD600]/5 hover:-translate-y-1.5 transition-all relative overflow-hidden group">
                <div className="text-[#FFD600]/80 group-hover:text-[#FFD600] transition-colors flex justify-center mb-4">{ach.icon}</div>
                <div className="font-display text-4xl sm:text-5xl text-[#FFD600] leading-none tracking-[2px]">{ach.value}{ach.suffix || '+'}</div>
                <div className="text-[0.65rem] sm:text-[0.7rem] tracking-[2px] uppercase text-white/45 mt-2">{ach.label}</div>
                <div className="text-[0.75rem] sm:text-[0.8rem] text-white/35 mt-2 leading-tight">{ach.desc}</div>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFD600] scale-x-0 group-hover:scale-x-100 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-[5vw] bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute top-12 right-[2vw] font-display text-[10rem] lg:text-[14rem] text-white/[0.015] pointer-events-none tracking-[8px] whitespace-nowrap">
          SERVICES
        </div>
        
        <div className="flex justify-between items-end mb-16 flex-wrap gap-8 relative z-10">
          <div>
            <div className="flex items-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#FFD600] mb-5">
              <div className="w-5 h-[2px] bg-[#FFD600]" />
              What We Do
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-[2px]">
              OUR<br /><span className="text-transparent [-webkit-text-stroke:1.5px_#FFD600]">SERVICES</span>
            </h2>
          </div>
          <a href="#contact" className="border border-white/25 px-9 py-3.5 font-bold text-[0.8rem] tracking-[2px] uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:border-[#FFD600] hover:text-[#FFD600] transition-all">
            Request a Service
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {services.map((svc) => (
            <div 
              key={svc.id} 
              className="bg-[#111111] p-10 border border-white/5 relative overflow-hidden group cursor-pointer hover:-translate-y-1.5 transition-all flex flex-col h-full"
              onClick={() => setActiveModal(svc.id)}
            >
              <div className="absolute inset-0 bg-[#FFD600] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]" />
              
              <div className="relative z-10">
                <div className="font-display text-6xl text-white/35 mb-4 group-hover:text-black/20 transition-colors">{svc.id === 'oem' ? '01' : svc.id === 'design' ? '02' : svc.id === 'programming' ? '03' : svc.id === 'development' ? '04' : svc.id === 'spareparts' ? '05' : '06'}</div>
                <div className="flex items-center mb-5 text-white/60 group-hover:text-black transition-colors">
                  {svc.icon}
                </div>
                <h3 className="font-display text-3xl tracking-[2px] mb-3 group-hover:text-black transition-colors">{svc.title}</h3>
                <p className="text-[0.88rem] text-white/50 leading-relaxed group-hover:text-black transition-colors flex-grow">{svc.desc}</p>
                <button 
                  className="mt-6 flex items-center gap-2 px-5 py-2.5 bg-[#FFD600]/10 text-[#FFD600] text-[0.75rem] font-bold tracking-[2px] uppercase group-hover:bg-black group-hover:text-[#FFD600] transition-all"
                  onClick={(e) => { e.stopPropagation(); setActiveModal(svc.id); }}
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why" className="py-24 px-[5vw] bg-[#FFD600] text-[#080808] relative overflow-hidden">
        <div className="absolute top-1/2 right-[-2rem] -translate-y-1/2 font-display text-[10rem] lg:text-[16rem] text-black/[0.04] pointer-events-none tracking-[5px] whitespace-nowrap">
          WHY US
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#080808] mb-5">
              <div className="w-5 h-[2px] bg-[#080808]" />
              WHY CHOOSE MIndS
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-[2px] mb-6">
              THE <span className="font-sans font-extrabold text-transparent [text-stroke:1px_#080808] [-webkit-text-stroke:1px_#080808] sm:[text-stroke:1.5px_#080808] sm:[-webkit-text-stroke:1.5px_#080808]">MIndS</span><br />ADVANTAGE
            </h2>
            <p className="text-[#080808]/85 text-lg leading-relaxed mb-10">
              We don't just build machines — we build competitive advantages. Every solution we deliver is engineered to
              give your operation a measurable edge in productivity, quality, and safety.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: 200, label: 'Machines Built' },
                { value: 50, label: 'Partner Companies' },
                { value: 6, label: 'Years Active' },
                { value: 98, label: '% Client Retention' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 bg-black/10 hover:bg-black/15 transition-all hover:-translate-y-1">
                  <div className="font-display text-5xl text-[#080808] leading-none">{stat.value}+</div>
                  <div className="text-[0.65rem] tracking-[2px] uppercase text-[#080808]/80 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { icon: <Factory className="w-8 h-8" />, title: 'Factory-Floor Expertise', desc: 'Our engineers have hands-on experience across dozens of manufacturing environments — we understand the real challenges of production.' },
              { icon: <Zap className="w-8 h-8" />, title: 'Rapid Response Support', desc: 'Machine downtime costs money. Our support team responds quickly to get you back online fast — minimizing production losses.' },
              { icon: <Target className="w-8 h-8" />, title: 'Tailored Solutions', desc: 'No one-size-fits-all products. Every system is designed from the ground up to match your exact production requirements and goals.' },
              { icon: <ShieldCheck className="w-8 h-8" />, title: 'Confidentiality Guaranteed', desc: 'We treat all client projects, specifications, and data with strict confidentiality — your IP and processes are always protected.' },
            ].map((item) => (
              <div key={item.title} className="p-6 md:p-8 bg-white/40 backdrop-blur-sm border border-white/20 flex gap-6 items-start hover:bg-white/60 hover:translate-x-2 transition-all group shadow-sm">
                <div className="text-[#080808]/40 group-hover:text-[#080808] transition-colors flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <div className="font-bold text-[0.95rem] tracking-[1px] uppercase mb-1 text-[#080808]">{item.title}</div>
                  <div className="text-[0.85rem] text-[#080808] font-medium leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-24 px-[5vw] bg-[#111111]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#FFD600] mb-5">
            Training & Seminars
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-[2px]">
            TRAINING KITS &<br /><span className="text-transparent [-webkit-text-stroke:1.5px_#FFD600]">DEMO UNITS</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            We provide hands-on training kits and demo units to help your team learn, practice, and master industrial
            automation — available in all major PLC brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h3 className="font-display text-2xl tracking-[2px] text-[#FFD600] mb-6">We Provide Training Kits For:</h3>
            <div className="flex flex-col gap-3 mb-10">
              {['PLC and HMI Programming', 'Stepper and Servo Motor-control', 'Electro-Pneumatic Control System', 'Linear Actuator System'].map((kit) => (
                <div key={kit} className="flex items-center gap-3 p-3 border border-white/5 hover:border-[#FFD600]/25 hover:bg-[#FFD600]/5 transition-all text-white/70 hover:text-white">
                  <div className="w-2 h-2 bg-[#FFD600] rounded-full flex-shrink-0" />
                  <span className="text-sm">{kit}</span>
                </div>
              ))}
            </div>

            <h3 className="font-display text-2xl tracking-[2px] text-[#FFD600] mb-6">Training Kits Available In:</h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {['Keyence', 'Panasonic', 'Mitsubishi', 'Omron', 'Weintek', 'Beckhoff', 'Delta', '+ More'].map((brand) => (
                <div key={brand} className="bg-[#FFD600]/10 border border-[#FFD600]/25 text-[#FFD600] px-4 py-1.5 text-[0.72rem] font-bold tracking-[2px] uppercase hover:bg-[#FFD600] hover:text-black transition-all">
                  {brand}
                </div>
              ))}
            </div>

            <h3 className="font-display text-2xl tracking-[2px] text-[#FFD600] mb-6">Demo Units Available:</h3>
            <div className="flex flex-col gap-3">
              {['Pick and Place — Plant Generator Demo Unit', '4 Axis Weld Machine Demo Unit', 'Pick and Place — Stepper Motor & Pneumatics Demo Unit'].map((unit) => (
                <div key={unit} className="flex items-center gap-3 p-3 border border-white/5 hover:border-[#FFD600]/25 hover:bg-[#FFD600]/5 transition-all text-white/70 hover:text-white">
                  <div className="w-2 h-2 bg-[#FFD600] rounded-full flex-shrink-0" />
                  <span className="text-sm">{unit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {[
              { title: 'PLC & HMI Programming Training Kit', color: 'from-[#1a1a00] to-[#2d2d00]' },
              { title: 'PLC Programming Training Kit', color: 'from-[#0a0a1a] to-[#1a1a2d]' },
              { title: 'PLC & HMI + Electric Actuator Kit', color: 'from-[#0a1a0a] to-[#1a2d1a]' },
            ].map((v, i) => (
              <div key={i} className="border border-white/5 hover:border-[#FFD600]/30 hover:-translate-x-1.5 transition-all overflow-hidden group">
                <div className={`aspect-[16/7] bg-gradient-to-br ${v.color} flex items-end p-6 relative overflow-hidden`}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.04]">
                    <Settings className="w-24 h-24" />
                  </div>
                  <div className="font-display text-xl tracking-[2px] text-[#FFD600] bg-black/70 px-4 py-1.5 relative z-10">{v.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-3xl md:text-5xl tracking-[2px] mb-12 text-center">
            AVAILABLE <span className="text-transparent [-webkit-text-stroke:1.5px_#FFD600]">TRAINING COURSES</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'A', title: 'PLC Program Training', desc: 'Learn to program Programmable Logic Controllers (PLCs) using ladder logic.', topics: ['Understanding PLC basics', 'How to write ladder logic', 'Troubleshooting PLCs'] },
              { id: 'B', title: 'HMI Program Training', desc: 'Learn to design and use Human-Machine Interfaces (HMIs) for machines.', topics: ['Creating user-friendly interfaces', 'Alarm systems design', 'Connecting HMIs with PLCs'] },
              { id: 'C', title: 'Electrical Wiring Training', desc: 'Learning the basics of electrical wiring used in industrial fields.', topics: ['Understanding wiring diagrams', 'Safety practices', 'Troubleshooting wiring issues'] },
              { id: 'D', title: 'Electro-Pneumatic System Training', desc: 'Learning about systems that utilize both electrical power and compressed air (pneumatics) for automation.', topics: ['Understanding pneumatic components', 'Controlling pneumatic systems with electricity', 'Troubleshooting'] },
              { id: 'E', title: 'Motor-Control Training', desc: 'Learning how to control electric motors effectively and safely.', topics: ['Control for positioning & speed', 'Direction and feedback', 'Motor control troubleshooting'] },
            ].map((course) => (
              <div key={course.id} className="bg-white/[0.02] border border-white/7 p-8 hover:border-[#FFD600]/35 hover:bg-[#FFD600]/5 hover:-translate-y-1.5 transition-all flex flex-col">
                <div className="w-11 h-11 bg-[#1a1a1a] border-2 border-[#FFD600] rounded-full flex items-center justify-center font-display text-2xl text-[#FFD600] mb-5 flex-shrink-0">{course.id}</div>
                <h4 className="font-display text-2xl tracking-[1.5px] mb-3">{course.title}</h4>
                <p className="text-[0.85rem] text-white/55 leading-relaxed mb-5 flex-grow">{course.desc}</p>
                <div className="p-4 bg-white/[0.03] border-l-2 border-[#FFD600]">
                  <div className="text-[0.62rem] tracking-[2px] uppercase text-[#FFD600] mb-2">Topics Covered:</div>
                  {course.topics.map((t) => <div key={t} className="text-[0.8rem] text-white/50 py-1">• {t}</div>)}
                </div>
              </div>
            ))}
            <div className="bg-[#FFD600]/3 border border-[#FFD600]/20 p-8 hover:border-[#FFD600]/35 hover:bg-[#FFD600]/5 hover:-translate-y-1.5 transition-all flex flex-col">
              <div className="w-11 h-11 bg-[#FFD600] border-2 border-[#FFD600] rounded-full flex items-center justify-center font-display text-2xl text-[#080808] mb-5 flex-shrink-0">?</div>
              <h4 className="font-display text-2xl tracking-[1.5px] mb-3">Custom Training Available</h4>
              <p className="text-[0.85rem] text-white/55 leading-relaxed mb-6">Need a specific training program for your team? We design customized training solutions tailored to your machines and production requirements.</p>
              <a href="#contact" className="bg-[#FFD600] text-[#080808] px-6 py-2.5 font-bold text-[0.75rem] tracking-[2px] uppercase [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))] hover:bg-white transition-all w-fit mt-auto">
                Inquire Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-24 px-[5vw] bg-[#080808]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#FFD600] mb-5">
            Trusted By
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-[2px]">
            OUR CLIENTS &<br /><span className="text-transparent [-webkit-text-stroke:1.5px_#FFD600]">PARTNERS</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Trusted by manufacturers and industrial companies across the Philippines — from SMEs to large-scale production facilities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {[
            { id: 'MFG', name: 'Food Manufacturing' },
            { id: 'ELC', name: 'Electronics Firm' },
            { id: 'PCK', name: 'Packaging Solutions' },
            { id: 'AUT', name: 'Auto Parts Mfg.' },
            { id: 'PHM', name: 'Pharma Company' },
            { id: 'CSG', name: 'Consumer Goods' },
            { id: 'TXT', name: 'Textile Manufacturer' },
            { id: 'LOG', name: 'Logistics Partner' },
            { id: 'CHM', name: 'Chemical Plant' },
            { id: 'MDC', name: 'Medical Device Co.' },
          ].map((client) => (
            <div key={client.id} className="bg-white/[0.03] border border-white/7 aspect-[3/2] flex flex-col items-center justify-center gap-2 p-6 hover:border-[#FFD600]/35 hover:bg-[#FFD600]/5 hover:-translate-y-1 transition-all cursor-default">
              <div className="font-display text-3xl text-[#FFD600]/40 tracking-[3px]">{client.id}</div>
              <div className="text-[0.65rem] tracking-[2px] uppercase text-white/30 text-center">{client.name}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 p-10 bg-[#FFD600]/5 border border-[#FFD600]/15">
          {[
            { value: 50, label: 'Companies Served' },
            { value: 6, label: 'Years of Partnership' },
            { value: 10, label: 'Industries Covered' },
            { value: 98, label: '% Retention Rate' },
          ].map((ps, i) => (
            <div key={i} className="flex items-center gap-12">
              <div className="text-center">
                <div className="font-display text-4xl text-[#FFD600]">{ps.value}+</div>
                <div className="text-[0.6rem] tracking-[2px] uppercase text-white/40">{ps.label}</div>
              </div>
              {i < 3 && <div className="hidden md:block w-[1px] h-14 bg-[#FFD600]/20" />}
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 px-[5vw] bg-[#1a1a1a]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#FFD600] mb-5">
            Sectors We Serve
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-[2px]">
            INDUSTRIES<br /><span className="text-transparent [-webkit-text-stroke:1.5px_#FFD600]">WE POWER</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Factory className="w-8 h-8" />, title: 'Food & Beverage', desc: 'Hygienic automation for packaging, filling, conveying, and quality inspection lines.' },
            { icon: <Plug className="w-8 h-8" />, title: 'Electronics', desc: 'Precision assembly machines and test fixtures for PCBs and electronic components.' },
            { icon: <Car className="w-8 h-8" />, title: 'Automotive', desc: 'Jigs, fixtures, and automated assembly solutions for automotive parts manufacturing.' },
            { icon: <Pill className="w-8 h-8" />, title: 'Pharmaceutical', desc: 'GMP-compliant machines for blister packing, labeling, and sterile manufacturing.' },
            { icon: <FlaskConical className="w-8 h-8" />, title: 'Consumer Goods', desc: 'High-speed packaging and assembly solutions for personal care and household products.' },
            { icon: <Layers className="w-8 h-8" />, title: 'Construction', desc: 'Heavy-duty industrial machines for tile, cement, glass, and building material production.' },
            { icon: <Activity className="w-8 h-8" />, title: 'Textile', desc: 'Automated cutting, stitching, and quality control systems for apparel manufacturing.' },
            { icon: <Package className="w-8 h-8" />, title: 'Logistics', desc: 'Automated sorting, wrapping, labeling, and palletizing for distribution centers.' },
          ].map((ind) => (
            <div key={ind.title} className="p-10 bg-white/[0.02] border border-white/7 text-center hover:bg-[#FFD600]/5 hover:border-[#FFD600]/30 hover:-translate-y-1.5 transition-all relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#FFD600] group-hover:h-full transition-all" />
              <div className="text-white/50 group-hover:text-[#FFD600] transition-colors flex justify-center mb-5">{ind.icon}</div>
              <div className="font-display text-xl tracking-[2px] text-[#FFD600] mb-2">{ind.title}</div>
              <div className="text-[0.8rem] text-white/40 leading-relaxed">{ind.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-[5vw] bg-[#111111]">
        <div className="mb-20">
          <div className="flex items-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#FFD600] mb-5">
            How We Work
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-[2px]">
            OUR <span className="text-transparent [-webkit-text-stroke:1.5px_#FFD600]">PROCESS</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
          <div className="absolute top-10 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-[#FFD600]/30 to-transparent hidden lg:block" />
          {[
            { num: '01', title: 'Consultation', desc: 'We meet with your team to understand your production challenges, goals, and technical requirements in depth.' },
            { num: '02', title: 'Design & Planning', desc: 'Our engineers develop detailed mechanical designs, electrical schematics, and a full project plan with timeline.' },
            { num: '03', title: 'Build & Program', desc: 'We fabricate and assemble the machine, program the control systems, and run rigorous in-house testing.' },
            { num: '04', title: 'Install & Support', desc: 'On-site installation, operator training, and ongoing support to keep your machine running at peak performance.' },
          ].map((step) => (
            <div key={step.num} className="text-center px-6 relative group mb-12 lg:mb-0">
              <div className="w-12 h-12 rounded-full border-2 border-[#FFD600] flex items-center justify-center font-display text-xl text-[#FFD600] mx-auto mb-8 bg-[#111111] relative z-10 group-hover:bg-[#FFD600] group-hover:text-[#080808] group-hover:scale-110 transition-all">
                {step.num}
              </div>
              <h3 className="font-display text-2xl tracking-[2px] mb-3">{step.title}</h3>
              <p className="text-[0.85rem] text-white/45 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section id="cta-banner" className="py-24 px-[5vw] bg-[#1a1a1a] text-center relative overflow-hidden">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial-[rgba(255,214,0,0.08)_0%,transparent_70%] pointer-events-none" />
        <div className="text-[0.7rem] tracking-[4px] uppercase text-[#FFD600] mb-4 relative z-10">Ready to Automate?</div>
        <h2 className="font-display text-5xl md:text-8xl leading-[0.95] tracking-[3px] mb-6 relative z-10">
          LET'S BUILD<br /><span className="text-transparent [-webkit-text-stroke:2px_#FFD600]">TOGETHER</span>
        </h2>
        <p className="text-white/50 text-lg max-w-lg mx-auto leading-relaxed mb-10 relative z-10">
          Tell us your production challenge and we'll engineer the solution. Free initial consultation for new clients.
        </p>
        <div className="flex justify-center gap-4 flex-wrap relative z-10">
          <a href="#contact" className="bg-[#FFD600] text-[#080808] px-9 py-3.5 font-bold text-[0.8rem] tracking-[2px] uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-white transition-all">
            Get a Free Quote
          </a>
          <a href="#services" className="border border-white/25 px-9 py-3.5 font-bold text-[0.8rem] tracking-[2px] uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:border-[#FFD600] hover:text-[#FFD600] transition-all">
            Browse Services
          </a>
        </div>
        <div className="mt-10 inline-flex items-center gap-4 bg-[#FFD600]/8 border border-[#FFD600]/25 px-6 py-3 relative z-10">
          <span className="text-[0.65rem] tracking-[3px] uppercase text-white/45">Open Monday – Saturday</span>
          <span className="font-display text-xl tracking-[3px] text-[#FFD600]">8:00 AM – 5:00 PM</span>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-[5vw] bg-[#111111]">
        <div className="mb-16">
          <div className="flex items-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#FFD600] mb-5">
            Client Stories
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-[2px]">
            WHAT OUR<br /><span className="text-transparent [-webkit-text-stroke:1.5px_#FFD600]">CLIENTS SAY</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Ramon S.', role: 'Plant Manager, Food Manufacturing Co.', text: 'MIndS transformed our packaging line. What used to take 10 workers now runs with 2. The machine has been running flawlessly for over 2 years without major issues.' },
            { name: 'Lara M.', role: 'Operations Director, Electronics Firm', text: 'Their team diagnosed our failing production line in just hours. The PLC reprogramming improved our output by 40%. Incredibly knowledgeable and responsive engineers.' },
            { name: 'Jose P.', role: 'CEO, Packaging Solutions Inc.', text: 'We had a complex automation requirement that other suppliers turned down. MIndS engineered a brilliant solution on time and within budget. They are now our go-to automation partner.' },
          ].map((testi, i) => (
            <div key={i} className="p-10 border border-white/7 hover:border-[#FFD600]/35 hover:-translate-y-1.5 transition-all relative">
              <div className="font-display text-8xl text-[#FFD600] leading-[0.4] mb-6 opacity-40">"</div>
              <div className="text-[#FFD600] text-[0.75rem] mb-4 tracking-[3px]">★★★★★</div>
              <p className="text-[0.95rem] text-white/65 leading-relaxed italic mb-8">{testi.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FFD600] to-[#ff9900] flex items-center justify-center font-bold text-lg text-[#080808]">
                  {testi.name[0]}
                </div>
                <div>
                  <div className="font-bold text-[0.9rem]">{testi.name}</div>
                  <div className="text-[0.75rem] text-white/35 tracking-[1px]">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-[5vw] bg-[#080808]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="flex items-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#FFD600] mb-5">
              <div className="w-5 h-[2px] bg-[#FFD600]" />
              Get in Touch
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-[2px] mb-6">
              START YOUR<br /><span className="text-transparent [-webkit-text-stroke:1.5px_#FFD600]">PROJECT</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Ready to improve your production line? Tell us about your challenge and the MIndS team will get
              back to you. Your request goes directly to <strong className="text-[#FFD600]">info@mechatronicsindustrial.com</strong>
            </p>
            
            <div className="flex flex-col gap-4">
              {[
                { icon: <MapPin className="w-5 h-5" />, label: 'Location', val: 'National Highway, Purok 5, Brgy. Makiling, Calamba City, Laguna, Philippines 4027' },
                { icon: <Mail className="w-5 h-5" />, label: 'Email', val: 'info@mechatronicsindustrial.com', link: 'mailto:info@mechatronicsindustrial.com' },
                { icon: <Phone className="w-5 h-5" />, label: 'Landline', val: '049-556-7723', link: 'tel:0495567723' },
                { icon: <Phone className="w-5 h-5" />, label: 'Mobile', val: '+63-917-113-7305', link: 'tel:+639171137305' },
                { icon: <Clock className="w-5 h-5" />, label: 'Business Hours', val: 'Monday – Saturday: 8:00 AM – 5:00 PM' },
                { icon: <Globe className="w-5 h-5" />, label: 'Website', val: 'mechatronicsindustrial.com', link: 'https://www.mechatronicsindustrial.com' },
              ].map((ci, i) => (
                <div key={i} className="flex gap-5 items-start p-5 border border-white/7 hover:border-[#FFD600]/30 hover:translate-x-1.5 transition-all">
                  <div className="w-11 h-11 bg-[#FFD600] text-[#080808] flex items-center justify-center flex-shrink-0">
                    {ci.icon}
                  </div>
                  <div>
                    <div className="text-[0.62rem] tracking-[2px] uppercase text-white/35 mb-1">{ci.label}</div>
                    <div className="font-semibold text-[0.88rem] leading-relaxed">
                      {ci.link ? <a href={ci.link} className="hover:text-[#FFD600] transition-colors">{ci.val}</a> : ci.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#111111] p-10 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))]">
            <div className="font-display text-3xl tracking-[2px] mb-8">Request a Quote</div>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[0.62rem] tracking-[2px] uppercase text-white/35">First Name</label>
                  <input className="w-full bg-white/5 border border-white/10 text-white p-3.5 outline-none focus:border-[#FFD600] focus:bg-[#FFD600]/4 transition-all" type="text" placeholder="Juan" />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.62rem] tracking-[2px] uppercase text-white/35">Last Name</label>
                  <input className="w-full bg-white/5 border border-white/10 text-white p-3.5 outline-none focus:border-[#FFD600] focus:bg-[#FFD600]/4 transition-all" type="text" placeholder="dela Cruz" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[0.62rem] tracking-[2px] uppercase text-white/35">Email Address</label>
                <input className="w-full bg-white/5 border border-white/10 text-white p-3.5 outline-none focus:border-[#FFD600] focus:bg-[#FFD600]/4 transition-all" type="email" placeholder="you@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[0.62rem] tracking-[2px] uppercase text-white/35">Company Name</label>
                <input className="w-full bg-white/5 border border-white/10 text-white p-3.5 outline-none focus:border-[#FFD600] focus:bg-[#FFD600]/4 transition-all" type="text" placeholder="Your Company Inc." />
              </div>
              <div className="space-y-2">
                <label className="text-[0.62rem] tracking-[2px] uppercase text-white/35">Service Needed</label>
                <select className="w-full bg-white/5 border border-white/10 text-white p-3.5 outline-none focus:border-[#FFD600] focus:bg-[#FFD600]/4 transition-all appearance-none cursor-pointer">
                  <option value="" className="bg-[#1a1a1a]">Select a Service...</option>
                  <option className="bg-[#1a1a1a]">OEM — Original Equipment Manufacturer</option>
                  <option className="bg-[#1a1a1a]">Design — Mechanical & Electrical</option>
                  <option className="bg-[#1a1a1a]">Programming — PLC & Machine Control</option>
                  <option className="bg-[#1a1a1a]">Development — Modernization & Conversion</option>
                  <option className="bg-[#1a1a1a]">Spare Parts & Components</option>
                  <option className="bg-[#1a1a1a]">Machine Troubleshooting & Support</option>
                  <option className="bg-[#1a1a1a]">Training & Seminars</option>
                  <option className="bg-[#1a1a1a]">Other / Multiple Services</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[0.62rem] tracking-[2px] uppercase text-white/35">Project Details</label>
                <textarea className="w-full bg-white/5 border border-white/10 text-white p-3.5 outline-none focus:border-[#FFD600] focus:bg-[#FFD600]/4 transition-all h-28 resize-none" placeholder="Describe your production challenge or what you'd like to automate..."></textarea>
              </div>
              <button className="w-full bg-[#FFD600] text-[#080808] py-4 font-bold text-[0.8rem] tracking-[2px] uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-white transition-all">
                Send Request →
              </button>
              <p className="text-[0.72rem] text-white/30 text-center tracking-[1px]">
                Sends directly to <a href="mailto:info@mechatronicsindustrial.com" className="text-[#FFD600] hover:underline">info@mechatronicsindustrial.com</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map-section" className="py-24 px-[5vw] bg-[#1a1a1a]">
        <div className="mb-10">
          <div className="flex items-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#FFD600] mb-5">
            Find Us
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-[2px]">
            OUR <span className="text-transparent [-webkit-text-stroke:1.5px_#FFD600]">LOCATION</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">National Highway, Purok 5, Brgy. Makiling, Calamba City, Laguna, PH 4027</p>
        </div>
        
        <div className="relative w-full h-[480px] overflow-hidden border border-[#FFD600]/15">
          <iframe
            src="https://maps.google.com/maps?q=Mechatronics%20Industrial%20Solutions,%20National%20Highway,%20Purok%205,%20Brgy.%20Makiling,%20Calamba%20City,%20Laguna,%20Philippines%204027&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-none grayscale invert contrast-125"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MIndS Location"
          ></iframe>
          
          <div className="absolute top-6 left-6 bg-[#080808]/93 backdrop-blur-md p-8 border border-[#FFD600]/30 max-w-[290px] z-10 hidden sm:block">
            <div className="font-sans font-extrabold text-xl tracking-[1px] text-[#FFD600] mb-2 flex items-center gap-2">
              <Settings className="w-5 h-5" /> MIndS Headquarters
            </div>
            <div className="text-[0.8rem] text-white/60 leading-relaxed mb-4">
              National Highway, Purok 5,<br />Brgy. Makiling, Calamba City,<br />Laguna, Philippines 4027
            </div>
            <div className="flex items-center gap-2 text-[0.75rem] text-white/55 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span>Mon – Sat &nbsp;|&nbsp; 8:00 AM – 5:00 PM</span>
            </div>
            <a href="https://maps.app.goo.gl/1chU9gvsjhDf4cU1A" target="_blank" className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[2px] uppercase text-[#FFD600] hover:gap-4 transition-all">
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-[#FFD600] py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-12 animate-[marquee_25s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {['OEM Solutions', 'Machine Design', 'PLC Programming', 'Modernization', 'Spare Parts', 'Training & Seminars', 'Process Improvement'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="font-display text-base tracking-[3px] text-[#080808]">{item}</span>
                  <div className="w-1.5 h-1.5 bg-[#080808]/40 rounded-full" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-[5vw] bg-[#111111]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="flex items-center gap-3 text-[0.68rem] tracking-[4px] uppercase text-[#FFD600] mb-5">
              Questions
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.92] tracking-[2px] mb-6">
              FREQUENTLY<br /><span className="text-transparent [-webkit-text-stroke:1.5px_#FFD600]">ASKED</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Can't find your answer? Reach out directly and the MIndS engineering team will respond during business hours.
            </p>
            <a href="#contact" className="bg-[#FFD600] text-[#080808] px-9 py-3.5 font-bold text-[0.8rem] tracking-[2px] uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-white transition-all inline-block">
              Ask Us Anything
            </a>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'What types of machines can MIndS design and build?', a: 'We design and build a wide range of industrial machines — from simple jigs and fixtures to complex automated assembly lines, conveyor systems, packaging machines, testing equipment, and custom robotic solutions. We also do OEM manufacturing to your exact specifications.' },
              { q: 'How long does a machine build project typically take?', a: 'Project timelines depend on complexity. Simple fixtures may take 2–4 weeks, while complex automated systems can take 3–6 months. We provide a detailed project schedule during the consultation phase.' },
              { q: 'Do you provide after-sales service and maintenance?', a: 'Yes — we offer ongoing maintenance contracts, on-call troubleshooting, spare parts sourcing, and periodic preventive maintenance visits to ensure your machines run reliably long after installation.' },
              { q: 'Can you work on machines you didn\'t originally build?', a: 'Absolutely. Our engineers are experienced with troubleshooting, modifying, and upgrading machines from various manufacturers — including legacy systems that others no longer support.' },
              { q: 'Where are you located and what are your hours?', a: 'We are located at National Highway, Purok 5, Brgy. Makiling, Calamba City, Laguna, PH 4027. Office hours are Monday to Saturday, 8:00 AM – 5:00 PM. Call us at 049-556-7723 or mobile +63-917-113-7305, or email info@mechatronicsindustrial.com.' },
            ].map((faq, i) => (
              <details key={i} className="group border-b border-white/7">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none hover:text-[#FFD600] transition-colors">
                  <span className="font-semibold text-lg pr-6">{faq.q}</span>
                  <div className="w-6 h-6 border border-white/20 flex items-center justify-center text-[#FFD600] group-open:bg-[#FFD600] group-open:text-[#080808] group-open:rotate-45 transition-all">
                    <Plus className="w-4 h-4" />
                  </div>
                </summary>
                <div className="pb-6 text-white/50 leading-relaxed text-[0.95rem]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040404] pt-24 pb-12 px-[5vw] border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-20">
          <div>
            <div className="font-sans font-extrabold text-4xl tracking-[1px] text-[#FFD600] mb-1">MIndS</div>
            <div className="text-[0.6rem] tracking-[2px] uppercase text-white/50 mb-6 font-bold">Mechatronics Industrial Solutions, Inc.</div>
            <p className="text-[0.88rem] text-white/40 leading-relaxed max-w-[240px] mb-6">
              "We Enable You to Create." Engineering precision machines and automation solutions for Philippine industry since 2019.
            </p>
            <div className="flex items-center gap-2.5 text-[0.78rem] text-white/50 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              <span>Mon – Sat &nbsp;|&nbsp; 8:00 AM – 5:00 PM</span>
            </div>
            <div className="flex gap-3">
              <a href="mailto:info@mechatronicsindustrial.com" className="w-9 h-9 border border-white/10 flex items-center justify-center hover:bg-[#FFD600] hover:text-[#080808] hover:border-[#FFD600] transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-[0.65rem] tracking-[3px] uppercase text-[#FFD600] mb-6">Company</h5>
            <ul className="space-y-3">
              <li><a href="#about" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">ABOUT MIndS</a></li>
              <li><a href="#mission" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">OUR MISSION</a></li>
              <li><a href="#why" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">WHY CHOOSE US</a></li>
              <li><a href="#clients" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">CLIENTS & PARTNERS</a></li>
              <li><a href="#contact" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">CONTACT US</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-[0.65rem] tracking-[3px] uppercase text-[#FFD600] mb-6">Services</h5>
            <ul className="space-y-3">
              <li><a href="#services" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">OEM Solutions</a></li>
              <li><a href="#services" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">Machine Design</a></li>
              <li><a href="#services" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">Programming</a></li>
              <li><a href="#services" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">Development</a></li>
              <li><a href="#services" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">Spare Parts</a></li>
              <li><a href="#services" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">Troubleshooting</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-[0.65rem] tracking-[3px] uppercase text-[#FFD600] mb-6">Contact</h5>
            <ul className="space-y-3">
              <li><a href="mailto:info@mechatronicsindustrial.com" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">info@mechatronicsindustrial.com</a></li>
              <li><a href="tel:0495567723" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">Landline: 049-556-7723</a></li>
              <li><a href="tel:+639171137305" className="text-[0.88rem] text-white/40 hover:text-white transition-colors">Mobile: +63-917-113-7305</a></li>
              <li className="text-[0.88rem] text-white/40">National Highway, Purok 5, Brgy. Makiling,<br />Calamba City, Laguna, Philippines 4027</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[0.78rem] text-white/20">
          <p>© 2019 All Rights Reserved, <span className="text-[#FFD600]">MIndS®</span> — Mechatronics Industrial Solutions</p>
          <p>Designed with ⚙️ by <span className="text-[#FFD600]">MIndS — Mechatronics Industrial Solutions</span></p>
        </div>
      </footer>

      {/* Service Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/87 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#111111] max-w-xl w-full p-10 relative [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,20px_100%,0_calc(100%-20px))] max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-5 right-5 w-9 h-9 bg-white/5 flex items-center justify-center hover:bg-[#FFD600] hover:text-[#080808] transition-all"
                onClick={() => setActiveModal(null)}
              >
                <X className="w-5 h-5" />
              </button>
              
              {(() => {
                const svc = [
                  { id: 'oem', icon: <Factory className="w-12 h-12" />, num: '01', title: 'OEM — Original Equipment Manufacturer', body: "OEM is defined as a company whose goods are used as components in the products of another company, which then sells the finished products to its customers. MIndS acts as your OEM partner — manufacturing machines and components built precisely to your company's needs and specifications. Whether you need a single custom unit or a scaled production run of industrial machinery, we engineer and deliver to your exact standards." },
                  { id: 'design', icon: <Layout className="w-12 h-12" />, num: '02', title: 'Design — Mechanical & Electrical', body: "As an automation company, we provide automation machines that we design from scratch, or we convert manual/traditional work into automated machines with efficiency and faster machine output. Our design team covers full mechanical CAD design, electrical panel design, pneumatic and hydraulic systems, safety systems, and HMI interfaces — all engineered to your production requirements and space constraints." },
                  { id: 'programming', icon: <Code className="w-12 h-12" />, num: '03', title: 'Programming — Machine Control', body: "We provide new machine programs, program edits/modernization, and program improvements across all major PLC platforms including Siemens, Allen-Bradley (Rockwell Automation), Mitsubishi, Omron, Schneider, and Delta. Whether you need a fresh program for a new machine, an upgrade to an existing system, or troubleshooting of a failing program — our engineers have deep hands-on experience across the full spectrum of industrial control systems." },
                  { id: 'development', icon: <Rocket className="w-12 h-12" />, num: '04', title: 'Development — Modernization & Conversion', body: "As technology advances rapidly, MIndS helps you stay on trend and respond to newly released or upgraded technologies — whatever your customers need. We provide improvements on mechanical and electrical designs, machine programming, robotics integration, and full production line automation. From retrofitting legacy equipment to building fully automated smart factories, we deliver future-ready solutions today." },
                  { id: 'spareparts', icon: <Package className="w-12 h-12" />, num: '05', title: 'Spare Parts & Components', body: "If you're looking for spare parts or replacement machine parts like pneumatic cylinders, fittings, motors, cameras, LED lights, PLC controllers, and any other automation-related products — we can help source and provide them. We also offer jigs or machine fixture replacements. Our supplier network ensures fast sourcing of both standard and hard-to-find industrial components to minimize your machine downtime." },
                  { id: 'troubleshoot', icon: <Wrench className="w-12 h-12" />, num: '06', title: 'Machine Troubleshooting & Support', body: "Rapid diagnosis and repair of mechanical, electrical, and software failures in industrial machines. Our engineers respond quickly to get your production line back online — minimizing costly downtime. Services include on-site troubleshooting, remote diagnostics, emergency repairs, preventive maintenance, and comprehensive machine health assessments. We also service machines we didn't originally build." },
                ].find(s => s.id === activeModal);
                
                if (!svc) return null;
                
                return (
                  <>
                    <div className="text-white mb-6">{svc.icon}</div>
                    <div className="font-display text-[0.8rem] tracking-[4px] text-[#FFD600] mb-2">SERVICE {svc.num}</div>
                    <h3 className="font-display text-4xl tracking-[2px] mb-6">{svc.title}</h3>
                    <div className="w-12 h-[3px] bg-white/20 mb-6" />
                    <p className="text-[0.95rem] text-white/65 leading-relaxed">{svc.body}</p>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor */}
      <div className="hidden lg:block pointer-events-none fixed z-[9999] mix-blend-difference" id="cursor-dot" />
    </div>
  );
}
