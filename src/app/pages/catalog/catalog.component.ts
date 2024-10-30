import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product, ProductService } from './catalog.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule, MatButtonModule, MatInputModule, MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogPageComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = ['Все', 'Продукты для лица', 'Продукты для тела'];
  selectedCategory = 'Все';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  filterByCategory() {
    if (this.selectedCategory === 'Все') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((product) => product.category.includes(this.selectedCategory));
    }
  }
}
