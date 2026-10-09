/* ==========================================================
   ProjectHub – app.js
   1 i18n · 2 Config & mock data · 3 State/Storage · 4 Helpers ·
   5 Theme · 6 Language · 7 Marketplace (filters + grid) ·
   8 Project detail · 9 Buy / Contact · 10 Publish wizard · 11 Init
   ========================================================== */
'use strict';

/* ---------- 1. TRANSLATIONS ---------- */
const translations = {
  en: {
    searchPlaceholder: 'Search projects...', sell: 'Publish Your Project', heroTitle: 'Discover, Buy & Sell Amazing Projects', heroSub: 'Websites, apps, source code, designs, courses and business ideas from creators around the world.',
    statProjects: 'Projects', statCreators: 'Creators', statSales: 'Downloads & sales', filters: 'Filters', reset: 'Reset', projectType: 'Project type', priceRange: 'Max price', minRating: 'Minimum rating', projLang: 'Project language', showResults: 'Show results',
    saved: 'Saved', loadMore: 'Show more', results: 'projects', noResults: 'No projects match your filters.', anyRating: 'Any rating', allLangs: 'All languages',
    sortPop: 'Most popular', sortNew: 'Newest', sortPriceAsc: 'Price: low to high', sortRating: 'Top rated',
    tWebsite: 'Website Template', tApp: 'Mobile App', tCode: 'Source Code', tDesign: 'Design UI/UX', tBusiness: 'Business Project', tCourse: 'E-learning Course', tOther: 'Other',
    free: 'Free', paid: 'Paid', subscription: 'Subscription', perMonth: '/mo', buyNow: 'Buy Now', contactOwner: 'Contact Owner', hire: 'Hire for Custom Work', description: 'Description', reviews: 'Reviews', addReview: 'Add a Review', yourReview: 'Write your review…', submit: 'Submit', owner: 'Creator', views: 'Views', sales: 'Sales', rating: 'Rating', published: 'Published', viewDemo: 'View demo', you: 'You', thanks: 'Thanks for your review!',
    buyTitle: 'Choose how to benefit', optSource: 'Buy Source Code', optSourceDesc: 'Instant download simulation', optCustom: 'Request Custom Service', optCustomDesc: 'Ask the creator to tailor it for you', optCollab: 'Collaborate', optCollabDesc: 'Team up with the creator on a new project', downloadStarted: 'Download started ✅',
    contactTitle: 'Contact the creator', hireTitle: 'Hire for custom work', customTitle: 'Request custom service', collabTitle: 'Collaborate', send: 'Send', chatPh: 'Write a message…', ownerHello: 'Hi! Thanks for your interest. How can I help?', ownerReply: 'Got it! I will get back to you within a few hours.',
    publishTitle: 'Publish Your Project', stepType: 'What are you publishing?', title: 'Title', shortDesc: 'Short description', fullDesc: 'Full description (Markdown)', mdHint: 'Supports **bold**, *italic*, `code`, # headings and - lists.', tagsLbl: 'Tags (comma separated)', priceLbl: 'Pricing', amount: 'Amount', currency: 'Currency',
    thumb: 'Main thumbnail', chooseImage: 'Choose an image', gallery: 'Gallery (up to 4 images)', chooseImages: 'Add images', demoLink: 'Demo link (YouTube / live site)', zipFile: 'Project files (ZIP simulation)', chooseZip: 'Choose a ZIP file', stepContact: 'How can buyers reach you? Enable at least one.',
    back: 'Back', next: 'Next', publish: 'Publish', publishedOk: 'Project published! 🚀', fillRequired: 'Please complete the required fields.', saveErr: 'Storage is full: use smaller images.',
    footTag: 'The global marketplace for creators and builders.', fMarket: 'Marketplace', browse: 'Browse projects', fSupport: 'Support', help: 'Help center', terms: 'Terms of service', fCompany: 'Company', about: 'About us', privacy: 'Privacy', rights: 'All rights reserved.'
  },
  fr: {
    searchPlaceholder: 'Rechercher des projets...', sell: 'Publier votre projet', heroTitle: 'Découvrez, achetez et vendez des projets incroyables', heroSub: 'Sites web, apps, code source, designs, formations et idées business de créateurs du monde entier.',
    statProjects: 'Projets', statCreators: 'Créateurs', statSales: 'Téléchargements et ventes', filters: 'Filtres', reset: 'Réinitialiser', projectType: 'Type de projet', priceRange: 'Prix max', minRating: 'Note minimale', projLang: 'Langue du projet', showResults: 'Voir les résultats',
    saved: 'Favoris', loadMore: 'Voir plus', results: 'projets', noResults: 'Aucun projet ne correspond.', anyRating: 'Toute note', allLangs: 'Toutes les langues',
    sortPop: 'Les plus populaires', sortNew: 'Plus récents', sortPriceAsc: 'Prix croissant', sortRating: 'Mieux notés',
    tWebsite: 'Template de site web', tApp: 'Application mobile', tCode: 'Code source', tDesign: 'Design UI/UX', tBusiness: 'Projet business', tCourse: 'Cours en ligne', tOther: 'Autre',
    free: 'Gratuit', paid: 'Payant', subscription: 'Abonnement', perMonth: '/mois', buyNow: 'Acheter', contactOwner: 'Contacter le créateur', hire: 'Engager pour un travail sur mesure', description: 'Description', reviews: 'Avis', addReview: 'Ajouter un avis', yourReview: 'Écrivez votre avis…', submit: 'Envoyer', owner: 'Créateur', views: 'Vues', sales: 'Ventes', rating: 'Note', published: 'Publié', viewDemo: 'Voir la démo', you: 'Vous', thanks: 'Merci pour votre avis !',
    buyTitle: 'Choisissez comment en profiter', optSource: 'Acheter le code source', optSourceDesc: 'Simulation de téléchargement instantané', optCustom: 'Demander un service sur mesure', optCustomDesc: 'Demandez au créateur de l’adapter pour vous', optCollab: 'Collaborer', optCollabDesc: 'Travaillez avec le créateur sur un nouveau projet', downloadStarted: 'Téléchargement lancé ✅',
    contactTitle: 'Contacter le créateur', hireTitle: 'Engager pour un travail sur mesure', customTitle: 'Demande de service sur mesure', collabTitle: 'Collaborer', send: 'Envoyer', chatPh: 'Écrivez un message…', ownerHello: 'Bonjour ! Merci de votre intérêt. Comment puis-je vous aider ?', ownerReply: 'Bien reçu ! Je vous réponds d’ici quelques heures.',
    publishTitle: 'Publier votre projet', stepType: 'Que publiez-vous ?', title: 'Titre', shortDesc: 'Description courte', fullDesc: 'Description complète (Markdown)', mdHint: 'Gère **gras**, *italique*, `code`, # titres et - listes.', tagsLbl: 'Tags (séparés par des virgules)', priceLbl: 'Tarification', amount: 'Montant', currency: 'Devise',
    thumb: 'Miniature principale', chooseImage: 'Choisir une image', gallery: 'Galerie (jusqu’à 4 images)', chooseImages: 'Ajouter des images', demoLink: 'Lien démo (YouTube / site)', zipFile: 'Fichiers du projet (simulation ZIP)', chooseZip: 'Choisir un fichier ZIP', stepContact: 'Comment les acheteurs peuvent-ils vous joindre ? Activez au moins un moyen.',
    back: 'Retour', next: 'Suivant', publish: 'Publier', publishedOk: 'Projet publié ! 🚀', fillRequired: 'Complétez les champs obligatoires.', saveErr: 'Stockage plein : utilisez des images plus petites.',
    footTag: 'La marketplace mondiale des créateurs et des builders.', fMarket: 'Marketplace', browse: 'Parcourir les projets', fSupport: 'Support', help: 'Centre d’aide', terms: 'Conditions d’utilisation', fCompany: 'Entreprise', about: 'À propos', privacy: 'Confidentialité', rights: 'Tous droits réservés.'
  },
  ar: {
    searchPlaceholder: 'ابحث عن المشاريع...', sell: 'انشر مشروعك', heroTitle: 'اكتشف واشترِ وبِع مشاريع رائعة', heroSub: 'مواقع وتطبيقات وأكواد مصدرية وتصاميم ودورات وأفكار أعمال من مبدعين حول العالم.',
    statProjects: 'مشاريع', statCreators: 'مبدعون', statSales: 'تنزيلات ومبيعات', filters: 'التصفية', reset: 'إعادة ضبط', projectType: 'نوع المشروع', priceRange: 'أقصى سعر', minRating: 'أدنى تقييم', projLang: 'لغة المشروع', showResults: 'عرض النتائج',
    saved: 'المفضلة', loadMore: 'عرض المزيد', results: 'مشروع', noResults: 'لا توجد مشاريع مطابقة.', anyRating: 'أي تقييم', allLangs: 'كل اللغات',
    sortPop: 'الأكثر شعبية', sortNew: 'الأحدث', sortPriceAsc: 'السعر: من الأقل', sortRating: 'الأعلى تقييمًا',
    tWebsite: 'قالب موقع', tApp: 'تطبيق جوال', tCode: 'كود مصدري', tDesign: 'تصميم UI/UX', tBusiness: 'مشروع تجاري', tCourse: 'دورة إلكترونية', tOther: 'أخرى',
    free: 'مجاني', paid: 'مدفوع', subscription: 'اشتراك', perMonth: '/شهر', buyNow: 'اشترِ الآن', contactOwner: 'تواصل مع المالك', hire: 'وظّفه لعمل مخصص', description: 'الوصف', reviews: 'التقييمات', addReview: 'أضف تقييمًا', yourReview: 'اكتب تقييمك…', submit: 'إرسال', owner: 'المبدع', views: 'المشاهدات', sales: 'المبيعات', rating: 'التقييم', published: 'تاريخ النشر', viewDemo: 'عرض العرض التجريبي', you: 'أنت', thanks: 'شكرًا على تقييمك!',
    buyTitle: 'اختر كيف تستفيد', optSource: 'شراء الكود المصدري', optSourceDesc: 'محاكاة تنزيل فوري', optCustom: 'طلب خدمة مخصصة', optCustomDesc: 'اطلب من المبدع تخصيصه لك', optCollab: 'تعاون', optCollabDesc: 'اعمل مع المبدع على مشروع جديد', downloadStarted: 'بدأ التنزيل ✅',
    contactTitle: 'تواصل مع المبدع', hireTitle: 'توظيف لعمل مخصص', customTitle: 'طلب خدمة مخصصة', collabTitle: 'تعاون', send: 'إرسال', chatPh: 'اكتب رسالة…', ownerHello: 'مرحبًا! شكرًا لاهتمامك. كيف يمكنني مساعدتك؟', ownerReply: 'وصلتني رسالتك! سأرد عليك خلال ساعات قليلة.',
    publishTitle: 'انشر مشروعك', stepType: 'ماذا تنشر؟', title: 'العنوان', shortDesc: 'وصف قصير', fullDesc: 'وصف كامل (Markdown)', mdHint: 'يدعم **غامق** و*مائل* و`كود` والعناوين # والقوائم -.', tagsLbl: 'الوسوم (مفصولة بفواصل)', priceLbl: 'التسعير', amount: 'المبلغ', currency: 'العملة',
    thumb: 'الصورة الرئيسية', chooseImage: 'اختر صورة', gallery: 'المعرض (حتى 4 صور)', chooseImages: 'أضف صورًا', demoLink: 'رابط العرض (يوتيوب / موقع)', zipFile: 'ملفات المشروع (محاكاة ZIP)', chooseZip: 'اختر ملف ZIP', stepContact: 'كيف يتواصل معك المشترون؟ فعّل وسيلة واحدة على الأقل.',
    back: 'رجوع', next: 'التالي', publish: 'نشر', publishedOk: 'تم نشر المشروع! 🚀', fillRequired: 'يرجى ملء الحقول المطلوبة.', saveErr: 'التخزين ممتلئ: استخدم صورًا أصغر.',
    footTag: 'السوق العالمي للمبدعين والمطورين.', fMarket: 'السوق', browse: 'تصفح المشاريع', fSupport: 'الدعم', help: 'مركز المساعدة', terms: 'شروط الخدمة', fCompany: 'الشركة', about: 'من نحن', privacy: 'الخصوصية', rights: 'جميع الحقوق محفوظة.'
  },
  es: {
    searchPlaceholder: 'Buscar proyectos...', sell: 'Publica tu proyecto', heroTitle: 'Descubre, compra y vende proyectos increíbles', heroSub: 'Sitios web, apps, código fuente, diseños, cursos e ideas de negocio de creadores de todo el mundo.',
    statProjects: 'Proyectos', statCreators: 'Creadores', statSales: 'Descargas y ventas', filters: 'Filtros', reset: 'Restablecer', projectType: 'Tipo de proyecto', priceRange: 'Precio máx.', minRating: 'Valoración mínima', projLang: 'Idioma del proyecto', showResults: 'Ver resultados',
    saved: 'Guardados', loadMore: 'Ver más', results: 'proyectos', noResults: 'Ningún proyecto coincide.', anyRating: 'Cualquier nota', allLangs: 'Todos los idiomas',
    sortPop: 'Más populares', sortNew: 'Más recientes', sortPriceAsc: 'Precio: menor a mayor', sortRating: 'Mejor valorados',
    tWebsite: 'Plantilla web', tApp: 'App móvil', tCode: 'Código fuente', tDesign: 'Diseño UI/UX', tBusiness: 'Proyecto de negocio', tCourse: 'Curso online', tOther: 'Otro',
    free: 'Gratis', paid: 'De pago', subscription: 'Suscripción', perMonth: '/mes', buyNow: 'Comprar ahora', contactOwner: 'Contactar al creador', hire: 'Contratar trabajo a medida', description: 'Descripción', reviews: 'Reseñas', addReview: 'Añadir reseña', yourReview: 'Escribe tu reseña…', submit: 'Enviar', owner: 'Creador', views: 'Vistas', sales: 'Ventas', rating: 'Valoración', published: 'Publicado', viewDemo: 'Ver demo', you: 'Tú', thanks: '¡Gracias por tu reseña!',
    buyTitle: 'Elige cómo beneficiarte', optSource: 'Comprar código fuente', optSourceDesc: 'Simulación de descarga instantánea', optCustom: 'Solicitar servicio a medida', optCustomDesc: 'Pide al creador que lo adapte para ti', optCollab: 'Colaborar', optCollabDesc: 'Trabaja con el creador en un nuevo proyecto', downloadStarted: 'Descarga iniciada ✅',
    contactTitle: 'Contactar al creador', hireTitle: 'Contratar trabajo a medida', customTitle: 'Solicitar servicio a medida', collabTitle: 'Colaborar', send: 'Enviar', chatPh: 'Escribe un mensaje…', ownerHello: '¡Hola! Gracias por tu interés. ¿En qué puedo ayudarte?', ownerReply: '¡Recibido! Te respondo en unas horas.',
    publishTitle: 'Publica tu proyecto', stepType: '¿Qué vas a publicar?', title: 'Título', shortDesc: 'Descripción corta', fullDesc: 'Descripción completa (Markdown)', mdHint: 'Admite **negrita**, *cursiva*, `código`, # títulos y - listas.', tagsLbl: 'Etiquetas (separadas por comas)', priceLbl: 'Precio', amount: 'Importe', currency: 'Moneda',
    thumb: 'Miniatura principal', chooseImage: 'Elegir imagen', gallery: 'Galería (hasta 4 imágenes)', chooseImages: 'Añadir imágenes', demoLink: 'Enlace demo (YouTube / web)', zipFile: 'Archivos del proyecto (simulación ZIP)', chooseZip: 'Elegir archivo ZIP', stepContact: '¿Cómo pueden contactarte? Activa al menos una opción.',
    back: 'Atrás', next: 'Siguiente', publish: 'Publicar', publishedOk: '¡Proyecto publicado! 🚀', fillRequired: 'Completa los campos obligatorios.', saveErr: 'Almacenamiento lleno: usa imágenes más pequeñas.',
    footTag: 'El marketplace global para creadores y desarrolladores.', fMarket: 'Marketplace', browse: 'Explorar proyectos', fSupport: 'Soporte', help: 'Centro de ayuda', terms: 'Términos del servicio', fCompany: 'Empresa', about: 'Sobre nosotros', privacy: 'Privacidad', rights: 'Todos los derechos reservados.'
  },
  de: {
    searchPlaceholder: 'Projekte suchen...', sell: 'Projekt veröffentlichen', heroTitle: 'Entdecke, kaufe und verkaufe großartige Projekte', heroSub: 'Websites, Apps, Quellcode, Designs, Kurse und Business-Ideen von Kreativen weltweit.',
    statProjects: 'Projekte', statCreators: 'Kreative', statSales: 'Downloads & Verkäufe', filters: 'Filter', reset: 'Zurücksetzen', projectType: 'Projekttyp', priceRange: 'Max. Preis', minRating: 'Mindestbewertung', projLang: 'Projektsprache', showResults: 'Ergebnisse anzeigen',
    saved: 'Gemerkt', loadMore: 'Mehr anzeigen', results: 'Projekte', noResults: 'Keine passenden Projekte.', anyRating: 'Jede Bewertung', allLangs: 'Alle Sprachen',
    sortPop: 'Beliebteste', sortNew: 'Neueste', sortPriceAsc: 'Preis aufsteigend', sortRating: 'Bestbewertet',
    tWebsite: 'Website-Vorlage', tApp: 'Mobile App', tCode: 'Quellcode', tDesign: 'UI/UX-Design', tBusiness: 'Business-Projekt', tCourse: 'Online-Kurs', tOther: 'Sonstiges',
    free: 'Kostenlos', paid: 'Kostenpflichtig', subscription: 'Abo', perMonth: '/Monat', buyNow: 'Jetzt kaufen', contactOwner: 'Ersteller kontaktieren', hire: 'Für individuelle Arbeit buchen', description: 'Beschreibung', reviews: 'Bewertungen', addReview: 'Bewertung abgeben', yourReview: 'Schreibe deine Bewertung…', submit: 'Senden', owner: 'Ersteller', views: 'Aufrufe', sales: 'Verkäufe', rating: 'Bewertung', published: 'Veröffentlicht', viewDemo: 'Demo ansehen', you: 'Du', thanks: 'Danke für deine Bewertung!',
    buyTitle: 'Wähle, wie du profitieren willst', optSource: 'Quellcode kaufen', optSourceDesc: 'Simulation: Sofort-Download', optCustom: 'Individuelle Leistung anfragen', optCustomDesc: 'Bitte den Ersteller, es für dich anzupassen', optCollab: 'Zusammenarbeiten', optCollabDesc: 'Arbeite mit dem Ersteller an einem neuen Projekt', downloadStarted: 'Download gestartet ✅',
    contactTitle: 'Ersteller kontaktieren', hireTitle: 'Für individuelle Arbeit buchen', customTitle: 'Individuelle Leistung anfragen', collabTitle: 'Zusammenarbeiten', send: 'Senden', chatPh: 'Nachricht schreiben…', ownerHello: 'Hallo! Danke für dein Interesse. Wie kann ich helfen?', ownerReply: 'Verstanden! Ich melde mich in ein paar Stunden.',
    publishTitle: 'Projekt veröffentlichen', stepType: 'Was veröffentlichst du?', title: 'Titel', shortDesc: 'Kurzbeschreibung', fullDesc: 'Vollständige Beschreibung (Markdown)', mdHint: 'Unterstützt **fett**, *kursiv*, `Code`, # Überschriften und - Listen.', tagsLbl: 'Tags (kommagetrennt)', priceLbl: 'Preis', amount: 'Betrag', currency: 'Währung',
    thumb: 'Hauptbild', chooseImage: 'Bild wählen', gallery: 'Galerie (bis zu 4 Bilder)', chooseImages: 'Bilder hinzufügen', demoLink: 'Demo-Link (YouTube / Website)', zipFile: 'Projektdateien (ZIP-Simulation)', chooseZip: 'ZIP-Datei wählen', stepContact: 'Wie können Käufer dich erreichen? Aktiviere mindestens einen Weg.',
    back: 'Zurück', next: 'Weiter', publish: 'Veröffentlichen', publishedOk: 'Projekt veröffentlicht! 🚀', fillRequired: 'Bitte alle Pflichtfelder ausfüllen.', saveErr: 'Speicher voll: kleinere Bilder verwenden.',
    footTag: 'Der globale Marktplatz für Kreative und Entwickler.', fMarket: 'Marktplatz', browse: 'Projekte durchsuchen', fSupport: 'Support', help: 'Hilfe-Center', terms: 'Nutzungsbedingungen', fCompany: 'Unternehmen', about: 'Über uns', privacy: 'Datenschutz', rights: 'Alle Rechte vorbehalten.'
  },
  zh: {
    searchPlaceholder: '搜索项目...', sell: '发布你的项目', heroTitle: '发现、购买并出售精彩项目', heroSub: '来自全球创作者的网站、应用、源代码、设计、课程和商业创意。',
    statProjects: '项目', statCreators: '创作者', statSales: '下载与销量', filters: '筛选', reset: '重置', projectType: '项目类型', priceRange: '最高价格', minRating: '最低评分', projLang: '项目语言', showResults: '查看结果',
    saved: '收藏', loadMore: '查看更多', results: '个项目', noResults: '没有匹配的项目。', anyRating: '任意评分', allLangs: '所有语言',
    sortPop: '最受欢迎', sortNew: '最新', sortPriceAsc: '价格从低到高', sortRating: '评分最高',
    tWebsite: '网站模板', tApp: '移动应用', tCode: '源代码', tDesign: 'UI/UX 设计', tBusiness: '商业项目', tCourse: '在线课程', tOther: '其他',
    free: '免费', paid: '付费', subscription: '订阅', perMonth: '/月', buyNow: '立即购买', contactOwner: '联系创作者', hire: '雇佣定制开发', description: '描述', reviews: '评价', addReview: '添加评价', yourReview: '写下你的评价…', submit: '提交', owner: '创作者', views: '浏览', sales: '销量', rating: '评分', published: '发布时间', viewDemo: '查看演示', you: '你', thanks: '感谢你的评价！',
    buyTitle: '选择你的获取方式', optSource: '购买源代码', optSourceDesc: '模拟即时下载', optCustom: '申请定制服务', optCustomDesc: '请创作者为你定制', optCollab: '合作', optCollabDesc: '与创作者共同开发新项目', downloadStarted: '已开始下载 ✅',
    contactTitle: '联系创作者', hireTitle: '雇佣定制开发', customTitle: '申请定制服务', collabTitle: '合作', send: '发送', chatPh: '输入消息…', ownerHello: '你好！感谢关注，有什么可以帮你？', ownerReply: '收到！我会在几小时内回复你。',
    publishTitle: '发布你的项目', stepType: '你要发布什么？', title: '标题', shortDesc: '简短描述', fullDesc: '完整描述（Markdown）', mdHint: '支持 **粗体**、*斜体*、`代码`、# 标题和 - 列表。', tagsLbl: '标签（逗号分隔）', priceLbl: '定价', amount: '金额', currency: '货币',
    thumb: '主封面图', chooseImage: '选择图片', gallery: '图库（最多4张）', chooseImages: '添加图片', demoLink: '演示链接（YouTube / 网站）', zipFile: '项目文件（ZIP 模拟）', chooseZip: '选择 ZIP 文件', stepContact: '买家如何联系你？请至少启用一项。',
    back: '上一步', next: '下一步', publish: '发布', publishedOk: '项目已发布！🚀', fillRequired: '请填写必填项。', saveErr: '存储已满：请使用更小的图片。',
    footTag: '面向创作者与开发者的全球市场。', fMarket: '市场', browse: '浏览项目', fSupport: '支持', help: '帮助中心', terms: '服务条款', fCompany: '公司', about: '关于我们', privacy: '隐私', rights: '保留所有权利。'
  }
};
const LANG_NAMES = { en: 'English', ar: 'العربية', fr: 'Français', es: 'Español', de: 'Deutsch', zh: '中文' };

