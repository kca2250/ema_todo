import {
  Flex,
  Heading,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  useDisclosure,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useRef } from "react";
import { AddButton } from "../components/AddButton";
import { auth } from "../firebase/config";
import { useAuth } from "../firebase/utils/auth";

export const Header: React.FC = () => {
  const user = auth.currentUser;
  const name = user?.displayName as string;
  const photoUrl = user?.photoURL as string;
  const email = user?.email as string;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useAuth();
  const btnRef = useRef(null);

  return (
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
          <Avatar size="sm" name={name} src={photoUrl} onClick={onOpen} />
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />

          <DrawerBody>
            <Text mt="10px">
              <code style={{ backgroundColor: "whitesmoke" }}>{email}</code>
              でログイン中
            </Text>
          </DrawerBody>
          <Divider />
          <DrawerFooter>
            <Button
              minW="100%"
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={() => {
                logout();
                onClose();
              }}
            >
              ログアウト
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
};
