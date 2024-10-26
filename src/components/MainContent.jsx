import { useContext, useState } from "react";
import Header from "./header/Header";
import TaskList from "./TaskList/TaskList";
import TopBar from "./TopBar";
import { TaskContext } from "../Reducers/taskContext";

const MainContent = () => {
  const { state, dispatch } = useContext(TaskContext);

  const filterTask = (taskType) =>
    state.tasks.filter((task) => task.category == taskType);

  const todos = filterTask("todo");
  const onProgress = filterTask("inprogress");
  const done = filterTask("done");
  const revised = filterTask("revised");

  // Sorted tasks

  //  const sortedTodos = sortByDate(todos);

  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden">
      {/* <!-- Top Bar --> */}
      <TopBar />

      {/* <!-- Project Content --> */}
      <div className="mx-auto max-w-7xl p-6">
        <Header />

        <div className="-mx-2 mb-6 flex flex-wrap">
          {/* <!-- Todo --> */}
          <TaskList taskName={"To-Do"} task={todos} />

          {/* <!-- On Progress --> */}
          <TaskList taskName={"On Progress"} task={onProgress} />

          {/* <!-- Done --> */}
          <TaskList taskName={"Done"} task={done} />

          {/* <!-- Revised --> */}
          <TaskList taskName={"Revised"} task={revised} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
