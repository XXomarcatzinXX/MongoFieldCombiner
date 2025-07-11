import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SatIncidencesType {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  sat_code: string;

  @Prop()
  internal_code: string;

  @Prop()
  allowManual: number;

  @Prop()
  nature: string;

  @Prop()
  affect: string;

  @Prop()
  uid: string;

  @Prop()
  directive: string;

  @Prop()
  type: string;
}
export type SatIncidencesTypeDocument = SatIncidencesType & Document;
export const SatIncidencesTypeSchema = SchemaFactory.createForClass(SatIncidencesType);