import { HStack } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "@/components/ui/color-mode";

const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorPalette={"green"}
        whiteSpace={"nowrap"}
        ml={"30px"}
      >
        Dark mode
      </Switch>
    </HStack>
  );
};

export default ColorSwitch;
