import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Service } from '@prisma/client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

type ServiceItemProps = {
  service: Service
  isAuthenticated?: boolean
}
const ServiceItem = ({ service, isAuthenticated }: ServiceItemProps) => {
  const handleBookingClick = () => {
    if (!isAuthenticated) {
      return signIn('google')
    }
  }
  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex gap-4">
          <div className="relative h-[110px] w-[110px]">
            <Image
              src={service.imageUrl}
              alt={service.name}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="font-bold">{service.name}</h1>
            <p className="text-sm text-gray-400">{service.description}</p>
            <div className="flex items-center justify-between mt-3">
              <p className="text-primary font-bold">
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(Number(service.price))}
              </p>
              <Button variant="secondary" onClick={handleBookingClick}>
                Agendar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default ServiceItem
