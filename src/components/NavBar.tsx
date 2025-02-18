import { HStack, Icon, Image, Link } from "@chakra-ui/react";
import logo from "../assets/game.webp";
import ColorSwitch from "./colorSwitch";
import { FaHouseChimney } from "react-icons/fa6";
import Search from "./Search";

interface Props {
  click: () => void;
  onSearch: (value: string) => void;
}

const NavBar = ({ click, onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding={"10px"}>
      <HStack>
        <Image src={logo} height="60px" borderRadius={"20px"} />
        <Link paddingRight={{ lg: "20px", base: 0 }} onClick={() => click()}>
          <Icon display={{ base: "none", lg: "block" }} size={"2xl"}>
            <FaHouseChimney />
          </Icon>
        </Link>
      </HStack>
      <Search onSearch={(value) => onSearch(value)} />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
