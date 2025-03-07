import axios from "axios";

export const todoApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const getTodoData = async () => {
  try {
    const response = await todoApi.get("/todos");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const createTodoData = async (newTodo) => {
  try {
    const response = await todoApi.post("/todos", newTodo);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getTodoDetail = async (id) => {
  try {
    const response = await todoApi(`/todos/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}