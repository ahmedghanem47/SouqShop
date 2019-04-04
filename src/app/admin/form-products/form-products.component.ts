
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriesService } from './../../services/categories.service';
import { ProductsService } from './../../services/products.service';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css']
})
export class FormProductsComponent implements OnInit {
categories$;
product={};
id;

  constructor(
    private router:Router,
    private activeRout: ActivatedRoute,
    private categorySrv: CategoriesService,
    private prodService: ProductsService,) { 
       this.id = this.activeRout.snapshot.paramMap.get('id');
      this.categories$=this.categorySrv.getCategories();
    if(this.id){
      this.categories$=this.categorySrv.getCategories();
      this.prodService.getById(this.id).take(1).subscribe(prod => {
        if(prod){
          this.product=prod;
        }
      });
      

    }

  }

  ngOnInit() {
  }
save(product){
  if(this.id) {
    this.prodService.update(this.id,product);
    this.router.navigateByUrl('/admin/products');

  }
  else {
    this.prodService.create(product);
    this.router.navigateByUrl('/admin/products');
  }
}
delete(){
  this.prodService.delete(this.id);
  this.router.navigateByUrl('/admin/products');

}

}
