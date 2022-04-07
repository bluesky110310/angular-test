import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-card',
  templateUrl: './node-card.component.html',
  styleUrls: ['./node-card.component.sass']
})
export class NodeCardComponent implements OnInit {

  /**
   * Input  of node card component
   */
  @Input() node: any
  
  constructor() { }

  ngOnInit(): void {
  }

}
