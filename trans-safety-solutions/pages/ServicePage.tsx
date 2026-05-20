import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../components/Logo';
import ChatWidget from '../components/ChatWidget';
import { servicesContent } from '../data/servicesData';

export default function ServicePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isScrolled, setIsScrolled] = useState(false);

  const service = id && id in servicesContent ? servicesContent[id as keyof typeof servicesContent] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <button onClick={() => navigate('/')} className="text-red-600 hover:underline">Return to Home</button>
        </div>
      </div>
    );
  }

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
          style={{ backgroundImage: `url("${service.heroImage}")` }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-red-600/20 border border-red-500/30 text-white text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
              {service.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              {service.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {service.description}
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
              className="prose prose-lg prose-slate max-w-none"
            >
              {service.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-slate-600 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-12 hidden">
                {/* Could add extra content here based on service if needed */}
              </div>
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
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Request This Service</h3>
                <p className="text-slate-600 mb-6">Our experts are ready to assist you. Contact us today for a free consultation.</p>
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
