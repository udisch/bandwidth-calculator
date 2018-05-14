import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit {

  dataAmount: number = 1;
  transferRate: number = 1;
  transferTime: number = 0;
  dataUnit: string = 'GB';
  rateUnit: string = 'Mbps';

  dataSizes = [
    {value: '0', viewValue: 'KB'},
    {value: '1', viewValue: 'MB'},
    {value: '2', viewValue: 'GB'},
    {value: '3', viewValue: 'TB'},
  ];

  rates = [
    {value: '0', viewValue: 'Kbps'},
    {value: '1', viewValue: 'Mbps'},
    {value: '2', viewValue: 'Gbps'},
  ];

  updateDataAmount(event: any): void {
  	this.dataAmount = event.value;
  	this.updateTransferTime();
  }

  updateTransferRate(event: any): void {
  	this.transferRate = event.value;
  	this.updateTransferTime();
  }

  // base unit is bits
  convertTransferRate(transferRate: number): number {
  	let result: number = transferRate;
  	switch (this.rateUnit) {
  		case 'Mbps':
  			result *= Math.pow(1000, 2);
  			break;
  		case 'Gbps':
  			result *= Math.pow(1000, 3);
  			break;
  	}
  	return result;
  }

  // base unit is bytes
  convertDataAmount(dataAmount: number): number {
  	let result: number = dataAmount;
  	switch (this.dataUnit) {
  		case 'MB':
  			result *= Math.pow(1024, 2);
  			break;
  		case 'GB':
  			result *= Math.pow(1024, 3);
  			break;
  		case 'TB':
  			result *= Math.pow(1024, 4);
  			break;
  	}
  	return result;
  }

  updateTransferTime(): void {
  	const amount = this.convertDataAmount(this.dataAmount);
  	const rate = this.convertTransferRate(this.transferRate);
  	this.transferTime = this.calculator.transferTime(amount, rate);
  }

  constructor(private calculator: CalculatorService) { }

  ngOnInit() {
  	this.updateTransferTime();
  }

}
