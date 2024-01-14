import mongoose from 'mongoose'

const { Schema } = mongoose

const productSchema =   new Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    status:{ type: String, required: true },
    description:{ type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const ProductModel =
  mongoose.models.Product || mongoose.model('Product', productSchema)
export default ProductModel