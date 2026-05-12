import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Star, Truck, ShieldCheck, HeadphonesIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { WOOD_PRODUCTS, TESTIMONIALS } from '../data/mockData';

export function Home() {
  const featuredProducts = WOOD_PRODUCTS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1563297129-37e408ec2d88?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="absolute inset-0 z-10 bg-luxury-black/70" />

        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="text-gold tracking-[0.3em] font-bold uppercase mb-4 block text-xs">الجودة العالمية للأخشاب الطبيعية</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6 text-white">
              فخامة الزان<br/><span className="text-gold">الأوروبي النقي</span>
            </h1>
            <p className="text-lg opacity-70 mb-10 leading-relaxed max-w-md mx-auto text-white">
              نوفر أجود أنواع أخشاب الزان الطبيعي المستخرجة بعناية لتناسب أرقى أعمال الديكور والأثاث، بجودة تدوم لأجيال.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/store">
                <Button className="bg-gold text-dark-bg px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gold-light w-full sm:w-auto h-auto rounded-none">
                  تسوق الآن
                </Button>
              </Link>
              <Link to="/calculator">
                <Button variant="outline" className="border border-white/20 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white/5 text-white w-full sm:w-auto h-auto rounded-none">
                  طلب تفصيل خاص
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-surface border-y border-dark-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="p-8 rounded-none bg-dark-bg border border-dark-border"
            >
              <ShieldCheck className="h-10 w-10 text-gold mx-auto mb-6" />
              <h3 className="text-lg font-bold mb-3 text-white tracking-wide">جودة مضمونة</h3>
              <p className="text-text-muted text-sm leading-relaxed">نستورد أفضل الأخشاب من مصادرها الأصلية مع ضمان الجودة والخلو من العيوب.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="p-8 rounded-none bg-dark-bg border border-dark-border"
            >
              <Truck className="h-10 w-10 text-gold mx-auto mb-6" />
              <h3 className="text-lg font-bold mb-3 text-white tracking-wide">شحن وتوصيل سريع</h3>
              <p className="text-text-muted text-sm leading-relaxed">أسطول مجهز لتوصيل طلبياتك بأمان وسرعة لكافة المناطق والمدن.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="p-8 rounded-none bg-dark-bg border border-dark-border"
            >
              <HeadphonesIcon className="h-10 w-10 text-gold mx-auto mb-6" />
              <h3 className="text-lg font-bold mb-3 text-white tracking-wide">دعم فني استشاري</h3>
              <p className="text-text-muted text-sm leading-relaxed">فريق من الخبراء جاهز لمساعدتك في اختيار نوع الخشب الأنسب لمشروعك.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12 border-b border-dark-border pb-6">
            <div>
              <h2 className="text-3xl font-serif text-white mb-4">المنتجات المميزة</h2>
              <p className="opacity-70 text-sm max-w-2xl">اخترنا لك تشكيلة من أفضل أنواع الزان التي تحظى بطلب عالٍ لجودتها ومواصفاتها المتفوقة.</p>
            </div>
            <Link to="/store" className="hidden md:flex items-center text-xs uppercase tracking-widest text-gold hover:text-white transition-colors">
              عرض الكل
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col group border border-dark-border bg-dark-surface shadow-none rounded-none p-4">
                  <div className="relative h-56 flex items-center justify-center mb-4 overflow-hidden border border-dark-border/50">
                    <div className="absolute w-full h-full opacity-40 bg-gradient-to-br from-dark-border to-transparent z-10"></div>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <Badge variant="luxury">{product.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="pt-2 px-2 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">{product.name}</h3>
                      <div className="flex items-center text-gold text-xs">
                        <Star className="h-3 w-3 fill-current mr-1" />
                        {product.rating}
                      </div>
                    </div>
                    <p className="text-text-muted text-xs mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                    <div className="space-y-1 mb-4 text-[10px] uppercase tracking-widest text-white/50">
                      <div className="flex justify-between">
                        <span>السماكة المتوفرة:</span>
                        <span className="font-bold text-white">{product.thickness}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-white/10 pt-4 px-2 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gold">{product.price.toLocaleString()}</span>
                      <span className="text-[10px] uppercase tracking-widest text-white/40 mr-1">ج.م / {product.unit}</span>
                    </div>
                    <Button variant="outline" className="border border-dark-border text-[10px] uppercase tracking-widest hover:bg-gold hover:text-dark-bg transition-colors rounded-none h-10 px-4">
                      أضف للسلة
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/store">
              <Button variant="luxury" className="w-full">
                عرض كل المنتجات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About/CTA Section */}
      <section className="py-24 bg-dark-surface border-y border-dark-border text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #3D2B1F 0px, #3D2B1F 2px, transparent 2px, transparent 12px)' }} />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">لماذا تختار <span className="text-gold">ازني خشب؟</span></h2>
              <p className="opacity-70 text-lg mb-8 leading-relaxed max-w-lg">
                خبرة تمتد لعقود في استيراد وتوريد أجود أنواع الأخشاب. نحن لا نبيع الخشب فحسب، بل نقدم شراكة استراتيجية لمصانع الأثاث والمقاولين لضمان نجاح مشاريعهم بأعلى جودة ممكنة.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "أخشاب مبخرة ومعالجة ضد التسوس",
                  "تنوع في المقاسات لتناسب جميع الاحتياجات",
                  "إمكانية التفصيل والقص حسب الطلب بدقة عالية",
                  "مستودعات مجهزة للحفاظ على نسبة الرطوبة المثالية"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white/80">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full ml-4"></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button className="bg-gold text-dark-bg hover:bg-gold-light uppercase tracking-widest text-xs h-12 px-8 rounded-none border-none">
                  اقرأ المزيد عنا
                </Button>
              </Link>
            </div>
            <div className="relative border border-dark-border p-4 bg-dark-bg">
               <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-brown/20 blur-lg opacity-50"></div>
               <img 
                 src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=1000" 
                 alt="مستودعات الأخشاب" 
                 className="relative w-full h-auto object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-1000"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-white mb-4">آراء عملائنا</h2>
            <p className="text-text-muted text-sm uppercase tracking-widest">نفخر بثقة شركائنا وعملائنا في جودة منتجاتنا</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <Card key={review.id} className="bg-dark-surface border-dark-border rounded-none p-6">
                <CardContent className="pt-4 relative p-0">
                  <div className="mb-6 flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-text-main opacity-80 italic mb-8 text-sm leading-relaxed">"{review.text}"</p>
                  <div className="flex flex-col border-t border-white/10 pt-4">
                    <span className="font-bold text-white text-sm">{review.name}</span>
                    <span className="text-[10px] text-gold uppercase tracking-wider mt-1">{review.company}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
