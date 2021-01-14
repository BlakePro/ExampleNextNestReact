require('dotenv').config();
const  databaseCollection = process.env.DATABASE_COLLECTION;

import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: databaseCollection, schema: ProductSchema}])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
