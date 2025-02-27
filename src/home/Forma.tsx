import { Box, Button, Input, Text } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import React from "react";

interface Props {
  signIn: boolean;
  signUp: boolean;
}

export const SignIn = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box flexDirection={"column"} display={"flex"} mt={"20px"}>
        <Text
          mb={"20px"}
          fontSize={"34px"}
          display={"flex"}
          justifyContent={"center"}
          textUnderlineOffset={"10px"}
          color={"rgb(223, 18, 137)"}
          marginTop={"-5px"}
          marginBottom={"4px"}
          textDecoration={"underline"}
          fontWeight={"bold"}
          fontFamily={"Myopia, sans-serif"}
        >
          Sign in
        </Text>
        <Field
          display={"grid"}
          color={"cyan"}
          className="forma"
          label="Username"
        >
          <Input
            mb={"6px"}
            colorPalette={"cyan"}
            background={"cyan.950"}
            placeholder="Enter your username"
            borderWidth={"1px"}
            borderColor={"cyan"}
          />

          <label>
            <Text color={"cyan"}>Password</Text>

            <Input
              mt={"3px"}
              colorPalette={"cyan"}
              background={"cyan.950"}
              placeholder="Passaword"
              borderWidth={"1px"}
              borderColor={"cyan"}
            />
          </label>

          <Button
            borderColor={"rgb(223, 18, 137)"}
            borderWidth={"1px"}
            justifySelf={"end"}
            mt={"10px"}
            justifyContent={"flex-end"}
            type="submit"
            variant={"surface"}
            backgroundColor={"rgb(65, 6, 40)"}
            color={"rgb(223, 18, 137)"}
            colorPalette={"rgb(223, 18, 137)"}
          >
            Sign in
          </Button>
        </Field>
      </Box>
    </Box>
  );
};

export const SignUp = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box flexDirection={"column"} display={"flex"} mt={"20px"}>
        <Text
          mb={"20px"}
          fontSize={"34px"}
          textDecoration={"underline"}
          display={"flex"}
          justifyContent={"center"}
          textUnderlineOffset={"10px"}
          color={"rgb(223, 18, 137)"}
          marginTop={"-5px"}
          marginBottom={"4px"}
          fontFamily={"Myopia, sans-serif"}
          fontWeight={"bold"}
        >
          Sign up
        </Text>
        <Field
          display={"grid"}
          color={"cyan"}
          className="forma"
          label="Username"
        >
          <Input
            colorPalette={"cyan"}
            background={"cyan.950"}
            placeholder="Enter your username"
            borderWidth={"1px"}
            borderColor={"cyan"}
          />
          <label>
            Password
            <Input
              mt={"4px"}
              mb={"3px"}
              colorPalette={"cyan"}
              background={"cyan.950"}
              placeholder="Passaword"
              borderWidth={"1px"}
              borderColor={"cyan"}
            />
          </label>

          <label>
            Retype your Password
            <Input
              mt={"4px"}
              colorPalette={"cyan"}
              background={"cyan.950"}
              placeholder="Passaword"
              borderWidth={"1px"}
              borderColor={"cyan"}
            />
          </label>
          <Button
            borderColor={"rgb(223, 18, 137)"}
            borderWidth={"1px"}
            justifySelf={"end"}
            mt={"10px"}
            justifyContent={"flex-end"}
            type="submit"
            variant={"surface"}
            backgroundColor={"rgb(65, 6, 40)"}
            color={"rgb(223, 18, 137)"}
            colorPalette={"rgb(223, 18, 137)"}
            width={"fit-content"}
          >
            Sign up
          </Button>
        </Field>
      </Box>
    </Box>
  );
};
