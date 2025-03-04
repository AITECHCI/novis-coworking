export const datas: List_SpaceCard[] = [
  {
    id: "private_offices",
    title: "Bureaux privés",
    items: [
      {
        id: "bureau_confiance",
        title: "Bureau confiance",
        imagePath: "coworking/Bureaux privés/Bureau confiance",
      },
      {
        id: "bureau_determination",
        title: "Bureau détermination",
        imagePath: "coworking/Bureaux privés/Bureau détermination",
      },
      {
        id: "bureau_prosperite",
        title: "Bureau prospérité",
        imagePath: "coworking/Bureaux privés/Bureau prospérité",
      },
      {
        id: "bureau_excellence",
        title: "Bureau excellence",
        imagePath: "coworking/Bureaux privés/Bureau prospérité",
      },
      {
        id: "bureau_serenite",
        title: "bureau sérénité",
        imagePath: "coworking/Bureaux privés/Bureau prospérité",
      },
    ],
  },
  {
    id: "open_space",
    title: "Open space",
    items: [
      {
        id: "open_space",
        title: "Espace Bulle Open space",
        imagePath: "coworking/Espace Bulle Open space",
      },
    ],
  },
  {
    id: "meeting_room",
    title: "Salle de réunion",
    items: [
      {
        id: "meeting_room",
        title: "Salle de réunion",
        imagePath: "coworking/Salle de réunion",
      },
    ],
  },
  {
    id: "common_space",
    title: "Espace commun",
    items: [
      {
        id: "common_space",
        title: "Espace commun",
        imagePath: "coworking/Espace commun",
      },
    ],
  },
];

