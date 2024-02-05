import { db } from '@/app/_lib/prisma'
import BarbershopInfo from './_components/BarbershopInfo'
import ServiceItem from './_components/ServiceItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

type BarbershopsDetailsProps = {
  params: {
    id?: string
  }
}
const BarbershopDetailsPage = async ({ params }: BarbershopsDetailsProps) => {
  const session = await getServerSession(authOptions)
  if (!params.id) {
    // TODO: redirecionar para home
    return null
  }
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })
  if (!barbershop) {
    // TODO: redirecionar para home
    return null
  }
  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop.services.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            isAuthenticated={!!session?.user}
          />
        ))}
      </div>
    </div>
  )
}
export default BarbershopDetailsPage
