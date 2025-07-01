import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

@Schema()
export class Employees {

}

@Schema()
export class Updated {
  @Prop()
  atTime: number;
}

@Schema()
export class Incidences {

}

@Schema()
export class B {
  @Prop()
  c: number;

  @Prop()
  f: number;

  @Prop()
  h: number;

  @Prop()
  o: number;

  @Prop()
  p: number;

  @Prop()
  ry: number;

  @Prop()
  y: number;
}

@Schema()
export class Movement {
  @Prop({ type: B })
  b: B;

  @Prop()
  date: number;

  @Prop()
  dismissType: string;

  @Prop()
  enroleDate: number;

  @Prop()
  position: string;

  @Prop()
  rehirable: boolean;

  @Prop()
  salaryType: number;

  @Prop()
  sbc: number;

  @Prop()
  sd: number;

  @Prop()
  sdr: number;

  @Prop()
  type: number;

  @Prop()
  workDay: number;

  @Prop()
  workerType: number;

  @Prop()
  comments: string;

  @Prop()
  paySalaryInPayrol: number;

  @Prop()
  seniorityDate: number;

  @Prop()
  aniversary: boolean;

  @Prop()
  fromSettlement: string;

  @Prop()
  paySalaryInPayroll: boolean;

  @Prop()
  paysalaryInPayrol: boolean;

  @Prop()
  motive: string;

  @Prop()
  rejectedDate: number;

  @Prop()
  receivedDate: number;

  @Prop()
  tempBatch: string;
}

@Schema()
export class ThisEmployees {

}

@Schema()
export class AbsencesToCheck {

}

@Schema()
export class ExcludedEmployees {

}

@Schema()
export class Operation {
  @Prop()
  accuPeriod: number;

  @Prop()
  calendar: number;

  @Prop()
  center: string;

  @Prop({ type: Created })
  created: Created;

  @Prop({ type: Employees })
  employees: Employees;

  @Prop()
  dispersion: string;

  @Prop()
  operationType: string;

  @Prop()
  payroll: string;

  @Prop()
  period: number;

  @Prop()
  processConfigId: string;

  @Prop()
  queueTime: number;

  @Prop()
  specialDate: number;

  @Prop()
  specialPeriod: number;

  @Prop()
  status: number;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  version: number;

  @Prop()
  fid: string;

  @Prop()
  dummy: string;

  @Prop()
  billingDate: number;

  @Prop()
  end: number;

  @Prop({ type: Incidences })
  incidences: Incidences;

  @Prop()
  isAdjustment: boolean;

  @Prop({ type: Movement })
  movement: Movement;

  @Prop()
  movementTypes: string;

  @Prop()
  start: number;

  @Prop()
  originalCalendar: number;

  @Prop()
  originalPeriod: number;

  @Prop()
  comments: string;

  @Prop()
  d: string;

  @Prop()
  position: string;

  @Prop()
  accumulator: number;

  @Prop()
  factor: number;

  @Prop()
  firm: string;

  @Prop()
  type: string;

  @Prop()
  forceBillingDate: number;

  @Prop()
  s: string;

  @Prop({ type: ThisEmployees })
  thisEmployees: ThisEmployees;

  @Prop()
  a: string;

  @Prop()
  msg: string;

  @Prop()
  reBill: boolean;

  @Prop()
  closedManually: boolean;

  @Prop()
  fromClose2: number;

  @Prop()
  fromClosed: number;

  @Prop()
  fromLoadEmployee: number;

  @Prop()
  FromBillOperationS: number;

  @Prop()
  accuCalendar: number;

  @Prop({ type: AbsencesToCheck })
  absencesToCheck: AbsencesToCheck;

  @Prop()
  accuDate: number;

  @Prop({ type: ExcludedEmployees })
  excludedEmployees: ExcludedEmployees;

  @Prop()
  companiesRecordId: string;

  @Prop()
  dayFactor: number;

  @Prop()
  processConfig: string;

  @Prop()
  salaryFactor: number;

  @Prop()
  totalAmount: number;

  @Prop()
  totalDays: number;

  @Prop()
  totalSalary: number;

  @Prop()
  imported: boolean;

  @Prop()
  cutOffDate: number;
}
export type OperationDocument = Operation & Document;
export const OperationSchema = SchemaFactory.createForClass(Operation);