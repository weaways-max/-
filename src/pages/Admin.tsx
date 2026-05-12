import React from 'react';
import { motion } from 'motion/react';
import { Settings, Package, ShoppingBag, Users as UsersIcon, LayoutDashboard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export function Admin() {
  return (
    <div className="min-h-screen bg-dark-bg flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark-surface border-l border-dark-border hidden md:block">
        <div className="p-6 border-b border-dark-border">
          <h2 className="text-xl font-serif text-gold flex items-center gap-2">
            <Settings className="h-5 w-5" />
            لوحة التحكم
          </h2>
        </div>
        <nav className="p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 bg-dark-surface-alt text-gold px-4 py-3 rounded-none border border-gold/30 transition-colors">
            <LayoutDashboard className="h-5 w-5" />
            <span className="text-[10px] uppercase tracking-widest font-bold">نظرة عامة</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-white/50 px-4 py-3 rounded-none transition-colors hover:bg-dark-surface-alt hover:text-white">
            <Package className="h-5 w-5" />
            <span className="text-[10px] uppercase tracking-widest font-bold">المنتجات والمخزون</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-white/50 px-4 py-3 rounded-none transition-colors hover:bg-dark-surface-alt hover:text-white">
            <ShoppingBag className="h-5 w-5" />
            <span className="text-[10px] uppercase tracking-widest font-bold">الطلبات</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-white/50 px-4 py-3 rounded-none transition-colors hover:bg-dark-surface-alt hover:text-white">
            <UsersIcon className="h-5 w-5" />
            <span className="text-[10px] uppercase tracking-widest font-bold">العملاء</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-8 border-b border-dark-border pb-6">
          <h1 className="text-3xl font-serif text-white mb-2">مرحباً، مدير النظام</h1>
          <p className="text-text-muted text-sm uppercase tracking-widest">إليك ملخص أداء متجر ازني خشب اليوم.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="bg-dark-surface border border-dark-border rounded-none shadow-none">
              <CardHeader className="pb-2 border-b border-dark-border/50">
                <CardTitle className="text-text-muted text-[10px] uppercase tracking-widest font-bold">إجمالي المبيعات</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-3xl font-serif text-white flex items-end gap-1" dir="rtl"><span className="text-gold text-lg">EGP</span> 124,500</div>
                <p className="text-[10px] uppercase tracking-widest text-gold mt-2 flex items-center">
                  +12% عن الشهر الماضي
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-dark-surface border border-dark-border rounded-none shadow-none">
              <CardHeader className="pb-2 border-b border-dark-border/50">
                <CardTitle className="text-text-muted text-[10px] uppercase tracking-widest font-bold">الطلبات الجديدة</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-3xl font-serif text-white">18</div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 mt-2">3 في انتظار الموافقة</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="bg-dark-surface border border-dark-border rounded-none shadow-none">
              <CardHeader className="pb-2 border-b border-dark-border/50">
                <CardTitle className="text-text-muted text-[10px] uppercase tracking-widest font-bold">العملاء النشطين</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-3xl font-serif text-white">243</div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="bg-dark-surface border border-red-900/30 rounded-none shadow-none">
              <CardHeader className="pb-2 border-b border-dark-border/50">
                <CardTitle className="text-text-muted text-[10px] uppercase tracking-widest font-bold">تنبيهات المخزون</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-3xl font-serif text-red-500">2</div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 mt-2">منتجات قاربت على النفاذ</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Card className="bg-dark-bg shadow-none border border-dark-border rounded-none">
          <CardHeader className="border-b border-dark-border bg-dark-surface">
            <CardTitle className="font-serif text-white">أحدث الطلبات</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead className="bg-dark-surface-alt">
                  <tr className="border-b border-dark-border text-[10px] uppercase tracking-widest text-text-muted">
                    <th className="py-4 px-6 font-bold">رقم الطلب</th>
                    <th className="py-4 px-6 font-bold">العميل</th>
                    <th className="py-4 px-6 font-bold">التاريخ</th>
                    <th className="py-4 px-6 font-bold">الإجمالي</th>
                    <th className="py-4 px-6 font-bold">الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#ORD-001', name: 'مؤسسة البناء', date: 'اليوم', total: '18,500 ج.م', status: 'مكتمل' },
                    { id: '#ORD-002', name: 'أحمد سعيد', date: 'اليوم', total: '4,200 ج.م', status: 'جاري التجهيز' },
                    { id: '#ORD-003', name: 'مصنع الأثاث الذهبي', date: 'أمس', total: '45,000 ج.م', status: 'تم الشحن' },
                    { id: '#ORD-004', name: 'خالد محمد', date: 'أمس', total: '1,800 ج.م', status: 'بانتظار الدفع' },
                  ].map((order, i) => (
                    <tr key={i} className="border-b border-dark-border last:border-0 hover:bg-dark-surface/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-white text-xs">{order.id}</td>
                      <td className="py-4 px-6 text-white text-xs">{order.name}</td>
                      <td className="py-4 px-6 text-white/50 text-[10px] uppercase tracking-widest">{order.date}</td>
                      <td className="py-4 px-6 font-bold text-gold text-xs" dir="ltr">{order.total}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-2 py-1 border text-[10px] uppercase tracking-widest font-bold
                          ${order.status === 'مكتمل' || order.status === 'تم الشحن' ? 'bg-gold/10 text-gold border-gold/30' : ''}
                          ${order.status === 'جاري التجهيز' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' : ''}
                          ${order.status === 'بانتظار الدفع' ? 'bg-red-900/20 text-red-400 border-red-900/50' : ''}
                        `}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
