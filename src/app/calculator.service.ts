import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  // inputs in KB, kbps. Output in seconds
  transferTime(dataAmount: number, transferRate: number): number {
  	return (dataAmount / transferRate) * 8
  }

  constructor() { }
}
