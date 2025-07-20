import { ITodoItem } from "../interfaces/todoitem";

const data: ITodoItem[] = [
  {
    name: 'Comprar pão',
    dateTask: '2025-07-20T00:00:00.000Z',
    timeTask: '08:00 - 09:00',
    emojiTask: '🍞',
  },
  {
    name: 'Reunião com equipe',
    dateTask: '2025-07-21T00:00:00.000Z',
    timeTask: '10:30 - 11:30',
    emojiTask: '📅',
  },
  {
    name: 'Ir à academia',
    dateTask: '2025-07-20T00:00:00.000Z',
    timeTask: '18:00 - 19:00',
    emojiTask: '🏋️',
  },
  {
    name: 'Ligar para o médico',
    dateTask: '2025-07-22T00:00:00.000Z',
    timeTask: '15:00 - 15:30',
    emojiTask: '📞',
  },
  {
    name: 'Estudar TypeScript',
    dateTask: '2025-07-23T00:00:00.000Z',
    timeTask: '20:00 - 22:00',
    emojiTask: '📘',
  },
  {
    name: 'Assistir série',
    dateTask: '2025-07-19T00:00:00.000Z',
    timeTask: '22:00 - 23:00',
    emojiTask: '📺',
  },
  {
    name: 'Meditar',
    dateTask: '2025-07-19T00:00:00.000Z',
    timeTask: '07:00 - 07:30',
    emojiTask: '🧘',
  },
  {
    name: 'Fazer compras',
    dateTask: '2025-07-25T00:00:00.000Z',
    timeTask: '16:00 - 17:00',
    emojiTask: '🛒',
  },
  {
    name: 'Enviar relatório',
    dateTask: '2025-07-24T00:00:00.000Z',
    timeTask: '09:00 - 09:45',
    emojiTask: '📄',
  },
  {
    name: 'Levar o lixo',
    dateTask: '2025-07-19T00:00:00.000Z',
    timeTask: '19:00 - 19:15',
    emojiTask: '🗑️',
  },
];

export const GetTodoList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
};


