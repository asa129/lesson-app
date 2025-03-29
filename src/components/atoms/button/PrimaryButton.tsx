import { FC, memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: string;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Button colorScheme="teal" m={4}>
        {children}
      </Button>
    </>
  );
});
