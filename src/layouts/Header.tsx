import { Flex, Heading, Avatar } from "@chakra-ui/react";
import { AddButton } from "../components/AddButton";

export const Header: React.FC<{ name: string; photoURL: string }> = (props) => (
  <header
    style={{
      width: "100vw",
      height: "auto",
      padding: "6px 8px",
      borderBottom: "1px solid rgb(231 231 231)",
    }}
  >
    <Flex
      width="100%"
      height="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading as="h1" size="md">
        ema todo
      </Heading>
      <Flex gap="4" alignItems="center">
        <AddButton />
        <Avatar size="sm" name={props.name} src={props.photoURL} />
      </Flex>
    </Flex>
  </header>
);
