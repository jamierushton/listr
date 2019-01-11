import React, { Component } from "react";
import "./scss/listr.scss";
import AddTask from "./components/AddTask";
import ProgressBar from "./components/ProgressBar";
import TaskList from "./components/TaskList";
import { Provider, Subscribe } from "unstated";
import { TaskStateContainer } from "./store/TaskStateContainer";
import { Task } from "./store/Types";

const app_name: string = "listr";

interface State {
  tasks: Array<Task>;
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md fixed-top">
          <a className="navbar-brand" href="#">
            {app_name}
          </a>
        </nav>

        <main role="main">
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-2">unclutter you life with {app_name}</h1>
              <p>
                Probably some super snazzy strapline telling people how life can
                feel overwhelming amd that it doesn’t have to.&nbsp;
                {app_name} lets you keep track of everything in one place, so
                you can get it all done and enjoy more peace of mind along the
                way.
              </p>
            </div>
          </div>

          <Provider>
            <Subscribe to={[TaskStateContainer]}>
              {(stateContainer: TaskStateContainer) => (
                <div className="container">
                  <AddTask onAdd={stateContainer.addTask} />

                  <hr />

                  {stateContainer.state.tasks.length > 0 && (
                    <div>
                      <div className="row justify-content-md-center">
                        <div className="col-md-9">
                          <ProgressBar
                            value={stateContainer.percentComplete()}
                          />
                        </div>
                      </div>

                      <div className="row justify-content-md-center">
                        <div className="col-md-9">
                          <TaskList
                            tasks={stateContainer.state.tasks}
                            selectTask={stateContainer.markTask}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Subscribe>
          </Provider>
        </main>
      </div>
    );
  }
}

export default App;
