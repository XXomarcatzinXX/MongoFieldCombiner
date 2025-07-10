import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SalaryType {
  @Prop()
  name: string;

  @Prop()
  humansiteCode: number;
}
export type SalaryTypeDocument = SalaryType & Document;
export const SalaryTypeSchema = SchemaFactory.createForClass(SalaryType);