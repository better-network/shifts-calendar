import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShiftsCalendarComponent } from './shifts-calendar/shifts-calendar.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [ShiftsCalendarComponent],
  exports: [ShiftsCalendarComponent],
})
export class ShiftsCalendarModule {}