export const offres = [
  {
    id: "domiciliation_virtuelle_entreprise",
    title: "Domiciliation Virtuelle",
    subdescription: "Choisissez notre adresse pour en faire la vôtre.",
    description: [
      "Dans le cadre de l'immatriculation de votre entreprise au CEPICI pour obtenir une autorisation légale d'exercer votre activité en Côte-d'Ivoire il vous sera nécessaire de disposer d'un siège-social et de vous rattacher par la suite à un centre d'impôts ivoirien.",
      "Novis coworking met à votre disposition une adresse géographique. Grâce à la souscription d'un abonnement annuel vous obtenez un contrat qui vous permettra de compléter votre dossier auprès du notaire, de l'avocat ou l'expert en charge de faire la constitution de votre société à Abidjan.",
    ],
    options: ["Siège social pour vous faire immatriculer", "Adresse physique pour votre entreprise"],
    solutionsTitle:
      "Du CLOUD à l'ECO et au FLEX, choisissez la solution sur-mesure qui vous convient le mieux.",
    solutions: [
      {
        title: "CLOUD",
        icon: "cloud",
      },
      {
        title: "ECONOMIQUE",
        icon: "eco",
      },
      {
        title: "FLEX",
        icon: "flex",
      },
    ],
    image: "/images/coworking/Espace Bulle Open space/img (1).jpg",
    elements: [
      {
        icon: "🏢", // Représentation symbolique d'un bâtiment
        title: "Domiciliation et gestion postale",
        description: "Mise à disposition d’une adresse prestigieuse dans un immeuble neuf accessible et sécurisé",
      },
      {
        icon: "👥", // Représentation symbolique de personnes
        title: "Conciergerie et réservation de salles de réunion",
        description: "Contrat de domiciliation en moins d’une heure",
      },
      {
        icon: "🤝", // Représentation symbolique d'une poignée de main
        title: "Accès aux espaces networking de l'ensemble des parntenaires",
        description: "Mise à disposition de l’adresse pour tous les documents administratifs et commerciaux",
      },
      {
        icon: "📶", // Représentation symbolique du WiFi
        title: "Connexion WiFi symétrique et redondante",
        description: "Permanence téléphonique et accueil physique des visiteurs",
      },
      {
        icon: "☕", // Représentation symbolique d'une tasse de café
        title: "Espace d'accueil et réception",
        description: "Réception de courriers et petits colis",
      },
      {
        icon: "📞", // Représentation symbolique d'un téléphone
        title: "Numéro téléphonique professionnel",
        description: "Accès à un bureau privé pendant 1H et la salle de réunion 1h",
      },
    ],
    bookingLink:'/reservation-domiciliation'
  },
  {
    id: "domiciliation_physique_entreprise",
    title: "Domiciliation physique",
    subdescription:
      "Profitez du confort et de l'ambiance dynamisante de notre espace de coworking.",
    description: [
      "Dans un environnement où le coût de l'immobilier ne fait que s'accroître, il est important en tant qu'investisseur en côte d'ivoire, entrepreneur ou entreprises internationales de trouver des stratégies pour installer l'entreprise à moindre coût.",
      "Novis coworking vous aide à atteindre cet objectif en minimisant vos coûts. Offrez-vous le luxe de bénéficier d'un bureau élégant à Abidjan au sein d'un espace partagé avec une communauté (locaux, expatriés, repats) et bénéficiez d'un large réseau.",
      "2 possibilités s'offrent à vous, le bureau privé ou l'espace open-space",
    ],
    horraires: [
      {
        name: "Du lundi au vendredi",
        horraire: "8h-17h et 17h-22h",
      },
      {
        name: "Samedi",
        horraire: "10h-17h",
      },
      {
        name: "Dimanche",
        horraire: "10h-14h",
      },
    ],
    image: "/images/other/exterieur.jpg",

    elements: [
      {
        icon: "⚡", // Représentation symbolique d'une icône d'électricité
        title: "Charges comprises, travaux et maintenance",
        description: "Coûts de fonctionnement et entretien inclus",
      },
      {
        icon: "🏢", // Représentation symbolique d'un bâtiment
        title: "Domiciliation et gestion postale",
        description: "Service d'adresse professionnelle et gestion du courrier",
      },
      {
        icon: "💻", // Représentation symbolique d'un ordinateur
        title: "Accès ultralarge et vidéosurveillance",
        description: "Connexion internet haut débit et sécurité",
      },
      {
        icon: "👥", // Représentation symbolique de personnes
        title: "Conciergerie et réservation de salles de réunion",
        description: "Services d'assistance et réservation d'espaces",
      },
      {
        icon: "🚲", // Représentation symbolique d'un vélo
        title: "Equipements et services de la communauté",
        description: "Accès aux installations partagées",
      },
      {
        icon: "🤝", // Représentation symbolique d'une poignée de main
        title: "Accès aux espaces networking de l'ensemble des parntenaires",
        description: "Opportunités de réseautage étendues",
      },
      {
        icon: "📶", // Représentation symbolique du WiFi
        title: "Connexion WiFi symétrique et redondante",
        description: "Connectivité internet fiable et rapide",
      },
      {
        icon: "☕", // Représentation symbolique d'une tasse de café
        title: "Espace d'accueil et réception",
        description: "Zone d'accueil professionnelle",
      },
      {
        icon: "📞", // Représentation symbolique d'un téléphone
        title: "Numéro téléphonique professionnel",
        description: "Ligne téléphonique dédiée pour votre entreprise",
      },
    ],
  },
  {
    id: "location_occasionnelle_de_bureaux_meubles",
    title: "Location de bureau",
    subdescription: "Faites comme chez vous !",
    description: [
      "Conscient du fait que toutes les entreprises n'ont pas les mêmes besoins et le même budget nous donnons la possibilité à chacun de pouvoir évoluer à son rythme. A L'heure, à la journée, à la semaine ou au mois venez comme vous êtes.",
      "A chaque bureau son ambiance et son authenticité, choisissez qui vous va à l'instant en fonction de votre humeur pour votre bien être et une meilleure productivité. ",
    ],
    horraires: [
      {
        name: "Du lundi au vendredi",
        horraire: "8h-17h et 17h-22h",
      },
      {
        name: "Samedi",
        horraire: "10h-17h",
      },
    ],
    avantages: [
      {
        title: "PRET A L'EMPLOI",
        detail: "+ imprimante, wifi",
        image: "/images/coworking/Bureaux privés/Bureau prospérité/img1.jpg",
      },
      {
        title: "VALEUR AJOUTEE",
        detail:
          "Gain de crédibilité pour le positionnement de votre entreprise.",
        image: "/images/coworking/Bureaux privés/Bureau confiance/img (2).jpg",
      },
      {
        title: "NOTORIETE",
        detail: "Un règlement en fonction de votre consommation.",
        image:
          "/images/coworking/Bureaux privés/Bureau détermination/img3.jpg",
      },
    ],
    image: "/images/other/bureau_equipe.jpg",
  },
  {
    id: "location_salle_de_reunion",
    title: "Salle de réunion",
    subdescription:
      "Louez une salle de réunion équipée pour vos rencontres professionnelles.",
    description: [
      "Aménagées de manière ergonomique et confortable, notre salle de réunion avec sa capacité de 10 personnes minimum est entièrement équipée pour accueillir vos rencontres professionnelles abidjanaises.",
      "Grâce à son accessibilité c'est l'emplacement rêvé pour organiser vos réunions, vos formations, vos masterclass. Vos convives, collaborateurs, clients ne pourraient être que ravis de cet endroit que nous nommons affectueusement le labo.",
      "Ecrans, paperboard, stylos et accès wifi pour chaque participant.",
    ],
    tarifs: [
      {
        name: "Tarif semaine",
        horraire: "8h-17h et 17h-22h",
        items: [
          { title: "1 Demie journée", price: "30 000 F" },
          { title: "1 Journée", price: "50 000 F" },
          { title: "Soirée", price: "25 000 F" },
        ],
      },
      {
        name: "Tarif samedi",
        horraire: "10h-17h",
        items: [
          { title: "1 Demie journée", price: "45 000 F" },
          { title: "1 Journée", price: "85 000 F" },
        ],
      },
    ],
    optionsSup:
      "Pour vous aider à vous concentrer exclusivement sur votre activité, nous vous proposons de nous confier l'organisation de vos petits-déjeuners, pauses café, déjeuners, etc.",
    options: ["Event planner", "Service premium"],
    image: "/images/other/salle_reunion.jpg",

  },
  {
    id: "location_espace_evenementiel",
    title: "Location espace évènementiel",
    subdescription: "Une occasion particulière ? Réservez une salle.",
    description: [
      "Notre Pack évènement vous permet d'organiser tous vos évènements professionnels à Abidjan.",
      "La Côte d'Ivoire incontournable sur l'échiquier internationale du business vous donne en 2024 la possibilité de vous faire connaître ou de vous développer à travers l'organisation de conférences de presse, lancement de produits, vente privée, cérémonie de dédicace de livre, networking, vernissage, assemblées générales etc… ",
      "Avec sa capacité de 25 à 50 personnes choisissez au sein du coworking abidjanais l'espace qui se prêtera au mieux au format de votre vision.",
      "Bénéficiez d'un espace spacieux, sécurisé par un service de gardiennage agrée. Places de parking disponibles, Cuisine disponible",
    ],
    tarifs: [
      {
        name: "Tarif semaine",
        horraire: "8h-17h et 17h-22h",
        items: [
          { title: "1 Demie journée", price: "45 000 F" },
          { title: "1 Journée", price: "75 000 F" },
          { title: "Soirée", price: "30 000 F" },
        ],
      },
      {
        name: "Tarif samedi et dimanche",
        horraire: "10h-17h",
        items: [
          { title: "1 Demie journée", price: "75 000 F" },
          { title: "1 Journée", price: "90 000 F" },
        ],
      },
    ],
    options: ["10 personnes", "siège ergonomique", "écran de projection", "rétro-projecteur", "support de notes"],
    image: "/images/coworking/Espace Bulle Open space/img (1).jpg",
  },
  {
    id: "location_espace_tournage",
    title: "Location espace tournage",
    subdescription: "Louez un espace décoré pour vos tournages et podcasts.",
    description: [
      "Personal branding, Mise en scène clips vidéo et films, podcast, etc… sont des besoins de notre ère dans le cadre de la communication des activités d'une entreprise ou association.",
      "Un espace unique décoré par des professionnels avec recherche, beaucoup de soin et de finesse, chaque mètre carré, mobilier, objets de décoration est mis à votre disposition pour le temps d'un tournage sur la capitale ivoirienne.",
      "Avec NOVIS coworking, ensemble vers le succès.",
    ],
    tarifs: [
      {
        name: "Tarif samedi et dimanche",
        horraire: "10h-17h",
        items: [
          { title: "1 Demie journée bureau", price: "25 000 F / 30 000 F" },
          { title: "1 Demie journée salon", price: "40 000 F" },
        ],
      },
    ],
    horaires: [{ jours: ["Samedi", "Dimanche"], horaires: ["10h-17h"] }],
    image: "/images/coworking/Espace Bulle Open space/img (1).jpg",
  },
];

