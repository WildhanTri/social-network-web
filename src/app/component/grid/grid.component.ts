import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() title: string;
  @Input() sub: string;
  @Input() view: number;
  @Input() picture: string;

  @Input() size: any;

  constructor() {}

  ngOnInit() {}
}
