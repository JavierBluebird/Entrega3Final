import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalpag',
  templateUrl: './modalpag.page.html',
  styleUrls: ['./modalpag.page.scss'],
})
export class ModalpagPage implements OnInit {

  @Input() marker: any;
  constructor() { }

  ngOnInit() {
  }

}
