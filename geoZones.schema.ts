import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class GeoZone {
  @Prop()
  name: string;

  @Prop()
  key: string;

  @Prop()
  status: boolean;

  @Prop()
  uid: string;
}
export type GeoZoneDocument = GeoZone & Document;
export const GeoZoneSchema = SchemaFactory.createForClass(GeoZone);