import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reading, ReadingDocument } from '../schemas/reading.schema';

@Injectable()
export class ReadingsService {
  constructor(
    @InjectModel(Reading.name) private readingModel: Model<ReadingDocument>,
  ) {}

  async create(createDto: Partial<Reading>): Promise<Reading> {
    const created = new this.readingModel(createDto);
    console.log('Creating reading:', createDto);
    return created.save();
  }

  async findLatest(sensorId: string, limit = 10): Promise<Reading[]> {
    console.log(`Fetching latest ${limit} readings for sensorId: ${sensorId}`);
    return this.readingModel
      .find({ sensorId })
      .sort({ timestamp: -1 })
      .limit(limit)
      .exec();
  }
}
