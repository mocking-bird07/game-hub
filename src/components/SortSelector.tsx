import React from "react";
import { css } from "@emotion/react";
import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Portal,
} from "@chakra-ui/react";

interface Props {
  onchange?: (value: string) => void | undefined;
  selectedPlatform?: string;
}

const SortSelector = ({ onchange, selectedPlatform }: Props) => {
  return (
    <MenuRoot size={"md"} onSelect={(value) => onchange(value?.value)}>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance
        </Button>
      </MenuTrigger>

      <MenuContent
        position="absolute"
        zIndex="popover"
        top={"100%"}
        w={"157px"}
        ml={"175px"}
      >
        <MenuItem value="relevancer">Relevance</MenuItem>
        <MenuItem value="release-date">Relase date</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="average-rating">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
