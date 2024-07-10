import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'hotel_feature_mapping'})
export class HotelFeatureMapping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hotelId: number;

  @Column()
  featureId: number;
}