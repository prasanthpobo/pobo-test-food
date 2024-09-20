import { Component, Input } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { productData } from '../../../interface/product';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-product-filter-wise-data',
  standalone: true,
  imports: [TitleComponent,NgbNavModule, CommonModule, RouterModule],
  templateUrl: './product-filter-wise-data.component.html',
  styleUrl: './product-filter-wise-data.component.scss'
})

export class ProductFilterWiseDataComponent {

  public openTab: string = "fast_delivery";
  public product: productData[];
  public products: productData[];
  @Input() title : string;
  @Input() loader: boolean;

  @Input() data: productData[];
  @Input() class: string;


  public tabData = [{ category: 'fast_delivery', name: 'Fast Delivery' },
  { category: 'rating', name: 'Rating' },
  { category: 'pure_veg', name: 'Pure Veg' },
  { category: 'cost', name: 'Cost' },
  ];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(response => {
      if (response.product) {
        this.product = response.product;
      }
       this.changeTab(this.openTab);
    })
  }

  public changeTab(value: string) {
    this.openTab = value;
    if (value == 'fast_delivery') {
      this.products = this.product.sort((one, two) => (one.time > two.time ? 1 : -1));
    } else if (value == 'rating') {
      this.products = this.product.sort((one, two) => (one.rating > two.rating ? -1 : 1));
    } else if (value == 'pure_veg') {
      this.products = this.product.filter(x => x.type === 'veg')
    } else if (value == 'cost') {
      this.products = this.product.sort((one, two) => (one.price > two.price ? 1 : -1));
    }
  }
 

  increaseDecrease(i: number,qty:number) {
    this.data.forEach((item) => {
      if (item.id == i) {
        if (qty == -1 && item.value > 1) {
          item.value -= 1;
        } else if (qty == 1) {
          item.value += 1;
        }
      }
    })
  }

}
