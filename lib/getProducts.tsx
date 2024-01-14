import connect from '@/utils/db'
import ProductModel from '@/models/Product'
export async function getProduct(id: string) {
  await connect()
  const product = await ProductModel.findById({ _id: id })
  return product
}
export async function getAllProducts() {
  await connect()
  const products = await ProductModel.find({}).sort({
    _id: -1,
  })
  return products
}
