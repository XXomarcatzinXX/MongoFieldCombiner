import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Created {
  @Prop()
  by: string;

  @Prop()
  onBehalfOf: string;

  @Prop()
  atTime: number;

  @Prop()
  fromIP: string;
}

@Schema()
export class SocietyType {
  @Prop()
  name: string;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;

  @Prop()
  center: string;
}
export type SocietyTypeDocument = SocietyType & Document;
export const SocietyTypeSchema = SchemaFactory.createForClass(SocietyType);