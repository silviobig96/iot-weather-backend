import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ReadingDocument = HydratedDocument<Reading>;

@Schema({ timestamps: true })
export class Reading extends Document {
  @Prop({ required: true })
  sensorId: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  temperature: number;

  @Prop({ required: true })
  humidity: number;

  @Prop()
  pressure: number;

  @Prop()
  timestamp: Date;
}

export const ReadingSchema = SchemaFactory.createForClass(Reading);
