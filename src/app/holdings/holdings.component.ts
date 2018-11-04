import { Component, OnInit } from '@angular/core';
import { Holding } from '../holding';
import { HoldingService } from '../holding.service';
import { HOLDINGS } from '../mock-holdings';


@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent implements OnInit {

  selectedHolding: Holding;
  holdings: Holding[];

  constructor(private holdingService: HoldingService) { }

  ngOnInit() {
    this.getHoldings();
  }

  onSelect(holding: Holding): void {
    this.selectedHolding = holding;
  }

  getHoldings(): void {
    //this.holdings = this.holdingService.getHoldings();
    this.holdingService.getHoldings().subscribe(h => this.holdings = h);
   //this.holdings = HOLDINGS;
  }

}