export const offres1 = [
  {
    id: "domiciliation_virtuelle_entreprise",
    title: "Domiciliation Virtuelle",
    subdescription: "Choisissez notre adresse pour en faire la vôtre.",
    description: [
      "Dans le cadre de l'immatriculation de votre entreprise au CEPICI pour obtenir une autorisation légale d'exercer votre activité en Côte-d'Ivoire il vous sera nécessaire de disposer d'un siège-social et de vous rattacher par la suite à un centre d'impôts ivoirien.",
      "Novis coworking met à votre disposition une adresse géographique. Grâce à la souscription d'un abonnement annuel vous obtenez un contrat qui vous permettra de compléter votre dossier auprès du notaire, de l'avocat ou l'expert en charge de faire la constitution de votre société à Abidjan.",
    ],
    options: ["Siège social pour vous faire immatriculer", "Adresse physique pour votre entreprise"],
    solutionsTitle:
      "Du CLOUD à l'ECO et au FLEX, choisissez la solution sur-mesure qui vous convient le mieux.",
    solutions: [
      {
        title: "CLOUD",
        icon: "cloud",
      },
      {
        title: "ECONOMIQUE",
        icon: "eco",
      },
      {
        title: "FLEX",
        icon: "flex",
      },
    ],
    image: "/images/coworking/Espace Bulle Open space/img (1).jpg",
    elements: [
      {
        icon: "🏢", // Représentation symbolique d'un bâtiment
        title: "Domiciliation et gestion postale",
        description: "Mise à disposition d’une adresse prestigieuse dans un immeuble neuf accessible et sécurisé",
      },
      {
        icon: "👥", // Représentation symbolique de personnes
        title: "Conciergerie et réservation de salles de réunion",
        description: "Contrat de domiciliation en moins d’une heure",
      },
      {
        icon: "🤝", // Représentation symbolique d'une poignée de main
        title: "Accès aux espaces networking de l'ensemble des parntenaires",
        description: "Mise à disposition de l’adresse pour tous les documents administratifs et commerciaux",
      },
      {
        icon: "📶", // Représentation symbolique du WiFi
        title: "Connexion WiFi symétrique et redondante",
        description: "Permanence téléphonique et accueil physique des visiteurs",
      },
      {
        icon: "☕", // Représentation symbolique d'une tasse de café
        title: "Espace d'accueil et réception",
        description: "Réception de courriers et petits colis",
      },
      {
        icon: "📞", // Représentation symbolique d'un téléphone
        title: "Numéro téléphonique professionnel",
        description: "Accès à un bureau privé pendant 1H et la salle de réunion 1h",
      },
    ],
    bookingLink:'/reservation-domiciliation'
  },
  {
    id: "domiciliation_physique_entreprise",
    title: "Domiciliation physique",
    subdescription:
      "Profitez du confort et de l'ambiance dynamisante de notre espace de coworking.",
    description: [
      "Dans un environnement où le coût de l'immobilier ne fait que s'accroître, il est important en tant qu'investisseur en côte d'ivoire, entrepreneur ou entreprises internationales de trouver des stratégies pour installer l'entreprise à moindre coût.",
      "Novis coworking vous aide à atteindre cet objectif en minimisant vos coûts. Offrez-vous le luxe de bénéficier d'un bureau élégant à Abidjan au sein d'un espace partagé avec une communauté (locaux, expatriés, repats) et bénéficiez d'un large réseau.",
      "2 possibilités s'offrent à vous, le bureau privé ou l'espace open-space",
    ],
    horraires: [
      {
        name: "Du lundi au vendredi",
        horraire: "8h-17h et 17h-22h",
      },
      {
        name: "Samedi",
        horraire: "10h-17h",
      },
      {
        name: "Dimanche",
        horraire: "10h-14h",
      },
    ],
    image: "/images/other/exterieur.jpg",

    elements: [
      {
        icon: "⚡", // Représentation symbolique d'une icône d'électricité
        title: "Charges comprises, travaux et maintenance",
        description: "Coûts de fonctionnement et entretien inclus",
      },
      {
        icon: "🏢", // Représentation symbolique d'un bâtiment
        title: "Domiciliation et gestion postale",
        description: "Service d'adresse professionnelle et gestion du courrier",
      },
      {
        icon: "💻", // Représentation symbolique d'un ordinateur
        title: "Accès ultralarge et vidéosurveillance",
        description: "Connexion internet haut débit et sécurité",
      },
      {
        icon: "👥", // Représentation symbolique de personnes
        title: "Conciergerie et réservation de salles de réunion",
        description: "Services d'assistance et réservation d'espaces",
      },
      {
        icon: "🚲", // Représentation symbolique d'un vélo
        title: "Equipements et services de la communauté",
        description: "Accès aux installations partagées",
      },
      {
        icon: "🤝", // Représentation symbolique d'une poignée de main
        title: "Accès aux espaces networking de l'ensemble des parntenaires",
        description: "Opportunités de réseautage étendues",
      },
      {
        icon: "📶", // Représentation symbolique du WiFi
        title: "Connexion WiFi symétrique et redondante",
        description: "Connectivité internet fiable et rapide",
      },
      {
        icon: "☕", // Représentation symbolique d'une tasse de café
        title: "Espace d'accueil et réception",
        description: "Zone d'accueil professionnelle",
      },
      {
        icon: "📞", // Représentation symbolique d'un téléphone
        title: "Numéro téléphonique professionnel",
        description: "Ligne téléphonique dédiée pour votre entreprise",
      },
    ],
  },
  {
    id: "location_occasionnelle_de_bureaux_meubles",
    title: "Location de bureau",
    subdescription: "Faites comme chez vous !",
    description: [
      "Conscient du fait que toutes les entreprises n'ont pas les mêmes besoins et le même budget nous donnons la possibilité à chacun de pouvoir évoluer à son rythme. A L'heure, à la journée, à la semaine ou au mois venez comme vous êtes.",
      "A chaque bureau son ambiance et son authenticité, choisissez qui vous va à l'instant en fonction de votre humeur pour votre bien être et une meilleure productivité. ",
    ],
    horraires: [
      {
        name: "Du lundi au vendredi",
        horraire: "8h-17h et 17h-22h",
      },
      {
        name: "Samedi",
        horraire: "10h-17h",
      },
    ],
    avantages: [
      {
        title: "PRET A L'EMPLOI",
        detail: "+ imprimante, wifi",
        image: "/images/coworking/Bureaux privés/Bureau prospérité/img1.jpg",
      },
      {
        title: "VALEUR AJOUTEE",
        detail:
          "Gain de crédibilité pour le positionnement de votre entreprise.",
        image: "/images/coworking/Bureaux privés/Bureau confiance/img (2).jpg",
      },
      {
        title: "NOTORIETE",
        detail: "Un règlement en fonction de votre consommation.",
        image:
          "/images/coworking/Bureaux privés/Bureau détermination/img3.jpg",
      },
    ],
    image: "/images/other/bureau_equipe.jpg",
  },
  {
    id: "location_salle_de_reunion",
    title: "Salle de réunion",
    subdescription:
      "Louez une salle de réunion équipée pour vos rencontres professionnelles.",
    description: [
      "Aménagées de manière ergonomique et confortable, notre salle de réunion avec sa capacité de 10 personnes minimum est entièrement équipée pour accueillir vos rencontres professionnelles abidjanaises.",
      "Grâce à son accessibilité c'est l'emplacement rêvé pour organiser vos réunions, vos formations, vos masterclass. Vos convives, collaborateurs, clients ne pourraient être que ravis de cet endroit que nous nommons affectueusement le labo.",
      "Ecrans, paperboard, stylos et accès wifi pour chaque participant.",
    ],
    tarifs: [
      {
        name: "Tarif semaine",
        horraire: "8h-17h et 17h-22h",
        items: [
          { title: "1 Demie journée", price: "30 000 F" },
          { title: "1 Journée", price: "50 000 F" },
          { title: "Soirée", price: "25 000 F" },
        ],
      },
      {
        name: "Tarif samedi",
        horraire: "10h-17h",
        items: [
          { title: "1 Demie journée", price: "45 000 F" },
          { title: "1 Journée", price: "85 000 F" },
        ],
      },
    ],
    optionsSup:
      "Pour vous aider à vous concentrer exclusivement sur votre activité, nous vous proposons de nous confier l'organisation de vos petits-déjeuners, pauses café, déjeuners, etc.",
    options: ["Event planner", "Service premium"],
    image: "/images/other/salle_reunion.jpg",

  },
  {
    id: "location_espace_evenementiel",
    title: "Location espace évènementiel",
    subdescription: "Une occasion particulière ? Réservez une salle.",
    description: [
      "Notre Pack évènement vous permet d'organiser tous vos évènements professionnels à Abidjan.",
      "La Côte d'Ivoire incontournable sur l'échiquier internationale du business vous donne en 2024 la possibilité de vous faire connaître ou de vous développer à travers l'organisation de conférences de presse, lancement de produits, vente privée, cérémonie de dédicace de livre, networking, vernissage, assemblées générales etc… ",
      "Avec sa capacité de 25 à 50 personnes choisissez au sein du coworking abidjanais l'espace qui se prêtera au mieux au format de votre vision.",
      "Bénéficiez d'un espace spacieux, sécurisé par un service de gardiennage agrée. Places de parking disponibles, Cuisine disponible",
    ],
    tarifs: [
      {
        name: "Tarif semaine",
        horraire: "8h-17h et 17h-22h",
        items: [
          { title: "1 Demie journée", price: "45 000 F" },
          { title: "1 Journée", price: "75 000 F" },
          { title: "Soirée", price: "30 000 F" },
        ],
      },
      {
        name: "Tarif samedi et dimanche",
        horraire: "10h-17h",
        items: [
          { title: "1 Demie journée", price: "75 000 F" },
          { title: "1 Journée", price: "90 000 F" },
        ],
      },
    ],
    options: ["10 personnes", "siège ergonomique", "écran de projection", "rétro-projecteur", "support de notes"],
    image: "/images/coworking/Espace Bulle Open space/img (1).jpg",
  },
  {
    id: "location_espace_tournage",
    title: "Location espace tournage",
    subdescription: "Louez un espace décoré pour vos tournages et podcasts.",
    description: [
      "Personal branding, Mise en scène clips vidéo et films, podcast, etc… sont des besoins de notre ère dans le cadre de la communication des activités d'une entreprise ou association.",
      "Un espace unique décoré par des professionnels avec recherche, beaucoup de soin et de finesse, chaque mètre carré, mobilier, objets de décoration est mis à votre disposition pour le temps d'un tournage sur la capitale ivoirienne.",
      "Avec NOVIS coworking, ensemble vers le succès.",
    ],
    tarifs: [
      {
        name: "Tarif samedi et dimanche",
        horraire: "10h-17h",
        items: [
          { title: "1 Demie journée bureau", price: "25 000 F / 30 000 F" },
          { title: "1 Demie journée salon", price: "40 000 F" },
        ],
      },
    ],
    horaires: [{ jours: ["Samedi", "Dimanche"], horaires: ["10h-17h"] }],
    image: "/images/coworking/Espace Bulle Open space/img (1).jpg",
  },
];



