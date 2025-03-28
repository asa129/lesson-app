import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { InputA } from "../atoms/input/Input";
import { Box } from "@chakra-ui/react";

export const SearchInput = () => {
  return (
    <>
      <Box display="flex">
        <InputA placeholder={"なんか入力して"} />
        <PrimaryButton>検索</PrimaryButton>
      </Box>
    </>
  );
};
