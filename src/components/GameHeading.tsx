import { Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  platform: string | undefined;
  genre: string | undefined;
}

const GameHeading = ({ platform, genre }: Props) => {
  return (
    <Heading marginY={10} fontSize={"5xl"} as={"h1"}>
      {platform === "PC (Windows), Web Browser"
        ? "Web browser and PC "
        : platform === "Web Browser"
        ? "Web browser "
        : platform === "PC (Windows)"
        ? "PC "
        : ""}
      {genre === "Action Game"
        ? "Action Games"
        : genre === "Card Game"
        ? "Card Games"
        : genre === ""
        ? ""
        : genre + " "}
      {genre !== "Action Game" && genre !== "Card Game" && "Games"}
    </Heading>
  );
};

export default GameHeading;
