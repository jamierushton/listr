import { Container } from "unstated";
import { TasksState } from "./Types";

export class TaskStateContainer extends Container<TasksState> {
  constructor(props = {}) {
    super();
    this.state = {
      tasks: [
        { id: -1, text: "add way to delete tasks", isCompleted: false },
        { id: -2, text: "add a backend to actually persist tasks", isCompleted: false },
        { id: -3, text: "a completed task", isCompleted: true },
      ],
      lastId: 0
    };
  }

  percentComplete = () => {
    let total = this.state.tasks.length;
    let completed = this.state.tasks.filter(task => task.isCompleted).length;

    return Math.round((completed / total) * 100) | 0;
  };

  addTask = (newTask: string) => {
    newTask = newTask.trim();

    if (newTask === "")
      return;

    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: this.state.lastId++, text: newTask, isCompleted: false }
      ]
    });
  };

  markTask = (taskId: number) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id !== taskId) return task;

        return { ...task, isCompleted: !task.isCompleted };
      })
    });
  };
}
