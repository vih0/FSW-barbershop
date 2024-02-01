import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./_components/BarbershopInfo";
import ServiceItem from "./_components/ServiceItem";

type BarbershopsDetailsProps = {
  params: {
    id?: string;
  };
};
const BarbershopDetailsPage = async ({ params }: BarbershopsDetailsProps) => {
  if (!params.id) {
    // TODO: redirecionar para home
    return null;
  }
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });
  if (!barbershop) {
    // TODO: redirecionar para home
    return null;
  }
  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
export default BarbershopDetailsPage;
