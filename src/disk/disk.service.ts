import { Injectable } from '@nestjs/common';
import { CreateDiskDto } from './dto/create-disk.dto';
import { UpdateDiskDto } from './dto/update-disk.dto';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private readonly powerService: PowerService) {}

  getData() {
    console.log(`Drawing 20 watts of power from PowerService`);
    this.powerService.supplyPower(10);
    return 'This action gets data from disk';
  }
}
