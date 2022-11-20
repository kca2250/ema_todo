import {
  Card,
  CardBody,
  Text,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Textarea,
  Radio,
  RadioGroup,
  Stack,
  Box,
  InputGroup,
  InputLeftAddon,
  Input,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { RADIO_ITEMS } from "../constants/RADIO_ITEMS";
import { Categories } from "../constants/types";

export const TodoCard: React.FC<{
  content: string;
  dueDate: string;
  category: Categories;
}> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card
        m={3}
        maxW="xs"
        backgroundColor="white"
        height="auto"
        onClick={onOpen}
      >
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>タスクを編集</ModalHeader>
          <ModalCloseButton />
          <form>
            <ModalBody display="flex" flexFlow="column" gap="4">
              <Textarea
                placeholder="input your task"
                defaultValue={props.content}
              />

              <RadioGroup defaultValue={props.category}>
                <Stack spacing={2} direction="column">
                  {RADIO_ITEMS.map((item, index) => (
                    <Box key={`radio-item-${index}`}>
                      <Radio colorScheme={item.color} value={item.title}>
                        {item.title}
                      </Radio>
                      <Text opacity={0.8} fontSize="xs">
                        {item.description}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </RadioGroup>

              <InputGroup>
                <InputLeftAddon children="期限日" />
                <Input
                  maxWidth="fit-content"
                  type="date"
                  defaultValue={props.dueDate}
                />
              </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button minW="100%" colorScheme="orange" type="submit">
                EDIT TASK
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
