import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Contracts {
  @Prop()
  fid: string;

  @Prop()
  content: string;
}
export type ContractsDocument = Contracts & Document;
export const ContractsSchema = SchemaFactory.createForClass(Contracts);