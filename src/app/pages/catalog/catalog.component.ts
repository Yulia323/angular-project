import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/catalog.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  standalone: true,
  imports: [NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogPageComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
