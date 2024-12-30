"use client";

import { useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { espaces } from "@/config/data";

export default function Content() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");
  const groupId = searchParams.get("groupId");
  const spaceId = searchParams.get("spaceId");
  const dates = searchParams.get("dates")?.split(",");
  const amount = searchParams.get("amount");
  const tarif = searchParams.get("tarif");

  const group = espaces.find((e) => e.id === groupId);
  const space = group?.items
    ? group?.items?.find((i) => i.id === spaceId)
    : group;

  const formatDates = (dates: string[] | undefined) => {
    if (!dates) return "";
    if (dates[0].length === 7) {
      // Monthly format
      return dates.map((d) => dayjs(d).format("MMMM YYYY")).join(", ");
    } else {
      return dates.map((d) => dayjs(d).format("DD MMMM YYYY")).join(", ");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Récapitulatif de votre{" "}
        {type === "payment" ? "paiement" : "demande de réservation"}
      </h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Informations personnelles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Nom :</strong> {name}
            </div>
            <div>
              <strong>Email :</strong> {email}
            </div>
            <div>
              <strong>Téléphone :</strong> {phone}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Détails de la réservation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Catégorie :</strong> {group?.title}
            </div>
            <div>
              <strong>Espace :</strong> {space?.title}
            </div>
            <div>
              <strong>Dates :</strong> {formatDates(dates)}
            </div>
            {type === "payment" && (
              <>
                <div>
                  <strong>Tarif :</strong> {tarif}
                </div>
                <div>
                  <strong>Montant :</strong> {amount} FCFA
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
      <div className="text-center">
        {type === "payment" ? (
          <p className="text-green-600 font-semibold">
            Votre paiement a été effectué avec succès et une facture vous a été
            envoyée par email.
          </p>
        ) : (
          <p className="text-novis_green font-semibold">
            Votre demande de réservation a été envoyée avec succès. Nous vous
            contacterons bientôt.
          </p>
        )}
      </div>
    </div>
  );
}