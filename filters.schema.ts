import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Filter {
  @Prop()
  mnuevo: number;
}
export type FilterDocument = Filter & Document;
export const FilterSchema = SchemaFactory.createForClass(Filter);