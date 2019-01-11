export interface TasksState {
    tasks: Array<Task>;
    lastId: number;
}

export interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
  }
