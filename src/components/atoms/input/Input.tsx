import { Input } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  placeholder: string;
};

export const InputA: FC<Props> = (props) => {
  const { placeholder } = props;
  return <Input placeholder={placeholder} m={4} />;
};
