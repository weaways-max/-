import React from 'react';
import { motion } from 'motion/react';
import { TreePine, Award, Globe, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export function About() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-dark-border">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-80"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542484920-56e6ca0896eb?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="absolute inset-0 z-10 bg-[#121212]/90" />
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">من نحن</h1>
            <p className="text-sm uppercase tracking-widest text-text-muted max-w-2xl mx-auto leading-relaxed">
              تاريخ طويل من الشغف بالأخشاب الفاخرة، والتزام لا يتزعزع بتقديم أعلى معايير الجودة لعملائنا في جميع أنحاء المملكة.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24 bg-dark-bg text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-gold mb-6">قصتنا مع خشب الزان</h2>
              <p className="opacity-70 text-sm leading-relaxed mb-6">
                تأسست "ازني خشب" برؤية واضحة: توفير خشب الزان الطبيعي بأعلى مستويات النقاء والجودة. بدأنا كورشة صغيرة نمتلك شغفاً كبيراً بتفاصيل الأخشاب رائحتها، ملمسها، وصلابتها.
              </p>
              <p className="opacity-70 text-sm leading-relaxed">
                اليوم، نفخر بأن نكون من الرواد المستوردين لأخشاب الزان من الغابات المستدامة في أوروبا (رومانيا، ألمانيا، يوغسلافيا). نضمن أن كل لوح خشب يصل إلينا يمر باختبارات قاسية للرطوبة والمتانة قبل أن نضعه بين يدي الحرفيين والمصانع.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-none overflow-hidden border border-dark-border relative z-10 bg-dark-surface p-2">
                <img 
                  src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=1000" 
                  alt="نجار يعمل بالخشب" 
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 rounded-full z-0 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Values Section */}
      <section className="py-24 bg-dark-surface border-y border-dark-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-dark-bg border border-dark-border shadow-none text-center rounded-none relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent transition-colors group-hover:bg-gold"></div>
              <CardContent className="pt-10 pb-10">
                <TreePine className="h-10 w-10 text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-serif text-white mb-2">100%</h3>
                <p className="text-[10px] uppercase tracking-widest text-text-muted">خشب طبيعي مستدام</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-bg border border-dark-border shadow-none text-center rounded-none relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent transition-colors group-hover:bg-gold"></div>
              <CardContent className="pt-10 pb-10">
                <Globe className="h-10 w-10 text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-serif text-white mb-2">+15</h3>
                <p className="text-[10px] uppercase tracking-widest text-text-muted">دولة نستورد منها</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-bg border border-dark-border shadow-none text-center rounded-none relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent transition-colors group-hover:bg-gold"></div>
              <CardContent className="pt-10 pb-10">
                <Users className="h-10 w-10 text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-serif text-white mb-2">+500</h3>
                <p className="text-[10px] uppercase tracking-widest text-text-muted">عميل ومصنع نخدمهم</p>
              </CardContent>
            </Card>
            <Card className="bg-dark-bg border border-dark-border shadow-none text-center rounded-none relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent transition-colors group-hover:bg-gold"></div>
              <CardContent className="pt-10 pb-10">
                <Award className="h-10 w-10 text-gold mx-auto mb-6" />
                <h3 className="text-3xl font-serif text-white mb-2">25</h3>
                <p className="text-[10px] uppercase tracking-widest text-text-muted">عاماً من الخبرة</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
