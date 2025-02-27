import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";
import { useColorMode } from "@/components/ui/color-mode";

interface Props {
  onSearch: (value: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const { colorMode } = useColorMode();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current != undefined) {
          onSearch(ref.current.value);
        }
      }}
      style={{ width: "100%" }}
    >
      <InputGroup
        startElement={
          <LuSearch
            color={colorMode === "dark" ? "rgb(223, 18, 137)" : "purple"}
          />
        }
        ml={{ lg: "10px", base: 0 }}
        mr={{ lg: "20px", base: 0 }}
        width={"100%"}
        flex={"1"}
      >
        <Input
          onSubmit={(value) => {
            console.log(value);
          }}
          ref={ref}
          size={{ lg: "lg", base: "sm" }}
          width={"100%"}
          background={colorMode === "dark" ? "rgb(63, 7, 40)" : "purple.200"}
          colorPalette={colorMode === "dark" ? "rgb(223, 18, 137)" : "purple"}
          borderColor={colorMode === "dark" ? "rgb(223, 18, 137)" : "purple"}
          borderRadius={20}
          borderWidth={"1px"}
          placeholder="Search games..."
        ></Input>
      </InputGroup>
    </form>
  );
};

export default Search;
