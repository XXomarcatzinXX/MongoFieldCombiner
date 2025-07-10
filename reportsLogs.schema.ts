import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class IsrRow {
  @Prop()
  _id: string;

  @Prop()
  type: string;

  @Prop()
  year: number;

  @Prop()
  upperLimit: number;

  @Prop()
  fixedFee: number;

  @Prop()
  percentFee: number;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;

  @Prop()
  lowerLimit: number;

  @Prop({ type: Updated })
  updated: Updated;
}

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
export class IsrRowSalary {
  @Prop()
  _id: string;

  @Prop()
  year: number;

  @Prop()
  type: string;

  @Prop()
  lowerLimit: number;

  @Prop()
  fixedFee: number;

  @Prop()
  percentFee: number;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  uid: string;
}

@Schema()
export class Isr {
  @Prop()
  name: string;

  @Prop()
  conceptId: string;

  @Prop()
  mensualizationFactor: number;

  @Prop()
  workedDays: number;

  @Prop()
  gravableBase: number;

  @Prop()
  subsidy: number;

  @Prop({ type: IsrRow })
  isrRow: IsrRow;

  @Prop()
  lowerLimit: number;

  @Prop()
  lowerLimitExedent: number;

  @Prop()
  isrPercent: number;

  @Prop()
  isrFee: number;

  @Prop()
  marginalTax: number;

  @Prop()
  isrOfTable: number;

  @Prop()
  isrToRetain: number;

  @Prop()
  isrRetained: number;

  @Prop()
  isrOfPeriodToRetain: number;

  @Prop()
  isrAdjustment: number;

  @Prop()
  isrPerception: number;

  @Prop()
  result: number;

  @Prop()
  needToBalanceFiscal: boolean;

  @Prop()
  value: number;

  @Prop()
  monthlyIsr: number;

  @Prop()
  balanceAmount: number;

  @Prop()
  forRelatives: number;

  @Prop()
  rejectedAmount: number;

  @Prop()
  order: number;

  @Prop()
  customIsr: boolean;

  @Prop()
  isrCalculated: number;

  @Prop()
  isrOfPeriod: number;

  @Prop()
  tableType: string;

  @Prop()
  lastIsrFromLastCalculation: number;

  @Prop()
  gravableBaseSalary: number;

  @Prop()
  subsidySalary: number;

  @Prop({ type: IsrRowSalary })
  isrRowSalary: IsrRowSalary;

  @Prop()
  lowerLimitSalary: number;

  @Prop()
  lowerLimitExedentSalary: number;

  @Prop()
  isrPercentSalary: number;

  @Prop()
  isrFeeSalary: number;

  @Prop()
  marginalTaxSalary: number;

  @Prop()
  isrOfTableSalary: number;

  @Prop()
  isrToRetainSalary: number;

  @Prop()
  isrRetainedSalary: number;

  @Prop()
  isrOfPeriodToRetainSalary: number;

  @Prop()
  monthlyIsrSalary: number;

  @Prop()
  validationMinimumWage: boolean;

  @Prop()
  validationMinimumWageText: string;

  @Prop()
  normalRelativesCalc: number;
}

@Schema()
export class GravableBase {
  @Prop()
  name: string;

  @Prop()
  conceptId: string;

  @Prop()
  value: number;

  @Prop()
  lastMonthlyBase: number;

  @Prop()
  monthlyBase: number;

  @Prop()
  forCalculation: number;

  @Prop()
  order: number;

  @Prop()
  tableType: string;

  @Prop()
  lastGravableBaseFromLastCalculation: number;

  @Prop()
  lastMonthlyBaseSalary: number;

  @Prop()
  monthlyBaseSalary: number;

  @Prop()
  forCalculationSalary: number;

  @Prop()
  lastMonthlyBaseExtraordinary: number;

  @Prop()
  monthlyBaseExtraordinary: number;

  @Prop()
  forCalculation4: number;

  @Prop()
  forCalculation3: number;
}

@Schema()
export class MensualizationFactor {
  @Prop()
  name: string;

  @Prop()
  conceptId: string;

  @Prop()
  fiscalWorkedDaysC: number;

  @Prop()
  fiscalWorkedDays: number;

  @Prop()
  lastFiscalWorkedDays: number;

  @Prop()
  monthlyFiscalWorkedDays: number;

  @Prop()
  value: number;

  @Prop()
  order: number;

  @Prop()
  operationType: any;

  @Prop()
  campo6: string;

  @Prop()
  isCustom: boolean;

  @Prop()
  normalMensualizationFactor: number;

  @Prop()
  pendingVacationsToSum: number;

  @Prop()
  dayTypes: any;

  @Prop()
  monthlyFiscalWorkedDaysC: number;

  @Prop()
  campo9: number;

  @Prop()
  campo10: number;

  @Prop()
  factor: number;

  @Prop()
  maxFactor: number;
}

@Schema()
export class Subsidy {
  @Prop()
  name: string;

  @Prop()
  conceptId: string;

  @Prop()
  value: number;

  @Prop()
  order: number;

  @Prop()
  mensualizationFactor: number;

  @Prop()
  workedDays: number;

  @Prop()
  periodWorkedDays: number;

  @Prop()
  gravableBase: number;

  @Prop()
  isr: number;

  @Prop()
  subCaused: number;

  @Prop()
  lastSubCausedMonth: number;

  @Prop()
  factor: number;

  @Prop()
  subCausedPeriod: number;

  @Prop()
  subCausedMonth: number;

  @Prop()
  subCausedExc: number;

  @Prop()
  subCausedToRep: number;

  @Prop()
  subCausedToRepAdj: number;

  @Prop()
  subCausedToRepF: number;

  @Prop()
  subCausedToRepMonth: number;

  @Prop()
  subToGive: number;

  @Prop()
  subGiven: number;

  @Prop()
  subOfPeriodToGive: number;

  @Prop()
  subsidyAdjusment: number;

  @Prop()
  subsidyDeduction: number;

  @Prop()
  lastIsrRep: number;

  @Prop()
  isrRep: number;

  @Prop()
  isrRepAdj: number;

  @Prop()
  isrRepAdjMonth: number;

  @Prop()
  monthlySubsidy: number;

  @Prop()
  balanceAmount: number;

  @Prop()
  tableType: string;

  @Prop()
  gravableBaseSalary: number;

  @Prop()
  isrSalary: number;

  @Prop()
  subCausedSalary: number;

  @Prop()
  subToGiveSalary: number;

  @Prop()
  subGivenSalary: number;

  @Prop()
  subOfPeriodToGiveSalary: number;

  @Prop()
  monthlySubsidySalary: number;

  @Prop()
  subsidyTable: number;

  @Prop()
  subsidyTablePeriod: number;

  @Prop()
  subsidyCustom: boolean;
}

@Schema()
export class ReportsLog {
  @Prop()
  operationType: string;

  @Prop()
  operationId: string;

  @Prop({ type: Created })
  created: Created;

  @Prop()
  employeeId: string;

  @Prop({ type: Isr })
  isr: Isr;

  @Prop({ type: GravableBase })
  gravableBase: GravableBase;

  @Prop({ type: MensualizationFactor })
  mensualizationFactor: MensualizationFactor;

  @Prop({ type: Subsidy })
  subsidy: Subsidy;

  @Prop()
  uid: string;

  @Prop()
  center: string;
}
export type ReportsLogDocument = ReportsLog & Document;
export const ReportsLogSchema = SchemaFactory.createForClass(ReportsLog);