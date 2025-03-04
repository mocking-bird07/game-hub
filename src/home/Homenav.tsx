import { HStack, Image } from "@chakra-ui/react";
import "../index.css";

const Homenav = () => {
  return (
    <div>
      <HStack className="homenav">
        <Image
          borderRadius={"50px"}
          w={"50px"}
          h={"50px"}
          src="src\assets\dog.png"
        />
      </HStack>
    </div>
  );
};

export default Homenav;
