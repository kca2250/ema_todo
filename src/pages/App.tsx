import { Grid, GridItem } from "@chakra-ui/react";
import { TitleAndDescription } from "../components/TitleAntDesc";
import { TodoCard } from "../components/TodoCard";
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
          <TitleAndDescription
            title="Do"
            description="期限や影響があるタスク"
          />
          <TodoCard content="this is todo item" />
        </GridItem>
        <GridItem colSpan={2} bg="#6464d5">
          <TitleAndDescription
            title="Decide"
            description="長期的成功に関わる、期限が不明確なタスク"
          />
        </GridItem>
        <GridItem colSpan={2} bg="#f7c15f">
          <TitleAndDescription
            title="Delegate"
            description="自分のスキルを必要としないが、こなさなければならないタスク"
          />
        </GridItem>
        <GridItem colSpan={2} bg="#fb7b7b">
          <TitleAndDescription
            title="Delete"
            description="気が散るようなことや、不必要なタスク"
          />
        </GridItem>
      </Grid>
    </Layouts>
  );
}

export default App;
