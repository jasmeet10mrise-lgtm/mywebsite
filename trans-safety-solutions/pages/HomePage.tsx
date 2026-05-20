import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Truck, 
  ClipboardCheck, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Award,
  Users,
  FileText,
  Activity
} from 'lucide-react';
import ChatWidget from '../components/ChatWidget';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';

const SERVICES = [
  {
    title: 'CVOR & Safety Rating',
    description: 'Specialized consulting for carriers with conditional CVOR ratings. We help implement safety management systems to improve your score and operating record.',
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
  },
  {
    title: 'Driver & TDG Training',
    description: 'Comprehensive Transportation of Dangerous Goods (TDG) training and general driver safety certification to ensure compliance and safe handling.',
    icon: <Users className="w-8 h-8 text-red-600" />,
  },
  {
    title: 'New Business Startup',
    description: 'Complete guidance for trucking business startups, including new company setup, corporation registration, and initial compliance structuring.',
    icon: <Truck className="w-8 h-8 text-red-600" />,
  },
  {
    title: 'Background Checks',
    description: 'Fast and reliable Criminal Background Checks and Police Clearance Certificates to ensure your drivers meet industry standards.',
    icon: <FileText className="w-8 h-8 text-red-600" />,
  },
  {
    title: 'Compliance & CTPAT Auditing',
    description: 'Detailed analysis of your logistics operations, logbooks, driver qualification files, and CTPAT audits to identify risk areas before MTO or DOT audits.',
    icon: <Award className="w-8 h-8 text-red-600" />,
  },
  {
    title: 'ELD Monitoring',
    description: 'Continuous monitoring of Electronic Logging Devices to ensure Hours of Service (HOS) compliance and prevent fatigue-related violations.',
    icon: <Activity className="w-8 h-8 text-red-600" />,
  }
];

const PERMITS = [
  {
    title: 'HAZMAT Permits',
    description: 'Ensure compliance and secure necessary permits for transporting hazardous materials across borders.',
    icon: <Truck className="w-8 h-8 text-red-600" />,
  },
  {
    title: 'Oversize / Overweight Permits',
    description: 'Specialized permits and routing assistance for moving oversized and overweight loads safely and legally.',
    icon: <Truck className="w-8 h-8 text-red-600" />,
  },
  {
    title: 'IFTA Permits',
    description: 'International Fuel Tax Agreement permits and fuel tax reporting services.',
    icon: <FileText className="w-8 h-8 text-red-600" />,
  },
  {
    title: 'IRP Permits',
    description: 'Apportioned plates under the International Registration Plan for seamless interstate operations.',
    icon: <ClipboardCheck className="w-8 h-8 text-red-600" />,
  },
  {
    title: 'DOT Numbers',
    description: 'Registration with the FMCSA for your unique USDOT number.',
    icon: <Award className="w-8 h-8 text-red-600" />,
  },
  {
    title: 'CVOR',
    description: 'Commercial Vehicle Operator\'s Registration for operating safely and legally in Ontario.',
    icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
  },
  {
    title: 'MC Numbers',
    description: 'Motor Carrier Operating Authority for interstate and international commerce.',
    icon: <Activity className="w-8 h-8 text-red-600" />,
  }
];

