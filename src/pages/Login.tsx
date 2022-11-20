import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => {
  return (
    <Center
      margin="auto"
      marginTop="-32"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box padding="7" border="1px solid rgb(231 231 231)" borderRadius="md">
        <Heading as="h2" size="lg" mb="4">
          emtodo
        </Heading>
        <Text opacity="0.7">
          emtodoはアイゼンハワーマトリクスに基づいてタスクを管理できるWebアプリです
        </Text>

        <Flex alignItems="center" mt="10" justifyContent="space-between">
          <Flex color="twitter.800" opacity="0.6" gap="4">
            <Link to="#">利用規約</Link>
            <Link to="#">プライバシーポリシー</Link>
          </Flex>

          <Button leftIcon={<FcGoogle size="1.2em" />} color="ActiveBorder">
            Login with Google
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};
