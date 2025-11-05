/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ReadingsService } from '../services/readings.service';

@Controller('api/readings')
export class ReadingsController {
  constructor(private readonly readingsService: ReadingsService) {}

  @Post()
  async create(@Body() body: any) {
    const { sensorId, location, temperature, humidity, pressure, timestamp } =
      body;

    return this.readingsService.create({
      sensorId,
      location,
      temperature,
      humidity,
      pressure,
      timestamp: timestamp ? new Date(timestamp) : new Date(),
    });
  }

  @Get('latest')
  async getLatest(
    @Query('sensorId') sensorId: string,
    @Query('limit') limit = '10',
  ) {
    return this.readingsService.findLatest(sensorId, parseInt(limit, 10));
  }
}
