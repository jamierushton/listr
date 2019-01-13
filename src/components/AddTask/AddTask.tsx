import React, { Component } from "react";
import { Subscribe } from "unstated";
import { TaskStateContainer } from "../../store/TaskStateContainer";

interface IState {
  taskInput: string;
}

class AddTask extends Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      taskInput: ""
    };
  }

  render() {
    return (
      <Subscribe to={[TaskStateContainer]}>
        {(stateContainer: TaskStateContainer) => (

          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Start typing a new task"
              value={this.state.taskInput}
              onChange={e => this.handleOnChange(e)}
              onKeyUp={e => this.handleKeyPress(e, stateContainer)}
            />

            <div className="input-group-append">

              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => this.createTask(stateContainer)}
              >
                Add
              </button>

            </div>
          </div>

        )}
      </Subscribe>
    );
  }

  private createTask(stateContainer: TaskStateContainer) {
    stateContainer.addTask(this.state.taskInput);
    this.setState({
      taskInput: ""
    });
  }

  private handleKeyPress(e: any, stateContainer: TaskStateContainer): void {
    this.handleOnChange(e);
    if (e.keyCode === 13) this.createTask(stateContainer);
  }

  private handleOnChange(e: any): void {
    this.setState({
      taskInput: e.target.value
    });
  }
}

export default AddTask;
