import { HStack, Icon, Image, Link } from "@chakra-ui/react";
import logo from "../assets/game.webp";
import ColorSwitch from "./colorSwitch";
import { FaHouseChimney } from "react-icons/fa6";
import Search from "./Search";
import { useColorMode } from "@/components/ui/color-mode";

interface Props {
  click: () => void;
  onSearch: (value: string) => void;
}

const NavBar = ({ click, onSearch }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <HStack
      justifyContent="space-between"
      paddingX={"10px"}
      paddingTop={"10px"}
      paddingBottom={0}
    >
      <HStack>
        <Image src={logo} height="60px" borderRadius={"20px"} />
        <Link
          className={colorMode === "dark" ? "butto" : ""}
          paddingRight={{ lg: "20px", base: 0 }}
          onClick={() => click()}
        >
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
