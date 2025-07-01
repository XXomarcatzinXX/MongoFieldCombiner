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
export class PlaceType {
  @Prop()
  name: string;

  @Prop()
  uid: string;

  @Prop()
  center: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop({ type: Created })
  created: Created;
}
export type PlaceTypeDocument = PlaceType & Document;
export const PlaceTypeSchema = SchemaFactory.createForClass(PlaceType);