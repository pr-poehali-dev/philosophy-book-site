import NavBar from "@/components/NavBar";
import HeroAboutAuthor from "@/components/HeroAboutAuthor";
import GalleryBuyReviews from "@/components/GalleryBuyReviews";
import FaqSocialFooter from "@/components/FaqSocialFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroAboutAuthor />
      <GalleryBuyReviews />
      <FaqSocialFooter />
    </div>
  );
}
