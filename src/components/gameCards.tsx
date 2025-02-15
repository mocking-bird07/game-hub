import { Card, Image, Button, Flex } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
}

interface Games {
  game: Game;
}

const GameCard = ({ game }: Games) => {
  return (
    <Flex
      justify={{ sm: "center", md: "center" }}
      align={{ sm: "center", md: "center" }}
    >
      <Card.Root
        borderRadius={10}
        overflow={"hidden"}
        w={["100%", "100%", "100%", "100%"]}
        h={{ base: "100%", lg: "255.66px" }}
      >
        <Image src={game.thumbnail} />
        <Card.Body>
          <Card.Title mt="2" fontSize={"2xl"}>
            {game.title}
          </Card.Title>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};
export default GameCard;
