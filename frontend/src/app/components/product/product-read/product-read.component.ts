import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]

  constructor(private productService: ProductService) { }

  //Método ngOnInit é o método que é executado no momento que o componente é aberto, a rota, a tela é aberta.
  //Por isso que ao abrir a tela de produtos já irá exibir a lista de produtos
  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
