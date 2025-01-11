import HeaderPage from "@/components/offers1/header-page";
import SubSection from "@/components/offers1/sub-section";
import DescriptionAllSpaces from "@/components/offers1/DescriptionAllSpaces";
import { offres1 } from "@/config/data";

export default async function OfferPage1({ params }: { params: { offer1_id: string } }) {
  const { offer1_id } = await  params; // Attendre params ici
  const offre1 = offres1.find((offre1) => offre1.id === offer1_id); // Comparaison stricte

  return (
    <div>
      <HeaderPage offre1={offre1} />
      <SubSection offre1={offre1} />
      <DescriptionAllSpaces offre1={offre1} />
    </div>
  );
}