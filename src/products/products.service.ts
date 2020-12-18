import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Products } from './schemas/products.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  getAll() {
    return this.productsRepository.find();
  }

  getOne(id: number): Promise<Products> {
    return this.productsRepository.findOne(id);
  }

  async create(createProductDto: CreateProductDto): Promise<Products> {
    return await this.productsRepository.save(createProductDto);
  }

  remove(id: number) {
    return this.productsRepository.delete(id);
  }
}
