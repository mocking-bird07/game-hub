import games from "@/services/games";
import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import actionMultiplayer from "../assets/action multiplayer.webp";
import actionGame from "../assets/actionGame.webp";
import shooter from "../assets/shooter.webp";
import strategy from "../assets/strategy game icon.webp";
import actionRPG from "../assets/shadow of a warrior on midnight.webp";
import battleRoyale from "../assets/battleroyale.webp";
import fight from "../assets/two fighters facing each other with torn clothes in an intense and realistic fighting game.webp";
import multiplayerBattle from "../assets/intense and thrilling multiplayer battle game icon.webp";
import card from "../assets/a man in a suit with a neck tattoo, holding cards at a casino table, smoking.webp";
import sport from "../assets/A basketball player with cornrow hair, wearing a white jersey and a hairband, spinning the ball on his finger with a neck tattoo, straight view, and teeth made of diamonds.webp";
import onlineMultiplayer from "../assets/A teenager sitting on a gaming chair in a very dark room, playing on three TV screens.webp";
import race from "../assets/realistic icon for racing game with backview of a red Ferrari with the backlight turned on and in a fierce race at night with crashing and fire.webp";
import social from "../assets/two teenagers playing with less colors.webp";
import fantasy from "../assets/a bald warrior wearing a fur but naked around his chest with a mad face riding a scary dragon by front view on night.webp";
import "../index.css";
import { useColorMode } from "@/components/ui/color-mode";

interface Props {
  click: (genre: string) => void;
  weight: string | undefined;
}

const GameGenre = ({ click, weight }: Props) => {
  let gameGenre = [];
  let ug = [""];
  const { colorMode } = useColorMode();

  games.forEach((g) => {
    if (g.release_date === undefined) {
      console.log(g);
    }
  });

  gameGenre = games.map((game) => game.genre);
  gameGenre.forEach((g) => {
    if (ug.includes(g) === false) {
      ug.push(g);
    }
  });
  ug?.splice(0, 1);

  let p = [
    { name: "Action Multiplayer", image: actionMultiplayer },
    { name: "Shooter", image: shooter },
    { name: "Strategy", image: strategy },
    { name: "Action RPG", image: actionRPG },
    { name: "Battle Royale", image: battleRoyale },
    { name: "Fighting", image: fight },
    { name: "Multiplayer battle", image: multiplayerBattle },
    { name: "Card Game", image: card },
    { name: "Action Game", image: actionGame },
    { name: "Sports", image: sport },
    { name: "Online Multiplayer", image: onlineMultiplayer },
    { name: "Racing", image: race },
    { name: "Social", image: social },
    { name: "Fantasy", image: fantasy },
  ];

  return (
    <>
      <Heading ml={"20px"} marginBottom={3} fontSize={"2xl"}>
        Genres
      </Heading>
      <Box className={colorMode === "dark" ? "genre" : "genre2"}>
        {p.map((po) => (
          <HStack
            key={po.name}
            onClick={() => click(po.name)}
            whiteSpace={"nowrap"}
            className={
              colorMode === "dark"
                ? weight !== undefined
                  ? po.name === weight
                    ? "realGenre2"
                    : "realGenre"
                  : "realGenre"
                : weight !== undefined
                ? po.name === weight
                  ? "realGenreLight2"
                  : "realGenreLight"
                : "realGenreLight"
            }
          >
            <Image borderRadius="5px" boxSize={"32px"} src={po.image} />
            <Text fontSize={"lg"}> {po.name}</Text>
          </HStack>
        ))}
      </Box>
    </>
  );
};

export default GameGenre;
