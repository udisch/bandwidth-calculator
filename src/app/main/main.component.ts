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
  transferTime: number;


  updateDataAmount(event: any): void {
  	this.dataAmount = event.value;
  	this.updateTransferTime();
  }

  updateTransferRate(event: any): void {
  	this.transferRate = event.value;
  	this.updateTransferTime();
  }

  updateTransferTime(): void {
  	this.transferTime = this.calculator.transferTime(this.dataAmount, this.transferRate);
  }

  constructor(private calculator: CalculatorService,) { }

  ngOnInit() {
  }

}
