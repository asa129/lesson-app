import { Card, Table, Tr, Td } from "@chakra-ui/react";
import { FC } from "react";
import { User } from "../../../types/User";
import { UserIconWithName } from "../../molecules/UserIconWithName";

type Props = {
  user: User;
  isAdmin: true;
};

export const UserCard: FC<Props> = (props) => {
  const { user, isAdmin } = props;
  return (
    <Card>
      <UserIconWithName userName={user.name} isAdmin={isAdmin} />
      <Table>
        <Tr>
          <Td>メール</Td>
          <Td>{user.mail}</Td>
        </Tr>
        <Tr>
          <Td>TEL</Td>
          <Td>{user.tel}</Td>
        </Tr>
        <Tr>
          <Td>会社名</Td>
          <Td>{user.companyName}</Td>
        </Tr>
        <Tr>
          <Td>WEB</Td>
          <Td>{user.webSite}</Td>
        </Tr>
      </Table>
    </Card>
  );
};
