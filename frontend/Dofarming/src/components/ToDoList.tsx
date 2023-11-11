import React from 'react';
import { Check as CheckIcon } from '@tamagui/lucide-icons';
import {
  Checkbox,
  CheckboxProps,
  Label,
  SizeTokens,
  XStack,
  YStack,
} from 'tamagui';

export function ToDoList() {
  const [checked, setChecked] = React.useState([0, 1, 2]);
  return (
    <YStack
      width={'90%'}
      alignItems='center'
      space='$2'
      borderWidth={1}
      borderRadius='$4'
      backgroundColor='$background'
      borderColor='$borderColor'
      mt={10}
      padding='$2'
    >
      <CheckboxWithLabel size='$4' label='hello' defaultChecked />
      <CheckboxWithLabel size='$4' label='hello2' defaultChecked />
      <CheckboxWithLabel size='$4' label='hello3' defaultChecked />
    </YStack>
  );
}

export function CheckboxWithLabel({
  size,
  label,
  ...checkboxProps
}: CheckboxProps & { size: SizeTokens; label?: string }) {
  const id = `${label}-checkbox}`;
  return (
    <XStack width={300} alignItems='center' space='$4'>
      <Checkbox id={id} size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox>

      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}
