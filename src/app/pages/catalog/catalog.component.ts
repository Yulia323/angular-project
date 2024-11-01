import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Catalog, Product, ProductService } from './catalog.service';
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
  filteredProducts: Product[] = this.products;
  searchQuery = '';
  categories: Catalog[] = Object.values(Catalog);
  selectedCategory: Catalog = Catalog.All;

  constructor(private productService: ProductService) {}

  searchProducts() {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.products.filter((product: Product) => product.description.toLowerCase().includes(query));
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  filterByCategory(): void {
    if (this.selectedCategory == Catalog.All) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((product: Product) => product.category.includes(this.selectedCategory));
    }
  }
}
