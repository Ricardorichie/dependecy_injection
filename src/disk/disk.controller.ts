import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DiskService } from './disk.service';
import { CreateDiskDto } from './dto/create-disk.dto';
import { UpdateDiskDto } from './dto/update-disk.dto';

@Controller('disk')
export class DiskController {
  constructor(private readonly diskService: DiskService) {}
}
