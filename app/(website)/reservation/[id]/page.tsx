import HeaderPage from "./components/header-page";
import Content from "./components/Content";
import { espaces } from "@/config/data";

export default async function ItemSpace({ params }: { params: { id: string } }) {
  // Pas besoin d'utiliser await ici
  const { id } = params;

  // Rechercher le groupe correspondant à l'ID
  const group = espaces.find((espace) => {
    if (espace.items) {
      return espace.items.find((espac) => espac.id === id); // Utilisation de ===
    }
    return espace.id === id; // Utilisation de ===
  });

  // Trouver l'item dans le groupe
  const item = group && group.items ? group.items.find((espac) => espac.id === id) : null;

  return (
    <div>
      <HeaderPage group={group} space={item} />
      <Content group={group} space={item} />
    </div>
  );
}