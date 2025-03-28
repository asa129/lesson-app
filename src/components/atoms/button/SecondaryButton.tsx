import { FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: string;
};

export const SecondaryButton: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Button colorScheme="green">{children}</Button>
    </>
  );
};
