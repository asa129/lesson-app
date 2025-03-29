import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Header = () => {
  return (
    <header>
      <ChakraLink color="white" m={4} as={ReactRouterLink} to="/home">
        Home
      </ChakraLink>
      <ChakraLink color="white" m={4} as={ReactRouterLink} to="/users">
        USERS
      </ChakraLink>
    </header>
  );
};
