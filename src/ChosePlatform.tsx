import React, { ReactNode, useRef } from "react";
import {
  Button,
  createListCollection,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  SelectValueChangeDetails,
  SelectValueTextProps,
} from "@chakra-ui/react";
import {
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItem,
} from "@chakra-ui/react";

interface Props {
  onchange: (value: string) => void | undefined;
  selectedPlatform: string;
}

const ChosePlatform = ({ onchange, selectedPlatform }: Props) => {
  let options = createListCollection({
    items: [
      { name: "Browser games", value: "Web Browser" },
      { name: "PC Windows games", value: " PC (Windows)" },
    ],
  });

  let ref = useRef<HTMLSpanElement>(null);
  let forchange = () => {
    if (ref.current != null) {
      console.log(ref.current);
    }
  };

  return (
    <MenuRoot size={"md"} onSelect={(value) => onchange(value.value)}>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform}
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="Web Browser">Browser games</MenuItem>
        <MenuItem value="PC (Windows)">PC Windows games</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default ChosePlatform;
