import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);

  return (
    <HStack>
      <Text>Light</Text>
      <Switch
        colorScheme="whiteAlpha"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
