import { Component, Input, OnInit } from '@angular/core';
import { Produto } from "../model/produtos";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  url : string = "";

   @Input()
   produto!: Produto;

   constructor() {

   }

  ngOnInit(): void {
  }

}
