import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';
import { HotelListComponent } from './pages/hotel-list/hotel-list.component';
import { HotelEditComponent } from './pages/hotel-edit/hotel-edit.component';
import { HotelFeatureListComponent } from './pages/hotel-feature-list/hotel-feature-list.component';
import { RoomFeatureListComponent } from './pages/room-feature-list/room-feature-list.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';

const routes: Routes = [
  {
    path: '', component: LayoutPageComponent, children: [
      { path: 'hotels', component: HotelListComponent },
      { path: 'hotels/:id', component: HotelDetailComponent },
      { path: 'hotels/edit/:id', component: HotelEditComponent },
      { path: 'hotel-features', component: HotelFeatureListComponent },
      {path: 'room-features', component: RoomFeatureListComponent },
      { path: 'bookings', component: BookingListComponent },
      { path: '', redirectTo: '/hotels', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
