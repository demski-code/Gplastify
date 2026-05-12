import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Building2,
  ChevronDown,
  CheckCircle2,
  FileText,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Globe2,
  Handshake,
  HardHat,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Microscope,
  Moon,
  PackageCheck,
  Phone,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Truck,
  Waves,
  Wrench,
  Youtube,
} from 'lucide-react';
import './styles.css';

import logo from '../Images/logoDark.png';
import logoG from '../Images/LogoG.png';
import logoLight from '../Images/LogoLight.png';
import mainImage from '../Images/Main.png';
import mainDarkImage from '../Images/MainDark.png';
import aboutFactory from '../Images/About1.png';
import aboutTanker from '../Images/About2.png';
import aboutLab from '../Images/About3.png';
import application1 from '../Images/applications1.png';
import application2 from '../Images/applications2.png';
import application3 from '../Images/applications3.png';
import application4 from '../Images/applications4.png';
import application5 from '../Images/applications5.png';
import application6 from '../Images/applications6.png';

const languages = [
  { code: 'en', flagClass: 'flag-gb', label: 'English' },
  { code: 'ru', flagClass: 'flag-ru', label: 'Russian' },
  { code: 'ar', flagClass: 'flag-ae', label: 'Arabic' },
  { code: 'ka', flagClass: 'flag-ge', label: 'Georgian' },
];

