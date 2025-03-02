import { Box } from "@chakra-ui/react";
import Homebody from "./home/Homebody";
import Homenav from "./home/Homenav";

const Home = () => {
  return (
    <Box
      className="home"
      backgroundImage={{
        lg: "url('src/assets/gangpc.png')",
        base: "url('src/assets/gangtab.png')",
      }}
    >
      <Homenav />
      <Homebody />
    </Box>
  );
};

export default Home;