export const galeries = [
  {
    id: "evenement_collaboratif",
    title: "Événement Collaboratif",
    subdescription: "Participez à notre événement inspirant.",
    description: [
      "Rejoignez-nous pour une expérience inoubliable au cœur de notre espace de coworking, NOVIS COWORKING. Cet événement exclusif mettra en lumière les opportunités de collaboration et de networking au sein de notre communauté dynamique.",
    ],
    images: [
      {
        src: "/images/galerie/evenements/even1.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even2.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even3.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even4.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even5.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even6.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even7.jpg",
        width: 1037,
        height: 691,

      },
      {
        src: "/images/galerie/evenements/even8.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even9.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even10.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even11.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even12.jpg",
        width: 1037,
        height: 691,
      },
    ],
    image: "/images/coworking/Espace Bulle Open space/img (1).jpg",
  },
  {
    id: "article_de_presse",
    title: "Article de Presse",
    subdescription: "Découvrez les dernières articles de presse.",
    description: [
      "Lisez sur notre espace de coworking à travers des articles de presse qui mettent en avant nos événements et notre communauté.",
      "Ces articles soulignent les initiatives que nous prenons pour favoriser un environnement de travail collaboratif et innovant.",
      "Restez informé des dernières tendances et opportunités dans le monde du coworking.",
    ],
    images: [
      {
        src: "/images/coworking/Bureaux privés/Bureau prospérité/img (1).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau prospérité/img (2).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau prospérité/img (3).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau détermination/img (1).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau détermination/img (2).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau détermination/img (3).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau confiance/img (1).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau confiance/img (2).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau confiance/img (3).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau excellence/img (1).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau excellence/img (2).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau excellence/img (3).jpg",
        width: 1037,
        height: 691,
      },
    ],
    image: "/images/coworking/Espace Bulle Open space/img (1).jpg",
    bookingLink: '/article-de-presse',
  },
  {
    id: "evenement_a_venir",
    title: "Événements à venir",
    subdescription: "Un espace de coworking moderne et lumineux.",
    description: [
      "Un événement qui a rassemblé les passionnés et créé des souvenirs inoubliables !",
    ],
    images: [
      {
        src: "/images/galerie/evenements/even1.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even2.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even3.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even4.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even5.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even6.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even7.jpg",
        width: 1037,
        height: 691,

      },
      {
        src: "/images/galerie/evenements/even8.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even9.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even10.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even11.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/galerie/evenements/even12.jpg",
        width: 1037,
        height: 691,
      },
    ],
    image: "/images/coworking/Espace Bulle Open space/img (1).jpg",
    bookingLink: '/espace-bulle-open-space',
  },
];



