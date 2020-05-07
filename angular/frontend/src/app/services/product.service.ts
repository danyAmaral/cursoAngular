import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3001/products"
  constructor(private snarckBar: MatSnackBar,
              private http: HttpClient) { }


  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  read() : Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }

  showMessage(msg: string) : void
  {
    this.snarckBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
