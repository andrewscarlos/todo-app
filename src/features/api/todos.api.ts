import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
export const todoApiService = createApi({
  reducerPath: "todo",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getAllTodos: build.query<ITodo[], any>({
      query: () => "/todos",
    }),

    getTodoById: build.query({
      query: (id) => `/todos/${id}`,
    }),
  }),
});

export const { useGetAllTodosQuery, useGetTodoByIdQuery } = todoApiService;
