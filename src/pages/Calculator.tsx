import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalcIcon, Ruler, Box, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function Calculator() {
  const [length, setLength] = useState<number | ''>('');
  const [width, setWidth] = useState<number | ''>('');
  const [thickness, setThickness] = useState<number | ''>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [woodType, setWoodType] = useState('روماني');

  // Approximate prices per cubic meter
  const prices: Record<string, number> = {
    'روماني': 4500,
    'ألماني': 5200,
    'يوغسلافي': 4800,
    'تركي': 3900,
  };

  const calculateVolume = () => {
    if (!length || !width || !thickness) return 0;
    // convert cm to meters
    const l = Number(length) / 100;
    const w = Number(width) / 100;
    const t = Number(thickness) / 100;
    return l * w * t * quantity;
  };

  const volume = calculateVolume();
  const totalPrice = volume * prices[woodType];

  return (
    <div className="min-h-screen bg-dark-bg pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 border-b border-dark-border pb-8">
          <CalcIcon className="h-16 w-16 text-gold mx-auto mb-4" />
          <h1 className="text-4xl font-serif text-white mb-4">حاسبة الخشب والأبعاد</h1>
          <p className="text-text-muted text-sm uppercase tracking-widest max-w-xl mx-auto">احسب التكلفة التقريبية للكمية المطلوبة بناءً على المقاسات قبل الطلب.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2"
          >
            <Card className="bg-dark-surface border border-dark-border shadow-none rounded-none p-0 relative">
               <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              <CardHeader className="border-b border-white/10 p-6 bg-dark-bg">
                <CardTitle className="flex items-center gap-2 font-serif text-2xl text-white">
                  <Ruler className="text-gold h-6 w-6" />
                  أدخل المقاسات (بالسنتيمتر)
                </CardTitle>
                <CardDescription className="text-[10px] uppercase tracking-widest text-text-muted">جميع الحسابات تقريبية وقد تختلف قليلاً عند القص الفعلي</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-3">نوع الزان</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.keys(prices).map(type => (
                      <button
                        key={type}
                        onClick={() => setWoodType(type)}
                        className={`py-3 px-4 rounded-none border text-xs tracking-widest uppercase transition-all ${
                          woodType === type 
                            ? 'border-gold bg-gold/5 text-gold font-bold' 
                            : 'border-dark-border text-white/50 hover:border-gold/30 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-2">الطول (سم)</label>
                    <Input 
                      type="number" 
                      min="0"
                      value={length} 
                      onChange={(e) => setLength(e.target.value ? Number(e.target.value) : '')}
                      placeholder="مثال: 200"
                      className="border-dark-border bg-dark-bg text-white focus-visible:ring-0 focus-visible:border-gold rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-2">العرض (سم)</label>
                    <Input 
                      type="number" 
                      min="0"
                      value={width} 
                      onChange={(e) => setWidth(e.target.value ? Number(e.target.value) : '')}
                      placeholder="مثال: 100"
                      className="border-dark-border bg-dark-bg text-white focus-visible:ring-0 focus-visible:border-gold rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-2">السماكة (سم)</label>
                    <Input 
                      type="number" 
                      min="0"
                      value={thickness} 
                      onChange={(e) => setThickness(e.target.value ? Number(e.target.value) : '')}
                      placeholder="مثال: 5"
                      className="border-dark-border bg-dark-bg text-white focus-visible:ring-0 focus-visible:border-gold rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-2">عدد القطع</label>
                  <Input 
                    type="number" 
                    min="1"
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full md:w-1/3 border-dark-border bg-dark-bg text-white focus-visible:ring-0 focus-visible:border-gold rounded-none"
                  />
                </div>

              </CardContent>
            </Card>
          </motion.div>

          {/* Results Summary */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <Card className="bg-dark-surface border border-dark-border text-white shadow-none rounded-none p-0 sticky top-24 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-gold to-dark-border"></div>
              <CardHeader className="border-b border-white/10 pb-6 pt-8 px-6">
                <CardTitle className="text-gold flex items-center gap-2 font-serif text-xl">
                  <Box className="h-6 w-6" />
                  ملخص الحساب
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-text-muted">النوع:</span>
                  <span className="font-bold text-sm text-white">زان {woodType}</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-text-muted">الحجم الإجمالي:</span>
                  <div className="text-left">
                    <span className="font-bold text-xl text-white">{volume.toFixed(4)}</span>
                    <span className="text-[10px] text-white/50 mr-1 block uppercase tracking-widest mt-1">متر مكعب (م³)</span>
                  </div>
                </div>

                <div className="pt-4">
                  <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-2">التكلفة التقديرية:</span>
                  <div className="text-4xl font-bold text-gold flex items-baseline justify-end gap-2 text-left" dir="ltr">
                    <span className="text-[10px] tracking-widest uppercase text-white/50" dir="rtl">ج.م</span>
                    {totalPrice > 0 ? totalPrice.toLocaleString(undefined, { maximumFractionDigits: 0 }) : '0'}
                  </div>
                </div>
                
                <Button className="w-full bg-gold text-dark-bg hover:bg-gold-light transition-colors h-14 text-sm font-bold uppercase tracking-widest mt-6 rounded-none">
                  <ShoppingCart className="ml-2 h-5 w-5" />
                  طلب تفصيل
                </Button>
                
                <p className="text-[10px] leading-relaxed text-text-muted text-center uppercase tracking-wider opacity-70 mt-6">
                  * هذه الأسعار تقريبية بناءً على الحجم الكلي. قد تضاف رسوم إضافية على القص المعقد أو الشحن.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
