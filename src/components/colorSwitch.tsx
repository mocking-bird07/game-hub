import { HStack } from "@chakra-ui/react";
import React from "react";
import { Switch } from "@/components/ui/switch";
import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode";

const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorPalette={"green"}
      >
        Dark mode
      </Switch>
    </HStack>
  );
};

export default ColorSwitch;
