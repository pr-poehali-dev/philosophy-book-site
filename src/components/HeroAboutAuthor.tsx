import Icon from "@/components/ui/icon";

const BOOK_IMAGE = "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/55665ac6-d0aa-462b-9549-9aef207a50cb.png";

export default function HeroAboutAuthor() {
  return (
    <>
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
              <p className="font-ibm text-sm uppercase tracking-[0.3em] text-gold/70 mb-4">
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
    </>
  );
}
