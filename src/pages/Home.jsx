import { useQuery, useQueryClient } from "@tanstack/react-query";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { getTodoData } from "../api/todos";

export default function Home() {
  // TODO: 필수: useQuery 로 리팩터링 하세요.
  const queryClient = useQueryClient();

  const {
    data: todoData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodoData,
    retry: 1,
  });
  //데이터는 배열로 가져와짐
  // console.log(todoData);

  if (isPending) {
    return <div>로딩중입니다</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  // TODO: 선택: useQuery 로 리팩터링 후, 커스텀훅 useTodosQuery 로 정리해 보세요.

  return (
    <>
      <h2>서버통신 투두리스트 by useState</h2>
      <TodoForm data={todoData} />
      <div>{!isError ? "에러 없음" : "에러 있음"}</div>
      <TodoList data={todoData} />
    </>
  );
}
