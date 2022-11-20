import {
  Button,
  Textarea,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  InputGroup,
  InputLeftAddon,
  Input,
  Spacer,
  RadioGroup,
  Stack,
  Radio,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { RADIO_ITEMS } from "../constants/RADIO_ITEMS";
import { currentDate } from "../utils/date";

export const AddButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((data: FieldValues) => {
    console.log(data);
    onClose();
  });

  return (
    <>
      <Button onClick={onOpen}>AddTodo</Button>

      {/* モーダル */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>タスクを作成</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={onSubmit}>
            <ModalBody display="flex" flexFlow="column" gap="4">
              <Textarea
                placeholder="input your task"
                focusBorderColor={errors.content && "red.200"}
                {...register("content", {
                  required: { value: true, message: "必須の項目です" },
                })}
              />

              <RadioGroup defaultValue={RADIO_ITEMS[0].title}>
                <Stack spacing={2} direction="column">
                  {RADIO_ITEMS.map((item, index) => (
                    <Box key={`radio-item-${index}`}>
                      <Radio
                        colorScheme={item.color}
                        value={item.title}
                        {...register("category")}
                      >
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
                  defaultValue={currentDate()}
                  {...register("dueDate", {
                    required: { value: true, message: "必須の項目です" },
                    validate: (value) => value > currentDate,
                  })}
                />
              </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button minW="100%" colorScheme="whatsapp" type="submit">
                CREATE
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
