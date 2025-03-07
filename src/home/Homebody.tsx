import { HStack, Text, Box, Link, Button } from "@chakra-ui/react";
import { SignIn, SignUp } from "./Forma";
import { useState } from "react";

const Homebody = () => {
  const [signIn, si] = useState(false);

  const [signUp, su] = useState(false);

  return (
    <div className={signUp === true ? "hb" : ""}>
      <Box
        alignItems={"center"}
        paddingBottom={"10px"}
        display={"flex"}
        flexDirection={"column"}
      >
        <HStack
          margin={0}
          paddingLeft={50}
          gap={"0px"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Text className="homebody">Game</Text>
        </HStack>
        <HStack>
          <Text
            paddingLeft={19}
            className="mood"
            fontFamily={"Dancing Script, cursive"}
            color={"rgb(223, 18, 137)"}
            fontSize={"80px"}
            mt={-20}
            ml={-10}
            mr={-18}
          >
            Vibes
          </Text>
          <Text
            paddingLeft={0}
            mt={"-40px"}
            display={"flex"}
            justifyContent={"center"}
            className="homebody2"
          >
            Hub
          </Text>
        </HStack>
        <Text
          fontFamily={"Great Vibes, cursive"}
          fontSize={"40px"}
          color={"rgb(223, 18, 137)"}
          fontWeight={"bold"}
          marginBottom={"-30px"}
          paddingTop={0}
          marginTop={"-20px"}
          display={"flex"}
          justifyContent={"center"}
        >
          Best way to expereience game vibes
        </Text>
        {signIn === false && signUp === false && (
          <Button
            className="bu"
            width={"fit-content"}
            display={"flex"}
            justifyContent={"center"}
            onClick={() => {
              si(true);
              su(false);
            }}
          >
            Get started
          </Button>
        )}
        {signIn && <SignIn />}
        {signUp && <SignUp />}
        <HStack
          mt={signIn === false && signUp === false ? "30px" : "5px"}
          display={"flex"}
          mb={0}
          justifyContent={"center"}
        >
          <Link
            onClick={() => {
              si(true);
              su(false);
            }}
            textDecoration={"underline"}
            textUnderlineOffset={"5px"}
            color={"cyan"}
          >
            Sign in
          </Link>
          <Link
            onClick={() => {
              si(false);
              su(true);
            }}
            textDecoration={"underline"}
            textUnderlineOffset={"5px"}
            color={"cyan"}
          >
            Sign up
          </Link>
        </HStack>
      </Box>
    </div>
  );
};

export default Homebody;
