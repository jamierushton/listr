import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { Task } from "../../store/Types";

interface IProps {
  tasks: Array<Task>;
  selectTask: (taskId: number) => void;
}

class TaskList extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="list-group list-group-flush">
        {this.renderItems()}
      </div>
    );
  }

  private renderItems() {
    return this.props.tasks.map(item => {
      return (
        <TaskItem
          key={item.id}
          task={item}
          onClick={(task: Task) => this.props.selectTask(task.id)}
        />
      );
    });
  }
}

export default TaskList;
