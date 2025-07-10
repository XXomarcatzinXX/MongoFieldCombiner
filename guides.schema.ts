import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Guide {
  @Prop()
  slug: string;

  @Prop()
  name: string;

  @Prop()
  body: string;

  @Prop()
  categoryRecordId: string;

  @Prop()
  fid: string;

  @Prop({ type: [any] })
  image: any[];

  @Prop()
  uid: string;

  @Prop()
  center: string;
}
export type GuideDocument = Guide & Document;
export const GuideSchema = SchemaFactory.createForClass(Guide);