import HeaderPage from "@/components/galeries/header-page";
import DescriptionAllSpaces from "@/components/galeries/DescriptionAllSpaces";
import { galeries } from "@/config/data";

interface GalleryPageProps {
  params: {
    galery_id: string;
  };
}

export default async function GaleryPage({ params }: GalleryPageProps) {
  const { galery_id } = await params; // Utilisation de await pour accéder à galery_id
  const galerie = galeries.find((gal) => gal.id === galery_id);

  if (!galerie) {
    return <div>Galerie non trouvée</div>; // Gestion de l'erreur
  }

  return (
    <div>
      <HeaderPage galerie={galerie} />
      <DescriptionAllSpaces galerie={galerie} />
    </div>
  );
}