import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./interfaces/product.interface";
import { CreateProductDTO } from "./dto/product.dto";
require('dotenv').config();
const  databaseCollection = process.env.DATABASE_COLLECTION;

@Injectable()
export class ProductService {

  constructor(@InjectModel(databaseCollection) private readonly productModel: Model<Product>) {}

  //GET - All Products
  async getProducts(): Promise<Product[]> {
    return await this.productModel.find({'Status': true})
    .then(res => res)
    .catch(e => e);
  }

  //GET - Single Product
  async getProduct(IdProduct: string): Promise<Product> {
    return await this.productModel.findById(IdProduct)
    .then(res => res)
    .catch(e => e);
  }

  //POST - Add New Product
  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    let product = await new this.productModel(createProductDTO);
    return await product.save()
    .then(res => res)
    .catch(e => e);
  }

  //PUT - Update Single Product
  async updateProduct(IdProduct: string, createProductDTO: CreateProductDTO): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(IdProduct, createProductDTO)
    .then(res => res)
    .catch(e => e);
  }

  //DELETE - Delete Logic Single Product
  async deleteProduct(IdProduct: string): Promise<any> {
    return await this.productModel.findByIdAndUpdate(IdProduct, {"Status": false})
    .then(res => res)
    .catch(e => e);
  }
}
