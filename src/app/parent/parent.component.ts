import { AsyncPipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { District } from '../interfaces/districts';
import { DistrictListComponent } from '../district-list/district-list.component';
import { StateService } from '../state.service';
import { switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    DistrictListComponent,
    AsyncPipe,
    TitleCasePipe,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  ss = inject(StateService);
  stateList$ = this.ss.stats;
  fc = new FormControl<string | number[]>('');
  districtsList: District[] = [];
  constructor() {
    this.fc.valueChanges.pipe(
      switchMap((stateId) => this.ss.districtByStateId(stateId as number[])),
      takeUntilDestroyed()
    ).subscribe(res=> this.districtsList = res);
  }
}

