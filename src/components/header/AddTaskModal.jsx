import { useContext, useState } from "react";
import { TaskContext } from "../../Reducers/taskContext";
import { ADD_TASK } from "../../Reducers/actions";
import { toast } from "react-toastify";

const AddTaskModal = ({ handleIsOpen }) => {
  const { state, dispatch } = useContext(TaskContext);
  console.log(state, dispatch);

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("To-Do");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName && description && dueDate) {
      const newTask = {
        id: crypto.randomUUID(),
        taskName,
        description,
        dueDate,
        category,
      };
      dispatch({ type: ADD_TASK, payload: newTask });
      toast.success("New task added");
    } else {
      toast.warn("Please add neccesary information", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            Create Task
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="taskName"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Task Name
              </label>
              <input
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                type="text"
                id="taskName"
                name="taskName"
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                name="description"
                rows="3"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Due Date
              </label>
              <input
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                type="date"
                id="dueDate"
                name="dueDate"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="category"
                name="category"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="todo">To-Do</option>
                <option value="inprogress">On Progress</option>
                <option value="done">Done</option>
                <option value="revised">Revised</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={handleIsOpen}
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTask}
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
