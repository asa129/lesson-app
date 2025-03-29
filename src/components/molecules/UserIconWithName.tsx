import { Box, Image, Link, Stack } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { UserContext } from "../../provider/UserProvider";

type Props = {
  userName: string;
};

export const UserIconWithName: FC<Props> = (props) => {
  const { userName } = props;
  const context = useContext(UserContext);
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
        {context?.isAdmin === true ? <Link>編集</Link> : null}
      </Stack>
    </>
  );
};
