import { Component, OnInit, Input } from '@angular/core';
import { Holding } from '../Holding';

@Component({
  selector: 'app-holding-detail',
  templateUrl: './holding-detail.component.html',
  styleUrls: ['./holding-detail.component.css']
})

export class HoldingDetailComponent implements OnInit {
  @Input() holding: Holding;

  constructor() { }

  ngOnInit() {
  }

}
