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
  	this.dataAmount = event.target.value;
  	this.updateTransferTime();
  }

  updateTransferRate(event: any): void {
  	this.transferRate = event.target.value;
  	this.updateTransferTime();
  }

  updateTransferTime(): void {
  	const amount = this.calculator.convertDataAmount(this.dataAmount, this.dataUnit);
  	const rate = this.calculator.convertTransferRate(this.transferRate, this.rateUnit);
  	this.transferTime = this.calculator.transferTime(amount, rate);
  }

  constructor(private calculator: CalculatorService) { }

  ngOnInit() {
  	this.updateTransferTime();
  }

}
