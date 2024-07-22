import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'room_feature_mapping'})
export class RoomFeatureMapping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomId: number;

  @Column()
  featureId: number;
}