const copy = {
  en: {
    nav: ['About', 'Product', 'Applications', 'Specifications'],
    contact: 'Contact',
    eyebrow: 'High-performance concrete admixtures',
    heroTitle: 'Build Stronger. Flow Better.',
    heroBody: 'HP Concrete Flow 40 delivers low water-cement ratio, high strength, long workability retention, and dense durable concrete for ready-mix and precast production.',
    productDetails: 'View product details',
    about: 'About Us',
    aboutTitle: 'Modern production support for high-performance concrete.',
    aboutButton: 'Contact us',
    formTitle: 'Send a request',
    phone: 'Phone number',
    email: 'Email address',
    message: 'Project details',
    send: 'Send request',
    productKicker: 'Our Product',
    productTitle: 'HP Concrete',
    productAccent: 'Flow 40',
    productBody: 'Advanced Polycarboxylate Ether technology disperses cement particles effectively, producing superior flowability, strength development, surface finish, density, and production efficiency.',
    specsButton: 'Technical specifications',
    applicationsTitle: 'Applications',
    whyTitle: 'Why Choose',
    whyAccent: 'Gplastify?',
    specsTitle: 'Technical Specifications',
    pdfTitle: 'Product PDF',
    pdfBody: 'More information about HP Concrete Flow 40',
    pdfAction: 'Open PDF',
    quickLinks: 'Quick links',
    footerText: 'High-performance hyper plasticizers for stronger, denser, and more workable concrete.',
    footerContactText: 'Trial batches, pilot deliveries, technical support, and dealer opportunities.',
    copyright: '(c) 2026 LLC Gplastify. All rights reserved.',
    aboutBody: [
      'LLC Gplastify is focused on practical technical performance, localized production, and direct engineering support for concrete producers. We help customers validate admixture performance through laboratory testing, on-site trials, and formula adaptation based on local raw materials.',
      'Our strategy is simple: consistent quality, rapid logistics, efficient service, and long-term industrial partnerships built around measurable results.',
    ],
    stats: ['Water reduction', 'Shelf life', 'Advanced technology'],
    advantages: ['Water reduction up to 40%', 'Excellent workability retention', 'Improved early-age strength', 'Increased durability', 'Superior rheology and flowability', 'Reduced segregation and bleeding'],
    applications: ['Ready-Mix Concrete', 'High-Rise Construction', 'Precast & Prestressed', 'Industrial Flooring', 'Hydraulic Structures', 'Self-Compacting Concrete'],
    reasons: [
      ['Advanced PCE Technology', 'High-efficiency polymer dispersion for superior performance.'],
      ['Stable Quality', 'Strict multi-stage laboratory quality control.'],
      ['Technical Support', 'Engineering guidance for trials, batching, and implementation.'],
      ['Fast Logistics', 'Localized production focus for reliable customer service.'],
      ['Flexible Policy', 'Commercial terms adapted to project and volume requirements.'],
      ['Long-Term Partnership', 'Built around industrial cooperation, not one-time supply.'],
    ],
    specs: ['Appearance', 'Density at 20 deg C', 'pH', 'Solid Content', 'Chloride Content', 'Alkali Content (Na2O)'],
    quality: [
      ['ASTM C494', 'Type F / Type G'],
      ['EN 934-2', 'Superplasticizer / HRWR'],
      ['Quality Assured', 'Multi-stage laboratory quality control'],
      ['Consistent Performance', 'Batch-to-batch stability ensured'],
    ],
  },
  ru: {
    nav: ['О нас', 'Продукт', 'Применение', 'Спецификации'],
    contact: 'Контакты',
    eyebrow: 'Высокоэффективные добавки для бетона',
    heroTitle: 'Стройте прочнее. Лейте лучше.',
    heroBody: 'HP Concrete Flow 40 обеспечивает низкое водоцементное отношение, высокую прочность, длительное сохранение удобоукладываемости и плотный долговечный бетон.',
    productDetails: 'Детали продукта',
    about: 'О нас',
    aboutTitle: 'Современная производственная поддержка для высокопрочного бетона.',
    aboutButton: 'Связаться',
    formTitle: 'Отправить запрос',
    phone: 'Номер телефона',
    email: 'Эл. почта',
    message: 'Детали проекта',
    send: 'Отправить',
    productKicker: 'Наш продукт',
    productTitle: 'HP Concrete',
    productAccent: 'Flow 40',
    productBody: 'Технология Polycarboxylate Ether эффективно диспергирует цементные частицы, улучшая текучесть, набор прочности, качество поверхности, плотность и эффективность производства.',
    specsButton: 'Технические характеристики',
    applicationsTitle: 'Применение',
    whyTitle: 'Почему выбирают',
    whyAccent: 'Gplastify?',
    specsTitle: 'Технические характеристики',
    pdfTitle: 'PDF продукта',
    pdfBody: 'Подробнее о HP Concrete Flow 40',
    pdfAction: 'Открыть PDF',
    quickLinks: 'Быстрые ссылки',
    footerText: 'Высокоэффективные гиперпластификаторы для более прочного, плотного и удобоукладываемого бетона.',
    footerContactText: 'Пробные партии, пилотные поставки, техническая поддержка и дилерские возможности.',
    copyright: '(c) 2026 LLC Gplastify. Все права защищены.',
    aboutBody: [
      'LLC Gplastify ориентирована на практические технические результаты, локализованное производство и прямую инженерную поддержку производителей бетона.',
      'Наша стратегия проста: стабильное качество, быстрая логистика, эффективный сервис и долгосрочные промышленные партнерства.',
    ],
    stats: ['Снижение воды', 'Срок хранения', 'Технология PCE'],
    advantages: ['Снижение воды до 40%', 'Отличное сохранение подвижности', 'Улучшенная ранняя прочность', 'Повышенная долговечность', 'Улучшенная реология и текучесть', 'Меньше расслоения и водоотделения'],
    applications: ['Товарный бетон', 'Высотное строительство', 'Сборный и преднапряженный бетон', 'Промышленные полы', 'Гидротехнические сооружения', 'Самоуплотняющийся бетон'],
    reasons: [
      ['Передовая PCE технология', 'Высокоэффективная полимерная дисперсия для лучшей работы.'],
      ['Стабильное качество', 'Строгий многоэтапный лабораторный контроль.'],
      ['Техническая поддержка', 'Инженерная поддержка для испытаний и внедрения.'],
      ['Быстрая логистика', 'Локализованное производство для надежного сервиса.'],
      ['Гибкая политика', 'Коммерческие условия под объем и проект.'],
      ['Долгосрочное партнерство', 'Мы строим промышленное сотрудничество на годы.'],
    ],
    specs: ['Внешний вид', 'Плотность при 20 град C', 'pH', 'Сухой остаток', 'Содержание хлоридов', 'Содержание щелочей (Na2O)'],
    quality: [
      ['ASTM C494', 'Type F / Type G'],
      ['EN 934-2', 'Суперпластификатор / HRWR'],
      ['Контроль качества', 'Многоэтапный лабораторный контроль'],
      ['Стабильная работа', 'Стабильность от партии к партии'],
    ],
  },
  ar: {
    nav: ['من نحن', 'المنتج', 'التطبيقات', 'المواصفات'],
    contact: 'تواصل',
    eyebrow: 'إضافات خرسانية عالية الأداء',
    heroTitle: 'ابن بقوة. تدفق أفضل.',
    heroBody: 'يوفر HP Concrete Flow 40 نسبة ماء إلى أسمنت منخفضة، وقوة عالية، واحتفاظا ممتازا بقابلية التشغيل، وخرسانة كثيفة ومتينة.',
    productDetails: 'تفاصيل المنتج',
    about: 'من نحن',
    aboutTitle: 'دعم إنتاج حديث للخرسانة عالية الأداء.',
    aboutButton: 'تواصل معنا',
    formTitle: 'أرسل طلبا',
    phone: 'رقم الهاتف',
    email: 'البريد الإلكتروني',
    message: 'تفاصيل المشروع',
    send: 'إرسال',
    productKicker: 'منتجنا',
    productTitle: 'HP Concrete',
    productAccent: 'Flow 40',
    productBody: 'تعمل تقنية Polycarboxylate Ether على تشتيت جزيئات الأسمنت بكفاءة، مما يحسن التدفق وتطور القوة وكثافة الخرسانة وكفاءة الإنتاج.',
    specsButton: 'المواصفات الفنية',
    applicationsTitle: 'التطبيقات',
    whyTitle: 'لماذا تختار',
    whyAccent: 'Gplastify؟',
    specsTitle: 'المواصفات الفنية',
    pdfTitle: 'ملف PDF للمنتج',
    pdfBody: 'معلومات إضافية عن HP Concrete Flow 40',
    pdfAction: 'فتح PDF',
    quickLinks: 'روابط سريعة',
    footerText: 'ملدنات فائقة الأداء لخرسانة أقوى وأكثر كثافة وأسهل في التشغيل.',
    footerContactText: 'دفعات تجريبية، توريدات أولية، دعم فني وفرص وكلاء.',
    copyright: '(c) 2026 LLC Gplastify. جميع الحقوق محفوظة.',
    aboutBody: [
      'تركز LLC Gplastify على الأداء الفني العملي والإنتاج المحلي والدعم الهندسي المباشر لمنتجي الخرسانة.',
      'استراتيجيتنا واضحة: جودة ثابتة، لوجستيات سريعة، خدمة فعالة وشراكات صناعية طويلة الأمد.',
    ],
    stats: ['تقليل المياه', 'مدة التخزين', 'تقنية PCE'],
    advantages: ['تقليل المياه حتى 40%', 'احتفاظ ممتاز بقابلية التشغيل', 'تحسن القوة المبكرة', 'زيادة المتانة', 'ريولوجيا وتدفق أفضل', 'تقليل الانفصال والنزف'],
    applications: ['الخرسانة الجاهزة', 'البناء المرتفع', 'الخرسانة مسبقة الصب والإجهاد', 'الأرضيات الصناعية', 'الهياكل الهيدروليكية', 'الخرسانة ذاتية الدمك'],
    reasons: [
      ['تقنية PCE متقدمة', 'بوليمر عالي الكفاءة لأداء أفضل.'],
      ['جودة ثابتة', 'رقابة مخبرية صارمة متعددة المراحل.'],
      ['دعم فني', 'دعم هندسي للتجارب والتنفيذ.'],
      ['لوجستيات سريعة', 'تركيز على الإنتاج المحلي والخدمة الموثوقة.'],
      ['سياسة مرنة', 'شروط تجارية مناسبة للمشروع والحجم.'],
      ['شراكة طويلة الأمد', 'ننمو مع نجاح عملائنا.'],
    ],
    specs: ['المظهر', 'الكثافة عند 20 درجة C', 'pH', 'المحتوى الصلب', 'محتوى الكلوريد', 'محتوى القلويات (Na2O)'],
    quality: [
      ['ASTM C494', 'Type F / Type G'],
      ['EN 934-2', 'Superplasticizer / HRWR'],
      ['ضمان الجودة', 'رقابة مخبرية متعددة المراحل'],
      ['أداء ثابت', 'ثبات من دفعة إلى أخرى'],
    ],
  },
  ka: {
    nav: ['ჩვენ შესახებ', 'პროდუქტი', 'გამოყენება', 'სპეციფიკაციები'],
    contact: 'კონტაქტი',
    eyebrow: 'მაღალი ეფექტიანობის დანამატები ბეტონისთვის',
    heroTitle: 'ააშენე მტკიცედ. მიიღე უკეთესი დენადობა.',
    heroBody: 'HP Concrete Flow 40 უზრუნველყოფს დაბალ წყალ-ცემენტის თანაფარდობას, მაღალ სიმტკიცეს, სამუშაოუნარიანობის შენარჩუნებას და გამძლე, მკვრივ ბეტონს.',
    productDetails: 'პროდუქტის დეტალები',
    about: 'ჩვენ შესახებ',
    aboutTitle: 'თანამედროვე საწარმოო მხარდაჭერა მაღალი ხარისხის ბეტონისთვის.',
    aboutButton: 'დაგვიკავშირდით',
    formTitle: 'გამოგზავნეთ მოთხოვნა',
    phone: 'ტელეფონი',
    email: 'ელ. ფოსტა',
    message: 'პროექტის დეტალები',
    send: 'გაგზავნა',
    productKicker: 'ჩვენი პროდუქტი',
    productTitle: 'HP Concrete',
    productAccent: 'Flow 40',
    productBody: 'Polycarboxylate Ether ტექნოლოგია ეფექტურად ანაწილებს ცემენტის ნაწილაკებს და აუმჯობესებს დენადობას, სიმტკიცეს, ზედაპირის ხარისხს, სიმკვრივეს და წარმოების ეფექტიანობას.',
    specsButton: 'ტექნიკური მახასიათებლები',
    applicationsTitle: 'გამოყენება',
    whyTitle: 'რატომ',
    whyAccent: 'Gplastify?',
    specsTitle: 'ტექნიკური მახასიათებლები',
    pdfTitle: 'პროდუქტის PDF',
    pdfBody: 'დამატებითი ინფორმაცია HP Concrete Flow 40-ზე',
    pdfAction: 'PDF-ის გახსნა',
    quickLinks: 'სწრაფი ბმულები',
    footerText: 'მაღალი ეფექტიანობის ჰიპერპლასტიფიკატორები უფრო მტკიცე, მკვრივი და მუშა ბეტონისთვის.',
    footerContactText: 'სატესტო პარტიები, პილოტური მიწოდება, ტექნიკური მხარდაჭერა და დილერობის შესაძლებლობები.',
    copyright: '(c) 2026 LLC Gplastify. ყველა უფლება დაცულია.',
    aboutBody: [
      'LLC Gplastify ორიენტირებულია პრაქტიკულ ტექნიკურ შედეგებზე, ლოკალურ წარმოებასა და ბეტონის მწარმოებლების პირდაპირ საინჟინრო მხარდაჭერაზე.',
      'ჩვენი სტრატეგია მარტივია: სტაბილური ხარისხი, სწრაფი ლოგისტიკა, ეფექტიანი მომსახურება და გრძელვადიანი ინდუსტრიული პარტნიორობა.',
    ],
    stats: ['წყლის შემცირება', 'შენახვის ვადა', 'PCE ტექნოლოგია'],
    advantages: ['წყლის შემცირება 40%-მდე', 'სამუშაოუნარიანობის შესანიშნავი შენარჩუნება', 'ადრეული სიმტკიცის გაუმჯობესება', 'გამძლეობის ზრდა', 'უკეთესი რეოლოგია და დენადობა', 'ნაკლები სეგრეგაცია და გამოყოფა'],
    applications: ['მზა ბეტონი', 'მაღალსართულიანი მშენებლობა', 'პრეკასტი და წინასწარდაძაბული ბეტონი', 'ინდუსტრიული იატაკები', 'ჰიდრავლიკური ნაგებობები', 'თვითშემკვრივებადი ბეტონი'],
    reasons: [
      ['მოწინავე PCE ტექნოლოგია', 'მაღალეფექტიანი პოლიმერი უკეთესი შედეგისთვის.'],
      ['სტაბილური ხარისხი', 'მკაცრი მრავალეტაპიანი ლაბორატორიული კონტროლი.'],
      ['ტექნიკური მხარდაჭერა', 'საინჟინრო მხარდაჭერა ტესტებისა და დანერგვისთვის.'],
      ['სწრაფი ლოგისტიკა', 'ლოკალურ წარმოებაზე დაფუძნებული სანდო სერვისი.'],
      ['მოქნილი პოლიტიკა', 'პროექტსა და მოცულობაზე მორგებული პირობები.'],
      ['გრძელვადიანი პარტნიორობა', 'ვიზრდებით თქვენი წარმატებით.'],
    ],
    specs: ['გარეგნობა', 'სიმკვრივე 20 გრად C-ზე', 'pH', 'მშრალი ნაშთი', 'ქლორიდის შემცველობა', 'ტუტეების შემცველობა (Na2O)'],
    quality: [
      ['ASTM C494', 'Type F / Type G'],
      ['EN 934-2', 'Superplasticizer / HRWR'],
      ['ხარისხის კონტროლი', 'მრავალეტაპიანი ლაბორატორიული კონტროლი'],
      ['სტაბილური შედეგი', 'პარტიიდან პარტიამდე სტაბილურობა'],
    ],
  },
};

