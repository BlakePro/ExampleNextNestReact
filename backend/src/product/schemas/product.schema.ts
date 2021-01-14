import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    IdProduct: {
      type: Schema.Types.ObjectId
    },
    NameProduct: {
      type: String,
      minLength: 1,
      maxLength: 150,
      required: true
    },
    Category: {
      type: String,
      enum: ['Bebidas', 'Limpieza', 'Botanas', 'Cremeria'],
      required: true
    },
    Description: {
      type: String,
      minLength: 1,
      maxLength: 450,
      required: true
    },
    ProductQuantity: {
      type: Number,
      min: 1,
      max: 100,
      required: true
    },
    Status: {
      type: Boolean,
      required: true
    },
    TimeStamp: {
      type: Date,
      default: Date.now
    }
});
