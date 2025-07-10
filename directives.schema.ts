import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Processes {
  @Prop()
  REAL: boolean;

  @Prop()
  FISCAL: boolean;
}

@Schema()
export class Directive {
  @Prop()
  name: string;

  @Prop()
  process: string;

  @Prop()
  uid: string;

  @Prop({ type: Processes })
  processes: Processes;
}
export type DirectiveDocument = Directive & Document;
export const DirectiveSchema = SchemaFactory.createForClass(Directive);