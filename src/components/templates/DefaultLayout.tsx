import { Box } from "@chakra-ui/react";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DefaultLayout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Box w="100%" bg="teal" mb={4}>
        <Header />
      </Box>
      {children}
      <Box w="100%" bg="teal" mt={4}>
        <Footer />
      </Box>
    </>
  );
};
