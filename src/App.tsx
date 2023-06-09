import React, { useState } from "react";
import { Task1 } from "./Task1";
import { Task2 } from "./Task2";
import "./styles.scss";

enum Task {
  CUSTOM_TABLE = "table",
  REACT_FLOW = "reactflow",
}

function App() {
  const [task, setTask] = useState<Task>(Task.CUSTOM_TABLE);

  return (
    <div className="App">
      <div className="tasks-container">
        <div
          className="tasks-container__link"
          onClick={() => setTask(Task.CUSTOM_TABLE)}
        >
          Задание 1
        </div>
        <div
          className="tasks-container__link"
          onClick={() => setTask(Task.REACT_FLOW)}
        >
          Задание 2
        </div>
      </div>
      {task === Task.CUSTOM_TABLE && <Task1 />}
      {task === Task.REACT_FLOW && <Task2 />}
    </div>
  );
}

export default App;
