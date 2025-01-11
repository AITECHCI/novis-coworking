import HeaderPage from "@/components/galeries/header-page";
import DescriptionAllSpaces from "@/components/galeries/DescriptionAllSpaces";
import { galeries } from "@/config/data";

export default async function GalerierPage({ params }: { params: { galerie_id: string } }) {
  const { galerie_id } = await  params; // Attendre params ici
  const galerie = galeries.find((galerie) => galerie.id === galerie_id); // Comparaison stricte

  return (
    <div>
      <HeaderPage galerie={galerie} />
      <DescriptionAllSpaces galerie={galerie} />
    </div>
  );
}