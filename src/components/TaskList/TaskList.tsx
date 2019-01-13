import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { Task } from "../../store/Types";
import { Subscribe } from "unstated";
import { TaskStateContainer } from "../../store/TaskStateContainer";
import ProgressBar from "../ProgressBar";

class TaskList extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Subscribe to={[TaskStateContainer]}>
        {(stateContainer: TaskStateContainer) => (
          <div>
            <ProgressBar value={stateContainer.percentComplete()} />

            <div className="list-group list-group-flush">
              {this.renderItems(stateContainer)}
            </div>
          </div>
        )}
      </Subscribe>
    );
  }

  private renderItems(stateContainer: TaskStateContainer) {
    return stateContainer.state.tasks.map(item => {
      return (
        <TaskItem
          key={item.id}
          task={item}
          onClick={(task: Task) => stateContainer.markTask(task.id)}
        />
      );
    });
  }
}

export default TaskList;
