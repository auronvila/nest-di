import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuinstance: CpuService,
    private diskInstance: DiskService,
  ) {}
  @Get('run')
  run() {
    return [this.cpuinstance.compute(1, 2), this.diskInstance.getData()];
  }
}
