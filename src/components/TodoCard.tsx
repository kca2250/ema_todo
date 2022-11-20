import { Card, CardBody, Text } from "@chakra-ui/react";

export const TodoCard: React.FC<{
  content: string;
  dueDate: string;
}> = (props) => {
  return (
    <Card m={3} maxW="xs" backgroundColor="white" height="auto">
      <CardBody
        p={4}
        cursor="pointer"
        onClick={() => console.log(props.content)}
      >
        {props.content}
        <Text fontSize="sm" opacity="0.4">
          期限日：{props.dueDate}
        </Text>
      </CardBody>
    </Card>
  );
};
