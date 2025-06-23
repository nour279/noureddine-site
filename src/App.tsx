import React, { useState, useEffect } from 'react';
import { ChevronDown, Database, FileText, BookOpen, BarChart3, Mail, Github, Linkedin, Facebook, Download, Share2, Menu, X, TrendingUp, Users, Briefcase, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'books', 'municipality', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: '🏠' },
    { id: 'work', label: 'أعمالي', icon: '💼' },
    { id: 'books', label: 'الكتب والمطبوعات', icon: '📚' },
    { id: 'municipality', label: 'بلديتي بالأرقام', icon: '📊' },
    { id: 'contact', label: 'تواصل معي', icon: '📧' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir="ltr">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-bold">
                م. شطير نورالدين
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8" dir="rtl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span className="ml-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200" dir="rtl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-right px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span className="ml-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right" dir="rtl">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                مرحباً، أنا
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  المهندس شطير نورالدين
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                مهندس متخصص في تحليل البيانات وإدارة المشاريع، أهدف إلى تبسيط البيانات المعقدة 
                ودعم الإدارة الرشيدة محلياً من خلال الأدوات الحديثة والتحليل الذكي.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <button
                  onClick={() => scrollToSection('work')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  استكشف أعمالي
                  <ArrowRight className="mr-2 inline" size={20} />
                </button>
                <button
                  onClick={() => scrollToSection('municipality')}
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-105"
                >
                  بلديتي بالأرقام
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400"
                  alt="Engineer working with data"
                  className="rounded-2xl w-full h-full object-cover shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Database className="text-blue-600" size={24} />
                  <span className="font-semibold text-gray-800">Data Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" dir="rtl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">أعمالي</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعة متنوعة من المشاريع التحليلية ولوحات القيادة التفاعلية التي تحول البيانات إلى رؤى قابلة للتنفيذ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" dir="rtl">لوحات القيادة التفاعلية</h3>
              <p className="text-gray-600 mb-6" dir="rtl">
                تصميم وتطوير لوحات قيادة متقدمة باستخدام Power BI و Excel 2024 لتحليل البيانات بصرياً
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                عرض المشاريع ←
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Github className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" dir="rtl">مشاريع Python التطبيقية</h3>
              <p className="text-gray-600 mb-6" dir="rtl">
                تطوير حلول برمجية متقدمة باستخدام Python لمعالجة وتحليل البيانات الضخمة
              </p>
              <button className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors">
                GitHub المشاريع ←
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FileText className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" dir="rtl">مقالات وتقارير تحليلية</h3>
              <p className="text-gray-600 mb-6" dir="rtl">
                كتابة ونشر مقالات متخصصة في تحليل البيانات والحوكمة المحلية
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                قراءة المقالات ←
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" dir="rtl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">الكتب والمطبوعات</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعة من الكتب المتخصصة في الحوكمة المحلية والتحليل الاجتماعي
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-start space-x-6" dir="rtl">
                <img
                  src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=200"
                  alt="Governance Book"
                  className="w-32 h-40 object-cover rounded-lg shadow-md ml-6"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    الحوكمة الرشيدة للبلدية: تحليل واستشراف اجتماعي
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    دراسة شاملة حول آليات تطبيق الحوكمة الرشيدة في الإدارة المحلية مع التركيز على الشفافية والمساءلة والمشاركة المجتمعية.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <Download className="ml-2" size={18} />
                      تحميل PDF مجاني
                    </button>
                    <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors">
                      شراء النسخة المطبوعة
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-start space-x-6" dir="rtl">
                <img
                  src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=200"
                  alt="Articles Book"
                  className="w-32 h-40 object-cover rounded-lg shadow-md ml-6"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    مجموعة المقالات الصحفية - النسخة المعدلة
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    تجميع للمقالات المنشورة في الصحافة المحلية والوطنية حول قضايا التنمية المحلية وتحليل البيانات الاجتماعية والاقتصادية.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center">
                      <Download className="ml-2" size={18} />
                      تحميل PDF مجاني
                    </button>
                    <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                      عينة مجانية
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipality Section */}
      <section id="municipality" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" dir="rtl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">بلديتي بالأرقام</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              سلسلة مقالات دورية تشرح للمواطن بلغة سهلة وشفافة كيف تُدار البلدية وتُصرف الميزانيات
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2" dir="rtl">أين تُصرف الميزانية؟</h3>
              <p className="text-gray-600 text-sm" dir="rtl">تفصيل شفاف لبنود الإنفاق البلدي</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2" dir="rtl">تطور عدد السكان</h3>
              <p className="text-gray-600 text-sm" dir="rtl">إحصائيات ديمغرافية منذ عام 2000</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2" dir="rtl">فرص العمل المحلية</h3>
              <p className="text-gray-600 text-sm" dir="rtl">إحصاءات وتحليل سوق العمل المحلي</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-8 rounded-2xl text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div dir="rtl">
                <h3 className="text-3xl font-bold mb-4">آخر المقالات المنشورة</h3>
                <div className="space-y-4">
                  <div className="border-r-4 border-blue-400 pr-4">
                    <h4 className="font-semibold mb-2">ميزانية البلدية 2024: توزيع الإنفاق بالتفصيل</h4>
                    <p className="text-gray-300 text-sm">تحليل شامل لبنود الميزانية المحلية وأولويات الإنفاق</p>
                    <div className="flex items-center mt-3 space-x-4">
                      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                        <Download className="ml-1" size={16} />
                        تحميل PDF
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                        <Share2 className="ml-1" size={16} />
                        مشاركة
                      </button>
                    </div>
                  </div>
                  <div className="border-r-4 border-emerald-400 pr-4">
                    <h4 className="font-semibold mb-2">نمو السكان وتأثيره على الخدمات البلدية</h4>
                    <p className="text-gray-300 text-sm">دراسة إحصائية للنمو الديمغرافي وتحدياته</p>
                    <div className="flex items-center mt-3 space-x-4">
                      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                        <Download className="ml-1" size={16} />
                        تحميل PDF
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                        <Share2 className="ml-1" size={16} />
                        مشاركة
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600"
                  alt="Municipality data visualization"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" dir="rtl">
            <h2 className="text-4xl font-bold mb-4">تواصل معي</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              هل لديك مشروع تحليلي أو تحتاج استشارة في البيانات المحلية؟ لنتعاون معاً
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div dir="rtl">
              <h3 className="text-2xl font-bold mb-8">أرسل رسالة مباشرة</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-300"
                    placeholder="اكتب اسمك هنا"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-300"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">الرسالة</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-300 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  إرسال الرسالة
                  <Mail className="mr-2 inline" size={20} />
                </button>
              </form>
            </div>

            <div dir="rtl">
              <h3 className="text-2xl font-bold mb-8">طرق التواصل الأخرى</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <Mail className="text-blue-400 ml-4" size={24} />
                  <div>
                    <div className="font-semibold">البريد الإلكتروني المهني</div>
                    <div className="text-blue-200">noureddin.engineer@example.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <Linkedin className="text-blue-400 ml-4" size={24} />
                  <div>
                    <div className="font-semibold">LinkedIn المهني</div>
                    <div className="text-blue-200">linkedin.com/in/noureddin-chatir</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <Facebook className="text-blue-400 ml-4" size={24} />
                  <div>
                    <div className="font-semibold">Facebook</div>
                    <div className="text-blue-200">fb.com/noureddin.data</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <Github className="text-blue-400 ml-4" size={24} />
                  <div>
                    <div className="font-semibold">GitHub المشاريع</div>
                    <div className="text-blue-200">github.com/noureddin-engineer</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-xl border border-white/20">
                <h4 className="text-xl font-bold mb-4">🤝 الشراكة والاستشارة</h4>
                <p className="text-blue-100 leading-relaxed">
                  أقدم خدمات استشارية متخصصة في تحليل البيانات المحلية، تصميم لوحات القيادة، 
                  وتطوير الحلول البرمجية للمؤسسات والبلديات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-bold text-xl mb-6 inline-block">
              م. شطير نورالدين
            </div>
            <p className="text-gray-400 mb-6" dir="rtl">
              مهندس متخصص في تحليل البيانات وإدارة المشاريع
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Facebook className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={24} />
              <Linkedin className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={24} />
              <Github className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={24} />
              <Mail className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={24} />
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500" dir="rtl">
                جميع الحقوق محفوظة © 2025 - المهندس شطير نورالدين
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;