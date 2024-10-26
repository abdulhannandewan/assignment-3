import { useReducer } from "react";

import Content from "./Content";

import { TaskContext } from "./Reducers/taskContext";

import { initialState, taskReducer } from "./Reducers/taskReducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <Content />
      <ToastContainer />
    </TaskContext.Provider>
  );
};

export default App;
