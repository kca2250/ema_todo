import { Card, CardBody, CardFooter, Text } from "@chakra-ui/react";

export const TodoCard: React.FC<{
  content: string;
  createdAt: string;
}> = (props) => {
  return (
    <Card maxW="xs" backgroundColor="white">
      <CardBody
        p="3"
        cursor="pointer"
        onClick={() => console.log(props.content)}
      >
        {props.content}
        <Text fontSize="sm" opacity="0.6">
          {props.createdAt}
        </Text>
      </CardBody>
    </Card>
  );
};
