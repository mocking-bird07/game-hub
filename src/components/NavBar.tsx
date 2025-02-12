import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game.webp";
import ColorSwitch from "./colorSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} height="60px" />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
