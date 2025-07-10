import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Article {
  @Prop()
  slug: string;

  @Prop()
  title: string;

  @Prop()
  showDescription: string;

  @Prop()
  body: string;

  @Prop()
  fid: string;

  @Prop({ type: [any] })
  image: any[];

  @Prop()
  uid: string;

  @Prop()
  center: string;
}
export type ArticleDocument = Article & Document;
export const ArticleSchema = SchemaFactory.createForClass(Article);