/* ---------- 2. CONFIG & MOCK DATA ---------- */
const TYPES = {
  website:  { icon: 'fa-globe',          badge: 'WEB',    k: 'tWebsite' },
  app:      { icon: 'fa-mobile-screen',  badge: 'APP',    k: 'tApp' },
  code:     { icon: 'fa-code',           badge: 'CODE',   k: 'tCode' },
  design:   { icon: 'fa-pen-ruler',      badge: 'UI/UX',  k: 'tDesign' },
  business: { icon: 'fa-briefcase',      badge: 'BIZ',    k: 'tBusiness' },
  course:   { icon: 'fa-graduation-cap', badge: 'COURSE', k: 'tCourse' },
  other:    { icon: 'fa-box-open',       badge: 'OTHER',  k: 'tOther' }
};
const MAD_TO_USD = 0.1;
const PAGE = 12, DAY = 864e5;
const U = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=70`; // unverified IDs → SVG fallback on error
const OWNERS = [
  { name: 'Yassine El Idrissi', color: '#6d5dfc', whatsapp: '212600000001', email: 'yassine@example.com', github: 'https://github.com/', linkedin: 'https://linkedin.com/', portfolio: 'https://example.com' },
  { name: 'Sofia Marino', color: '#ec4899', whatsapp: '34600000002', email: 'sofia@example.com', github: 'https://github.com/', linkedin: 'https://linkedin.com/' },
  { name: 'Li Wei', color: '#0ea5e9', email: 'liwei@example.com', github: 'https://github.com/', linkedin: 'https://linkedin.com/' },
  { name: 'Hannah Weber', color: '#12a150', email: 'hannah@example.com', portfolio: 'https://example.com', linkedin: 'https://linkedin.com/' },
  { name: 'Carlos Ruiz', color: '#f59f00', whatsapp: '34600000005', email: 'carlos@example.com', github: 'https://github.com/' },
  { name: 'Amina Berrada', color: '#ef4444', whatsapp: '212600000006', email: 'amina@example.com', portfolio: 'https://example.com', linkedin: 'https://linkedin.com/' },
  { name: 'Lucas Martin', color: '#8b5cf6', email: 'lucas@example.com', github: 'https://github.com/', linkedin: 'https://linkedin.com/' },
  { name: 'Omar Haddad', color: '#14b8a6', whatsapp: '212600000008', email: 'omar@example.com', github: 'https://github.com/' }
];
// [title, type, short, markdown, tags, priceType, price, currency, thumb, gallery2, lang, owner, rating, reviews, views, sales, demo, ageDays]
const SEED = [
  ['E-commerce Dashboard React', 'code', 'Admin dashboard with charts, orders and inventory.', '## What you get\n- **React 18** + Vite + Tailwind\n- Sales, orders & inventory analytics\n- Dark mode, fully responsive\n\nRun with `npm install && npm run dev`.', 'react,dashboard,admin,tailwind', 'paid', 49, 'USD', '1460925895917-afdab827c52f', '1551288049-bebda4e38f71', 'en', 2, 4.8, 64, 5230, 312, 'https://youtube.com/', 12],
  ['Moroccan Restaurant Website', 'website', 'Elegant bilingual template for riverside riads and restaurants.', '## Features\n- Menu with categories & photos\n- Online table booking form\n- **Arabic / French** ready (RTL)\n\nPure HTML, CSS & JS — no build step.', 'restaurant,html,rtl,morocco', 'paid', 250, 'MAD', '1517248135467-4c7edcad34c4', '1414235077428-338989a2e8c0', 'fr', 5, 4.7, 38, 3110, 140, 'https://example.com', 20],
  ['AI Chatbot Python', 'code', 'Customer-support chatbot with memory and a web widget.', '## Stack\n- Python 3.11, FastAPI\n- Plug in any LLM API\n- Embeddable JS widget\n\nIncludes **Docker** setup and docs.', 'python,ai,chatbot,fastapi', 'paid', 79, 'USD', '1677442136019-21780ecad995', '1555949963-ff9fe0c870eb', 'en', 6, 4.9, 91, 8740, 502, 'https://youtube.com/', 6],
  ['Fintech Mobile App UI Kit', 'design', '120+ screens for banking and wallet apps in Figma.', '## Included\n- 120+ iOS & Android screens\n- Design tokens & components\n- Light and dark variants', 'figma,fintech,ui,mobile', 'paid', 39, 'USD', '1512941937669-90a1b58e7e9c', '1559028012-481c04fa702d', 'en', 1, 4.6, 52, 4120, 260, '', 30],
  ['Dark Portfolio Template', 'website', 'A sleek one-page portfolio for developers and designers.', '## Highlights\n- Smooth scroll animations\n- Project showcase grid\n- Contact form ready\n\nFree for personal use.', 'portfolio,template,dark', 'free', 0, 'USD', '1467232004584-a241de8bcf5d', '1498050108023-c5249f4df085', 'en', 3, 4.4, 120, 12900, 1840, 'https://example.com', 45],
  ['Flutter Food Delivery App', 'app', 'Full food-delivery app: cart, tracking, payments UI.', '## Features\n- Flutter 3, clean architecture\n- Live order tracking (mock)\n- Firebase-ready\n\nPerfect starter for a startup.', 'flutter,mobile,delivery', 'paid', 149, 'USD', '1526498460520-4c246339dccb', '1512941937669-90a1b58e7e9c', 'es', 4, 4.7, 29, 2380, 87, 'https://youtube.com/', 9],
  ['SaaS Landing Page Pack', 'website', '10 high-converting landing pages for software products.', '## Pack\n- 10 layouts, pricing tables, FAQs\n- Optimised Core Web Vitals\n- Updated monthly', 'saas,landing,marketing', 'sub', 9, 'USD', '1522202176988-66273c2fd55f', '1460925895917-afdab827c52f', 'en', 7, 4.5, 44, 3560, 198, 'https://example.com', 3],
  ['Full-Stack Web Dev Course', 'course', '40 hours from HTML to deploying a Node.js app.', '## Curriculum\n1. HTML, CSS, JavaScript\n2. Node.js & databases\n3. Deploy to the cloud\n\n**Lifetime access**, project files included.', 'course,javascript,node,beginner', 'paid', 59, 'USD', '1498050108023-c5249f4df085', '1517694712202-14dd9538aa97', 'en', 0, 4.9, 210, 15400, 960, 'https://youtube.com/', 60],
  ['Coffee Shop Business Plan', 'business', 'Complete plan, financial model and branding for a café.', '## Includes\n- 30-page business plan\n- 3-year financial forecast (spreadsheet)\n- Supplier & staffing checklist', 'business,cafe,startup', 'paid', 25, 'USD', '1495474472287-4d71bcdd2085', '1501339847302-ac426a4a7cbb', 'en', 3, 4.3, 17, 1290, 64, '', 15],
  ['Arabic Calligraphy Brand Kit', 'design', 'Logo marks, patterns and fonts inspired by Maghrebi script.', '## Contents\n- 40 vector logo marks\n- Seamless geometric patterns\n- Usage guidelines (PDF)', 'branding,arabic,vector,logo', 'paid', 300, 'MAD', '1561070791-2526d30994b5', '1558655146-9f40138edfeb', 'ar', 5, 4.8, 23, 1980, 71, '', 25],
  ['Real-time Chat App Node.js', 'code', 'WebSocket chat with rooms, typing indicators and uploads.', '## Stack\n- Node.js + Socket.IO\n- JWT auth, MongoDB\n- Clean, commented code\n\nOpen source — MIT.', 'node,socketio,chat,mongodb', 'free', 0, 'USD', '1555949963-ff9fe0c870eb', '1517694712202-14dd9538aa97', 'en', 2, 4.5, 73, 9870, 1420, 'https://github.com/', 40],
  ['Learn Spanish for Developers (E-book)', 'other', 'Practical Spanish vocabulary for tech teams in 120 pages.', '## Inside\n- Stand-ups, code reviews & interviews in Spanish\n- Audio exercises\n- Glossary of 500 tech terms', 'ebook,spanish,language', 'paid', 12, 'USD', '1456513080510-7bf3a84b82f8', '1481627834876-b7833e8f5570', 'es', 4, 4.4, 31, 1740, 95, '', 18]
];
const SAMPLE_COMMENTS = [['Sara K.', 5, 'Exactly what I needed. Clean code and great documentation!'], ['Marco L.', 4, 'Very good quality for the price. Support replied quickly.'], ['Aiko T.', 5, 'Saved me weeks of work. Highly recommended.'], ['Nadia B.', 4, 'Solid project, easy to customise.']];

function buildSeed() {
  return SEED.map((s, i) => ({
    id: 's' + (i + 1), title: s[0], type: s[1], short: s[2], full: s[3], tags: s[4].split(','), priceType: s[5], price: s[6], currency: s[7],
    thumb: U(s[8]), gallery: [U(s[8]), U(s[9])], lang: s[10], owner: OWNERS[s[11]], baseRating: s[12], baseCount: s[13], views: s[14], sales: s[15], demo: s[16],
    created: Date.now() - s[17] * DAY, seedComments: [SAMPLE_COMMENTS[i % 4], SAMPLE_COMMENTS[(i + 1) % 4]]
  }));
}

/* ---------- 3. STATE & STORAGE ---------- */
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
};
const state = {
  lang: localStorage.getItem('ph_lang') || 'en',
  seed: buildSeed(),
  mine: store.get('ph_projects', []),          // projects published by the user
  comments: store.get('ph_comments', {}),      // { id: [{name, stars, text, date}] }
  favs: store.get('ph_favs', []),
  views: store.get('ph_views', {}), soldExtra: store.get('ph_sales', {}), orders: store.get('ph_orders', []),
  shown: PAGE, savedOnly: false, current: null, gIdx: 0, revStars: 0,
  wiz: { step: 1, type: '', thumb: '', gallery: [], zip: null }
};
const all = () => state.mine.concat(state.seed);

/* ---------- 4. HELPERS ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const t = k => (translations[state.lang] && translations[state.lang][k]) || translations.en[k] || k;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const safeUrl = u => /^https?:\/\//i.test(String(u).trim()) ? String(u).trim() : '';
const usd = p => p.priceType === 'free' ? 0 : p.currency === 'MAD' ? p.price * MAD_TO_USD : p.price;
const priceText = p => p.priceType === 'free' ? t('free') : (p.currency === 'MAD' ? `${p.price} MAD` : `$${p.price}`) + (p.priceType === 'sub' ? t('perMonth') : '');
const userComments = p => state.comments[p.id] || [];
const ratingCount = p => p.baseCount + userComments(p).length;
const avgRating = p => { const n = ratingCount(p); return n ? (p.baseRating * p.baseCount + userComments(p).reduce((a, c) => a + c.stars, 0)) / n : 0; };
const viewsOf = p => p.views + (state.views[p.id] || 0);
const salesOf = p => p.sales + (state.soldExtra[p.id] || 0);
const initial = n => (n || '?')[0].toUpperCase();
const avatar = (o, big) => `<span class="av ${big ? 'lg' : ''}" style="background:${o.color}">${esc(initial(o.name))}</span>`;
const fmtNum = n => n >= 1000 ? (n / 1000).toFixed(1).replace('.0', '') + 'k' : n;
const dateText = ts => new Date(ts).toLocaleDateString(state.lang === 'zh' ? 'zh-CN' : state.lang, { year: 'numeric', month: 'short', day: 'numeric' });
function stars(r) {
  let h = '';
  for (let i = 1; i <= 5; i++) h += r >= i - .25 ? '<i class="fa-solid fa-star"></i>' : r >= i - .75 ? '<i class="fa-solid fa-star-half-stroke"></i>' : '<i class="fa-regular fa-star"></i>';
  return h;
}
const starPicker = v => [1, 2, 3, 4, 5].map(i => `<i class="${i <= v ? 'fa-solid' : 'fa-regular'} fa-star" data-star="${i}"></i>`).join('');
function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('show'), 2800); }
const openModal = id => $(id).classList.remove('hidden');
const closeModals = () => $$('.modal').forEach(m => m.classList.add('hidden'));
function fallbackImg() {
  return 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6d5dfc"/><stop offset="1" stop-color="#a855f7"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><text x="400" y="330" font-size="120" text-anchor="middle" fill="white" opacity=".8">◆</text></svg>');
}
/** Tiny, safe Markdown renderer: escapes everything first, then applies a few patterns. */
function md(src) {
  const inline = s => s.replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>').replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  let out = '', list = '';
  const close = () => { if (list) { out += `</${list}>`; list = ''; } };
  esc(src).split('\n').forEach(line => {
    let m;
    if ((m = line.match(/^(#{1,3})\s+(.*)/))) { close(); out += `<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`; }
    else if ((m = line.match(/^[-*]\s+(.*)/))) { if (list !== 'ul') { close(); out += '<ul>'; list = 'ul'; } out += `<li>${inline(m[1])}</li>`; }
    else if ((m = line.match(/^\d+\.\s+(.*)/))) { if (list !== 'ol') { close(); out += '<ol>'; list = 'ol'; } out += `<li>${inline(m[1])}</li>`; }
    else if (line.trim()) { close(); out += `<p>${inline(line)}</p>`; } else close();
  });
  close(); return out;
}
/** Resize + compress an image file to Base64 JPEG so localStorage stays small. */
function compress(file, max = 900) {
  return new Promise((res, rej) => {
    const r = new FileReader(); r.onerror = rej;
    r.onload = () => { const i = new Image(); i.onerror = rej; i.onload = () => {
      const s = Math.min(1, max / Math.max(i.width, i.height)), c = document.createElement('canvas');
      c.width = i.width * s; c.height = i.height * s; c.getContext('2d').drawImage(i, 0, 0, c.width, c.height); res(c.toDataURL('image/jpeg', .72));
    }; i.src = r.result; };
    r.readAsDataURL(file);
  });
}

/* ---------- 5. THEME ---------- */
function toggleTheme(force) {
  const next = force || (document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  document.documentElement.dataset.theme = next;
  $('#themeBtn i').className = next === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('ph_theme', next);
}

/* ---------- 6. LANGUAGE ---------- */
function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  state.lang = lang; localStorage.setItem('ph_lang', lang);
  document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  $$('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
  $('#langSelect').value = lang;
  buildFilterUI(); buildTypeCards(); buildSort();
  renderGrid(); if (state.current) drawDrawer();
}

/* ---------- 7. MARKETPLACE ---------- */
function buildFilterUI() {
  const checked = $$('#typeChecks input:checked').map(i => i.value);
  $('#typeChecks').innerHTML = Object.entries(TYPES).map(([k, v]) =>
    `<label><input type="checkbox" value="${k}" ${checked.includes(k) ? 'checked' : ''}><i class="fa-solid ${v.icon}"></i> ${t(v.k)}</label>`).join('');
  const rs = $('#ratingSel'), rv = rs.value || '0';
  rs.innerHTML = [['0', t('anyRating')], ['3', '★ 3+'], ['4', '★ 4+'], ['4.5', '★ 4.5+']].map(r => `<option value="${r[0]}">${r[1]}</option>`).join(''); rs.value = rv;
  const ls = $('#projLangSel'), lv = ls.value || 'all', opts = Object.entries(LANG_NAMES).map(([k, n]) => `<option value="${k}">${n}</option>`).join('');
  ls.innerHTML = `<option value="all">${t('allLangs')}</option>` + opts; ls.value = lv;
  const pl = $('#pubLang'), pv = pl.value || state.lang; pl.innerHTML = opts; pl.value = pv;
}
function buildSort() {
  const s = $('#sortSel'), v = s.value || 'pop';
  s.innerHTML = [['pop', 'sortPop'], ['new', 'sortNew'], ['price', 'sortPriceAsc'], ['rating', 'sortRating']].map(o => `<option value="${o[0]}">${t(o[1])}</option>`).join(''); s.value = v;
}
function getFiltered() {
  const q = $('#searchInput').value.trim().toLowerCase(), types = $$('#typeChecks input:checked').map(i => i.value),
    max = +$('#priceRange').value, minR = +$('#ratingSel').value, lang = $('#projLangSel').value, sort = $('#sortSel').value;
  const list = all().filter(p =>
    (!q || `${p.title} ${p.short} ${p.tags.join(' ')} ${p.owner.name} ${t(TYPES[p.type].k)}`.toLowerCase().includes(q)) &&
    (!types.length || types.includes(p.type)) && usd(p) <= max && avgRating(p) >= minR && (lang === 'all' || p.lang === lang) &&
    (!state.savedOnly || state.favs.includes(p.id)));
  const by = { pop: (a, b) => viewsOf(b) - viewsOf(a), new: (a, b) => b.created - a.created, price: (a, b) => usd(a) - usd(b), rating: (a, b) => avgRating(b) - avgRating(a) };
  return list.sort(by[sort] || by.pop);
}
function cardHTML(p) {
  const fav = state.favs.includes(p.id);
  return `<article class="card" data-id="${p.id}">
    <div class="thumb"><img src="${esc(p.thumb)}" alt="${esc(p.title)}" loading="lazy"><span class="badge">${TYPES[p.type].badge}</span>
      <button class="heart ${fav ? 'on' : ''}" data-fav="${p.id}" aria-label="Save"><i class="fa-${fav ? 'solid' : 'regular'} fa-heart"></i></button></div>
    <div class="c-body"><h3 class="c-title">${esc(p.title)}</h3>
      <div class="owner">${avatar(p.owner)} <span>${esc(p.owner.name)}</span></div>
      <div class="c-foot"><span class="price ${p.priceType === 'free' ? 'free' : ''}">${esc(priceText(p))}</span>
        <span class="stars">${stars(avgRating(p))} <small class="muted">${avgRating(p).toFixed(1)}</small></span></div>
      <div class="meta"><span><i class="fa-regular fa-eye"></i> ${fmtNum(viewsOf(p))}</span><span><i class="fa-solid fa-download"></i> ${fmtNum(salesOf(p))}</span></div></div></article>`;
}
function renderGrid() {
  const list = getFiltered();
  $('#count').textContent = `${list.length} ${t('results')}`;
  $('#grid').innerHTML = list.length ? list.slice(0, state.shown).map(cardHTML).join('') : `<p class="empty"><i class="fa-regular fa-face-frown fa-2x"></i><br>${t('noResults')}</p>`;
  $('#moreBtn').classList.toggle('hidden', list.length <= state.shown);
  $('#savedN').textContent = state.favs.length; $('#savedBtn').classList.toggle('on', state.savedOnly);
  const ps = all();
  $('#stProjects').textContent = ps.length; $('#stCreators').textContent = new Set(ps.map(p => p.owner.name)).size;
  $('#stSales').textContent = fmtNum(ps.reduce((a, p) => a + salesOf(p), 0));
}
/** Loading skeleton, then real content. */
function initProjects() {
  $('#grid').innerHTML = '<div class="sk"></div>'.repeat(8);
  setTimeout(renderGrid, 700);
}
function toggleFav(id) {
  const i = state.favs.indexOf(id); i > -1 ? state.favs.splice(i, 1) : state.favs.push(id);
  store.set('ph_favs', state.favs); renderGrid(); if (state.current && state.current.id === id) drawDrawer();
}
function resetFilters() {
  $('#searchInput').value = ''; $$('#typeChecks input').forEach(i => i.checked = false);
  $('#priceRange').value = 1000; $('#priceOut').textContent = '$1000'; $('#ratingSel').value = '0'; $('#projLangSel').value = 'all'; state.savedOnly = false;
  state.shown = PAGE; renderGrid();
}
const toggleSheet = open => { $('#sidebar').classList.toggle('open', open); $('#sheetBackdrop').classList.toggle('open', open); };

/* ---------- 8. PROJECT DETAIL (drawer) ---------- */
function openProject(id) {
  const p = all().find(x => x.id === id); if (!p) return;
  state.current = p; state.gIdx = 0; state.revStars = 0;
  state.views[id] = (state.views[id] || 0) + 1; store.set('ph_views', state.views);
  drawDrawer(); $('#drawer').classList.add('open'); $('#drawer').setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
  $('#drawerPanel').scrollTop = 0; renderGrid();
}
function closeDrawer() { $('#drawer').classList.remove('open'); $('#drawer').setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; state.current = null; }
function drawDrawer() {
  const p = state.current; if (!p) return;
  const o = p.owner, g = p.gallery, fav = state.favs.includes(p.id), demo = safeUrl(p.demo);
  const comments = userComments(p).slice().reverse().map(c => [c.name, c.stars, c.text]).concat(p.seedComments || []);
  const socials = [
    o.whatsapp && `<a href="https://wa.me/${encodeURIComponent(o.whatsapp.replace(/\D/g, ''))}" target="_blank" rel="noopener" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>`,
    o.linkedin && safeUrl(o.linkedin) && `<a href="${esc(safeUrl(o.linkedin))}" target="_blank" rel="noopener" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>`,
    o.github && safeUrl(o.github) && `<a href="${esc(safeUrl(o.github))}" target="_blank" rel="noopener" title="GitHub"><i class="fa-brands fa-github"></i></a>`,
    o.email && `<a href="mailto:${esc(o.email)}" title="Email"><i class="fa-solid fa-envelope"></i></a>`,
    o.portfolio && safeUrl(o.portfolio) && `<a href="${esc(safeUrl(o.portfolio))}" target="_blank" rel="noopener" title="Portfolio"><i class="fa-solid fa-globe"></i></a>`
  ].filter(Boolean).join('');
  $('#drawerPanel').innerHTML = `
    <button class="icon-btn d-close" data-act="closeDrawer" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
    <div class="d-wrap">
      <div class="d-main">
        <div class="gallery"><img src="${esc(g[state.gIdx])}" alt="${esc(p.title)}">
          ${g.length > 1 ? '<button class="g-nav g-prev" data-act="gprev"><i class="fa-solid fa-chevron-left"></i></button><button class="g-nav g-next" data-act="gnext"><i class="fa-solid fa-chevron-right"></i></button>' : ''}</div>
        ${g.length > 1 ? `<div class="thumbs">${g.map((s, i) => `<img src="${esc(s)}" class="${i === state.gIdx ? 'on' : ''}" data-gi="${i}" alt="">`).join('')}</div>` : ''}
        <h2>${esc(p.title)}</h2>
        <div class="stars">${stars(avgRating(p))} <strong>${avgRating(p).toFixed(1)}</strong> <span class="muted">(${ratingCount(p)})</span></div>
        <div class="tags"><span class="tag"><i class="fa-solid ${TYPES[p.type].icon}"></i> ${t(TYPES[p.type].k)}</span><span class="tag">${LANG_NAMES[p.lang] || ''}</span>${p.tags.filter(Boolean).map(x => `<span class="tag">#${esc(x.trim())}</span>`).join('')}</div>
        ${demo ? `<a class="btn ghost small" href="${esc(demo)}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-play"></i> ${t('viewDemo')}</a>` : ''}
        <div class="d-sec md"><h3>${t('description')}</h3>${md(p.full)}</div>
        <div class="d-sec"><h3>${t('reviews')} (${ratingCount(p)})</h3>
          ${comments.map(c => `<div class="comment">${avatar({ name: c[0], color: '#' + ((c[0].charCodeAt(0) * 99991) % 0xffffff).toString(16).padStart(6, '0') })}<div><div class="cn"><strong>${esc(c[0])}</strong><span class="stars">${stars(c[1])}</span></div>${esc(c[2])}</div></div>`).join('')}
          <div class="review-form"><h4>${t('addReview')}</h4><div id="revStars" class="stars big">${starPicker(state.revStars)}</div>
            <textarea id="revText" rows="3" maxlength="300" placeholder="${esc(t('yourReview'))}"></textarea>
            <button class="btn primary small" data-act="addComment" style="align-self:flex-start">${t('submit')}</button></div></div>
      </div>
      <aside class="d-side">
        <div class="box"><span class="price ${p.priceType === 'free' ? 'free' : ''}">${esc(priceText(p))}</span>
          <button class="btn primary block" data-act="buy"><i class="fa-solid fa-bag-shopping"></i> ${t('buyNow')}</button>
          <button class="btn ghost block" data-act="contact"><i class="fa-regular fa-comments"></i> ${t('contactOwner')}</button>
          <button class="btn ghost block" data-act="hire"><i class="fa-solid fa-user-gear"></i> ${t('hire')}</button>
          <button class="btn ghost block" data-fav="${p.id}"><i class="fa-${fav ? 'solid' : 'regular'} fa-heart" style="color:#ff385c"></i> ${t('saved')}</button></div>
        <div class="box"><div class="owner-card">${avatar(o, true)}<div><small class="muted">${t('owner')}</small><div><strong>${esc(o.name)}</strong></div></div></div>
          <div class="socials">${socials}</div>
          <div class="stats"><div><strong>${fmtNum(viewsOf(p))}</strong>${t('views')}</div><div><strong>${fmtNum(salesOf(p))}</strong>${t('sales')}</div>
            <div><strong>${avgRating(p).toFixed(1)} ★</strong>${t('rating')}</div><div><strong>${dateText(p.created)}</strong>${t('published')}</div></div></div>
      </aside>
    </div>`;
}
function addComment() {
  const p = state.current, text = $('#revText').value.trim();
  if (!p || !state.revStars || !text) { toast(t('fillRequired')); return; }
  (state.comments[p.id] = state.comments[p.id] || []).push({ name: t('you'), stars: state.revStars, text, date: Date.now() });
  store.set('ph_comments', state.comments); state.revStars = 0;
  drawDrawer(); renderGrid(); toast(t('thanks'));   // average rating updates instantly
}

/* ---------- 9. BUY / CONTACT ---------- */
function handleBuy(option) {
  const p = state.current; if (!p) return;
  closeModals();
  if (option === 'source') {
    // Simulated instant download: a text receipt generated in the browser
    const body = `ProjectHub – order receipt\nProject: ${p.title}\nCreator: ${p.owner.name}\nPrice: ${priceText(p)}\nDate: ${new Date().toISOString()}\n\n(Demo marketplace – no real files are delivered.)\n`;
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([body], { type: 'text/plain' }));
    a.download = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-receipt.txt'; document.body.appendChild(a); a.click(); a.remove();
    state.orders.push({ id: 'o' + Date.now(), projectId: p.id, title: p.title, price: priceText(p), at: Date.now() }); store.set('ph_orders', state.orders);
    state.soldExtra[p.id] = (state.soldExtra[p.id] || 0) + 1; store.set('ph_sales', state.soldExtra);
    toast(t('downloadStarted')); drawDrawer(); renderGrid();
  } else openTalk(option);
}
/** mode: contact | hire | custom | collab */
function openTalk(mode) {
  const p = state.current, o = p.owner; if (!p) return;
  $('#talkTitle').textContent = t({ contact: 'contactTitle', hire: 'hireTitle', custom: 'customTitle', collab: 'collabTitle' }[mode]);
  const msg = encodeURIComponent(`Hi ${o.name}, I'm interested in "${p.title}".`);
  const links = [
    o.whatsapp && `<a href="https://wa.me/${encodeURIComponent(o.whatsapp.replace(/\D/g, ''))}?text=${msg}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>`,
    o.email && `<a href="mailto:${esc(o.email)}?subject=${encodeURIComponent(p.title)}&body=${msg}"><i class="fa-solid fa-envelope"></i> Email</a>`,
    o.portfolio && safeUrl(o.portfolio) && `<a href="${esc(safeUrl(o.portfolio))}" target="_blank" rel="noopener"><i class="fa-solid fa-globe"></i> Portfolio</a>`,
    o.github && safeUrl(o.github) && `<a href="${esc(safeUrl(o.github))}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>`
  ].filter(Boolean).join('');
  $('#talkLinks').innerHTML = links;
  $('#chatBox').innerHTML = `<div class="bubble">${esc(t('ownerHello'))}</div>`;
  openModal('#talkModal'); $('#chatInput').focus();
}
function sendChat(e) {
  e.preventDefault();
  const inp = $('#chatInput'), text = inp.value.trim(); if (!text) return;
  const box = $('#chatBox'); box.insertAdjacentHTML('beforeend', `<div class="bubble me">${esc(text)}</div>`); inp.value = ''; box.scrollTop = box.scrollHeight;
  setTimeout(() => { box.insertAdjacentHTML('beforeend', `<div class="bubble">${esc(t('ownerReply'))}</div>`); box.scrollTop = box.scrollHeight; }, 900);
}

