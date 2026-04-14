import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_IMAGE = "https://cdn.poehali.dev/projects/36db464f-ef39-46e0-90d7-12427b8c4033/bucket/b47dbc19-d1a3-4712-b4df-050eb240844c.jpg";

const navLinks = [
  { href: "#about", label: "О книге" },
  { href: "#author", label: "Об авторе" },
  { href: "#gallery", label: "Галерея" },
  { href: "#buy", label: "Купить" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "Вопросы" },
  { href: "#social", label: "Соцсети" },
];

export { navLinks };

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
  );
}
