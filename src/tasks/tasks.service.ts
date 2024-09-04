import { TasksRepository } from './tasks.repository';

export class TasksService {
  taskRepo: TasksRepository;
  constructor() {
    this.taskRepo = new TasksRepository();
  }

  findAll() {
    return this.taskRepo.findAll();
  }

  findOne(id: number) {
    return this.taskRepo.findOne(id)
  }

  createTask(task: string) {    
    return this.taskRepo.createTask(task);
  }
}
