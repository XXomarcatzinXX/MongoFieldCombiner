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
  onBehalfOf: string;

  @Prop()
  logged: boolean;
}

@Schema()
export class Processes {
  @Prop()
  payroll: boolean;

  @Prop()
  settlement: boolean;

  @Prop()
  extraordinary: boolean;

  @Prop()
  special: boolean;

  @Prop()
  ptuRecord: boolean;

  @Prop()
  advAndLoanOpe: boolean;

  @Prop()
  asimilated: boolean;

  @Prop()
  chrisBonusRecord: boolean;

  @Prop()
  travelExpensesOpe: boolean;

  @Prop()
  ptuDistributionRecord: boolean;
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
export class ChangeLog {

}

@Schema()
export class ProcessType {
  @Prop()
  payroll: boolean;
}

@Schema()
export class ForAcc {
  @Prop()
  credit: boolean;

  @Prop()
  debit: boolean;

  @Prop()
  charge: boolean;
}

@Schema()
export class Acc {
  @Prop()
  charge: boolean;
}

@Schema()
export class Concepts {
  @Prop({ type: _id })
  _id: _id;

  @Prop({ type: [] })
  accFields: any[];

  @Prop()
  allowFast: boolean;

  @Prop()
  allowManual: boolean;

  @Prop()
  attendanceCode: string;

  @Prop({ type: [] })
  calculations: any[];

  @Prop()
  center: string;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  forVariables: boolean;

  @Prop()
  id_human: string;

  @Prop()
  inputType: string;

  @Prop()
  key: string;

  @Prop()
  name: string;

  @Prop()
  nature: string;

  @Prop()
  payroll: string;

  @Prop({ type: Processes })
  processes: Processes;

  @Prop()
  queueTime: number;

  @Prop()
  requireConfirmation: number;

  @Prop()
  satCode: string;

  @Prop()
  showTotal: boolean;

  @Prop()
  type: string;

  @Prop({ type: Updated })
  updated: Updated;

  @Prop()
  validateDays: boolean;

  @Prop()
  fid: string;

  @Prop()
  allowNegative: boolean;

  @Prop({ type: ChangeLog })
  changeLog: ChangeLog;

  @Prop({ type: [] })
  fieldsToListen: any[];

  @Prop()
  hiddenField: boolean;

  @Prop()
  customCalc: boolean;

  @Prop({ type: ProcessType })
  processType: ProcessType;

  @Prop()
  constant: boolean;

  @Prop()
  idGeo: string;

  @Prop()
  defaultValue: number;

  @Prop()
  noEditValue: boolean;

  @Prop()
  setValue: boolean;

  @Prop({ type: [] })
  accuFields: any[];

  @Prop({ type: ForAcc })
  forAcc: ForAcc;

  @Prop({ type: [] })
  otherTotals: any[];

  @Prop()
  confirmationType: string;

  @Prop()
  from: string;

  @Prop()
  automatic: boolean;

  @Prop()
  hiddenColumn: boolean;

  @Prop()
  amortizationAvailable: boolean;

  @Prop()
  addFolio: boolean;

  @Prop({ type: [] })
  generateAuto: any[];

  @Prop()
  isIncapacity: boolean;

  @Prop()
  pattern: string;

  @Prop()
  requireFile: boolean;

  @Prop()
  requiredFolio: boolean;

  @Prop()
  uniqueFolio: boolean;

  @Prop()
  valSubseq: boolean;

  @Prop()
  geoDateNotAssign: boolean;

  @Prop()
  getMax: boolean;

  @Prop()
  max: string;

  @Prop()
  satIncidencesType: string;

  @Prop()
  hiddenCalc: boolean;

  @Prop()
  directive: string;

  @Prop()
  forCredit: boolean;

  @Prop()
  forOtherPayment: boolean;

  @Prop()
  secondComplement: boolean;

  @Prop()
  availableForFiscal: boolean;

  @Prop()
  fdd: boolean;

  @Prop()
  notForAcc: boolean;

  @Prop({ type: Acc })
  acc: Acc;

  @Prop()
  editValue: boolean;

  @Prop({ type: [] })
  validations: any[];

  @Prop()
  cIndex: number;

  @Prop()
  showCalculation: boolean;

  @Prop()
  fromConcept: string;

  @Prop()
  parent: string;
}
export type ConceptsDocument = Concepts & Document;
export const ConceptsSchema = SchemaFactory.createForClass(Concepts);