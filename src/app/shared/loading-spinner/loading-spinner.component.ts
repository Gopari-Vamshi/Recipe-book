import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loading-spinner',
    template: `<div class="sk-cube-grid">
    <div class="sk-cube sk-cube1"></div>
    <div class="sk-cube sk-cube2"></div>
    <div class="sk-cube sk-cube3"></div>
    <div class="sk-cube sk-cube4"></div>
    <div class="sk-cube sk-cube5"></div>
    <div class="sk-cube sk-cube6"></div>
    <div class="sk-cube sk-cube7"></div>
    <div class="sk-cube sk-cube8"></div>
    <div class="sk-cube sk-cube9"></div>
  </div>`,
    styleUrls: ['loading-spinner.component.css']
})

export class LoadingSpinnerComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}