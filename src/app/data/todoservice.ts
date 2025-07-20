import { Injectable } from "@angular/core";
import { ITodoItem } from "../interfaces/todoitem";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    data: ITodoItem[] = [
        {
            id: 0,
            name: 'Comprar pão',
            dateTask: '2025-07-20T00:00:00.000Z',
            timeTask: '08:00 - 09:00',
            emojiTask: '🍞',
        },
        {
            id: 1,
            name: 'Reunião com equipe',
            dateTask: '2025-07-21T00:00:00.000Z',
            timeTask: '10:30 - 11:30',
            emojiTask: '📅',
        },
        {
            id: 2,
            name: 'Ir à academia',
            dateTask: '2025-07-20T00:00:00.000Z',
            timeTask: '18:00 - 19:00',
            emojiTask: '🏋️',
        },
        {
            id: 3,
            name: 'Ligar para o médico',
            dateTask: '2025-07-22T00:00:00.000Z',
            timeTask: '15:00 - 15:30',
            emojiTask: '📞',
        },
        {
            id: 4,
            name: 'Estudar TypeScript',
            dateTask: '2025-07-23T00:00:00.000Z',
            timeTask: '20:00 - 22:00',
            emojiTask: '📘',
        },
        {
            id: 5,
            name: 'Assistir série',
            dateTask: '2025-07-19T00:00:00.000Z',
            timeTask: '22:00 - 23:00',
            emojiTask: '📺',
        },
        {
            id: 6,
            name: 'Meditar',
            dateTask: '2025-07-19T00:00:00.000Z',
            timeTask: '07:00 - 07:30',
            emojiTask: '🧘',
        },
        {
            id: 7,
            name: 'Fazer compras',
            dateTask: '2025-07-25T00:00:00.000Z',
            timeTask: '16:00 - 17:00',
            emojiTask: '🛒',
        },
        {
            id: 8,
            name: 'Enviar relatório',
            dateTask: '2025-07-24T00:00:00.000Z',
            timeTask: '09:00 - 09:45',
            emojiTask: '📄',
        },
        {
            id: 9,
            name: 'Levar o lixo',
            dateTask: '2025-07-19T00:00:00.000Z',
            timeTask: '19:00 - 19:15',
            emojiTask: '🗑️',
        },
    ]
    idCount = this.data.length;

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
        this.data.push({ ...item, id: this.idCount++ });
    }
    updateTodoItem(item: ITodoItem) {
        const index = this.data.findIndex(item => item.id === item.id);
        if (index !== -1) {
            this.data[index] = item;
        }
    }
}