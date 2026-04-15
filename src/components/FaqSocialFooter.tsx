import { useState } from "react";
import Icon from "@/components/ui/icon";
import { navLinks } from "@/components/NavBar";

const faqs = [
  {
    q: "Почему книга так называется?",
    a: "BOW — аббревиатура, построенная на английской аналогии со словом bow (лук): Blow to move (удар, импульс), Object of motion (объект движения), Way to achieve a goal (путь к цели). Лук — наглядная модель системы из трёх обязательных частей: тетивы, стрелы и самого лука. Без любого из них система не работает.\n\n«Загадка» — автор рассматривает устройство мира как великую тайну, которую человечество пытается разгадать на протяжении всей истории. Ключ к ней — в понимании универсального принципа BOW.\n\n«Код мироздания» — принцип BOW, по мнению автора, это фундаментальный закон, «программный код» Вселенной, применимый к любой системе: от атома до общества."
  },
  {
    q: "Для кого предназначена эта книга?",
    a: "Книга написана для широкой аудитории — всех, кто задаётся вопросами о смысле, свободе и природе человека. Специальных знаний не требуется."
  },
  {
    q: "Есть ли электронная версия?",
    a: "Да, книга доступна в форматах ePub и PDF на платформах — Ридеро, ЛитРес, Ozon, Яндекс Маркет, Amazon, Строки."
  },
  {
    q: "Планируется ли продолжение?",
    a: "Автор работает над вторым изданием книги, которая будет дополнена новыми главами. Выход ожидается в 2027 году."
  },
  {
    q: "Как связаться с автором?",
    a: "Автор активен в социальных сетях и отвечает на вопросы в Telegram-канале. Для официальных запросов — почта издательства."
  },
];

export default function FaqSocialFooter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
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
      <section id="social" className="py-14 bg-card/40">
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
              { name: "ВКонтакте", icon: "Users", desc: "Сообщество", url: "https://vk.com/planet5elements56" },
              { name: "Одноклассники", icon: "UserCircle", desc: "Профиль автора", url: "https://ok.ru/profile/910120256596" },
              { name: "Rutube", icon: "Play", desc: "Лекции и интервью", url: "https://rutube.ru/channel/49118191/" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-8 py-5 border border-border/60 hover:border-gold/40 transition-colors duration-300 group min-w-[200px]"
              >
                <Icon name={social.icon} size={20} className="text-gold/60 group-hover:text-gold transition-colors" />
                <div className="text-left">
                  <p className="font-ibm text-sm text-foreground">{social.name}</p>
                  <p className="font-ibm text-xs text-muted-foreground">{social.desc}</p>
                </div>
              </a>
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
    </>
  );
}