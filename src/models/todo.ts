import { ITodo } from "@/interface/todo";
import { useCallback, useEffect, useState } from "react";

export default () => {
  const [ todoList, setTodoList ] = useState<ITodo[]>([]);

  useEffect(()=>{
    const originTodo = localStorage.getItem('todo-list');
    if (originTodo) {
      setTodoList(JSON.parse(originTodo));
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('todo-list', JSON.stringify(todoList));
  }, [todoList])

  return {
    todoList,
    setTodoList: (list: ITodo[]) => {
      setTodoList(list)
    }
  };
};
