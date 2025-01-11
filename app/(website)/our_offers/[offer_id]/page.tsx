import HeaderPage from "@/components/offers/header-page";
import SubSection from "@/components/offers/sub-section";
import DescriptionAllSpaces from "@/components/offers/DescriptionAllSpaces";
import { offres } from "@/config/data";

export default async function OfferPage({ params }: { params: { offer_id: string } }) {
  const { offer_id } = await  params; // Attendre params ici
  const offre = offres.find((offre) => offre.id === offer_id); // Comparaison stricte

  return (
    <div>
      <HeaderPage offre={offre} />
      <SubSection offre={offre} />
      <DescriptionAllSpaces offre={offre} />
    </div>
  );
}