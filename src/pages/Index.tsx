import { useState } from "react";
import Icon from "@/components/ui/icon";

const BOOK_IMAGE = "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/55665ac6-d0aa-462b-9549-9aef207a50cb.png";
const LOGO_IMAGE = "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/b47dbc19-d1a3-4712-b4df-050eb240844c.jpg";

const navLinks = [
  { href: "#about", label: "О книге" },
  { href: "#author", label: "Об авторе" },
  { href: "#gallery", label: "Галерея" },
  { href: "#buy", label: "Купить" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "Вопросы" },
];

const news = [
  {
    date: "8 апреля 2026",
    title: "Презентация книги в Москве",
    text: "Автор представит книгу в Доме книги на Новом Арбате. Встреча с читателями, автограф-сессия и философская дискуссия."
  },
  {
    date: "22 марта 2026",
    title: "Интервью для «Новой газеты»",
    text: "Развёрнутое интервью об идеях книги, поиске смысла и современном состоянии философской мысли."
  },
  {
    date: "5 марта 2026",
    title: "Книга вышла в свет",
    text: "После трёх лет работы книга наконец опубликована. Первый тираж поступает в книжные магазины по всей России."
  },
];

const galleryItems = [
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/13e63314-7cf6-4339-971d-ad92c7e76a72.jpg", caption: "Михаил Цинклер с книгой" },
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/79ae929b-c7a2-4fe4-8676-e06d1a25c0ec.jpg", caption: "Самара" },
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/e56279d9-53cf-421d-93eb-ce860dd9b764.jpg", caption: "Херсонес" },
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/8cbfc03d-47c6-486c-8d64-92ed9b55e420.jpg", caption: "На Кавказе" },
  { type: "video", src: "https://rutube.ru/play/embed/0b6254d583712a8c59fa8480c37e5d45/", caption: "Видео на Rutube" },
  { type: "video", src: "https://rutube.ru/play/embed/277f05efe41ca9688167263fb2e9709f/", caption: "Видео на Rutube" },
];

const reviews = [
  {
    name: "Александр Тихонов",
    role: "Профессор философии, МГУ",
    text: "Редкая книга, способная изменить способ мышления. Автор с блеском соединяет классическую философию с современными вопросами существования.",
    stars: 5
  },
  {
    name: "Мария Соловьёва",
    role: "Читатель",
    text: "Читала две ночи подряд. Каждая глава — это разговор с собственной совестью. Книга живёт в голове ещё долго после прочтения.",
    stars: 5
  },
  {
    name: "Игорь Белов",
    role: "Литературный критик",
    text: "Философия без академической скуки — вот чего так не хватало. Язык точен, мысль глубока, читается как роман.",
    stars: 5
  },
];

