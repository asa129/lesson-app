import { FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: string;
  onClick: () => void;
};

export const SecondaryButton: FC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <>
      <Button colorScheme="green" onClick={onClick}>
        {children}
      </Button>
    </>
  );
};
