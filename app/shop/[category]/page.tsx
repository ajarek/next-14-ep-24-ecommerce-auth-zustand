import { getAllProducts } from '@/lib/getProducts'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

const page = async ({ params }: { params: { category: string } }) => {
  const { category } = params
  const products = await getAllProducts()
  const array = products.filter((el) => el.category === category)
  return (
    <div className='flex min-h-screen flex-col items-start justify-between p-8 max-md:p-4'>
      <ul className='w-full grid grid-cols-3 max-md:grid-cols-1 gap-6 '>
        {array.map((item) => (
          <li key={item._id}>
            <Link
              href={`/idProduct/${item._id}`}
              className='font-montserrat leading-normal text-lg text-slate-gray'
            >
              <Card className='min-h-[350px] flex flex-col justify-between p-4 '>
                <CardHeader>
                  <CardTitle className='flex justify-center'>
                    <Image
                      src={item.image}
                      alt='icon categories'
                      width={150}
                      height={150}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center'>{item.name}</p>
                  <p className='text-center'>{(+item.price).toFixed(2)} $</p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page
