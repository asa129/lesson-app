import { useLocation } from "react-router-dom";
import { User } from "../../types/User";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { DefaultLayout } from "../templates/DefaultLayout";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";

export const Users = () => {
  const user1 = {
    name: "あああ",
    mail: "aaa@mail.com",
    tel: "000-0000-0000",
    companyName: "あああ株式会社",
    webSite: "あああ.com",
  };

  const users = Array(10)
    .fill(null)
    .map(() => ({ ...user1 }));

  const location = useLocation();
  const isAdmin = location.state?.isAdmin;

  const a = useContext(UserContext);
  console.log(a);

  return (
    <>
      <DefaultLayout>
        <PrimaryButton>あああ</PrimaryButton>
        <SecondaryButton onClick={() => {}}>いいい</SecondaryButton>
        <br />
        <br />
        <SearchInput />
        <br />
        <br />
        {users.map((user: User, index) => {
          return <UserCard key={index} user={user} isAdmin={isAdmin} />;
        })}
      </DefaultLayout>
    </>
  );
};
