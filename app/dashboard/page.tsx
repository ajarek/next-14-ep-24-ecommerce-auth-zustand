'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { create } from '@/lib/actions'

export default function Dashboard() {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return <h1 className='text-center mt-4'>Loading...</h1>
  }
  if (session.status !== 'authenticated') {
    router.replace('/')
  }

  return (
    <div className='w-full min-h-screen px-24 py-4 max-sm:px-4 '>
      <div className=' bg-zinc-300/10 flex flex-col justify-center items-center mb-4 p-8 '>
        <div className=' '>
          Welcome Admin :{' '}
          <span className='font-bold uppercase'>
            {session?.data?.user?.email?.split('@')[0]}
          </span>
        </div>
        <h2>Adding New Products</h2>
      </div>
      <form
        action={create}
        className='   flex flex-col justify-evenly gap-4'
      >
        <Label htmlFor='image'>Image Address</Label>
        <Input
          type='text'
          name='image'
          required
          placeholder='https://freepngimg.com/thumb/tshirt/20-t-shirt-png-image-thumb.png'
        />
        <Label htmlFor='name'>Product Name</Label>
        <Input
          type='text'
          name='name'
          required
          placeholder='iPhone 15 Pro'
        />
        <Label htmlFor='price'>Product Price $</Label>
        <Input
          type='text'
          name='price'
          required
          placeholder='520.25'
        />
        <Label htmlFor='rating'>Category</Label>
        <Input
          type='text'
          name='category'
          required
          placeholder='Phones'
        />
        <Label htmlFor='rating'>Status</Label>
        <Input
          type='text'
          name='status'
          required
          placeholder='In stock'
        />
        <Label htmlFor='rating'>Description</Label>
        <Textarea
          name='description'
          required
          placeholder='Phones'
        />
        <Button
          className='bg-indigo-600 text-lg'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </div>
  )
}
