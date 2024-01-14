'use server'
import { revalidatePath } from 'next/cache'
import ProductModel from '../models/Product'
import connect from '../utils/db'
import { z } from 'zod'
import { redirect } from 'next/navigation'

export async function create(formData: FormData) {
  const userSchema = z.object({
    image: z.string(),
    name: z.string(),
    price: z.string(),
    category: z.string(),
    status: z.string(),
    description: z.string(),
  })

  const productData = userSchema.parse({
    image: formData.get('image'),
    name: formData.get('name'),
    price: formData.get('price'),
    category: formData.get('category'),
    status: formData.get('status'),
    description: formData.get('description'),
  })
  if (!productData) {
    return { message: 'Form data is not valid' }
  }
  try {
    await connect()
    const product = new ProductModel(productData)

    await product.save()
    revalidatePath('/')
    return { message: `Created product ${productData.name}` }
  } catch {
    return { message: 'Failed to create product' }
  } finally {
    redirect('/dashboard')
  }
}
