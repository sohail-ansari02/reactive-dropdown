import { Component, input } from '@angular/core';

import { District } from '../interfaces/districts';

@Component({
  selector: 'app-district-list',
  standalone: true,
  templateUrl: './district-list.component.html',
  styleUrl: './district-list.component.css'
})
export class DistrictListComponent {
  districts = input.required<District[]>();

}
