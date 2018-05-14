import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dataAmount: number;
  transferRate: number;
  transferTime: number;

  updateTransferTime() {
  	this.transferTime = this.calculator.transferTime(this.dataAmount, this.transferRate);
  }

  constructor(private calculator: CalculatorService) { }

  ngOnInit() {
  }

}
