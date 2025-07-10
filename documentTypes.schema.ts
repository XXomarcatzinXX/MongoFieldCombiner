import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class DocumentType {
  @Prop({ type: [] })
  fields: any[];

  @Prop()
  firm: string;

  @Prop()
  type: string;

  @Prop()
  name: string;

  @Prop()
  contentType: string;

  @Prop()
  styles: string;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  satContractType: string;

  @Prop()
  key: string;

  @Prop()
  center: string;

  @Prop({ type: [any] })
  notRequiredFields: any[];

  @Prop()
  editionMode: boolean;

  @Prop()
  allowMany: boolean;
}
export type DocumentTypeDocument = DocumentType & Document;
export const DocumentTypeSchema = SchemaFactory.createForClass(DocumentType);