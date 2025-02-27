import { HStack, Image } from "@chakra-ui/react";
import ColorSwitch from "../../src/components/colorSwitch";
import "../index.css";

const Homenav = () => {
  return (
    <div>
      <HStack className="homenav">
        <a href="src\home\Home.html">
          <Image
            borderRadius={"50px"}
            w={"50px"}
            h={"50px"}
            src="src\assets\dog.png"
          />
        </a>
      </HStack>
    </div>
  );
};

export default Homenav;
