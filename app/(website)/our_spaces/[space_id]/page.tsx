import React from 'react';
import Hero from "@/components/space/Hero";
import Description from "@/components/space/Description";
import { espaces } from '@/config/data';

export default async function SpacePage({ params }: { params: { space_id: string } }) {
    const { space_id } = await params; // Attendre params ici
    const space = espaces.find((espace) => espace.id === space_id); // Utiliser === pour une comparaison stricte

    return (
        <div>
            <Hero space={space} />
            <Description space={space} />
        </div>
    );
}