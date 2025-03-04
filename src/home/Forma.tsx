import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface SU {
  userName: string;
  password: string;
  verpassword: string;
}

interface SI {
  userName: string;
  password: string;
}

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SI>();

  let locusers: string[];
  let local: null | SU[];
  local = JSON.parse(localStorage.getItem("users") as string);
  if (local) {
    locusers = JSON.parse(localStorage.getItem("users") as string).map(
      (loc: SU) => {
        return loc.userName;
      }
    );
  } else {
    locusers = [];
  }
  let [vis2, v2] = useState(false);

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
        <form
          onSubmit={handleSubmit(() => {
            window.location.href = "src/home/Home.html";
          })}
        >
          <label className="lab" htmlFor="eusi">
            Username
          </label>
          <br />
          <input
            {...register("userName", {
              required: true,
              validate: (value) => locusers.includes(value),
            })}
            id="eusi"
            placeholder="Enter Username"
            className="inp"
          />
          {errors.userName?.type === "required" && (
            <Text color={"red"}>This field must be filled</Text>
          )}

          {errors.userName?.type === "validate" && (
            <Text color={"red"}>This username is not found</Text>
          )}

          <label htmlFor="pssi" className="lab">
            <Text color={"cyan"}>Password</Text>
          </label>
          <div style={{ position: "relative", display: "inline-block" }}>
            <input
              {...register("password", { required: true })}
              id="pssi"
              type={vis2 ? "text" : "password"}
              className="inp"
              placeholder="Password"
            />
            <span
              onClick={() => {
                vis2 ? v2(false) : v2(true);
              }}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                paddingBottom: "6px",
              }}
            >
              {vis2 ? (
                <IoEyeOutline color="cyan" />
              ) : (
                <IoEyeOffOutline color="cyan" />
              )}
            </span>
          </div>

          {errors.password?.type === "required" && (
            <Text color={"red"}>This field must be filled</Text>
          )}
          <br />
          <Button
            borderColor={"rgb(223, 18, 137)"}
            borderWidth={"1px"}
            justifySelf={"end"}
            mt={"10px"}
            display={"flex"}
            justifyContent={"flex-end"}
            type="submit"
            variant={"surface"}
            backgroundColor={"rgb(65, 6, 40)"}
            color={"rgb(223, 18, 137)"}
            colorPalette={"rgb(223, 18, 137)"}
          >
            Sign in
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export const SignUp = () => {
  const {
    register,

    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SU>();
  let users: any;

  if (localStorage.getItem("users") === null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem("users") as string);
  }

  let [vis, v] = useState(false);
  let [vis2, v2] = useState(false);

  const password = watch("password");

  let locusers: string[];
  let local: null | SU[];
  local = JSON.parse(localStorage.getItem("users") as string);
  if (local) {
    locusers = JSON.parse(localStorage.getItem("users") as string).map(
      (loc: SU) => {
        return loc.userName;
      }
    );
  } else {
    locusers = [];
  }

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
        <form
          onSubmit={handleSubmit((user) => {
            if (users) {
              users.push(user);
              localStorage.setItem("users", JSON.stringify(users));
            } else {
              users = [user];
              localStorage.setItem("users", JSON.stringify(users));
            }
            window.location.href = "src/home/Home.html";
            console.log(JSON.parse(localStorage.getItem("users") as string));
          })}
        >
          <label className="lab" htmlFor="eusi">
            Username
          </label>
          <br />
          <input
            {...register("userName", {
              required: true,
              validate: (value) => !locusers.includes(value),
            })}
            id="eusi"
            placeholder="Enter Username"
            className="inp"
          />
          {errors.userName?.type === "required" && (
            <Text color={"red"}>This field must be filled</Text>
          )}
          {errors.userName?.type === "validate" && (
            <Text color={"red"}>This username is already taken</Text>
          )}

          <label htmlFor="pssi" className="lab">
            <Text color={"cyan"}>Password</Text>
          </label>
          <div style={{ position: "relative", display: "inline-block" }}>
            <input
              {...register("password", { required: true })}
              id="pssi"
              className="inp"
              type={vis ? "text" : "password"}
              placeholder="Password"
            />
            <span
              onClick={() => {
                vis ? v(false) : v(true);
              }}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                paddingBottom: "6px",
              }}
            >
              {vis ? (
                <IoEyeOutline color="cyan" />
              ) : (
                <IoEyeOffOutline color="cyan" />
              )}
            </span>
          </div>

          {errors.password?.type === "required" && (
            <Text color={"red"}>This field must be filled</Text>
          )}

          <label htmlFor="vpssi" className="lab">
            <Text color={"cyan"}>Retype password</Text>
          </label>
          <div style={{ position: "relative", display: "inline-block" }}>
            <input
              type={vis2 ? "text" : "password"}
              {...register("verpassword", {
                required: true,
                validate: (value) => value === password,
              })}
              id="vpssi"
              className="inp"
              placeholder="Retype password"
            />
            <span
              onClick={() => {
                vis2 ? v2(false) : v2(true);
              }}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                paddingBottom: "6px",
              }}
            >
              {vis2 ? (
                <IoEyeOutline color="cyan" />
              ) : (
                <IoEyeOffOutline color="cyan" />
              )}
            </span>
          </div>

          {errors.verpassword?.type === "validate" && (
            <Text color={"red"}>The password doesnt match</Text>
          )}
          {errors.verpassword?.type === "required" && (
            <Text color={"red"}>The field must be filled</Text>
          )}

          <br />

          <Button
            borderColor={"rgb(223, 18, 137)"}
            display={"flex"}
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
        </form>
      </Box>
    </Box>
  );
};
