import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";

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
  });
  if (!barbershop) {
    // TODO: redirecionar para home
    return null;
  }
  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          size="icon"
          variant="outline"
          className="z-50 absolute top-4 left-4"
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="z-50 absolute top-4 right-4"
        >
          <HamburgerMenuIcon />
        </Button>
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <MapPinIcon className="stroke-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarIcon className="stroke-primary" size={18} />
          <p className="text-sm">5,0 (899 avaliações)</p>
        </div>
      </div>
    </div>
  );
};
export default BarbershopDetailsPage;
