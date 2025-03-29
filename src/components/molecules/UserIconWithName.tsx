import { Box, Image, Link, Stack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  userName: string;
  isAdmin: boolean;
};

export const UserIconWithName: FC<Props> = (props) => {
  const { userName, isAdmin } = props;
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
        {isAdmin === true ? <Link>編集</Link> : null}
      </Stack>
    </>
  );
};
