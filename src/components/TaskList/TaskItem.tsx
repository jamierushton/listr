import React, { Component } from "react"
import { Task } from "../../store/Types";

interface IProps {
  task: Task,
  onClick: (task: Task) => void
}

class TaskItem extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <a
        onClick={() => this.props.onClick(this.props.task)}
        className={
          "list-group-item list-group-item-action " + this.statusClass()
        }
      >
        {this.props.task.text}
      </a>
    )
  }

  private statusClass() {
    return this.props.task.isCompleted ? "completed" : ""
  }
}

export default TaskItem
