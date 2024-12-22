import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(-73%, 0, 0)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(0, 0, 0)',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class DashComponent implements OnInit {
  menuState: string = 'in';
  showIcons: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.showIcons = !this.showIcons;
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
