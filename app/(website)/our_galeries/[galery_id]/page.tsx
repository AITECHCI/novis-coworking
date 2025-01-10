import HeaderPage from "@/components/galeries/header-page";
import DescriptionAllSpaces from "@/components/galeries/DescriptionAllSpaces";
import { galeries } from "@/config/data";

export default function GaleryPage({ params }: { params: { galery_id: string } }) {
  const { galery_id } = params; // Pas besoin de 'await' ici
  const galerie = galeries.find((galerie) => galerie.id === galery_id);

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