import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {}

export const Label: React.FC<Props> = (props) => {
  let { children } = props;

  return (
    <Text fontSize="lg" fontWeight="semibold">
      {children}
    </Text>
  );
};
