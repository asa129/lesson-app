import { useContext } from "react";
import { User } from "../../types/User";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { DefaultLayout } from "../templates/DefaultLayout";
import { UserContext } from "../../provider/UserProvider";

export const Users = () => {
  const context = useContext(UserContext);
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

  const onClickSwitch = () => {
    context?.setIsAdmin(!context.isAdmin);
  };

  return (
    <>
      <DefaultLayout>
        <PrimaryButton>あああ</PrimaryButton>
        <SecondaryButton onClick={() => {}}>いいい</SecondaryButton>
        <br />
        <br />
        <SearchInput />
        <br />
        <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
        <br />
        <br />
        {users.map((user: User, index) => {
          return <UserCard key={index} user={user} />;
        })}
      </DefaultLayout>
    </>
  );
};
