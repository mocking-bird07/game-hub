import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

interface Props {
  onchange: (value: string) => void | undefined;
  selectedPlatform: string;
}

const ChosePlatform = ({ onchange, selectedPlatform }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <MenuRoot size={"md"} onSelect={(value) => onchange(value.value)}>
      <MenuTrigger as={"button"}>
        <Button
          variant="surface"
          colorPalette={colorMode === "dark" ? "cyan" : "purple"}
          size="sm"
        >
          {selectedPlatform}
        </Button>
      </MenuTrigger>

      <MenuContent position="absolute" zIndex="popover" top={"100%"}>
        <MenuItem value="All">All games</MenuItem>
        <MenuItem value="PC (Windows), Web Browser">
          Both PC and Browser
        </MenuItem>
        <MenuItem value="Web Browser">Browser games</MenuItem>
        <MenuItem value="PC (Windows)">PC Windows games</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default ChosePlatform;
