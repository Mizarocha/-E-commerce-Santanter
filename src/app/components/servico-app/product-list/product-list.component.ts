import { Component, OnInit } from '@angular/core';
import  { ProdutosService } from './product-list.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  produtos: any;
  produtosService : ProdutosService

  constructor( produtosService : ProdutosService) {

    this.produtosService = produtosService;
  }


  ngOnInit(): void {

    this.produtos = this.produtosService.getProdutos().subscribe((data => {

      this.produtos = data;
      console.log(this.produtos);

    }))


  }

}
