import { Injectable } from '@angular/core';
// import http client
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // Then make attribute of the class
  constructor(private _http: HttpClient) {

  }
  getCakes() {
    // let tempObservable = this._http.get('/cake');
    // // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get("/cake");
  }

  addCake(newCake) {
    return this._http.post("/cake/new", newCake);
  }

  deleteCake(id) {
    return this._http.delete(`/cake/${id}`);
  }
  addComment(addRate: any, id: string) {
    return this._http.put(`/cake/${id}`, addRate);
  }
  getOne(id) {
    return this._http.get(`/cake/${id}`);
  }
}
