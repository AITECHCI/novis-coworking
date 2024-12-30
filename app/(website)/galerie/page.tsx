import HeaderPage from "@/components/galerie/header-page"; 
import Galerie from "@/components/website/Galerie/galerie";

const offre = {
    title: "Galerie de Photos",
    description: "Découvrez notre collection de photos.",
    options: ["Événement", "Article de presse"],
    backgroundImage: "/images/background.jpg", 
};

export default function OurSpace() {
    return (
        <div>
            <HeaderPage 
                title={offre.title} 
                description={offre.description} 
                options={offre.options} 
                backgroundImage={offre.backgroundImage} 
            />
            <Galerie />
        </div>
    );
}