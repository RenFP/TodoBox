import { ITodoItem } from "../interfaces/todoitem";

const data: ITodoItem[] = [];

export const GetTodoList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
};


