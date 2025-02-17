import { Box, HStack, Icon, Image, Link, Text } from "@chakra-ui/react";
import logo from "../assets/game.webp";
import ColorSwitch from "./colorSwitch";
import { FaHouseChimney } from "react-icons/fa6";
import Search from "./Search";

interface Props {
  click: () => void;
}

const NavBar = ({ click }: Props) => {
  return (
    <HStack justifyContent="space-between" padding={"10px"}>
      <HStack>
        <Image src={logo} height="60px" borderRadius={"20px"} />
        <Link onClick={() => click()}>
          <Icon display={{ base: "none", lg: "block" }} size={"2xl"}>
            <FaHouseChimney />
          </Icon>
        </Link>
      </HStack>
      <Search />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
