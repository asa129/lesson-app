import { Box, Image, Stack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  userName: string;
};

export const UserIconWithName: FC<Props> = (props) => {
  const { userName } = props;
  return (
    <>
      <Stack align="center">
        <Box position="relative">
          <Image
            borderRadius="full"
            src="https://picsum.photos/800 "
            alt="プロフィール"
            boxSize="150px"
          />
        </Box>
        <Box position="relative">{userName}</Box>
      </Stack>
    </>
  );
};
