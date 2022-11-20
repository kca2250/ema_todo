import { Grid, GridItem } from "@chakra-ui/react";
import { CategoryAndDescription } from "../components/CategoryAndDescription";
import { TodoList } from "../components/TodoList";
import { Layouts } from "../layouts";

function App() {
  return (
    <Layouts>
      <Grid
        h="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={0}
      >
        <GridItem colSpan={2} bg="#5fbd5f">
          <CategoryAndDescription
            category="Do"
            description="期限や影響があるタスク"
          />
          <TodoList category="Do" />
        </GridItem>

        <GridItem colSpan={2} bg="#6464d5" overflow="auto">
          <CategoryAndDescription
            category="Decide"
            description="長期的成功に関わる、期限が不明確なタスク"
          />
          <TodoList category="Decide" />
        </GridItem>

        <GridItem colSpan={2} bg="#f7c15f">
          <CategoryAndDescription
            category="Delegate"
            description="自分のスキルを必要としないが、こなさなければならないタスク"
          />
          <TodoList category="Delegate" />
        </GridItem>
        <GridItem colSpan={2} bg="#fb7b7b">
          <CategoryAndDescription
            category="Delete"
            description="気が散るようなことや、不必要なタスク"
          />
          <TodoList category="Delete" />
        </GridItem>
      </Grid>
    </Layouts>
  );
}

export default App;
