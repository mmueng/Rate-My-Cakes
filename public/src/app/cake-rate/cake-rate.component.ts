import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cake-rate',
  templateUrl: './cake-rate.component.html',
  styleUrls: ['./cake-rate.component.css']
})
export class CakeRateComponent implements OnInit {
  ratingForm: any;
  @Input() thisCake: any;
  @Output() onSubmit = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.ratingForm = { id: this.thisCake, rate: "", comment: "" };
  }

  submitForm() {
    this.onSubmit.emit(this.ratingForm);
  }

}
