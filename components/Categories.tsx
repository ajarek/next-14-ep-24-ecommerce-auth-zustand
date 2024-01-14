import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const Categories = () => {
  const categoriesLinks = [
    {
      src: '/admin ui/categories/watches-category.png',
      href: '/watches',
      label: 'Watches',
    },
    {
      src: '/admin ui/categories/tv-home-category.png',
      href: '/tv',
      label: 'TV & Home',
    },
    {
      src: '/admin ui/categories/ipads-category.png',
      href: '/ipads',
      label: 'Ipads',
    },
    {
      src: '/admin ui/categories/accessories-category.png',
      href: '/accessories',
      label: 'Accessories',
    },
    {
      src: '/admin ui/categories/laptops-category.png',
      href: '/laptops',
      label: 'Laptops',
    },
    {
      src: '/admin ui/categories/phones-category.png',
      href: '/phones',
      label: 'Phones',
    },
  ]
  return (
    <>
      <div
        className='w-full max-w-[800px] flex justify-between items-center px-2 mb-4 
      '
      >
        <h1 className='text-xl'>Shop by Categories</h1>
        <Link href={'/shop'}>Show All</Link>
      </div>
      <ul className='grid grid-cols-3 max-md:grid-cols-1 gap-6'>
        {categoriesLinks.map((item) => (
          <li key={item.label}>
            <Link
              href={`/shop/${item.href}`}
              className='font-montserrat leading-normal text-lg text-slate-gray'
            >
              <Card>
                <CardHeader>
                  <CardTitle>
                    <Image
                      src={item.src}
                      alt='icon categories'
                      width={200}
                      height={200}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center'>{item.label}</p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Categories
