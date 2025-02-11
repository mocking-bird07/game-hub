import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} height="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
