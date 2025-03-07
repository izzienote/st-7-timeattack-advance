import { useNavigate } from "react-router-dom";

export default function TodoList({ data }) {
  const navigate = useNavigate();
  return (
    <ul style={{ listStyle: "none", width: 250 }}>
      {data.map((todo) => (
        <li
          key={todo.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{todo.title}</h3>
          <button onClick={() => navigate(`/detail/${todo.id}`)}>
            내용보기
          </button>
        </li>
      ))}
    </ul>
  );
}
