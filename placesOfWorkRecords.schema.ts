import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Updated {
  @Prop()
  by: string;

  @Prop()
  onBehalfOf: string;

  @Prop()
  atTime: number;

  @Prop()
  fromIP: string;
}

@Schema()
export class AccFields {
  @Prop()
  cyvret: string;

  @Prop()
  cyvpat: string;

  @Prop()
  ifae: string;

  @Prop()
  retirament: string;

  @Prop()
  isn: string;

  @Prop()
  imsspat: string;

  @Prop()
  imssret: string;

  @Prop()
  creditinf: string;

  @Prop()
  infonavit: string;

  @Prop()
  perceptiong: string;

  @Prop()
  perception: string;

  @Prop()
  isr: string;

  @Prop()
  sueldo: string;

  @Prop()
  SUELDO: string;
}

@Schema()
export class Created {
  @Prop()
  by: string;

  @Prop()
  onBehalfOf: string;

  @Prop()
  atTime: number;

  @Prop()
  fromIP: string;
}

@Schema()
export class PlacesOfWorkRecord {
  @Prop()
  name: string;

  @Prop()
  geoZone_id: string;

  @Prop()
  state_id: string;

  @Prop()
  humansiteCode: number;

  @Prop()
  isn: number;

  @Prop()
  uid: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  discountIsn: boolean;

  @Prop()
  employeePromotionPercent: number;

  @Prop({ type: AccFields })
  accFields: AccFields;

  @Prop()
  center: string;

  @Prop({ type: Created })
  created: Created;
}
export type PlacesOfWorkRecordDocument = PlacesOfWorkRecord & Document;
export const PlacesOfWorkRecordSchema = SchemaFactory.createForClass(PlacesOfWorkRecord);