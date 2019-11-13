import { Component, OnInit, Input } from '@angular/core';
// Inject the Service 
import { HttpService } from '../http.service';
@Component({
  selector: 'app-show-cake',
  templateUrl: './show-cake.component.html',
  styleUrls: ['./show-cake.component.css']
})
export class ShowCakeComponent implements OnInit {
  @Input() fromParent: any;
  oneCake: any;
  show: boolean;
  avg: Number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.avg = 0;
    this.show = false;
  }
  Avg() {
    var count = 0;
    for (var i = 0; i < this.fromParent.comments.length; i++) {
      count += this.fromParent.comments[i].rate;
      // console.log("**************", count);
    }
    this.avg = count / this.fromParent.comments.length;
    return this.avg;
    console.log(this.avg);
  }

}
