import React from "react";
import {
  ChakraProvider,
  Heading,
  Center,
  Container,
  Input,
  VStack,
  Box,
} from "@chakra-ui/react";

import { QRCode } from "./qrcode";
import { NumberInput } from "./numeric-input";
import { InputWrapper } from "./input-wrapper";
import { ColorPicker } from "./color-picker";

export const App: React.FC = (props) => {
  let [value, setValue] = React.useState("");
  let [width, setWidth] = React.useState(500);
  let [backgroundColor, setBackgroundColor] = React.useState("#FFFFFF00");
  let [color, setColor] = React.useState("#000000FF");
  let [margin, setMargin] = React.useState(0);

  return (
    <ChakraProvider>
      <Center>
        <Heading as="h1" size="2xl" p={16}>
          QR-Code Generator
        </Heading>
      </Center>

      <Center>
        <Container
          maxW="container.md"
          p={4}
          border="2px solid #9CA3AF"
          borderRadius={8}
        >
          <VStack spacing={4} align="stretch">
            <InputWrapper label="QR Code value or link">
              <Input
                onChange={(e) => {
                  setValue(e.target.value.trim());
                }}
              />
            </InputWrapper>

            <InputWrapper label="Image Width">
              <NumberInput
                label="image-width"
                value={width}
                max={1000}
                onChange={setWidth}
              />
            </InputWrapper>

            <InputWrapper label="Margin">
              <NumberInput
                label="image-margin"
                value={margin}
                max={25}
                onChange={setMargin}
              />
            </InputWrapper>

            <InputWrapper label="Color">
              <ColorPicker color={color} onChange={setColor} />
            </InputWrapper>

            <InputWrapper label="Background Color">
              <ColorPicker
                color={backgroundColor}
                onChange={setBackgroundColor}
              />
            </InputWrapper>
          </VStack>
        </Container>
      </Center>

      {!!value && (
        <Center>
          <Box
            m={8}
            overflow="hidden"
            border={`2px solid ${color}`}
            backgroundColor={backgroundColor}
          >
            <QRCode
              value={value}
              backgroundColor={backgroundColor}
              color={color}
              width={width}
              margin={margin}
            />
          </Box>
        </Center>
      )}
    </ChakraProvider>
  );
};
