import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ElectronicsModule } from './electronics/electronics.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/electronics-db'),
    ElectronicsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
