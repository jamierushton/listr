import React, { Component } from "react";
import "./scss/listr.scss";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { Provider } from "unstated";
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
                massa risus. Curabitur auctor bibendum dolor sit amet dignissim.
                Donec ac lorem eu risus volutpat faucibus. Nunc fermentum in ex
                vel vehicula.
              </p>
            </div>
          </div>

          <Provider>
            <div className="container">
              <div className="form-group row justify-content-md-center">
                <div className="col-9">
                  <AddTask />
                </div>
              </div>

              <hr />

              <div className="row justify-content-md-center">
                <div className="col-md-9">
                  <TaskList />
                </div>
              </div>
            </div>
            )}
          </Provider>
        </main>
      </div>
    );
  }
}

export default App;
