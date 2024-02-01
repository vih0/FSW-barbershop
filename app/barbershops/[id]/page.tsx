import { db } from "@/app/_lib/prisma";

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
      <h1>{barbershop.name}</h1>
    </div>
  );
};
export default BarbershopDetailsPage;
