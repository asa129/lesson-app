import "./App.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

function App() {
  const user = {
    name: "あああ",
    mail: "aaa@mail.com",
    tel: "000-0000-0000",
    companyName: "あああ株式会社",
    webSite: "あああ.com",
  };

  return (
    <>
      <PrimaryButton>あああ</PrimaryButton>
      <SecondaryButton>いいい</SecondaryButton>
      <br />
      <br />
      <SearchInput />
      <br />
      <br />
      <UserCard user={user} />
    </>
  );
}

export default App;