/* ---------- 10. PUBLISH WIZARD ---------- */
function buildTypeCards() {
  $('#typeCards').innerHTML = Object.entries(TYPES).map(([k, v]) =>
    `<div class="type-card ${state.wiz.type === k ? 'on' : ''}" data-type="${k}"><i class="fa-solid ${v.icon}"></i>${t(v.k)}</div>`).join('');
}
function openWizard() {
  $('#pubForm').reset(); state.wiz = { step: 1, type: '', thumb: '', gallery: [], zip: null };
  $('#thumbPrev').classList.add('hidden'); $('#thumbHint').classList.remove('hidden'); $('#galPrev').innerHTML = '';
  $('#zipName').textContent = t('chooseZip'); $('#amountRow').classList.add('hidden');
  $$('#pubForm [data-toggle]').forEach(c => $(`[name=${c.dataset.toggle}]`).classList.add('hidden'));
  buildTypeCards(); showStep(1); openModal('#pubModal');
}
function showStep(n) {
  state.wiz.step = n;
  $$('.step').forEach(s => s.classList.toggle('hidden', +s.dataset.step !== n));
  $('#stepper').innerHTML = [1, 2, 3, 4].map(i => `<span class="${i <= n ? 'on' : ''}"></span>`).join('');
  $('#backBtn').classList.toggle('hidden', n === 1); $('#nextBtn').classList.toggle('hidden', n === 4); $('#pubBtn').classList.toggle('hidden', n !== 4);
}
/** Validate the current step; flags empty required inputs in red. */
function validateStep(n) {
  const f = $('#pubForm'), bad = [];
  const need = el => { if (!el.value.trim()) bad.push(el); };
  if (n === 1 && !state.wiz.type) bad.push($('#typeCards'));
  if (n === 2) { need(f.title); need(f.short); need(f.full); }
  if (n === 3) { if (!state.wiz.thumb) bad.push($('.drop')); if (f.demo.value.trim() && !safeUrl(f.demo.value)) bad.push(f.demo); }
  if (n === 4) {
    const on = $$('[data-toggle]').filter(c => c.checked);
    if (!on.length) bad.push($('.toggle-row')); on.forEach(c => need(f[c.dataset.toggle]));
  }
  $$('.err').forEach(e => e.classList.remove('err')); bad.forEach(e => e.classList.add('err'));
  if (bad.length) toast(t('fillRequired'));
  return !bad.length;
}
function publishProject(e) {
  e.preventDefault();
  if (!validateStep(4)) return;
  const f = e.target, w = state.wiz, on = k => $(`[data-toggle=${k}]`).checked ? f[k].value.trim() : '';
  const type = f.priceType.value;
  const project = {
    id: 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),      // unique ID
    title: f.title.value.trim(), type: w.type, short: f.short.value.trim(), full: f.full.value, tags: f.tags.value.split(',').map(x => x.trim()).filter(Boolean).slice(0, 8),
    priceType: type, price: type === 'free' ? 0 : Math.max(1, +f.price.value || 1), currency: f.currency.value,
    thumb: w.thumb, gallery: [w.thumb].concat(w.gallery), lang: f.plang.value, demo: f.demo.value.trim(), file: w.zip,
    owner: { name: t('you'), color: '#f59f00', whatsapp: on('whatsapp'), email: on('email'), portfolio: on('portfolio'), github: on('github') },
    baseRating: 0, baseCount: 0, views: 0, sales: 0, created: Date.now(), seedComments: []
  };
  state.mine.unshift(project);
  if (!store.set('ph_projects', state.mine)) { state.mine.shift(); toast(t('saveErr')); return; }
  closeModals(); resetFilters(); toast(t('publishedOk')); $('.layout').scrollIntoView({ behavior: 'smooth' });
}

