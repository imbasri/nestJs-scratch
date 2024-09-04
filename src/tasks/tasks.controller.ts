import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {
  taskService: TasksService

  constructor(){
    this.taskService = new TasksService();
  }

  @Get()
  listTask() {
    return this.taskService.findAll();
  }
  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return this.taskService.createTask(body.content);
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.findOne(parseInt(id));
  }
}
