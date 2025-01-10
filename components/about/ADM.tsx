// app/(website)/adm/page.tsx

import TitleSection from '@/components/title-section';
import React from 'react';
import Image from 'next/image'; // Importer Image ici
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function ADM() {
    return (
        <section className="container min-h-[300px] py-14 relative">
            <TitleSection title='NOTRE ADN' />

            <div className="relative py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="relative isolate grid lg:grid-cols-2 items-center gap-y-10 lg:gap-y-6 gap-x-12 lg:gap-x-12">
                    <div className="relative self-stretch w-full max-w-full lg:max-w-[598px]">
                        <div className="relative h-full col-span-1 row-span-1">
                            <div className="absolute skew-y-12 bottom-8 md:bottom-16 top-0 left-0 right-0 bg-novis_orange rounded-3xl shadow-2xl" />
                            <div className="relative flex justify-center items-center h-full z-[1] pt-8 px-8">
                                <div className="w-full sm:max-w-[80%] md:max-w-[60%] border-2 shadow-2xl rounded-2xl lg:rounded-3xl border-white relative top-auto bottom-auto mx-auto flex justify-center flex-col">
                                    <Image
                                        alt="App screenshot"
                                        src="/images/coworkers/coworker (4).jpg"
                                        className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
                                        width={500} // Spécifier la largeur
                                        height={300} // Spécifier la hauteur
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-left mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 text-custom-justify">
                            NOVIS coworking est un tiers lieu à la disposition de l&apos;écosystème entrepreneurial ivoirien fondé en 2024 par Edyeh ANOUMAN KACOU, experte en organisation professionnelle et valorisation clientèle.
                            Spécialiste des espaces de coworking en Côte d&apos;Ivoire depuis 2019, elle a œuvré pour installer et populariser cette nouvelle méthode d&apos;organisation de travail.
                            Promotrice du vivre ensemble, de l&apos;intelligence collective, du sens du partage, de l&apos;équité et du leadership, c&apos;est avec beaucoup de plaisir et de passion qu&apos;elle continue à vivre son retour en terre ivoirienne avec cet espace confortable, chaleureux où chacun de ses utilisateurs pourra y mener à bien ses activités.
                        </p>
                    </div>
                    <GridPattern
                        squares={[
                            [2, 2],
                            [3, 1],
                            [4, 1],
                            [2, 1],
                            [3, 3],
                            [5, 5],
                            [6, 8],
                            [8, 5],
                            [5, 4],
                            [4, 5],
                            [5, 4],
                            [4, 5],
                        ]}
                        className={cn(
                            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                            "inset-x-0 inset-y-[-30%] h-full skew-y-12",
                        )}
                    />
                </div>
                <dl className="col-span-2 mt-16 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div className="relative pl-6 md:pl-16 row-span-2">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute -left-4 -top-8 flex h-8 w- md:h-10 w-md:10 items-center justify-center rounded-lg bg-novis_green"></div>
                            Quelles sont les raisons qui vous motivent à vous investir dans ce secteur MME ANOUMAN KACOU ?
                        </dt>
                        <dd className="mt-2 text-sm leading-7 text-gray-600 text-custom-justify">
                            Tout simplement parce qu'avant d'avoir mon cabinet à Paris, j'étais une fidèle cliente des espaces de coworking. Très investie dans le monde associatif de la diaspora en France, nous avons l'habitude d'utiliser ces espaces collaboratifs pour y mener nos activités, et c'est une formule qui a bien fonctionné dans les deux cadres. En constatant que c'était méconnu, j'ai pris le risque de l'installer ici, sensibiliser et changer les habitudes des entrepreneurs ivoiriens.
                        </dd>
                        <dd className="mt-2 text-sm leading-7 text-gray-600 text-custom-justify">
                            J'ai envie que les entrepreneurs ivoiriens apprennent à travailler ensemble. Certes, il y a des associations qui ne fonctionnent pas, mais la vie est ainsi faite. Essayons encore et encore jusqu'à trouver la bonne personne. On apprend des mauvaises expériences.
                        </dd>
                        <dd className="mt-2 text-sm leading-7 text-gray-600 text-custom-justify">
                            Je souhaite dire que « La Famille, ce n'est pas seulement une question de sang ». De par mon expérience, je constate que les inconnus sont généralement beaucoup plus prêts à miser sur vous que des membres de votre famille.
                        </dd>
                    </div>
                    <div className="relative pl-6 md:pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute -left-4 -top-8 flex h-8 w- md:h-10 w-md:10 items-center justify-center rounded-lg bg-novis_green"></div>
                            Avez-vous un conseil aux jeunes entrepreneurs ivoiriens qui souhaitent entreprendre ?
                        </dt>
                        <dd className="mt-2 text-sm leading-7 text-gray-600 text-custom-justify">
                            L'État ne nous donnera pas de financement, ils ont besoin de notre argent pour financer les projets du pays. Si vous avez détecté un besoin, organisez-vous, économisez, formez-vous et lancez-vous.
                        </dd>
                    </div>
                    <div className="relative pl-6 md:pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute -left-4 -top-8 flex h-8 w- md:h-10 w-md:10 items-center justify-center rounded-lg bg-novis_green"></div>
                            Avez-vous un conseil pour des entrepreneurs ou entreprises occidentales qui souhaitent s&apos;installer en Côte d&apos;Ivoire ?
                        </dt>
                        <dd className="mt-2 text-sm leading-7 text-gray-600 text-custom-justify">
                            La Côte d'Ivoire est effectivement un pays hospitalier et plein d'opportunités business MAIS il est primordial de prendre du recul face à cette effervescence. Un bon et long moment de réflexion est nécessaire ; s'octroyer une période test sur le territoire car beaucoup de paramètres sont à prendre en compte. L'AFRIQUE, c'est une autre manière de vivre au-delà de son apparence de modernité. Les habitudes, les pensées et le fonctionnement sont différents. Trouver le bon partenaire est capital pour vivre une belle expérience en Côte d'Ivoire, et je me propose de vous y accompagner volontiers.
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}