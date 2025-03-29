import { Box } from "@chakra-ui/react";
import { Header } from "../atoms/layout/Header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HeaderOnlyLayout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Box w="100%" bg="teal" m={0}>
        <Header />
      </Box>
      {children}
    </>
  );
};
