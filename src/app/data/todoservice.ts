import { Injectable } from "@angular/core";
import { ITodoItem } from "../interfaces/todoitem";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    data: ITodoItem[] = []

    idCount = 1;

    getTodoList() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data);
            }, 100);
        });
    }
    getTodoItem(id: number) {
        return this.data.find(item => item.id === id);
    }
    addTodoItem(item: ITodoItem) {
        this.data.push({ ...item, status: 'pending', id: this.idCount++ });
    }
    updateTodoItem(todoItem: ITodoItem) {
        const index = this.data.findIndex(item => item.id === todoItem.id);
        if (index !== -1) {
            this.data[index] = todoItem;
        }
    }
    terminateTodoItem(id: number) {
        const index = this.data.findIndex(item => item.id === id);
        this.data[index].status = 'completed';
    }
}