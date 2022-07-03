import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ServicoAppComponent } from './components/servico-app/servico-app.component';
import { FiltersComponent } from './components/servico-app/filters/filters.component';
import { ProductListComponent } from './components/servico-app/product-list/product-list.component';
import { ProductItemComponent } from './components/servico-app/product-list/product-item/product-item.component';
import { ProdutosService } from './components/servico-app/product-list/product-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ServicoAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
