import { Input, InputElement } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <InputGroup
      startElement={<LuSearch />}
      ml={{ lg: "30px", base: 0 }}
      mr={{ lg: "20px", base: 0 }}
      width={"100%"}
      flex={"1"}
    >
      <Input
        onSubmit={(value) => {
          console.log(value);
        }}
        size={{ lg: "lg", base: "sm" }}
        width={"100%"}
        borderRadius={20}
        placeholder="Search games..."
      ></Input>
    </InputGroup>
  );
};

export default Search;
