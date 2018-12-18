import { AppBootstrapModule } from './app-bootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';

import { CategoriesComponent } from './catalog/categories/categories.component';
import { CategoryDetailsComponent } from './catalog/category-details/category-details.component';
import { ProductsComponent } from './catalog/products/products.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailsComponent } from './catalog/product-details/product-details.component';
import { ContentPagesComponent } from './pages/content-pages/content-pages.component';
import { ContentPagesService } from './services/content-pages.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CategoriesComponent,
    CategoryDetailsComponent,
    ProductsComponent,
    HomeComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ContentPagesComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'category/:id', component: CategoryDetailsComponent },
      {path: 'product/:id', component: ProductDetailsComponent },
      {path: 'search', component: ProductDetailsComponent },
      {path: 'about', component: ContentPagesComponent, data: { pageid: '1' }},
      {path: 'services', component: ContentPagesComponent, data: { pageid: '2' }},
      {path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    CategoryService,
    ProductService,
    ContentPagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
