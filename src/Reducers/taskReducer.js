import { ADD_TASK, DELETE_TASK, SEARCH_TASK, EDIT_TASK } from "./actions";

const initialState = {
  tasks: [],
  searchTask: "",
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case SEARCH_TASK:
      return { ...state, searchTask: action.payload };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: [...state.tasks],
      };
    default:
      throw new Error(`No matching "${action.type}" - action type`);
  }
};

export { initialState, taskReducer };
