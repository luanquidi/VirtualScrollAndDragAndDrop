import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  personas = Array(500).fill(0);

  constructor() { }

  ngOnInit(): void {
    console.log(this.personas);
  }

  irFinal(): void {
    this.viewport.scrollToIndex(this.personas.length);
  }
  irMitad(): void {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }
  irAlInicio(): void {
    this.viewport.scrollToIndex(0);
  }

}
