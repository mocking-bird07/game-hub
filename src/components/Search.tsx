import { Input, InputElement } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";

interface Props {
  onSearch: (value: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

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
        startElement={<LuSearch />}
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
          borderRadius={20}
          placeholder="Search games..."
        ></Input>
      </InputGroup>
    </form>
  );
};

export default Search;
