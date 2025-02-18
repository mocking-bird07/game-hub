import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

interface Props {
  onchange: (value: string) => void | undefined;
  selectedOrder: string;
  width: string;
}

const SortSelector = ({ onchange, selectedOrder, width }: Props) => {
  return (
    <MenuRoot size={"md"} onSelect={(value) => onchange(value?.value)}>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: {selectedOrder}
        </Button>
      </MenuTrigger>

      <MenuContent
        position="absolute"
        zIndex="popover"
        top={"100%"}
        w={"157px"}
        ml={width}
      >
        <MenuItem value="Relevance">Relevance</MenuItem>
        <MenuItem value="Release date">Release date</MenuItem>
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="Popularity">Popularity</MenuItem>
        <MenuItem value="Average rating">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
