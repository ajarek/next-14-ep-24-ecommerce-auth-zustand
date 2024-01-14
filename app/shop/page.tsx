import Image from 'next/image'
import { getAllProducts } from '@/lib/getProducts'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const Shop = async () => {
  const products = await getAllProducts()
  return (
    <div className='flex min-h-screen flex-col items-start justify-between p-8 max-md:p-4'>
      <h1 className='text-xl'>
        Showing <span>{products.length}</span> Products
      </h1>
      <ul className='grid grid-cols-3 max-md:grid-cols-1 gap-6'>
        {products.map((item) => (
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

export default Shop
