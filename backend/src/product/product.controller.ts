import { Controller, Post, Res, HttpStatus, Body, Get, Param, Patch, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./dto/product.dto";

//HANDLE PRODUCT
const HandleProduct = (message, status, product) => {
  if(typeof product.errors === 'undefined')return {message: message, product: product, status: HttpStatus.OK};
  else return {message: product.errors, product: {}, status: status};
};

@Controller('v1/product')
export class ProductController {

  constructor(private productService: ProductService) { }

  //GET - All Products
  @Get('/')
  async getProducts(@Res() res) {
    let products = await this.productService.getProducts();
    res.status(HttpStatus.OK).json(HandleProduct('Products found', HttpStatus.NOT_FOUND, products));
  }

  //GET - Single Product
  @Get('/:IdProduct')
  async getProduct(@Res() res, @Param('IdProduct') IdProduct) {
    let product = await this.productService.getProduct(IdProduct);
    res.status(HttpStatus.OK).json(HandleProduct('Product found', HttpStatus.NOT_FOUND, product));
  }

  //POST - Add New Product
  @Post('/')
  async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    let product = await this.productService.createProduct(createProductDTO);
    res.status(HttpStatus.OK).json(HandleProduct('Product saved', HttpStatus.FORBIDDEN, product));
  }

  //PUT - Update Single Product
  @Put('/:IdProduct')
  async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Param('IdProduct') IdProduct) {
    let product = await this.productService.updateProduct(IdProduct, createProductDTO);
    res.status(HttpStatus.OK).json(HandleProduct('Product updated', HttpStatus.NOT_FOUND, product));
  }

  //DELETE - Delete Logic Single Product
  @Delete('/:IdProduct')
  async deleteProduct(@Res() res, @Param('IdProduct') IdProduct) {
    let product = await this.productService.deleteProduct(IdProduct);
    res.status(HttpStatus.OK).json(HandleProduct('Product deleted', HttpStatus.NOT_FOUND, product));
  }

}
