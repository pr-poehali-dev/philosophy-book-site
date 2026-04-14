import Icon from "@/components/ui/icon";

const galleryItems = [
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/13e63314-7cf6-4339-971d-ad92c7e76a72.jpg", caption: "Михаил Цинклер с книгой" },
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/79ae929b-c7a2-4fe4-8676-e06d1a25c0ec.jpg", caption: "Самара" },
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/e56279d9-53cf-421d-93eb-ce860dd9b764.jpg", caption: "Херсонес" },
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/a69f97f1-0e10-48ae-9731-dbaad46a5bac.JPG", caption: "В операционной" },
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/3506cc26-917e-4f04-891b-ff6fe1622e92.jpg", caption: "Работа врача-реаниматолога" },
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/8cbfc03d-47c6-486c-8d64-92ed9b55e420.jpg", caption: "На Кавказе" },
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/3fcb092b-24ee-44e8-9741-f22ee3d35e29.jpg", caption: "С женой в Калининградском ресторане" },
  { type: "image", src: "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/feadda5d-f50d-4f87-9133-65119674d841.jpg", caption: "В Севастополе" },
  { type: "video", src: "https://rutube.ru/play/embed/0b6254d583712a8c59fa8480c37e5d45/", caption: "Видео на Rutube" },
  { type: "video", src: "https://rutube.ru/play/embed/277f05efe41ca9688167263fb2e9709f/", caption: "Видео на Rutube" },
  { type: "video", src: "https://rutube.ru/play/embed/c42244b1f73aad90d9a659228e7ba253/", caption: "Видео на Rutube" },
  { type: "video", src: "https://rutube.ru/play/embed/ef4325e9d067b8ccefb33dd96215aae4/", caption: "Видео на Rutube" },
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

export default function GalleryBuyReviews() {
  return (
    <>
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
    </>
  );
}
