import React, { Component } from "react";

interface IProps {
  onAdd: (task: string) => void;
}

interface IState {
  taskInput: string;
}

class AddTask extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      taskInput: ""
    };
  }

  render() {
    return (
      <div className="form-group row justify-content-md-center">
        <div className="col-9">
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Start typing a new task"
              value={this.state.taskInput}
              onChange={e => this.handleOnChange(e)}
              onKeyUp={e => this.handleKeyPress(e)}
            />

            <div className="input-group-append">

              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => this.createTask()}
              >
                Add
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  }

  private createTask() {
    this.props.onAdd(this.state.taskInput);
    this.setState({
      taskInput: ""
    });
  }

  private handleKeyPress(e: any): void {
    this.handleOnChange(e);
    if (e.keyCode === 13) this.createTask();
  }

  private handleOnChange(e: any): void {
    this.setState({
      taskInput: e.target.value
    });
  }
}

export default AddTask;
