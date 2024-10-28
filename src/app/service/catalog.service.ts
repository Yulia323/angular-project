import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Товар 1',
      price: 1000,
      description: 'Описание товара 1',
      image: 'assets/images/product.jpeg',
      category: 'Продукты для лица'
    },
    {
      id: 2,
      name: 'Товар 2',
      price: 1500,
      description: 'Описание товара 2',
      image: 'assets/images/product.jpeg',
      category: 'Продукты для тела'
    },
    {
      id: 3,
      name: 'Товар 3',
      price: 2000,
      description: 'Описание товара 3',
      image: 'assets/images/product.jpeg',
      category: 'Продукты для тела'
    },
    {
      id: 4,
      name: 'Товар 4',
      price: 2500,
      description: 'Описание товара 4',
      image: 'assets/images/product.jpeg',
      category: 'Продукты для лица'
    },
    {
      id: 5,
      name: 'Товар 5',
      price: 3000,
      description: 'Описание товара 5',
      image: 'assets/images/product.jpeg',
      category: 'Продукты для тела'
    }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
