import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;
  constructor( private categoryService: CategoriesService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();

  }

}
