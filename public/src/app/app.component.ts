import { Component, OnInit } from '@angular/core';
// Inject the Service 
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'Rate My Cake';
  cakes = [];
  newCake: any;
  cake_id: string;
  addRate: any;
  oneCake: any;
  show: boolean;
  avg: Number;
  sayHi: boolean;
  CakeID: any;

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    // this.cakes;
    this.show = false;
    this.avg = 0;
    this.getCakeFromService();
    this.newCake = { name: "", img_url: "" };
    this.addRate = { rate: "", comment: "" };
    this.oneCake = { name: "", comment: "", comments: [] };
  }

  sayHello(cake) {
    this.show = !this.show;
    this.sayHi = true;
    this.CakeID = cake;
    console.log(this.CakeID);
  }
  getCakeFromService() {
    let observble = this._httpService.getCakes();
    observble.subscribe((data: any) => {
      console.log("Got All Cakes ", data);
      this.cakes = data['result'];
      // for (let i in this.cakes) {
      //   this.addRate.push({ rate: 0, comment: "" });
      // }
      // console.log(this.cakes);

    }, err => {
      console.log(err);
    })
  }

  getOneFromService(id) {

    this.show = !this.show;
    let observble = this._httpService.getOne(id);
    observble.subscribe((data: any) => {
      console.log("Get Selected ", data);
      this.oneCake = data['result'];
      console.log(this.oneCake);
      var count = 0;
      for (var i = 0; i < this.oneCake.comments.length; i++) {
        count += this.oneCake.comments[i].rate;
        console.log(count);
      }
      this.avg = count / this.oneCake.comments.length;
      console.log(this.avg);
    });
  }

  onSubmit() {
    let observble = this._httpService.addCake(this.newCake);
    observble.subscribe(data => {
      console.log("Add Cake ", data[`result`]);
      this.newCake = { name: '', img_url: '' }
      this.getCakeFromService();

    })
  }

  onChildSubmit(data) {
    this.addRate = data;
    let observble = this._httpService.addComment(this.addRate, data.id);

    observble.subscribe(data => {
      console.log("Add Rate", data);
      this.addRate = { rate: "", comment: "" };
      this.getCakeFromService();

    })
  }

  deleteCakeFromService(id) {
    let observble = this._httpService.deleteCake(id);
    observble.subscribe(data => {
      console.log("Delete Cake", data);
      this.cake_id = id;
      this.getCakeFromService();
    })
  }

  addCommentFromService(id) {
    let observble = this._httpService.addComment(this.addRate, id);

    observble.subscribe(data => {
      console.log("Add Rate", data);
      this.addRate = { rate: "", comment: "" };
      this.getCakeFromService();
    })

  }
}
