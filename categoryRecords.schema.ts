import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CategoryRecord {
  @Prop()
  slug: string;

  @Prop()
  name: string;

  @Prop()
  shortDescription: string;

  @Prop()
  description: string;

  @Prop()
  uid: string;

  @Prop()
  categoryRecordId: string;
}
export type CategoryRecordDocument = CategoryRecord & Document;
export const CategoryRecordSchema = SchemaFactory.createForClass(CategoryRecord);