import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  // base unit is bits
  convertTransferRate(transferRate: number, unit: string): number {
  	let result: number = transferRate;
  	switch (unit) {
  		case 'Kbps':
  			result *= 1000;
  			break;
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
  convertDataAmount(dataAmount: number, unit: string): number {
  	let result: number = dataAmount;
  	switch (unit) {
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

  // inputs in bytes, bits per second. Output in seconds
  transferTime(dataAmount: number, transferRate: number): number {
  	console.log(dataAmount);
  	console.log(transferRate);
  	return (dataAmount / transferRate) * 8
  }

  constructor() { }
}
