import { Injectable } from '@nestjs/common';
import { CreateCpuDto } from './dto/create-cpu.dto';
import { UpdateCpuDto } from './dto/update-cpu.dto';
import { PowerService } from '../power/power.service';
@Injectable()
export class CpuService {
  constructor(private readonly powerService: PowerService) {}
  compute(a: number, b: number) {
    console.log(`Computing ${a} + ${b}`);
    this.powerService.supplyPower(100);
    return a + b;
  }
}
