import { useState } from "react";
import Task from "./Task";

const TaskList = ({ taskName, task }) => {
  const [isSorted, setIsSorted] = useState(false);

  let textColor = "";
  let bgColor = "";
  let sortedList = [];

  switch (taskName) {
    case "To-Do":
      textColor = "text-indigo-500";
      bgColor = "bg-indigo-600";
      break;
    case "On Progress":
      textColor = "text-yellow-500";
      bgColor = "bg-yellow-500";
      break;
    case "Done":
      textColor = "text-teal-500";
      bgColor = "bg-teal-500";
      break;
    case "Revised":
      textColor = "text-rose-500";
      bgColor = "bg-rose-500";
      break;
    default:
      return;
  }

  const getSortListByDate = (taskList) => {
    return taskList
      .filter((task) => task.category === "to-do")
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  if (isSorted) {
    sortedList = getSortListByDate(task);
  }
  console.log(sortedList);

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className={`rounded-lg ${bgColor} p-4`}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {taskName} ({task.length})
          </h3>
          <div onClick={() => setIsSorted(!isSorted)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l9 0" />
              <path d="M4 12l7 0" />
              <path d="M4 18l7 0" />
              <path d="M15 15l3 3l3 -3" />
              <path d="M18 6l0 12" />
            </svg>
          </div>
        </div>
        {isSorted && sortedList > 0 ? (
          <div>
            {sortedList.length > 0 ? (
              sortedList.map((item) => (
                <Task key={item.id} item={item} textColor={textColor} />
              ))
            ) : (
              <p>No task Found</p>
            )}
          </div>
        ) : (
          <div>
            {task.length > 0 ? (
              task.map((item) => (
                <Task key={item.id} item={item} textColor={textColor} />
              ))
            ) : (
              <p>No task Found</p>
            )}
          </div>
        )}

        {/* <!-- Add more task cards here --> */}
      </div>
    </div>
  );
};

export default TaskList;
