import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { Categories, List } from "../constants/types";
import { Todos } from "../seeds/todos";
import { TodoCard } from "./TodoCard";

export const TodoList: React.FC<{
  category: Categories;
}> = (props) => {
  const [todoList, setTodoList] = useState<List>(Todos);

  const newList = todoList.filter(
    ({ category }) => category === props.category
  );
  return (
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)">
      {newList.map((item, index) => (
        <GridItem key={`todo-item-${index}`} colSpan={2}>
          <TodoCard content={item.content} dueDate={item.dueDate} />
        </GridItem>
      ))}
    </Grid>
  );
};
