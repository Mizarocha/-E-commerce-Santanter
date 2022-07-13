import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import {Produto} from "./model/produtos";

export const produtos: Produto[] = [
  { id: '1', name: 'Produto1',  category: "FINANCIAMENTOS", img:"img1"},
  { id: '2', name: 'Produto2',  category: "EMPRÉSTIMOS",     img:"img2"},
  { id: '3', name: 'Produto3',  category: "SAÚDE FINANCEIRA", img:"img3"},

];


@Injectable()

export class ProdutosService {

  private url = 'https://sheet.best/api/sheets/ae16df86-5db5-421c-99ec-c00ee078386b';

   httpOptions= {
    Headers: new HttpHeaders({'content-type': 'appication/json'})
   }

   constructor(private http:HttpClient){}

  getProdutos(){
return produtos;
}

  
  
/*
getProdutos(){
  return this.http.get(this.url)
}
*/



  }
