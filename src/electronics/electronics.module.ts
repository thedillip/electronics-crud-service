import { Module } from '@nestjs/common';
import { ElectronicsService } from './electronics.service';
import { ElectronicsController } from './electronics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Electronics,
  ElectronicsSchema,
} from './schemas/electronics.schema.js';

@Module({
  providers: [ElectronicsService],
  controllers: [ElectronicsController],
  imports: [
    MongooseModule.forFeature([
      { name: Electronics.name, schema: ElectronicsSchema },
    ]),
  ],
})
export class ElectronicsModule {}