const STATS = [
  { label: 'Successful Audits', value: '20+' },
  { label: 'Drivers Trained', value: '1000+' },
  { label: 'Years Experience', value: '14+' },
  { label: 'Client Retention', value: '100%' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-200">
      
      {/* Navigation */}
      <nav className="relative top-0 left-0 right-0 z-50 bg-white py-4 md:py-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative flex flex-col items-center justify-center gap-4">
          <div className="flex items-center cursor-pointer mix-blend-multiply" onClick={() => scrollTo('home')}>
            <Logo className="w-auto h-24 md:h-40" />
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Permits', 'Services', 'About', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm tracking-widest uppercase font-semibold hover:text-red-600 transition-colors text-slate-800"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-colors shadow-sm"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden absolute right-6 top-6"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            {['Home', 'Permits', 'Services', 'About', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-2xl font-bold text-left text-slate-900 border-b border-slate-100 pb-4 hover:text-red-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-4 rounded-full font-bold text-lg mt-4"
            >
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ChatWidget />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
        {/* Background Image / Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/header-truck.png")',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
            >
              Navigate the road to <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
                total compliance.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed"
            >
              We empower transportation companies across North America with expert CVOR & DOT compliance, risk management, and comprehensive driver training solutions that safeguard your operations.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-red-600/30 border border-red-500/50 text-white font-bold tracking-wide backdrop-blur-md shadow-xl shadow-red-900/50"
            >
              <ShieldCheck className="w-6 h-6 text-red-400" />
              <span className="uppercase tracking-wider">On-site Safety Compliance Services Offered</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-red-600/40 flex items-center justify-center gap-2"
              >
                Schedule Consultation <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
              >
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Comprehensive Safety Solutions</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              From meticulous MTO and DOT audits to ongoing fleet management, we provide end-to-end consulting designed to keep your trucking business running safely and efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-red-100 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-700 pointer-events-none">
                  {React.cloneElement(service.icon as React.ReactElement, { className: 'w-32 h-32 text-red-600' })}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 relative z-10">
                  {React.cloneElement(service.icon as React.ReactElement, { className: 'w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300' })}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed relative z-10 font-medium mb-6">
                  {service.description}
                </p>
                {service.title === 'New Business Startup' ? (
                  <button 
                    onClick={() => navigate('/startup')}
                    className="relative z-10 inline-flex items-center text-sm font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-widest mt-auto align-bottom"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                      const idMap: Record<string, string> = {
                        'CVOR & Safety Rating': 'cvor-safety',
                        'Driver & TDG Training': 'driver-training',
                        'Background Checks': 'background-checks',
                        'Compliance & CTPAT Auditing': 'compliance-auditing',
                        'ELD Monitoring': 'eld-monitoring',
                      };
                      if (idMap[service.title]) navigate(`/services/${idMap[service.title]}`);
                    }}
                    className="relative z-10 inline-flex items-center text-sm font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-widest mt-auto align-bottom"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Permits Section */}
      <section id="permits" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">Operating Authority & Permits</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Your Passport to the Road</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              We handle all the red tape. From initial startup permits like DOT and MC numbers to ongoing renewals for IFTA and IRP, we ensure your fleet remains compliant across all borders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERMITS.map((permit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-red-200 transition-all duration-300 relative z-10">
                  {React.cloneElement(permit.icon as React.ReactElement, { className: 'w-7 h-7 text-red-600 transition-colors duration-300' })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{permit.title}</h4>
                <p className="text-slate-600 leading-relaxed relative z-10 text-sm font-medium mb-6">
                  {permit.description}
                </p>
                <button 
                  onClick={() => {
                    const idMap: Record<string, string> = {
                      'HAZMAT Permits': 'hazmat-permits',
                      'Oversize / Overweight Permits': 'oversize-permits',
                      'IFTA Permits': 'ifta-permits',
                      'IRP Permits': 'irp-permits',
                      'DOT Numbers': 'dot-numbers',
                      'CVOR': 'cvor',
                      'MC Numbers': 'mc-numbers',
                    };
                    if (idMap[permit.title]) navigate(`/services/${idMap[permit.title]}`);
                  }}
                  className="relative z-10 inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-widest mt-auto align-bottom pt-2"
                >
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute -left-[20%] top-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative"
            >
              <div className="absolute inset-0 bg-red-600 rounded-3xl translate-x-3 translate-y-3 opacity-20" />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Peterbilt_379.JPG" 
                alt="Peterbilt Semi Truck" 
                className="relative z-10 w-full h-[550px] object-cover rounded-3xl shadow-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
                className="absolute -bottom-8 -right-8 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[280px] hidden md:block"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-lg">Certified Experts</div>
                    <div className="text-sm font-medium text-slate-500 mt-1">Former MTO & DOT inspectors</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-4">About Trans Safety Solutions</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Your dedicated partners in compliance and operational excellence.
              </h3>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  With over two decades of dedicated service in the transportation industry, Trans Safety Solutions was founded on a simple principle: safety and compliance should never be an afterthought.
                </p>
                <p>
                  Our team consists of former MTO and DOT investigators, logistics veterans, and risk managers. We go beyond simple checklist auditing—we integrate deeply into your operations to instill a culture of safety that protects your drivers, the public, and your bottom line.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  {[
                    'Full Operating Authority (HAZMAT, DOT, MC)',
                    'New Business Startup',
                    'CVOR Rating Improvement',
                    'Background Checks',
                    'Driver & TDG Training',
                    'MTO & Facility Audits',
                    'CTPAT Audits',
                    'ELD Monitoring & Support'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="font-bold text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-red-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Ready to secure <br/>your fleet?</h2>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 font-bold mb-8">
                <ShieldCheck className="w-6 h-6 text-red-500" />
                <span className="uppercase tracking-wide">On-Site Safety Compliance Services Offered</span>
              </div>
              <p className="text-slate-300 text-xl mb-12 max-w-md leading-relaxed">
                Contact our experts today for a free initial consultation and risk assessment framing. Let's build a safer tomorrow.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-all">
                    <Phone className="w-6 h-6 text-red-400 group-hover:text-red-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-1">Call Us</h4>
                    <p className="text-slate-300 text-lg">(416) 471-0901</p>
                    <p className="text-slate-500 text-sm mt-1 font-medium tracking-wide">MON-FRI, 9AM - 5PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-all">
                    <Mail className="w-6 h-6 text-red-400 group-hover:text-red-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-1">Email Us</h4>
                    <p className="text-slate-300 text-lg">transsafetysolution@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-10 shadow-2xl shadow-black/50 text-slate-900 border border-slate-200"
            >
              <h3 className="text-3xl font-extrabold mb-8 text-slate-900">Request a Consultation</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50 transition-all font-medium" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50 transition-all font-medium" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Company Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50 transition-all font-medium" placeholder="Acme Logistics Inc." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50 transition-all font-medium" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">How can we help?</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50 resize-none transition-all font-medium" placeholder="Tell us about your fleet size and compliance needs..."></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-5 rounded-xl transition-colors mt-4 shadow-lg shadow-red-600/30 text-lg uppercase tracking-wide"
                >
                  Submit Request
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <div className="bg-white rounded-xl p-2 shadow-sm">
              <Logo className="h-12 w-auto mix-blend-multiply" />
            </div>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Trans Safety Solutions. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
