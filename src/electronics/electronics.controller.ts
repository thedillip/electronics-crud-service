import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ElectronicsService } from './electronics.service';
import { Electronics } from './schemas/electronics.schema.js';

@Controller('electronics')
export class ElectronicsController {
  constructor(private readonly electronicsService: ElectronicsService) {}

  @Post()
  async create(@Body() createElectronicsDto: any): Promise<Electronics> {
    return this.electronicsService.create(createElectronicsDto);
  }

  @Get()
  async findAll(): Promise<Array<Electronics>> {
    return this.electronicsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Electronics> {
    return this.electronicsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateElectronicsDto: any,
  ): Promise<Electronics> {
    return this.electronicsService.update(id, updateElectronicsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Electronics> {
    return this.electronicsService.delete(id);
  }
}