const faqs = [
  {
    q: "Для кого предназначена эта книга?",
    a: "Книга написана для широкой аудитории — всех, кто задаётся вопросами о смысле, свободе и природе человека. Специальных знаний не требуется."
  },
  {
    q: "Есть ли электронная версия?",
    a: "Да, книга доступна в форматах ePub и PDF на всех крупных платформах — ЛитРес, Ozon, книжных магазинах."
  },
  {
    q: "Планируется ли продолжение?",
    a: "Автор работает над второй книгой, которая исследует тему времени и памяти. Выход ожидается в 2027 году."
  },
  {
    q: "Как связаться с автором?",
    a: "Автор активен в социальных сетях и отвечает на вопросы в Telegram-канале. Для официальных запросов — почта издательства."
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center">
            <img
              src={LOGO_IMAGE}
              alt="Загадка BOW"
              className="h-10 w-10 object-cover rounded-lg"
            />
          </a>
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-ibm text-xs uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-gold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border/40 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-ibm text-sm uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 60% 50%, hsl(220 25% 11%) 0%, hsl(220 20% 6%) 100%)"
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-900/20 to-transparent" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-900/20 to-transparent" />
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-yellow-900/10 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-in delay-100" style={{ animationFillMode: "forwards" }}>
              <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">
                Сайт о книге Михаила Цинклера
              </p>
              <h1 className="font-cormorant text-5xl md:text-7xl font-light leading-tight text-foreground">
                Загадка BOW.<br />
                <em className="text-gold italic">Код мироздания</em>
              </h1>
            </div>

            <p
              className="font-ibm text-base text-muted-foreground leading-relaxed max-w-md opacity-0 animate-fade-up delay-300"
              style={{ animationFillMode: "forwards" }}
            >
              «Загадка BOW. Код мироздания» — это увлекательное и насыщенное размышление о природе вселенной и человека. Михаил Цинклер предлагает читателю задуматься о существующих закономерностях, о скрытых кодах и структурах, управляющих нашим миром. Книга подходит для тех, кто интересуется философией, эзотерикой и современными теориями о природе реальности, а также для тех, кто ищет новые идеи для личностного роста и духовного развития.
            </p>

            <blockquote
              className="border-l-2 border-gold pl-6 italic font-cormorant text-xl text-foreground/80 opacity-0 animate-fade-up delay-500"
              style={{ animationFillMode: "forwards" }}
            >
              «Не тот мудр, кто знает ответы — тот, кто умеет задавать правильные вопросы.»
            </blockquote>

            <div
              className="flex gap-4 flex-wrap opacity-0 animate-fade-up delay-700"
              style={{ animationFillMode: "forwards" }}
            >
              <a
                href="#buy"
                className="inline-flex items-center gap-2 bg-gold text-background font-ibm text-xs uppercase tracking-widest px-6 py-3 hover:opacity-90 transition-opacity duration-300"
              >
                <Icon name="BookOpen" size={16} />
                Купить книгу
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border border-gold/40 text-gold font-ibm text-xs uppercase tracking-widest px-6 py-3 hover:border-gold transition-colors duration-300"
              >
                Узнать больше
              </a>
            </div>
          </div>

          <div
            className="flex justify-center opacity-0 animate-fade-in delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full" />
              <img
                src={BOOK_IMAGE}
                alt="Обложка книги"
                className="relative w-72 md:w-80 object-cover shadow-2xl shadow-black/60"
                style={{ aspectRatio: "3/4", objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">О книге</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-8 leading-snug">
                О чём<br /><em className="text-gold">эта книга</em>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground font-ibm leading-relaxed text-[15px]">
              <p>
                «Загадка BOW. Код мироздания» — это типичный представитель жанра «личная философия» или «интегральное мировоззрение».
              </p>
              <p>
                Если вы любите книги, где авторы (часто с медицинским или техническим бэкграундом) делятся своими умозрительными построениями о том, как устроен мир, ищете вдохновение для размышлений или хотите познакомиться с альтернативными взглядами на реальность — эта книга может оказаться для вас увлекательным чтением.
              </p>
              <p>
                Если же вы ищете строго научные данные, доказательную базу или академическую философию — стоит воспринимать эту книгу как субъективное творческое исследование, а не как учебное пособие.
              </p>
              <p>
                Книга достойна внимания тех, кто находится в поиске новых метафор для описания реальности. Идея «троичности» как основы мира (в противовес дуальности) всегда была плодородной почвой для философских размышлений, и интересно посмотреть, как врач-анестезиолог, человек, ежедневно сталкивающийся с пограничным состоянием между жизнью и смертью, интерпретирует эту тему.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/de96ddac-fe93-4099-b6b6-fe400ac26a15.jpg", label: "Философия", desc: "Умозрительные построения о природе мира и бытия" },
              { img: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/3a0b83cf-2719-4eea-ba1b-8a481520987e.jpg", label: "Логика", desc: "Структуры и закономерности, управляющие реальностью" },
              { img: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/b72f333e-a0d0-4e12-ba82-70ae373e35e4.jpg", label: "Саморазвитие", desc: "Новые идеи для личностного и духовного роста" },
            ].map(item => (
              <div key={item.label} className="border border-border/60 p-6 hover:border-gold/40 transition-colors duration-300 flex flex-col items-center text-center">
                <img src={item.img} alt={item.label} className="w-16 h-16 object-cover rounded-md mb-4" />
                <h3 className="font-cormorant text-xl text-foreground mb-2">{item.label}</h3>
                <p className="font-ibm text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section id="author" className="py-14 bg-card/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <img
                src="https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/e025f13f-134e-4b40-ad4b-387590cdd1e3.jpg"
                alt="Цинклер Михаил Генрихович"
                className="w-full object-cover border border-border/60"
                style={{ maxWidth: 280, aspectRatio: "1/1", objectPosition: "center top" }}
              />
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Об авторе</p>
                <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
                  Цинклер Михаил Генрихович
                </h2>
                <p className="font-ibm text-sm text-gold/80 mt-1">Врач, философ, писатель</p>
              </div>
              <p className="font-ibm text-[15px] text-muted-foreground leading-relaxed">
                Он называет себя «гусаром от медицины», по-современному — спецназ. Так в прошлом веке называли реаниматологов. Родился в городе Калининграде. В юности с отцом, военным, объехал страну от Прибалтики до Сахалина.
              </p>
              <p className="font-ibm text-[15px] text-muted-foreground leading-relaxed">
                Окончил Благовещенский государственный медицинский институт. В числе первых участвовал в становлении анестезиолого-реанимационной службы в Амурской области. Более тридцати лет работал врачом экстренной службы на Дальнем Востоке. Философия — страстное увлечение со школьной скамьи.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { num: "45", label: "лет в медицине" },
                  { num: "ДВ", label: "Дальний Восток" },
                  { num: "1", label: "книга" },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <p className="font-cormorant text-4xl text-gold">{stat.num}</p>
                    <p className="font-ibm text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* GALLERY */}
      <section id="gallery" className="py-14 bg-card/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Галерея</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-12">
            Фото и видео
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden aspect-square bg-muted border border-border/60 hover:border-gold/40 transition-colors duration-300 group cursor-pointer"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <iframe
                    src={item.src}
                    className="w-full h-full"
                    allow="encrypted-media; fullscreen; picture-in-picture"
                    frameBorder="0"
                    allowFullScreen
                  />
                )}
                {item.type === "image" && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-ibm text-xs text-foreground/90">{item.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUY */}
      <section id="buy" className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <div className="text-center mb-16">
            <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Где купить</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
              Книга доступна
            </h2>
            <p className="font-ibm text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
              на маркетплейсах и на сервисе издательства{" "}
              <a
                href="https://ridero.ru/books/zagadka_bow_kod_mirozdaniya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Ридеро
              </a>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { store: "ЛитРес", format: "Электронная + аудио", icon: "Tablet", url: "https://www.litres.ru/book/mihail-genrihovich-cinkler/zagadka-bow-kod-mirozdaniya-71893390/" },
              { store: "Ozon", format: "Печатная книга", icon: "Package", url: "https://www.ozon.ru/product/zagadka-bow-kod-mirozdaniya-2026930453/?__rr=1&sh=JyphtAzSxg" },
              { store: "Wildberries", format: "Печатная книга", icon: "ShoppingBag", url: "https://www.wildberries.ru/catalog/390065838/detail.aspx" },
              { store: "Яндекс Маркет", format: "Печатная книга", icon: "ShoppingCart", url: "https://market.yandex.ru/card/zagadka-bow-kod-mirozdaniya-tsifrovaya-kniga/4324783764?do-waremd5=ZnTZ87b5i-_oVItHSnpczQ&clid=703&ysclid=mnvihwqd8y48363716&ogV=-12" },
              { store: "Ридеро", format: "Электронная + печатная", icon: "Star", url: "https://ridero.ru/books/zagadka_bow_kod_mirozdaniya/" },
              { store: "Amazon", format: "Электронная книга", icon: "Globe", url: "https://www.amazon.com/Загадка-BOW-Код-мироздания-Russian-ebook/dp/B0F546JMVV" },
              { store: "Строки", format: "Электронная книга", icon: "FileText", url: "https://stroki.mts.ru/book/zagadka-bow-kod-mirozdaniya-311835" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.url ?? "#buy"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-border/60 hover:border-gold/40 transition-colors duration-300 text-left group"
              >
                <div className="p-3 bg-muted border border-border/60 group-hover:border-gold/30 transition-colors">
                  <Icon name={item.icon} size={20} className="text-gold/60" />
                </div>
                <div className="flex-1">
                  <p className="font-cormorant text-lg text-foreground">{item.store}</p>
                  <p className="font-ibm text-xs text-muted-foreground">{item.format}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-14 bg-card/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Отзывы</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-12">
            Что говорят читатели
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="p-8 border border-border/60 hover:border-gold/30 transition-colors duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <span key={j} className="text-gold text-sm">★</span>
                  ))}
                </div>
                <blockquote className="font-cormorant text-lg text-foreground/90 italic leading-relaxed mb-6">
                  «{review.text}»
                </blockquote>
                <div>
                  <p className="font-ibm text-sm text-foreground">{review.name}</p>
                  <p className="font-ibm text-xs text-muted-foreground mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Вопросы</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-12">
            Часто спрашивают
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border/40">
                <button
                  className="w-full flex items-center justify-between py-6 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-cormorant text-xl text-foreground group-hover:text-gold transition-colors duration-300">
                    {faq.q}
                  </span>
                  <Icon
                    name={openFaq === i ? "Minus" : "Plus"}
                    size={16}
                    className="text-gold/60 flex-shrink-0 ml-4"
                  />
                </button>
                {openFaq === i && (
                  <div className="pb-6 font-ibm text-[15px] text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-14 bg-card/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <div className="text-center mb-12">
            <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Соцсети</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
              Следите за автором
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Telegram", icon: "Send", desc: "Канал автора" },
              { name: "ВКонтакте", icon: "Users", desc: "Сообщество" },
              { name: "YouTube", icon: "Youtube", desc: "Лекции и интервью" },
              { name: "Instagram", icon: "Instagram", desc: "Фото и заметки" },
            ].map((social, i) => (
              <button
                key={i}
                className="flex items-center gap-4 px-8 py-5 border border-border/60 hover:border-gold/40 transition-colors duration-300 group min-w-[200px]"
              >
                <Icon name={social.icon} size={20} className="text-gold/60 group-hover:text-gold transition-colors" />
                <div className="text-left">
                  <p className="font-ibm text-sm text-foreground">{social.name}</p>
                  <p className="font-ibm text-xs text-muted-foreground">{social.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-cormorant text-xl text-gold">В поисках настоящего</p>
          <p className="font-ibm text-xs text-muted-foreground">© 2026 Все права защищены</p>
          <div className="flex gap-6">
            {navLinks.slice(0, 4).map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-ibm text-xs uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}