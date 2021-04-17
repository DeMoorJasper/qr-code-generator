import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Label } from "./label";

interface Props {
  label: string;
}

export const InputWrapper: React.FC<Props> = (props) => {
  let { children, label } = props;

  return (
    <VStack spacing={2} align="stretch">
      <Label>{label}</Label>
      <Box w="100%">{children}</Box>
    </VStack>
  );
};