const advantageIcons = [
  Droplets,
  Gauge,
  HardHat,
  ShieldCheck,
  SlidersHorizontal,
  Waves,
];

const applications = [
  { icon: Truck, image: application1 },
  { icon: Building2, image: application2 },
  { icon: Layers3, image: application3 },
  { icon: Factory, image: application4 },
  { icon: Waves, image: application5 },
  { icon: SlidersHorizontal, image: application6 },
];

const reasonIcons = [
  Sparkles,
  ShieldCheck,
  Wrench,
  Truck,
  Handshake,
  CheckCircle2,
];

const specs = [
  ['Appearance', 'Light brown / amber liquid'],
  ['Density at 20 deg C', '1.08 - 1.10 g/cm3'],
  ['pH', '~6'],
  ['Solid Content', 'Approx. 30%'],
  ['Chloride Content', '< 0.10%'],
  ['Alkali Content (Na2O)', '< 2.0%'],
];

const qualityIcons = [
  PackageCheck,
  FlaskConical,
  Microscope,
  Gauge,
];

function Nav({ lang, setLang, theme, setTheme, text }) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const selectedLanguage = languages.find((language) => language.code === lang) || languages[0];

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Gplastify home">
        <img src={logoG} alt="" />
        <span className="brand-name">Plastify</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#about">{text.nav[0]}</a>
        <a href="#product">{text.nav[1]}</a>
        <a href="#applications">{text.nav[2]}</a>
        <a href="#specs">{text.nav[3]}</a>
      </nav>
      <div className="header-actions">
        <div className="language-control">
          <Globe2 size={17} />
          <button className="language-button" type="button" onClick={() => setLanguageOpen((open) => !open)} aria-expanded={languageOpen} aria-label="Change language">
            <span className={`flag ${selectedLanguage.flagClass}`} />
            <span>{selectedLanguage.label}</span>
            <ChevronDown size={16} />
          </button>
          {languageOpen && (
            <div className="language-menu">
            {languages.map((language) => (
              <button
                className={language.code === lang ? 'active' : ''}
                key={language.code}
                type="button"
                onClick={() => {
                  setLang(language.code);
                  setLanguageOpen(false);
                }}
              >
                <span className={`flag ${language.flagClass}`} />
                <span>{language.label}</span>
              </button>
            ))}
            </div>
          )}
        </div>
        <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle light and dark mode">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a className="nav-cta" href="#contact">{text.contact}</a>
      </div>
    </header>
  );
}

