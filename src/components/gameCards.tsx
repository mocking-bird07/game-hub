import {
  Card,
  Image,
  Button,
  Flex,
  HStack,
  Icon,
  Text,
  Badge,
} from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";
import { FaWindows } from "react-icons/fa";
import { BsMouse, BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import noImage from "../assets/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.webp";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  critic_score: number;
}

interface Games {
  game: Game;
}

const GameCard = ({ game }: Games) => {
  let platformIdentifier = (platform: string) => {
    if (platform === "PC (Windows), Web Browser") {
      return (
        <HStack>
          <Icon color={"gray.500"}>
            <BsMouse />
          </Icon>
          <Icon color={"gray.500"}>
            <FaWindows />
          </Icon>
        </HStack>
      );
    } else if (platform === "Web Browser") {
      return (
        <Icon color={"gray.500"}>
          <BsMouse />
        </Icon>
      );
    } else if (platform === "PC (Windows)") {
      return (
        <Icon color={"gray.500"}>
          <FaWindows />
        </Icon>
      );
    }
  };

  let [imageError, iE] = useState(false);
  let imageHandler = () => {
    iE(true);
  };

  return (
    <Flex
      justify={{ sm: "center", md: "center" }}
      align={{ sm: "center", md: "center" }}
    >
      <Card.Root
        borderRadius={10}
        overflow={"hidden"}
        w={["100%", "100%", "100%", "100%"]}
        h={{ base: "100%", lg: "280px" }}
      >
        <Image
          onError={imageHandler}
          src={imageError ? noImage : game.thumbnail}
          h={imageError ? "175px" : "100%"}
          w={"600px"}
        />
        <Card.Body>
          <HStack mb={3} justifyContent="space-between">
            {platformIdentifier(game.platform)}
            <Badge
              fontSize={"14px"}
              colorPalette={"green"}
              paddingX={2}
              borderRadius={"4px"}
            >
              {game.critic_score}
            </Badge>
          </HStack>
          <Card.Title mt="2" fontSize={"2xl"}>
            {game.title}
          </Card.Title>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};
export default GameCard;
