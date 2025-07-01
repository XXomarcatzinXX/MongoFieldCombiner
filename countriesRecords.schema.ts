import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Buffer {
  @Prop()
  type: string;

  @Prop({ type: [any] })
  data: any[];
}

@Schema()
export class _id {
  @Prop({ type: Buffer })
  buffer: Buffer;
}

@Schema()
export class CountriesRecord {
  @Prop({ type: _id })
  _id: _id;

  @Prop()
  key: string;

  @Prop()
  name: string;
}
export type CountriesRecordDocument = CountriesRecord & Document;
export const CountriesRecordSchema = SchemaFactory.createForClass(CountriesRecord);