import { useState } from "react";
import Icon from "@/components/ui/icon";

const BOOK_IMAGE = "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/55665ac6-d0aa-462b-9549-9aef207a50cb.png";
const LOGO_IMAGE = "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/b47dbc19-d1a3-4712-b4df-050eb240844c.jpg";

const navLinks = [
  { href: "#about", label: "О книге" },
  { href: "#author", label: "Об авторе" },
  { href: "#news", label: "Новости" },
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
  { type: "image", src: BOOK_IMAGE, caption: "Обложка книги" },
  { type: "image", src: BOOK_IMAGE, caption: "Рабочий кабинет автора" },
  { type: "image", src: BOOK_IMAGE, caption: "Презентация в Санкт-Петербурге" },
  { type: "video", src: "", caption: "Видео о книге" },
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
                Книга Михаила Цинклера
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
              Книга о том, как человек находит смысл в мире, где всё временно.
              О свободе, выборе и тех вопросах, которые важнее ответов.
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
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">О книге</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-8 leading-snug">
                Что говорит<br /><em className="text-gold">эта книга</em>
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground font-ibm leading-relaxed text-[15px]">
              <p>
                «В поисках настоящего» — книга о базовых вопросах человеческого существования, написанная
                в жанре философской прозы. Она соединяет строгую мысль с живым языком, делая философию
                доступной каждому читателю.
              </p>
              <p>
                Автор исследует природу времени, свободы воли и ответственности. Через личные истории,
                классические тексты и современные примеры книга ведёт читателя к пониманию
                собственного места в мире.
              </p>
              <p>
                Главная идея: подлинная жизнь начинается с честного вопроса к себе. Книга не даёт
                готовых ответов — она учит задавать правильные вопросы.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "Clock", label: "Время", desc: "Как мы проживаем каждый момент" },
              { icon: "Compass", label: "Свобода", desc: "Выбор как основа личности" },
              { icon: "Eye", label: "Осознанность", desc: "Присутствие здесь и сейчас" },
              { icon: "Heart", label: "Смысл", desc: "Зачем мы живём" },
            ].map(item => (
              <div key={item.label} className="border border-border/60 p-6 hover:border-gold/40 transition-colors duration-300">
                <Icon name={item.icon} size={20} className="text-gold mb-4" />
                <h3 className="font-cormorant text-xl text-foreground mb-2">{item.label}</h3>
                <p className="font-ibm text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section id="author" className="py-24 bg-card/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="w-full bg-muted aspect-square flex items-center justify-center border border-border/60" style={{ maxWidth: 280 }}>
                <Icon name="User" size={64} className="text-gold/30" />
              </div>
              <div className="mt-4 flex gap-3">
                {[
                  { icon: "Send", label: "Telegram" },
                  { icon: "Users", label: "ВК" },
                  { icon: "Youtube", label: "YouTube" },
                ].map((s, i) => (
                  <button key={i} className="p-2 border border-border/60 hover:border-gold/40 text-muted-foreground hover:text-gold transition-colors duration-300">
                    <Icon name={s.icon} size={16} />
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Об авторе</p>
                <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
                  Имя Автора
                </h2>
                <p className="font-ibm text-sm text-gold/80 mt-1">Философ, писатель, лектор</p>
              </div>
              <p className="font-ibm text-[15px] text-muted-foreground leading-relaxed">
                Родился в 1975 году. Окончил философский факультет МГУ, защитил диссертацию по
                экзистенциальной философии. Преподавал в нескольких российских университетах.
              </p>
              <p className="font-ibm text-[15px] text-muted-foreground leading-relaxed">
                Более 20 лет занимается популяризацией философии. Читает открытые лекции, ведёт
                подкаст о смысле жизни и публикует статьи в ведущих изданиях. «В поисках настоящего» —
                его первая книга.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { num: "20+", label: "лет в философии" },
                  { num: "500+", label: "лекций" },
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

      {/* NEWS */}
      <section id="news" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <div className="mb-12">
            <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Новости</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
              Последние события
            </h2>
          </div>
          <div className="space-y-0">
            {news.map((item, i) => (
              <div
                key={i}
                className="grid md:grid-cols-4 gap-6 py-8 border-b border-border/40 hover:border-gold/20 transition-colors duration-300 group"
              >
                <div>
                  <p className="font-ibm text-xs text-gold/70 uppercase tracking-wider">{item.date}</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-cormorant text-2xl text-foreground group-hover:text-gold transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-ibm text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-card/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Галерея</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-12">
            Фото и видео
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-card">
                    <Icon name="Play" size={32} className="text-gold/50" />
                    <p className="font-ibm text-xs text-muted-foreground">Видео</p>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-ibm text-xs text-foreground/90">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUY */}
      <section id="buy" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-divider mb-16" />
          <div className="text-center mb-16">
            <p className="font-ibm text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Где купить</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
              Книга доступна везде
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { store: "ЛитРес", format: "Электронная + аудио", price: "349 ₽", icon: "Tablet" },
              { store: "Ozon", format: "Печатная книга", price: "590 ₽", icon: "Package" },
              { store: "Wildberries", format: "Печатная книга", price: "610 ₽", icon: "ShoppingBag" },
              { store: "Читай-город", format: "Печатная книга", price: "620 ₽", icon: "BookOpen" },
              { store: "Издательство", format: "Прямой заказ + подпись", price: "700 ₽", icon: "Star" },
              { store: "Библио-Глобус", format: "Печатная книга", price: "590 ₽", icon: "Library" },
            ].map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-4 p-6 border border-border/60 hover:border-gold/40 transition-colors duration-300 text-left group"
              >
                <div className="p-3 bg-muted border border-border/60 group-hover:border-gold/30 transition-colors">
                  <Icon name={item.icon} size={20} className="text-gold/60" />
                </div>
                <div className="flex-1">
                  <p className="font-cormorant text-lg text-foreground">{item.store}</p>
                  <p className="font-ibm text-xs text-muted-foreground">{item.format}</p>
                </div>
                <p className="font-ibm text-sm text-gold font-medium">{item.price}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-card/40">
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
      <section id="faq" className="py-24">
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
      <section className="py-24 bg-card/40">
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