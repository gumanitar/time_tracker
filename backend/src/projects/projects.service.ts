import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private database: DatabaseService) {}

  create(createProjectDto: CreateProjectDto) {
    return this.database.project.create({
      data: createProjectDto,
    });
  }

  findAll() {
    return this.database.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
