import {
  LucideIcon
} from "lucide-react";

import { Icons } from "@/components/icons";


type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Accueil",
          active: pathname === "/",
          icon: Icons.home,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/our_spaces",
          label: "Nos espaces",
          active: pathname.includes("/our_spaces"),
          icon: Icons.space,
          submenus: [
            {
              href: "/our_spaces",
              label: "Tous nos espaces",
              active: pathname == "/our_spaces"
            },
            {
              href: "/our_spaces/private_offices",
              label: "Bureaux privés",
              active: pathname == "/our_spaces/private_offices"
            },
            {
              href: "/our_spaces/open_space",
              label: "Open-space",
              active: pathname == "/our_spaces/open_space"
            },
            {
              href: "/our_spaces/meeting_room",
              label: "Salle de réunion",
              active: pathname == "/our_spaces/meeting_room"
            },
            {
              href: "/our_spaces/common_space",
              label: "Espaces Commun",
              active: pathname == "/our_spaces/common_space"
            },
          ]
        },
      ]
    },

    {
      groupLabel: "",
      menus: [
        {
          href: "/our_offers",
          label: "Nos offres",
          active: pathname.includes("/our_offers"),
          icon: Icons.library,
          submenus: [
            {
              href: "/our_offers/domiciliation_virtuelle_entreprise",
              label: "Domiciliation virtuelle d'entreprise",
              active: pathname === "/our_offers/domiciliation_virtuelle_entreprise"
            },
            {
              href: "/our_offers/domiciliation_physique_entreprise",
              label: "Domiciliation physique d'entreprise",
              active: pathname === "/our_offers/domiciliation_physique_entreprise"
            },
            {
              href: "/our_offers/location_occasionnelle_de_bureaux_meubles",
              label: "Location occasionnelle de bureaux meublés",
              active: pathname === "/our_offers/location_occasionnelle_de_bureaux_meubles"
            },
            {
              href: "/our_offers/location_salle_de_reunion",
              label: "Location salle de réunion",
              active: pathname === "/our_offers/location_salle_de_reunion"
            },
            {
              href: "/our_offers/location_espace_evenementiel",
              label: "Location espace évènementiel",
              active: pathname === "/our_offers/location_espace_evenementiel"
            },
            {
              href: "/our_offers/location_espace_tournage",
              label: "Location espace tournage",
              active: pathname === "/our_offers/location_espace_tournage"
            },
          ]
        },
      ]
    },
     {
      
      groupLabel: "",
      menus: [
        {
          href: "/galerie",
          label: "Galerie",
          active: pathname === "/galerie",
          icon: Icons.galerie,
          submenus: []
        },
      ]
    },
    {
      
      groupLabel: "",
      menus: [
        {
          href: "/about",
          label: "Qui sommes-nous ?",
          active: pathname === "/about",
          icon: Icons.about,
          submenus: []
        },
      ]
    },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/community",
    //       label: "La communauté",
    //       active: pathname === "/our_community",
    //       icon: Icons.group,
    //       submenus: []
    //     },
    //   ]
    // },
    {
      groupLabel: "",
      menus: [
        {
          href: "/contact_us",
          label: "Contactez-nous",
          active: pathname === "/contact_us",
          icon: Icons.phone,
          submenus: []
        },
      ]
    },
  ];
}
