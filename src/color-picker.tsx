import React from "react";
import { Flex, Input, Box } from "@chakra-ui/react";

interface Props {
  color: string;
  onChange: (newColor: string) => void;
}

export const ColorPicker: React.FC<Props> = (props) => {
  let { color, onChange } = props;

  return (
    <Flex justify="stretch">
      <Input value={color} onChange={(evt) => onChange(evt.target.value)} />
      <Box
        backgroundColor={color}
        w={16}
        h={10}
        borderRadius={4}
        marginLeft={4}
        border="2px solid #000000"
      ></Box>
    </Flex>
  );
};
