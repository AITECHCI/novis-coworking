import TitleSection from '@/components/title-section';
import React from 'react';
import { BorderBeam } from "@/components/magicui/border-beam";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Link from "next/link";
import Image from 'next/image';  // Assurez-vous d'importer Image de next/image
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DescriptionAllSpaces() {
    return (
        <section className="container min-h-[300px] py-14 relative">
            <TitleSection title={"Nos différents espaces situés à Cocody"} />

            <div className="relative gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Image 
                    className="w-full" 
                    src="/images/coworking/Bureaux%20priv%C3%A9s/Bureau%20confiance/img%20(1).jpg" 
                    alt="image de bureau" 
                    width={800} // Ajoutez la largeur
                    height={500} // Ajoutez la hauteur
                />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-saudagar">Bureaux privés</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        Installez-vous et faites comme chez vous. La connexion internet est disponible et profitez de tout ce dont nous vous mettrons à disposition dans votre bureau. <br />
                        En fonction de la forme de votre installation, vous bénéficierez de différents services.
                    </p>
                    <Link
                        className={cn(
                            buttonVariants({ size: "sm" }),
                            "max-w-52 gap-2 overflow-hidden whitespace-pre",
                            "group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                        )}
                        href={`/our_spaces/private_offices`}
                    >
                        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
                        <div className="flex items-center">
                            <span className="ml-1 text-sm sm:text-md">Savoir plus</span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="relative flex flex-col-reverse md:gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-saudagar">Open space</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        Retrouvez Novis à Villeneuve d&apos;Ascq, à proximité immédiate du Parc de la Haute Borne. <br />
                        Novis Lille Villeneuve d&apos;Ascq prend place dans un complexe prime écoresponsable, labellisé WELL niveau Silver, à deux pas du Stade Pierre Mauroy, du centre commercial Héron Parc et des nombreuses boutiques du centre commercial V2.
                    </p>
                    <Link
                        className={cn(
                            buttonVariants({ size: "sm" }),
                            "max-w-52 gap-2 overflow-hidden whitespace-pre",
                            "group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                        )}
                        href={`/our_spaces/open_space`}
                    >
                        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
                        <div className="flex items-center">
                            <span className="ml-1 text-sm sm:text-md">Savoir plus</span>
                        </div>
                    </Link>
                </div>
                <Image 
                    className="w-full" 
                    src="/images/coworking/Espace%20Bulle%20Open%20space/img%20(1).jpg" 
                    alt="image de open space" 
                    width={800} // Ajoutez la largeur
                    height={500} // Ajoutez la hauteur
                />
            </div>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Image 
                    className="w-full" 
                    src="/images/coworking/Salle de réunion/img (1).jpg" 
                    alt="image de salle de réunion" 
                    width={800} // Ajoutez la largeur
                    height={500} // Ajoutez la hauteur
                />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-saudagar">Salle de réunion</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        Vous souhaitez pouvoir recevoir du monde afin d&apos;y organiser des réunions ? NOVIS coworking vous donne la possibilité de pouvoir louer cette salle de réunion moderne à Abidjan. <br />
                        Que cela se fasse avec vos collaborateurs, vos prestataires et/ou vos clients, vous disposez de cet espace de <span className="font-bold">20 m²</span>. Ce lieu de réflexion peut accueillir <span className="font-bold">10 à 14 personnes</span> si une rallonge est nécessaire.
                    </p>
                    <Link
                        className={cn(
                            buttonVariants({ size: "sm" }),
                            "max-w-52 gap-2 overflow-hidden whitespace-pre",
                            "group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                        )}
                        href={`/our_spaces/meeting_room`}
                    >
                        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
                        <div className="flex items-center">
                            <span className="ml-1 text-sm sm:text-md">Savoir plus</span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="relative flex flex-col-reverse md:gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-saudagar">Espace commun</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        Les espaces communs, ou espaces de vie, sont des lieux de grande convivialité pouvant également servir à différents types d&apos;événements tels que <span className="font-bold">soirées networking, apéros business, expositions, ventes, talks-show, tournages de podcast, interviews, etc.</span> <br />
                        Ce lieu se prête à la réalisation de tous vos projets commerciaux, artistiques et de communication.
                    </p>
                    <Link
                        className={cn(
                            buttonVariants({ size: "sm" }),
                            "max-w-52 gap-2 overflow-hidden whitespace-pre",
                            "group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                        )}
                        href={`/our_spaces/common_space`}
                    >
                        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
                        <div className="flex items-center">
                            <span className="ml-1 text-sm sm:text-md">Savoir plus</span>
                        </div>
                    </Link>
                </div>
                <Image 
                    className="w-full" 
                    src="/images/coworking/Espace%20commun/img%20(1).jpg" 
                    alt="image d'espace commun" 
                    width={800} // Ajoutez la largeur
                    height={500} // Ajoutez la hauteur
                />
            </div>

            {/* Extrait commenté */}
            {/* <div className="bg-black">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="mt-4 md:mt-0 text-white">
                        <h2 className="text-novis_yellow mb-4 text-2xl md:text-4xl tracking-tight font-saudagar">We didn't reinvent the wheel</h2>
                        <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <Image className="w-full rounded-lg row-span-2" src="/images/coworking/Bureaux privés/Bureau prospérité/Bureau Prospérité 2.jpg" alt="office content 1" />
                        <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/images/coworking/Bureaux privés/Bureau détermination/IMG_5236[1].jpg" alt="office content 2" />
                        <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/images/coworking/Bureaux privés/Bureau détermination/IMG_5236[1].jpg" alt="office content 2" />
                    </div>
                </div>
            </div> */}

            <AnimatedGridPattern
                numSquares={50}
                maxOpacity={0.1}
                duration={2}
                repeatDelay={1}
                className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 w-full h-[100%]"
            />
        </section>
    );
}