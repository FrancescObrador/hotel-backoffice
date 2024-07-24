import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelFormComponent } from './pages/hotel-form/hotel-form.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';
import { HotelListComponent } from './pages/hotel-list/hotel-list.component';
import { HotelEditComponent } from './pages/hotel-edit/hotel-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HotelFeatureListComponent } from './pages/hotel-feature-list/hotel-feature-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HotelDetailComponent,
    HotelFormComponent,
    LayoutPageComponent,
    HotelEditComponent,
    HotelFeatureListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginator,
    MatTab,
    MatTabGroup,
    MatError,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatDialogContent,
    MatDialogActions,
    MatSortModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
