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
export class From {
  @Prop()
  loan: string;
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
  logged: boolean;
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
  onBehalfOf: string;

  @Prop()
  logged: boolean;

  @Prop()
  comment: string;
}

@Schema()
export class Confirmed {
  @Prop()
  atTime: number;

  @Prop()
  by: string;

  @Prop()
  fromIP: string;

  @Prop()
  onBehalfOf: string;

  @Prop()
  logged: boolean;
}

@Schema()
export class Extra {
  @Prop()
  calendar: number;
}

@Schema()
export class Incidences {
  @Prop({ type: _id })
  _id: _id;

  @Prop()
  automaticAsignation: boolean;

  @Prop()
  calendar: number;

  @Prop()
  center: string;

  @Prop()
  comments: string;

  @Prop()
  companiesRecord: string;

  @Prop()
  date: number;

  @Prop()
  employee: string;

  @Prop({ type: From })
  from: From;

  @Prop()
  incidenceType: string;

  @Prop()
  nature: string;

  @Prop()
  notCreated: boolean;

  @Prop()
  payroll: string;

  @Prop()
  period: number;

  @Prop()
  process: boolean;

  @Prop()
  queueTime: number;

  @Prop()
  rp: string;

  @Prop()
  status: number;

  @Prop()
  type: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  value: number;

  @Prop()
  fid: string;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  operationType: string;

  @Prop()
  settlement: string;

  @Prop()
  settedByFixes: boolean;

  @Prop()
  natureName: string;

  @Prop()
  closeOn: string;

  @Prop()
  request: string;

  @Prop()
  settedByFixesComp: boolean;

  @Prop()
  special: string;

  @Prop()
  phantomDate: number;

  @Prop()
  affect: string;

  @Prop()
  internalCode: string;

  @Prop()
  satAffect: string;

  @Prop()
  satIncidencesType: string;

  @Prop()
  satNature: string;

  @Prop({ type: Confirmed })
  confirmed: Confirmed;

  @Prop()
  file: string;

  @Prop()
  folio: string;

  @Prop()
  ordinary: string;

  @Prop()
  advAndLoanOpe: string;

  @Prop()
  asimilated: string;

  @Prop()
  directive: string;

  @Prop()
  isRejected: boolean;

  @Prop()
  bySystem: boolean;

  @Prop()
  chrisBonusRecord: string;

  @Prop()
  extraordinary: string;

  @Prop()
  a: string;

  @Prop()
  payrollCalendar: number;

  @Prop()
  ptuRecord: string;

  @Prop()
  dummy: string;

  @Prop()
  incapacityType: string;

  @Prop()
  startDate: number;

  @Prop()
  travelExpensesOpe: string;

  @Prop({ type: Extra })
  extra: Extra;

  @Prop()
  byAsstCtrl: boolean;

  @Prop()
  byGeo: boolean;

  @Prop()
  ptuDistributionRecord: string;
}
export type IncidencesDocument = Incidences & Document;
export const IncidencesSchema = SchemaFactory.createForClass(Incidences);