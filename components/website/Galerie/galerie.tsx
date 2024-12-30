import * as React from "react"
import ServicesGalerie from "./servicesGalerie"

export default function Solutions() {
    return (
        <section id="showcase" className="container px-2 md:px-8 py-14">
            <h2 className="text-novis_yellow mb-2 text-center font-medium text-2xl md:text-4xl tracking-tight font-saudagar">
            Les photos des événements.
            </h2>
            <ServicesGalerie />
        </section>

    )
}
