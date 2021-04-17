import React from "react";
import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

interface Props {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
  max: number;
  min?: number;
}

export const NumberInput: React.FC<Props> = (props) => {
  let { label, value, onChange, max, min = 0 } = props;

  return (
    <ChakraNumberInput
      aria-label={label}
      value={value}
      onChange={(txt, val) => {
        if (val < min) {
          onChange(min);
        } else if (val > max) {
          onChange(max);
        } else {
          onChange(val);
        }
      }}
      max={max}
      min={min}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
};
