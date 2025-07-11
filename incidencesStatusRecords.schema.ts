import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class IncidencesStatusRecord {
  @Prop()
  name: string;
}
export type IncidencesStatusRecordDocument = IncidencesStatusRecord & Document;
export const IncidencesStatusRecordSchema = SchemaFactory.createForClass(IncidencesStatusRecord);