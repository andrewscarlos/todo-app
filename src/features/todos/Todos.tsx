import * as React from "react";
import { useGetAllTodosQuery, useGetTodoByIdQuery } from "../api";

export const Todos = () => {
  const { data = [], isLoading } = useGetAllTodosQuery(1);
  const {} = useGetTodoByIdQuery(1);
  const tableStyle = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
  };
  return (
    <>
      <h1>Todos</h1>
      <hr />
      <h4> IsLoading : {isLoading ? "true" : "false"}</h4>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableStyle}>Id</th>
            <th style={tableStyle}>Status</th>
            <th style={tableStyle}>Title</th>
            <th style={tableStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo) => (
            <tr key={todo.id}>
              <td style={tableStyle}>{todo.id}</td>{" "}
              <td style={tableStyle}>{todo.completed ? "DONE" : "PENDING"}</td>{" "}
              <td style={tableStyle}>{todo.title}</td>{" "}
              <td style={tableStyle}>
                {" "}
                <button>
                  {" "}
                  {todo.id % 2 === 0 ? "Excluir" : "Editar"}
                </button>{" "}
              </td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul>
        {data.map((el) => (
          <li key={el.id}>
            <p> {el.id}</p>
            <strong> {el.completed ? "DONE" : "PENDING"}</strong> {el.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
