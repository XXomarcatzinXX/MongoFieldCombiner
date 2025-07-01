import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Buffer {
  @Prop()
  type: string;

  @Prop({ type: [] })
  data: any[];
}

@Schema()
export class _id {
  @Prop({ type: Buffer })
  buffer: Buffer;
}

@Schema()
export class Created {
  @Prop()
  atTime: number;

  @Prop()
  by: string;

  @Prop()
  fromIP: string;

  @Prop()
  logged: boolean;

  @Prop()
  onBehalfOf: string;

  @Prop()
  bySystem: boolean;
}

@Schema()
export class Data {
  @Prop()
  account: string;

  @Prop()
  comments: string;

  @Prop()
  date: number;

  @Prop()
  factor: number;

  @Prop()
  name: string;

  @Prop()
  nss: string;

  @Prop()
  sbc: number;

  @Prop()
  sd: number;

  @Prop()
  sdr: number;

  @Prop()
  type: string;

  @Prop()
  newFactor: number;

  @Prop()
  untilDate: number;

  @Prop()
  lastCreditDate: number;

  @Prop()
  diffFactor: boolean;
}

@Schema()
export class Updated {
  @Prop()
  atTime: number;

  @Prop()
  by: string;

  @Prop()
  fromIP: string;

  @Prop()
  onBehalfOf: string;

  @Prop()
  byFixes: number;
}

@Schema()
export class Credit {
  @Prop({ type: _id })
  _id: _id;

  @Prop()
  c: string;

  @Prop()
  cc: string;

  @Prop()
  center: string;

  @Prop({ type: Created })
  created: Created;

  @Prop({ type: Data })
  data: Data;

  @Prop()
  employee: string;

  @Prop()
  payroll: string;

  @Prop()
  queueTime: number;

  @Prop()
  rp: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  valid: boolean;

  @Prop()
  fid: string;

  @Prop()
  import: string;

  @Prop()
  lastCreditDate: number;
}
export type CreditDocument = Credit & Document;
export const CreditSchema = SchemaFactory.createForClass(Credit);