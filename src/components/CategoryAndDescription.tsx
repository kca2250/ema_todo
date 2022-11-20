import { Button, Flex, Heading, Tooltip } from "@chakra-ui/react";
import { BsQuestionCircle } from "react-icons/bs";
import { TITLE_AND_DESCRIPTION } from "../constants/types";

type Props = TITLE_AND_DESCRIPTION;

export const CategoryAndDescription: React.FC<Props> = (props) => {
  return (
    <Flex alignItems="flex-end" justifyContent="space-between" padding="3">
      <Heading as="h2" color="white">
        {props.category}
      </Heading>
      <Tooltip
        hasArrow
        label={props.description}
        placement="left"
        bg="gray.700"
        color="white"
      >
        <Button variant="unstyled">
          <BsQuestionCircle size="1.3em" />
        </Button>
      </Tooltip>
    </Flex>
  );
};
