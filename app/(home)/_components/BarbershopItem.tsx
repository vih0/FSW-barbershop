"use client";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";

import { StarIcon, StarsIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type BarbershopItemProps = {
  barbershop: Barbershop;
};
const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  const router = useRouter();
  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  };
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-0 py-0">
        <div className="w-full h-[159px] relative">
          <Badge
            variant="secondary"
            className="flex items-center justify-center gap-1 absolute top-2 left-3 z-50 opacity-90"
          >
            <StarIcon size={12} className="fill-primary text-primary mb-0.5" />
            <span className="text-xs">5,0</span>
          </Badge>
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            style={{
              objectFit: "cover",
            }}
            fill
            className="h-[159px] w-full rounded-2xl"
          />
        </div>
        <div className="px-3 pb-2">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button
            variant="secondary"
            className="w-full mt-3"
            onClick={handleBookingClick}
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default BarbershopItem;
