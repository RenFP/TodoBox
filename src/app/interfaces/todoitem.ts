export interface ITodoItem {
  id: number | undefined;
  name: string | undefined;
  dateTask: string | any;
  startTask: Date | undefined;
  endTask: Date | undefined;
  status: string | undefined;
}