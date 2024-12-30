import HeaderPage from "@/components/galerie/header-page"; 
import Galerie from "@/components/website/Galerie/galerie";
import { galery } from "@/config/data"; // Assurez-vous que le chemin d'importation est correct

export default function OurSpace() {
    return (
        <div>
            <HeaderPage 
                title={galery.title} 
                description={galery.description} 
                options={galery.options} 
                backgroundImage={galery.backgroundImage} 
            />
            <Galerie />
        </div>
    );
}