function ScrollReveal() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal, .stagger > *');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}

function Hero({ text, theme }) {
  return (
    <section className="hero" id="home">
      <div className="hero-frame">
        <img className="hero-image hero-image-light" src={mainImage} alt="Concrete admixture used on a construction site" />
        <img className="hero-image hero-image-dark" src={mainDarkImage} alt="Concrete admixture used on a construction site at night" />
        <div className="hero-copy">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.heroTitle}</h1>
          <p>{text.heroBody}</p>
          <a className="primary-link" href="#product">
            {text.productDetails} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

function About({ text }) {
  return (
    <section className="about reveal" id="about">
      <div className="section-copy reveal">
        <p className="kicker">{text.about}</p>
        <h2>{text.aboutTitle}</h2>
        {text.aboutBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <a className="dark-button" href="#contact">
          {text.aboutButton} <ArrowRight size={18} />
        </a>
        <div className="stats stagger">
          <div><strong>40%</strong><span>{text.stats[0]}</span></div>
          <div><strong>12 mo</strong><span>{text.stats[1]}</span></div>
          <div><strong>PCE</strong><span>{text.stats[2]}</span></div>
        </div>
      </div>
      <div className="about-grid stagger" aria-label="Gplastify operations imagery">
        <img className="about-tall" src={aboutLab} alt="Gplastify laboratory specialist testing concrete admixture" />
        <img src={aboutFactory} alt="Gplastify packaged product delivery truck" />
        <img src={aboutTanker} alt="Gplastify tanker truck near industrial plant" />
      </div>
    </section>
  );
}

function Product({ text, theme }) {
  return (
    <section className="product-section reveal" id="product">
      <div className="product-inner">
        <div className="product-mark">
          <img src={theme === 'light' ? logoLight : logo} alt="" />
        </div>
        <div className="product-copy">
          <p className="kicker gold">{text.productKicker}</p>
          <h2>{text.productTitle} <span>{text.productAccent}</span></h2>
          <p>{text.productBody}</p>
          <a className="outline-button" href="#specs">
            {text.specsButton} <ArrowRight size={19} />
          </a>
        </div>
        <div className="advantage-grid stagger">
          {text.advantages.map((item, index) => {
            const Icon = advantageIcons[index];
            return (
            <article className="feature-card" key={item}>
              <Icon size={28} />
              <span>{item}</span>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Applications({ text }) {
  return (
    <section className="dark-section reveal" id="applications">
      <SectionTitle title={text.applicationsTitle} />
      <div className="application-row stagger">
        {applications.map(({ icon: Icon, image }, index) => (
          <article className="application-card" key={text.applications[index]}>
            <img src={image} alt="" />
            <div>
              <Icon size={28} />
              <h3>{text.applications[index]}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyChoose({ text }) {
  return (
    <section className="why-section reveal">
      <SectionTitle title={text.whyTitle} accent={text.whyAccent} />
      <div className="reason-row stagger">
        {text.reasons.map(([title, body], index) => {
          const Icon = reasonIcons[index];
          return (
          <article className="reason" key={title}>
            <Icon size={36} />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
          );
        })}
      </div>
    </section>
  );
}

function Specs({ text }) {
  return (
    <section className="specs-section reveal" id="specs">
      <SectionTitle title={text.specsTitle} />
      <div className="specs-layout stagger">
        <table className="spec-table">
          <tbody>
            {specs.map(([, value], index) => (
              <tr key={text.specs[index]}>
                <th>{text.specs[index]}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a className="beaker-card pdf-card" href="/HP-Concrete-Flow-40.pdf" target="_blank" rel="noreferrer">
          <FileText size={88} />
          <strong>{text.pdfTitle}</strong>
          <span>{text.pdfBody}</span>
          <em>{text.pdfAction} <ArrowRight size={17} /></em>
        </a>
        <div className="quality-grid">
          {text.quality.map(([title, body], index) => {
            const Icon = qualityIcons[index];
            return (
            <article key={title}>
              <Icon size={30} />
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact({ text }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <footer className="contact reveal" id="contact">
      <div className="footer-top stagger">
        <div className="footer-brand">
          <img src={logo} alt="Gplastify" />
          <p>{text.footerText}</p>
        </div>
        <div className="footer-links">
          <h3>{text.quickLinks}</h3>
          <a href="#home">Home</a>
          <a href="#about">{text.nav[0]}</a>
          <a href="#product">{text.nav[1]}</a>
          <a href="#applications">{text.nav[2]}</a>
          <a href="#specs">{text.nav[3]}</a>
          <a href="#contact">{text.contact}</a>
        </div>
        <div className="footer-contact">
          <h3>{text.contact}</h3>
          <a href="mailto:info@gplastify.com"><Mail size={18} /> info@gplastify.com</a>
          <a href="tel:+995557318966"><Phone size={18} /> +995 557 318 966</a>
          <p>{text.footerContactText}</p>
        </div>
        <form className="footer-form" onSubmit={handleSubmit}>
          <h3>{text.formTitle}</h3>
          <input type="tel" name="phone" placeholder={text.phone} required />
          <input type="email" name="email" placeholder={text.email} required />
          <textarea name="message" placeholder={text.message} rows="4" required />
          <button type="submit">
            {text.send} <Send size={17} />
          </button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>{text.copyright}</p>
        <a className="developer-credit" href="#home">Designed &amp; Developed By DemeX</a>
        <div className="social-links" aria-label="Social links">
          <a href="#home" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="#home" aria-label="YouTube"><Youtube size={21} /></a>
          <a href="#home" aria-label="LinkedIn"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}

function SectionTitle({ title, accent }) {
  return (
    <div className="section-title">
      <span />
      <h2>{title} {accent && <em>{accent}</em>}</h2>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState(() => localStorage.getItem('gplastify-theme') || 'dark');
  const text = { ...copy.en, ...copy[lang] };

  useEffect(() => {
    localStorage.setItem('gplastify-theme', theme);
  }, [theme]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <main className="app" data-theme={theme} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <ScrollReveal />
      <Nav lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} text={text} />
      <Hero text={text} theme={theme} />
      <About text={text} />
      <Product text={text} theme={theme} />
      <Applications text={text} />
      <WhyChoose text={text} />
      <Specs text={text} />
      <Contact text={text} />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
