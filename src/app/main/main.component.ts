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
  
  updateDataAmount(event: any): void {
    this.dataAmount = event.value;
    this.updateTransferTime();
  }

  updateTransferRate(event: any): void {
    this.transferRate = event.value;
    this.updateTransferTime();
  }

  updateUnits(event: any): void {
    this.rateUnit = event.rateUnit;
    this.dataUnit = event.dataUnit;
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
