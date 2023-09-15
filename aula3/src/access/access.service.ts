import { Injectable } from '@nestjs/common';
import { CreateAccessDto } from './dto/create-access.dto';
import { UpdateAccessDto } from './dto/update-access.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Access } from './entities/access.entity';

@Injectable()
export class AccessService {
  constructor(
    @InjectRepository(Access)
    private accessRepository: Repository<Access>,
  ) {}

  findAll(): Promise<Access[]> {
    return this.accessRepository.find();
  }

  findOne(id: number): Promise<Access | null> {
    return this.accessRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.accessRepository.delete(id);
  }

  create(createAccessDto: CreateAccessDto) {
    return this.accessRepository.save(createAccessDto);
  }

  update(id: number, updateAccessDto: UpdateAccessDto) {
    return this.accessRepository.update(id, updateAccessDto);
  }
}
