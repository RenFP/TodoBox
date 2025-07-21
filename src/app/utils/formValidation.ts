import { ITodoItem } from "../interfaces/todoitem";
import { ITodoItemStatus } from "../interfaces/todoItemStatus";

function validateName(name: string): boolean {
  return !(name === undefined || name === null || name === '' || name.length < 3);
}

function validateStartTask(startTask: Date): boolean {
  return !(startTask === undefined || startTask === null);
}

function validateEndTask(endTask: Date): boolean {
  return !(endTask === undefined || endTask === null);
}

function validateDateTask(dateTask: Date): boolean {
  return !(dateTask === undefined || dateTask === null);
}
export function formValidation(task: ITodoItem | any): ITodoItemStatus {  
  const todoItemStatus: ITodoItemStatus = {
    name: validateName(task.name),
    startTask: validateStartTask(task.startTask),
    endTask: validateEndTask(task.endTask),
    dateTask: validateDateTask(task.dateTask),
  }
  return todoItemStatus;
}

