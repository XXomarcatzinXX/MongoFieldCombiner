import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class IncidencesTypesBackup {
  @Prop()
  name: string;

  @Prop()
  sat_code: string;

  @Prop()
  internal_code: string;

  @Prop()
  allowManual: boolean;

  @Prop()
  nature: string;

  @Prop()
  affect: string;
}
export type IncidencesTypesBackupDocument = IncidencesTypesBackup & Document;
export const IncidencesTypesBackupSchema = SchemaFactory.createForClass(IncidencesTypesBackup);