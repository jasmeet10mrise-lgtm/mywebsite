import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Truck, FileText, CheckCircle, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import ChatWidget from '../components/ChatWidget';

export default function StartupPage() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-200">
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <Logo className={`w-10 h-10 ${isScrolled ? 'text-red-700' : 'text-red-500'}`} />
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Trans Safety Solutions
            </span>
          </div>
          
          <button 
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 font-bold px-4 py-2 transition-colors ${
              isScrolled ? 'text-slate-700 hover:text-red-600' : 'text-white hover:text-red-200'
            }`}
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </button>
        </div>
      </nav>

      <ChatWidget />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-900 text-white min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-multiply" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop")' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-red-600/20 border border-red-500/30 text-white text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
              NEW BUSINESS STARTUP
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Start Your Trucking <br /> Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Right</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Complete guidance for trucking business startups, including new company setup, corporation registration, and initial compliance structuring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg prose-slate"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Building a Solid Foundation</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Starting a new trucking business can be daunting. There are numerous provincial, federal, and sometimes international regulations you must comply with before you can put a single truck on the road. We take the guesswork out of the process.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 my-12">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Corporation Registration</h3>
                  <p className="text-slate-600 text-sm">We handle the incorporation process, ensuring your business is registered properly for the transportation sector.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Initial Compliance</h3>
                  <p className="text-slate-600 text-sm">Setting up driver files, maintenance logs, and ensuring you have the systems in place to pass your first facility audit.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Our Roadmap for New Carriers</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                  <div><strong>Consultation & Planning:</strong> Understanding your planned operations to determine which permits and authorities you need.</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                  <div><strong>Legal Entity Creation:</strong> Incorporating the business and registering for tax accounts (HST/GST, WSIB, etc.).</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                  <div><strong>Operating Authority:</strong> Applying for CVOR, USDOT, MC Number, and other necessary operating authorities.</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                  <div><strong>Permitting:</strong> Setting up IFTA, IRP, and specific load permits.</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                  <div><strong>Compliance Setup:</strong> Creating driver qualification files, maintenance schedules, and safety policies.</div>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="md:col-span-1 border-l border-slate-100 pl-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-red-50 border border-red-100 rounded-3xl p-8 sticky top-32">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Need Help Starting?</h3>
                <p className="text-slate-600 mb-6">Skip the delays and get your trucks on the road faster. Our experts handle the bureaucracy for you.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone className="w-5 h-5 text-red-500" />
                    <span className="font-bold">(416) 471-0901</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Mail className="w-5 h-5 text-red-500" />
                    <span className="font-bold">transsafetysolution@gmail.com</span>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-red-600/30"
                >
                  Contact Us Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-red-950 py-12 border-t border-red-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8 text-red-500" />
            <span className="font-bold text-white tracking-tight">Trans Safety Solutions</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Trans Safety Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
