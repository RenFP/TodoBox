

export interface ITodoItem {
  id?: number | undefined;
  name: string | undefined;
  dateTask: string | undefined;
  startTask: Date | undefined;
  endTask: Date | undefined;
  status?: string | undefined;
  emojiTask: string | undefined;
}
