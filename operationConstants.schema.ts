import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CustomField {
  @Prop()
  key: string;

  @Prop()
  name: string;

  @Prop()
  value: number;
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
}

@Schema()
export class AutomaticApply {
  @Prop()
  each: string;

  @Prop()
  value: string;

  @Prop()
  from: number;

  @Prop()
  to: number;
}

@Schema()
export class NotApply {
  @Prop()
  automatic: boolean;

  @Prop()
  fast: boolean;

  @Prop()
  manual: boolean;
}

@Schema()
export class OperationConstant {
  @Prop()
  center: string;

  @Prop()
  constantType: string;

  @Prop({ type: Created })
  created: Created;

  @Prop({ type: CustomField })
  customField: CustomField;

  @Prop()
  itemId: string;

  @Prop()
  name: string;

  @Prop()
  payroll: string;

  @Prop()
  queueTime: number;

  @Prop()
  type: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  updatedByFix: number;

  @Prop()
  fid: string;

  @Prop({ type: AutomaticApply })
  automaticApply: AutomaticApply;

  @Prop()
  incidencesType: string;

  @Prop({ type: NotApply })
  notApply: NotApply;

  @Prop()
  cc: string;
}
export type OperationConstantDocument = OperationConstant & Document;
export const OperationConstantSchema = SchemaFactory.createForClass(OperationConstant);