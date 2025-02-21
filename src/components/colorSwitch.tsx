import { Icon } from "@chakra-ui/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { useColorMode } from "@/components/ui/color-mode";
import { IoMdSunny } from "react-icons/io";

const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      {colorMode === "dark" ? (
        <Icon
          className="sun"
          onClick={toggleColorMode}
          ml={"20px"}
          size={"2xl"}
        >
          <IoMdSunny color="yellow" />
        </Icon>
      ) : (
        <Icon
          className="moon"
          onClick={toggleColorMode}
          ml={"20px"}
          size={"2xl"}
        >
          <BsMoonStarsFill />
        </Icon>
      )}
    </>
  );
};

export default ColorSwitch;
