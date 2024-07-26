import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../interfaces/hotel.interface';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrl: './hotel-form.component.css',
})
export class HotelFormComponent implements OnInit {
  hotelForm: FormGroup;
  isEdit: boolean = false;
  hotelId: number = 0;
  originalHotel: Hotel | null = null;

  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.hotelForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      stars: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  ngOnInit(): void {
    this.hotelId = +this.route.snapshot.paramMap.get('id')!;
    if (this.hotelId) {
      this.isEdit = true;
      this.hotelService.getHotelById(this.hotelId).subscribe({
        next: (hotel) => {
          this.originalHotel = hotel;
          this.hotelForm.patchValue(hotel);
        },
        error: (error) => {
          console.error('Error loading hotel:', error);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.hotelForm.valid) {
      if (this.isEdit) {
        this.hotelService.updateHotel(this.hotelId!, this.hotelForm.value).subscribe({
          next: () => {
            this.router.navigate(['/hotels']);
          },
          error: (error) => {
            console.error('Error updating hotel:', error);
          }
        });
      } else {
        this.hotelService.createHotel(this.hotelForm.value).subscribe({
          next: () => {
            this.router.navigate(['/hotels']);
          },
          error: (error) => {
            console.error('Error creating hotel:', error);
          }
        });
      }
    }
  }

  reset(): void {
    if(this.originalHotel){
      this.hotelForm.patchValue(this.originalHotel);
    }
  }

  get name() {
    const name = this.hotelForm.get('name');
    if(!name) throw new Error('name not found');
    return name;
  }

  getControlName(controlName: string){
    const value = this.hotelForm.get(controlName);
    if(!value) throw new Error('name not found');
    return value;
  }
}