export const espaces = [
  {
    id: "private_offices",
    title: "Bureaux privés",
    images: [
      {
        src: "/images/coworking/Bureaux privés/Bureau prospérité/img (1).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau prospérité/img (2).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau prospérité/img (3).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau détermination/img (1).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau détermination/img (2).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau détermination/img (3).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau confiance/img (1).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau confiance/img (2).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau confiance/img (3).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau excellence/img (1).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau excellence/img (2).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Bureaux privés/Bureau excellence/img (3).jpg",
        width: 1037,
        height: 691,
      },
    ],
    adresse:
      "COCODY SAINT VIATEUR, Immeuble Kori près du rond-point de la Y4 entre Nissi assurance et BT mat",
    description: (
      <>
        <p className="text-sm md:text-md mb-2 md:mb-3">
          Installez-vous et faites comme chez vous. La connexion internet est
          disponible et profitez de tout ce dont nous vous mettrons à
          disposition dans votre bureau.
        </p>
        <p className="text-sm md:text-md mb-2 md:mb-3">
          En fonction de la forme de votre installation vous bénéficierez de
          différents services.
        </p>
        <p className="text-lg md:text-xl font-semibold font-saudagar mb-2 md:mb-3">
          NOVIS coworking dans un soucis de bien-être et d&apos;ergonomie a
          pensé à vous offrir différentes ambiances de bureau à louer.
        </p>
      </>
    ),
    options: {
      title: "Nos formules",
      items: [
        {
          title: "Formule OCCASIONNELLE",
          items: [
            "Climatisation",
            "Connexion internet",
            "Meuble de rangement",
            "Sièges visiteurs",
            "Accueil des visiteurs",
            "Service de Nettoyage",
            "Service de sécurité (agence agrée)",
          ],
        },
        {
          title: "Formule MENSUELLE",
          items: [
            "Climatisation",
            "Connexion internet",
            "Meuble de rangement",
            "Sièges visiteurs",
            "Accueil des visiteurs",
            "Service de Nettoyage",
            "Service de sécurité (agence agrée)",
            "Accès salle de réunion",
            "Place de parking privée disponible à la demande",
            "Cuisine",
            "Forfait impression",
            "Kit fourniture",
          ],
        },
      ],
    },
    items: [
      {
        id: "bureau_confiance",
        title: "Bureau confiance",
        images: [
          {
            src: "/images/coworking/Bureaux privés/Bureau confiance/img (1).jpg",
            width: 1037,
            height: 691,
          },
          {
            src: "/images/coworking/Bureaux privés/Bureau confiance/img (2).jpg",
            width: 1037,
            height: 691,
          },
          {
            src: "/images/coworking/Bureaux privés/Bureau confiance/img (3).jpg",
            width: 1037,
            height: 691,
          },
        ],
        adresse:
          "COCODY SAINT VIATEUR, Immeuble Kori près du rond-point de la Y4 entre Nissi assurance et BT mat",
        description: (
          <>
            <p className="text-sm md:text-md mb-2 md:mb-3">
              Disposez de ce lieu serein pour y travailler. Plusieurs
              possibilités s&apos;offrent à vous. Profitez de celle qui vous
              convient le mieux.
            </p>
          </>
        ),
        options: [
          "Climatisation",
          "Connexion internet",
          "Meuble de rangement",
          "Sièges visiteurs",
          "Accueil de vos visiteurs",
          "Superficie de 6 m2",
        ],
        tarifs: [
          {
            name: "Tarif semaine",
            items: [
              { title: "1 Heure", price: "2500 F" },
              { title: "1 Demie journée", price: "5000 F" },
            ],
          },
          {
            name: "Tarif week-end",
            items: [
              { title: "1 Heure", price: "5000 F" },
              { title: "1 Demie journée", price: "10 000 F" },
            ],
          },
          {
            name: "Tarif mensuel",
            items: [
              { title: "1 Mois", price: "220 000 F" },
              {
                title: "à partir de 3 Mois",
                price: "190 000 F",
                description: "caution de 1 mois à prévoir",
              },
            ],
          },
        ],
      },
      {
        id: "bureau_determination",
        title: "Bureau détermination",
        images: [
          {
            src: "/images/coworking/Bureaux privés/Bureau détermination/img (1).jpg",
            width: 1037,
            height: 691,
          },
          {
            src: "/images/coworking/Bureaux privés/Bureau détermination/img (2).jpg",
            width: 1037,
            height: 691,
          },
          {
            src: "/images/coworking/Bureaux privés/Bureau détermination/img (3).jpg",
            width: 1037,
            height: 691,
          }
        ],
        adresse:
          "COCODY SAINT VIATEUR, Immeuble Kori près du rond-point de la Y4 entre Nissi assurance et BT mat",
        description: (
          <>
            <p className="text-sm md:text-md mb-2 md:mb-3">
              C&apos;est peu dire que la détermination vous accompagnera dans
              cet environnement boosté par une communauté d&apos;entrepreneur
              aussi désireux de réussir comme vous.
            </p>
          </>
        ),
        options: [
          "Climatisation",
          "Connexion internet",
          "Meuble de rangement",
          "Sièges visiteurs",
          "Accueil de vos visiteurs",
          "Superficie de 10m2",
        ],
        tarifs: [
          {
            name: "Tarif semaine",
            items: [
              { title: "1 Heure", price: "5000 F" },
              { title: "1 Demie journée", price: "7000 F" },
            ],
          },
          {
            name: "Tarif week-end",
            items: [
              { title: "1 Heure", price: "7000 F" },
              { title: "1 Demie journée", price: "15 000 F" },
            ],
          },
          {
            name: "Tarif mensuel",
            items: [
              { title: "1 Mois", price: "250 000 F" },
              {
                title: "à partir de 3 Mois",
                price: "230 000 F",
                description: "caution de 1 mois à prévoir",
              },
            ],
          },
        ],
      },
      {
        id: "bureau_prosperite",
        title: "Bureau prospérité",
        images: [
          {
            src: "/images/coworking/Bureaux privés/Bureau prospérité/img (1).jpg",
            width: 1037,
            height: 691,
          },
          {
            src: "/images/coworking/Bureaux privés/Bureau prospérité/img (2).jpg",
            width: 1037,
            height: 691,
          },
          {
            src: "/images/coworking/Bureaux privés/Bureau prospérité/img (3).jpg",
            width: 1037,
            height: 691,
          },
        ],
        adresse:
          "COCODY SAINT VIATEUR, Immeuble Kori près du rond-point de la Y4 entre Nissi assurance et BT mat",
        description: (
          <>
            <p className="text-sm md:text-md mb-2 md:mb-3">
              Dans une atmosphère sérieuse et une décoration qui impose le
              respect ce cadre s&apos;aligne avec vos ambitions. Recevez vos
              clients, fournisseurs et partenaires au sein de ce fabuleux espace
              de coworking.
            </p>
          </>
        ),
        options: [
          "Climatisation",
          "Connexion internet",
          "Meuble de rangement",
          "Sièges visiteurs",
          "Accueil de vos visiteurs",
          "Superficie de 10m2",
        ],
        tarifs: [
          {
            name: "Tarif semaine",
            items: [
              { title: "1 Heure", price: "5000 F" },
              { title: "1 Demie journée", price: "7000 F" },
            ],
          },
          {
            name: "Tarif week-end",
            items: [
              { title: "1 Heure", price: "7000 F" },
              { title: "1 Demie journée", price: "15 000 F" },
            ],
          },
          {
            name: "Tarif mensuel",
            items: [
              { title: "1 Mois", price: "250 000 F" },
              {
                title: "à partir de 3 Mois",
                price: "230 000 F",
                description: "caution de 1 mois à prévoir",
              },
            ],
          },
        ],
      },
      {
        id: "bureau_excellence",
        title: "Bureau excellence",
        images: [
          {
            src: "/images/coworking/Bureaux privés/Bureau excellence/img (1).jpg",
            width: 1037,
            height: 691,
          },
          {
            src: "/images/coworking/Bureaux privés/Bureau excellence/img (2).jpg",
            width: 1037,
            height: 691,
          },
          {
            src: "/images/coworking/Bureaux privés/Bureau excellence/img (3).jpg",
            width: 1037,
            height: 691,
          },
        ],
        adresse:
          "COCODY SAINT VIATEUR, Immeuble Kori près du rond-point de la Y4 entre Nissi assurance et BT mat",
        description: (
          <>
            <p className="text-sm md:text-md mb-2 md:mb-3">
              A l&apos;image des grands chefs d&apos;entreprises de notre
              écosystème d&apos;entrepreneurs en côte d&apos;ivoire vous pouvez
              y séjourner en fonction des besoins de votre entreprise. Seul(e)
              ou avec un collaborateur, nous vous y attendons.{" "}
            </p>
          </>
        ),
        options: [
          "Climatisation",
          "Connexion internet",
          "Meuble de rangement",
          "Sièges visiteurs",
          "Accueil de vos visiteurs",
          "Superficie de 12m2",
        ],
        tarifs: [
          {
            name: "Tarif semaine",
            items: [
              { title: "1 Heure", price: "8000 F" },
              { title: "1 Demie journée", price: "15 000 F" },
            ],
          },
          {
            name: "Tarif week-end",
            items: [
              { title: "1 Heure", price: "10 000 F" },
              { title: "1 Demie journée", price: "20 000 F" },
            ],
          },
          {
            name: "Tarif mensuel",
            items: [
              { title: "1 Mois", price: "350 000 F" },
              {
                title: "à partir de 3 Mois",
                price: "320 000 F",
                description: "caution de 1 mois à prévoir",
              },
            ],
          },
        ],
      },
      {
        id: "bureau_sérénité",
        title: "Bureau sérénité",
        images: [
          {
            src: "/images/coworking/Bureaux privés/Bureau sérénité/img (1).jpg",
            width: 1037,
            height: 691,
          },
          {
            src: "/images/coworking/Bureaux privés/Bureau sérénité/img (2).jpg",
            width: 1037,
            height: 691,
          },
          {
            src: "/images/coworking/Bureaux privés/Bureau sérénité/img (3).jpg",
            width: 1037,
            height: 691,
          },
        ],
        adresse:
          "COCODY SAINT VIATEUR, Immeuble Kori près du rond-point de la Y4 entre Nissi assurance et BT mat",
        description: (
          <>
            <p className="text-sm md:text-md mb-2 md:mb-3">
              Cette bulle vous apportera une grande concentration. Laissez-vous
              inspirer et guider.
            </p>
          </>
        ),
        options: [
          "Climatisation",
          "Connexion internet",
          "Meuble de rangement",
          "Sièges visiteurs",
          "Accueil de vos visiteurs",
          "Superficie de 13 m2",
        ],
        tarifs: [
          {
            name: "Tarif semaine",
            items: [
              { title: "1 Heure", price: "7000 F" },
              { title: "1 Demie journée", price: "12 000 F" },
              { title: "La journée", price: "25 000 F" },
            ],
          },
          {
            name: "Tarif week-end",
            items: [
              { title: "1 Heure", price: "7000 F" },
              { title: "1 Demie journée", price: "15 000 F" },
            ],
          },
          {
            name: "Tarif mensuel",
            items: [
              { title: "1 Mois", price: "290 000 F" },
              {
                title: "à partir de 3 Mois",
                price: "250 000 F",
                description: "caution de 1 mois à prévoir",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "open_space",
    title: "Open space",
    adresse:
      "COCODY SAINT VIATEUR, Immeuble Kori près du rond-point de la Y4 entre Nissi assurance et BT mat",
    images: [
      {
        src: "/images/coworking/Espace Bulle Open space/img (1).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Espace Bulle Open space/img (2).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Espace Bulle Open space/img (3).jpg",
        width: 1037,
        height: 691,
      },
    ],
    description: (
      <>
        <p className="text-sm md:text-md mb-2 md:mb-3">
          Retrouvez Novis à Villeneuve d&apos;Ascq, à proximité immédiate du
          Parc de la Haute Borne.
        </p>

        <p className="text-sm md:text-md mb-2 md:mb-3">
          Novis Lille Villeneuve d&apos;Ascq prend place dans un complexe prime
          écoresponsable, labellisé WELL niveau Silver, à deux pas du Stade
          Pierre Mauroy, du centre commercial Héron Parc et des nombreuses
          boutiques du centre commercial V2.
        </p>

        <p className="text-sm md:text-md mb-2 md:mb-3">
          Novis Lille Villeneuve d&apos;Ascq s&apos;étend sur plus de 2 400 m²
          répartis sur 3 étages. Idéalement situé, il est desservi par la ligne
          de métro 1 (station 4 Cantons), qui permet de rallier le centre-ville
          de Lille et la gare SNCF de Lille-Flandres en 15 minutes.
          L&apos;aéroport de Lille Lesquin est, quant à lui, accessible en 10
          minutes en voiture.
        </p>

        <p className="text-sm md:text-md mb-2 md:mb-3">
          Le centre dispose de 213 postes équipés, de 3 salles de réunion,
          d&apos;1 espace événementiel privatisable et de 300 m² d&apos;espaces
          de coworking.
        </p>
      </>
    ),
  },
  {
    id: "meeting_room",
    title: "Salle de réunion",
    adresse:
      "COCODY SAINT VIATEUR, Immeuble Kori près du rond-point de la Y4 entre Nissi assurance et BT mat",
    tarifs: [
      {
        name: "Tarif semaine",
        items: [
          { title: "1 Heure", price: "10 000 F" },
          { title: "1 Demie journée", price: "30 000 F" },
          { title: "1 Journée", price: "50 000 F" },
        ],
      },
      {
        name: "Tarif week-end",
        items: [
          { title: "1 Heure", price: "15 000 F" },
          { title: "1 Demie journée", price: "50 000 F" },
          { title: "1 Journée", price: "100 000 F" },
        ],
      },
      {
        name: "Tarif mensuel (en semaine)",
        items: [
          { title: "4 Heure / Mois", price: "25 000 F" },
          { title: "4 Demie journée / Mois", price: "110 000 F" },
          { title: "4 journées / Mois", price: "200 000 F" },
        ],
      },
    ],
    images: [
      {
        src: "/images/coworking/Salle de réunion/img (1).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Salle de réunion/img (2).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Salle de réunion/img (3).jpg",
        width: 1037,
        height: 691,
      },
    ],
    description: (
      <>
        <p className="text-sm md:text-md mb-2 md:mb-3">
          Vous souhaitez pouvoir recevoir du monde afin d&apos;y organiser des
          réunions ? NOVIS coworking vous donne la possibilité de pouvoir louer
          cette salle de réunion moderne dans Abidjan
        </p>
        <p className="text-sm md:text-md mb-2 md:mb-3">
          Que cela se fasse avec vos collaborateurs, vos prestataires et/ou vos
          clients, vous disposez de cet espace de{" "}
          <span className="font-bold">20 m2</span>. Ce lieu de réflexion peut
          accueillir <span className="font-bold"> 10 voir 14 personnes</span> si
          nécessité de rallonge.
        </p>
        <p className="text-sm md:text-md mb-2 md:mb-3">
          Aménagé de manière ergonomique et confortable votre salle est
          entièrement équipée pour s&apos;adapter à vos besoins : écrans,
          rétro-projecteurs, paperboard, stylos etc…
        </p>
        <p className="text-sm md:text-md mb-2 md:mb-3">
          Evidemment nous préparons la salle réservée en fonction du nombre de
          participants attendus. Et pour vous aider à vous consacrer
          exclusivement à votre activité vous avez le choix de nous confier
          l&apos;organisation de{" "}
          <span className="font-bold">
            vos petits déjeuners, pause-café, déjeuners.
          </span>
        </p>
        <p className="text-lg md:text-xl font-semibold font-saudagar mb-2 md:mb-3">
          Pour une gestion plus fluide de vos réunions. Optez pour le « le LABO
          » de NOVIS Coworking.
        </p>
      </>
    ),
  },
  {
    id: "common_space",
    title: "Espace commun",
    adresse:
      "COCODY SAINT VIATEUR, Immeuble Kori près du rond-point de la Y4 entre Nissi assurance et BT mat",
    tarifs: [
      {
        name: "Tarif soirée",
        items: [{ title: "18H - 00H / hall", price: "40 000 F" }],
      },
      {
        name: "Tarif week-end",
        items: [{ title: "18H - 00H / hall", price: "70 000 F" }],
      },
    ],
    images: [
      {
        src: "/images/other/hall bulle 2.jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Espace commun/img (1).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Espace commun/img (2).jpg",
        width: 1037,
        height: 691,
      },
      {
        src: "/images/coworking/Espace commun/img (3).jpg",
        width: 1037,
        height: 691,
      },
    ],

    description: (
      <>
        <p className="text-sm md:text-md mb-2 md:mb-3">
          Les espaces commun ou espaces de vie, sont des espaces de grandes
          convivialités pouvant servir également à différents types
          d&apos;évènements comme{" "}
          <span className="font-bold">
            soirée networking, apéro business, expositions, ventes, talks-show,
            tournages poadcast, interviews etc…
          </span>
        </p>
        <p className="text-sm md:text-md mb-2 md:mb-3">
          Ce lieu se prête à la réalisation de tous vos projets commerciaux,
          artistiques et de communication.
        </p>
        <p className="text-sm md:text-md mb-2 md:mb-3">
          Nous vous invitons à organiser des évènements flexibles dans un lieu
          spacieux dynamique au cœur des quartiers Saint Viateur à Cocody. Le
          premier espace de coworking du secteur à Abidjan considéré comme le
          meilleur selon une enquête récente.
        </p>
        <p className="text-lg md:text-xl font-semibold font-saudagar mb-2 md:mb-3">
          Le plus de NOVIS coworking qui fait toute la différence, c&apos;est un
          accès 7 jours sur 7 et de 8h00 à 22h00.
        </p>
      </>
    ),
  },
];


export type Formula = {
  name: string;
  price: number;
  tarif: string;
  period: string;
  paymentDetails: string;
  benefits: string;
  image: string;
  color:string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
};

export const formulas: Formula[] = [
  {
    name: "CLOUD",
    price: 240000,
    tarif: "240,000 F / l'an",
    period: "1 year",
    paymentDetails: "Le paiement s’effectue en une fois à la souscription et sans caution.",
    benefits: "1 heure en Bureau Privé et 1 heure en salle de réunion par mois.",
    image: "/images/domi_cloud/Visuel formule CLOUD_.png",
    color:'text-novis_orange',
    contact: {
      phone: "+225 01 43 44 86 86",
      email: "info@noviscoworking.com",
      address: "Cocody Saint Viateur, près du Nouveau Rond Point.",
    },
  },
  {
    name: "ECO",
    price: 300000,
    tarif: "300,000 F / en 2 fois",
    period: "6 month",
    paymentDetails: "Le 1er règlement à la souscription et le 2ème après 6 mois + 1 mois de caution en garantie.",
    benefits: "1 heure en Bureau Privé et 1 heure en salle de réunion par mois.",
    image: "/images/domi_cloud/Visuel formule ECO.png",
    color:'text-novis_yellow',
    contact: {
      phone: "+225 01 43 44 86 86",
      email: "info@noviscoworking.com",
      address: "Cocody Saint Viateur, près du Nouveau Rond Point.",
    },
  },
  {
    name: "FLEX",
    price: 30000,
    tarif: "30,000 F / mois",
    period: "1 month",
    paymentDetails: "2 mois de caution + 2 mois d’avance à régler lors de la souscription.",
    benefits: "1 heure en Bureau Privé et 1 heure en salle de réunion par mois.",
    image: "/images/domi_cloud/Visuel formule FLEX.png",
    color:'text-novis_green',
    contact: {
      phone: "+225 01 43 44 86 86",
      email: "info@noviscoworking.com",
      address: "Cocody Saint Viateur, près du Nouveau Rond Point.",
    },
  },
];