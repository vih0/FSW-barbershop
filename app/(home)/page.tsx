import Image from "next/image";
import { format } from "date-fns";
import Header from "../_components/Header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/Search";
import Bookingitem from "../_components/BookingItem";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/BarbershopItem";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Ola,Miguel</h2>
        <p className="text-sm">
          {format(Date(), "EEEE',' d 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-sm uppercase text-gray-400 mb-3">Agendamentos</h2>
        <Bookingitem />
      </div>
      <div className="mt-6 px-5">
        <h2 className="text-sm uppercase text-gray-400 mb-3">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <div className="mt-6 px-5">
        <h2 className="text-sm uppercase text-gray-400 mb-3">Populares</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