/* ---------- 11. INIT ---------- */
function init() {
  toggleTheme(localStorage.getItem('ph_theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  buildFilterUI(); buildSort();
  setLanguage(state.lang);          // translates the page (also renders the grid once)
  initProjects();                   // …then shows the skeleton and re-renders

  $('#themeBtn').onclick = () => toggleTheme();
  $('#langSelect').onchange = e => setLanguage(e.target.value);
  $('#sellBtn').onclick = openWizard;
  const refresh = () => { state.shown = PAGE; renderGrid(); };
  $('#searchInput').addEventListener('input', refresh);
  $('#typeChecks').addEventListener('change', refresh);
  ['#ratingSel', '#projLangSel', '#sortSel'].forEach(s => $(s).addEventListener('change', refresh));
  $('#priceRange').addEventListener('input', e => { $('#priceOut').textContent = '$' + e.target.value; refresh(); });
  $('#resetBtn').onclick = resetFilters;
  $('#moreBtn').onclick = () => { state.shown += PAGE; renderGrid(); };
  $('#savedBtn').onclick = () => { state.savedOnly = !state.savedOnly; refresh(); };
  $('#filterBtn').onclick = () => toggleSheet(true);
  $('#applyBtn').onclick = $('#sheetBackdrop').onclick = () => toggleSheet(false);

  // Wizard
  $('#nextBtn').onclick = () => { if (validateStep(state.wiz.step)) showStep(state.wiz.step + 1); };
  $('#backBtn').onclick = () => showStep(state.wiz.step - 1);
  $('#pubForm').onsubmit = publishProject;
  $('#priceSeg').addEventListener('change', e => $('#amountRow').classList.toggle('hidden', e.target.value === 'free'));
  $$('[data-toggle]').forEach(c => c.onchange = () => $(`[name=${c.dataset.toggle}]`).classList.toggle('hidden', !c.checked));
  $('#thumbFile').onchange = async e => { const f = e.target.files[0]; if (!f) return; state.wiz.thumb = await compress(f); $('#thumbPrev').src = state.wiz.thumb; $('#thumbPrev').classList.remove('hidden'); $('#thumbHint').classList.add('hidden'); $('.drop').classList.remove('err'); };
  $('#galFile').onchange = async e => {
    for (const f of [...e.target.files].slice(0, 4)) if (state.wiz.gallery.length < 4) state.wiz.gallery.push(await compress(f));
    $('#galPrev').innerHTML = state.wiz.gallery.map(s => `<img src="${s}" alt="">`).join('');
  };
  $('#zipFile').onchange = e => { const f = e.target.files[0]; if (!f) return; state.wiz.zip = { name: f.name, size: f.size }; $('#zipName').textContent = `${f.name} (${(f.size / 1048576).toFixed(1)} MB)`; };
  $('#chatForm').onsubmit = sendChat;

  // Delegated clicks
  document.addEventListener('click', e => {
    const fav = e.target.closest('[data-fav]'); if (fav) { e.stopPropagation(); return toggleFav(fav.dataset.fav); }
    const star = e.target.closest('[data-star]'); if (star) { state.revStars = +star.dataset.star; $('#revStars').innerHTML = starPicker(state.revStars); return; }
    const ty = e.target.closest('[data-type]'); if (ty) { state.wiz.type = ty.dataset.type; $('#typeCards').classList.remove('err'); buildTypeCards(); return; }
    const gi = e.target.closest('[data-gi]'); if (gi) { state.gIdx = +gi.dataset.gi; drawDrawer(); return; }
    const buy = e.target.closest('[data-buy]'); if (buy) return handleBuy(buy.dataset.buy);
    const card = e.target.closest('.card'); if (card) return openProject(card.dataset.id);
    const act = e.target.closest('[data-act]');
    if (act) {
      const a = act.dataset.act, n = state.current ? state.current.gallery.length : 1;
      if (a !== 'focusSearch' && a !== 'sell') e.preventDefault?.();
      if (a === 'closeDrawer') closeDrawer();
      else if (a === 'gprev') { state.gIdx = (state.gIdx - 1 + n) % n; drawDrawer(); }
      else if (a === 'gnext') { state.gIdx = (state.gIdx + 1) % n; drawDrawer(); }
      else if (a === 'buy') openModal('#buyModal');
      else if (a === 'contact' || a === 'hire') openTalk(a);
      else if (a === 'addComment') addComment();
      else if (a === 'sell') { e.preventDefault(); openWizard(); }
      else if (a === 'focusSearch') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); $('#searchInput').focus(); }
      return;
    }
    if (e.target.closest('[data-close]') || e.target.classList.contains('modal')) closeModals();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModals(); closeDrawer(); toggleSheet(false); } });
  // Broken image URLs → gradient placeholder (error events don't bubble, so capture)
  document.addEventListener('error', e => { const el = e.target; if (el.tagName === 'IMG' && !el.dataset.fb) { el.dataset.fb = 1; el.src = fallbackImg(); } }, true);
}
document.addEventListener('DOMContentLoaded', init);
