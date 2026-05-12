import React from 'react';
import { TreePine, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-opacity-50 text-[10px] uppercase tracking-[0.2em] pt-16 pb-8 border-t border-dark-border text-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="text-2xl font-bold tracking-tight bg-gradient-to-l from-gold to-brown bg-clip-text text-transparent mb-6">
              ازني خشب
            </div>
            <p className="text-text-muted leading-relaxed mb-6 tracking-normal text-sm normal-case">
              وجهتك الأولى للحصول على أجود أنواع خشب الزان الطبيعي بجودة عالمية وأسعار تنافسية مع تجربة شراء احترافية وسهلة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="h-8 w-8 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white mb-6 border-b border-white/10 pb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              <li><Link to="/store" className="text-text-muted hover:text-gold transition-colors">المتجر</Link></li>
              <li><Link to="/calculator" className="text-text-muted hover:text-gold transition-colors">حاسبة الأسعار</Link></li>
              <li><Link to="/about" className="text-text-muted hover:text-gold transition-colors">من نحن</Link></li>
              <li><a href="#" className="text-text-muted hover:text-gold transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-text-muted hover:text-gold transition-colors">الشروط والأحكام</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white mb-6 border-b border-white/10 pb-2">
              تواصل معنا
            </h4>
            <ul className="space-y-4 tracking-normal normal-case text-sm">
              <li className="text-text-muted">
                <span className="block text-white mb-1 uppercase tracking-widest text-[10px]">العنوان:</span>
                المنطقة الصناعية، الرياض
              </li>
              <li className="text-text-muted">
                <span className="block text-white mb-1 uppercase tracking-widest text-[10px]">الهاتف:</span>
                <span dir="ltr">+966 50 123 4567</span>
              </li>
              <li className="text-text-muted">
                <span className="block text-white mb-1 uppercase tracking-widest text-[10px]">البريد الإلكتروني:</span>
                info@azniwood.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white mb-6 border-b border-white/10 pb-2">
              النشرة البريدية
            </h4>
            <p className="text-text-muted mb-4 tracking-normal text-xs normal-case">اشترك ليصلك أحدث العروض وأخبار منتجاتنا.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-dark-surface border border-dark-border px-3 py-2 w-full text-white placeholder-opacity-50 focus:outline-none focus:border-gold tracking-normal normal-case text-xs"
              />
              <button className="bg-gold text-dark-bg px-4 py-2 hover:bg-gold-light transition-colors font-bold tracking-widest">
                اشتراك
              </button>
            </div>
          </div>

        </div>
        
        <div className="border-t border-dark-border pt-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} ازني خشب — جميع الحقوق محفوظة</div>
          <div className="flex gap-8">
            <span>شحن سريع</span>
            <span>دفع آمن</span>
            <span>ضمان الجودة</span>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button (Restyled for dark theme) */}
      <a 
        href="https://wa.me/966501234567" 
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366]/20 border border-[#25D366] text-[#25D366] p-3 rounded-full hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-2"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="text-[10px] tracking-widest uppercase hidden md:inline-block pr-2">تواصل معنا عبر واتساب</span>
      </a>
    </footer>
  );
}
