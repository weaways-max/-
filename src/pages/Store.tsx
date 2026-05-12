import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Star, Search, SlidersHorizontal } from 'lucide-react';
import { WOOD_PRODUCTS } from '../data/mockData';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';

export function Store() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', ...Array.from(new Set(WOOD_PRODUCTS.map(p => p.category)))];

  const filteredProducts = WOOD_PRODUCTS.filter(p => {
    const matchesSearch = p.name.includes(searchTerm) || p.description.includes(searchTerm);
    const matchesCategory = selectedCategory === 'الكل' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-dark-bg pt-8 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center border-b border-dark-border pb-8">
          <h1 className="text-4xl font-serif text-white mb-4">متجر الأخشاب</h1>
          <p className="opacity-70 text-sm max-w-2xl mx-auto">تصفح مجموعتنا الواسعة من خشب الزان عالي الجودة واطلب ما يناسب احتياجات مشروعك.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-dark-surface p-6 rounded-none border border-dark-border sticky top-24">
              <div className="flex items-center gap-2 font-serif text-xl text-white mb-6 border-b border-white/10 pb-4">
                <SlidersHorizontal className="h-5 w-5 text-gold" />
                <span>تصفية النتائج</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-3">بحث</label>
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                    <Input 
                      placeholder="اسم، مواصفات..." 
                      className="pl-4 pr-10 border border-dark-border bg-dark-bg focus-visible:ring-0 focus-visible:border-gold h-10 rounded-none text-xs"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-3">التصنيفات</label>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-right px-3 py-2 text-xs rounded-none transition-colors border-r-2 ${
                          selectedCategory === cat 
                            ? 'bg-dark-surface-alt text-gold border-gold font-bold' 
                            : 'text-text-main border-transparent hover:bg-dark-bg hover:text-gold'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col group border border-dark-border bg-dark-surface shadow-none hover:border-gold/30 transition-all duration-300 rounded-none p-3">
                    <div className="relative h-48 overflow-hidden rounded-none border border-dark-border/50 mb-3">
                      <div className="absolute w-full h-full opacity-40 bg-gradient-to-br from-dark-border to-transparent z-10 pointer-events-none"></div>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm flex items-center justify-center z-30">
                          <Badge variant="destructive" className="px-4 py-1">نفذت الكمية</Badge>
                        </div>
                      )}
                      <div className="absolute top-3 right-3 z-20">
                        <Badge variant="luxury">{product.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="pt-2 px-2 flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-base font-bold text-white">{product.name}</h3>
                        <div className="flex items-center text-gold text-xs">
                          <Star className="h-3 w-3 fill-current mr-1" />
                          {product.rating}
                        </div>
                      </div>
                      <p className="text-text-muted text-xs mb-4 line-clamp-3 leading-relaxed">{product.description}</p>
                      <div className="text-[10px] uppercase tracking-widest text-gold bg-dark-bg border border-dark-border inline-block px-2 py-1 rounded-none mb-2">
                        السماكة: {product.thickness}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-white/10 pt-4 px-2 flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gold">{product.price.toLocaleString()}</span>
                        <span className="text-[10px] uppercase tracking-widest text-white/40 mr-1">ج.م / {product.unit}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        disabled={!product.inStock}
                        className="border border-dark-border text-[10px] uppercase tracking-widest hover:bg-gold hover:text-dark-bg transition-colors rounded-none h-8 px-4"
                      >
                        إضافة
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-dark-surface border border-dark-border rounded-none">
                <Search className="h-12 w-12 text-dark-border mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white">لا توجد منتجات مطابقة</h3>
                <p className="text-text-muted text-sm mt-2">حاول تغيير كلمات البحث أو التصنيف.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
