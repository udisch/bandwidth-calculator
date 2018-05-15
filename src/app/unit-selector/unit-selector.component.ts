import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'unit-selector',
  templateUrl: './unit-selector.component.html',
  styleUrls: ['./unit-selector.component.css']
})
export class UnitSelectorComponent implements OnInit {
  
  @Output() onChange = new EventEmitter();

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
  
  change(): void {
  	this.onChange.emit({'dataUnit': this.dataUnit, 'rateUnit': this.rateUnit});
  }

  ngOnInit() {
  	this.change();
  }

  constructor() { }

}
